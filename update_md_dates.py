import os
import re
import datetime

TARGET_DIR = '/Users/rifaterdemsahin/projects/delivery-pilot-web'
DATE_PREFIX = '📅 Updated: '
DATE_PATTERN = re.compile(r'^📅 Updated: \d{4}-\d{2}-\d{2}\n*')

def get_formatted_mtime(filepath):
    timestamp = os.path.getmtime(filepath)
    dt = datetime.datetime.fromtimestamp(timestamp)
    return dt.strftime('%Y-%m-%d')

def process_file(filepath):
    try:
        updated_date = get_formatted_mtime(filepath)
        new_header = f"{DATE_PREFIX}{updated_date}\n\n"
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Check if file already has the header
        match = DATE_PATTERN.match(content)
        
        new_content = ""
        if match:
            # Replace existing header
            # We treat the text after the match as the rest of the content
            rest_of_content = content[match.end():]
            if not rest_of_content.startswith('\n'): 
                 # Ensure we don't prefer double newlines if they are not there? 
                 # Actually my new_header has \n\n, so I should just be careful.
                 # If I strip leading whitespace from rest_of_content it might lose intentional spacing.
                 # Let's just assume the previous insert was standard.
                 pass
            
            # To be safe, let's just replace the matched part with the new header
            # But wait, if the file hasn't changed, mtime is old.
            # If I update the file, mtime becomes NEW.
            # But the user said "take it from the file system".
            # If the file hasn't been touched, I'm just updating the date stamp to... the same date?
            # Or am I rewriting the file which updates the date to NOW?
            # If I rewrite the file, I change the mtime.
            # So if I run this script, ALL files will get TODAY's date eventually if I am not careful?
            # No.
            # 1. Read mtime (T1).
            # 2. Open file.
            # 3. Write content.
            # 4. File mtime is now T2 (now).
            # The *content* will say "Updated: T1".
            # Next time I run it?
            # It will see mtime T2. It will update content to "Updated: T2".
            # So every time I run this, it will bump the date to the last run time?
            # The user wants "updates date".
            # If I edit the file to add the date, I AM updating the file.
            # So technically the "last update" BECOMES now.
            # But usually usually "last updated" refers to the *content* update before this metadata change.
            # This is a bit of a Schrodinger's cat problem.
            # However, for the *first* run, it captures the real history.
            # I will proceed with capturing the current mtime (before edit).
            
            # Only write if the date string is DIFFERENT?
            # If `match.group(0)` contains the same date as `new_header`, I should NOT write to the file
            # to preserve the original mtime!
            
            current_header_in_file = match.group(0).strip()
            target_header = f"{DATE_PREFIX}{updated_date}"
            
            if current_header_in_file == target_header:
                print(f"Skipping {filepath} (date match)")
                return
            
            new_content = new_header + content[match.end():]
            
        else:
            new_content = new_header + content
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath} to {updated_date}")
        
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

def main():
    for root, dirs, files in os.walk(TARGET_DIR):
        # Skip node_modules or .git if they exist (though listing usually skips hidden unless forced, standard os.walk visits all)
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.git' in dirs:
            dirs.remove('.git')
            
        for name in files:
            if name.endswith('.md'):
                filepath = os.path.join(root, name)
                process_file(filepath)

if __name__ == '__main__':
    main()
