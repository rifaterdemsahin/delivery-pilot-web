import shutil
import os

source = r"C:\Users\Pexabo\.gemini\antigravity\brain\a919f8a5-182d-4c34-97c0-d87ef60dcd43\engagement_model_2025_1769168575693.png"
dest = r"f:\delivery-pilot-web\3_ui\engagement_model_2025.png"

try:
    if not os.path.exists(source):
        print(f"Source not found: {source}")
    else:
        shutil.copy2(source, dest)
        print("Success")
except Exception as e:
    print(f"Error: {e}")
