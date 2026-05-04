// Learning Assessment System
class LearningTracker {
    constructor() {
        this.pageId = this.getPageId();
        this.cookieName = 'streamdeck_learning_progress';
        this.bloomLevels = ['remember', 'understand', 'analyze', 'evaluate', 'create'];
        this.completedLevels = this.loadProgress();

        this.init();
    }

    getPageId() {
        // Use pathname as unique identifier for the page
        return window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    }

    loadProgress() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === this.cookieName) {
                try {
                    const data = JSON.parse(decodeURIComponent(value));
                    return data[this.pageId] || [];
                } catch (e) {
                    console.error('Error parsing learning progress cookie:', e);
                }
            }
        }
        return [];
    }

    saveProgress() {
        const cookies = document.cookie.split(';');
        let existingData = {};

        // Load existing cookie data
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === this.cookieName) {
                try {
                    existingData = JSON.parse(decodeURIComponent(value));
                } catch (e) {}
                break;
            }
        }

        // Update with current page progress
        existingData[this.pageId] = this.completedLevels;

        // Save back to cookie (expires in 1 year)
        const expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        document.cookie = `${this.cookieName}=${encodeURIComponent(JSON.stringify(existingData))}; expires=${expiryDate.toUTCString()}; path=/`;
    }

    init() {
        // Check if page was previously completed
        if (this.completedLevels.length === this.bloomLevels.length) {
            this.showRememberedBanner();
            this.collapsePanel();
        }

        // Restore checkbox states
        this.completedLevels.forEach(level => {
            const checkbox = document.getElementById('bloom-' + level);
            if (checkbox) {
                checkbox.checked = true;
                this.markCompleted(level);
            }
        });

        this.updateProgress();
    }

    toggleLevel(level) {
        const checkbox = document.getElementById('bloom-' + level);
        const item = checkbox.closest('.bloom-item');

        if (checkbox.checked) {
            if (!this.completedLevels.includes(level)) {
                this.completedLevels.push(level);
            }
            item.classList.add('completed');
        } else {
            this.completedLevels = this.completedLevels.filter(l => l !== level);
            item.classList.remove('completed');
        }

        this.saveProgress();
        this.updateProgress();

        // Check if all levels completed
        if (this.completedLevels.length === this.bloomLevels.length) {
            this.showCompletion();
        }
    }

    markCompleted(level) {
        const item = document.getElementById('bloom-' + level).closest('.bloom-item');
        item.classList.add('completed');
    }

    updateProgress() {
        const progress = (this.completedLevels.length / this.bloomLevels.length) * 100;
        const progressFill = document.getElementById('learning-progress-fill');
        if (progressFill) {
            progressFill.style.width = progress + '%';
        }
    }

    showCompletion() {
        const completionMsg = document.getElementById('learning-completion-message');
        if (completionMsg) {
            completionMsg.style.display = 'block';
            setTimeout(() => {
                this.showRememberedBanner();
                this.collapsePanel();
            }, 2000);
        }
    }

    showRememberedBanner() {
        const banner = document.getElementById('learning-remembered-banner');
        if (banner) {
            banner.style.display = 'block';
            setTimeout(() => {
                banner.style.display = 'none';
            }, 5000);
        }
    }

    collapsePanel() {
        const panel = document.getElementById('learning-assessment-panel');
        if (panel) {
            panel.classList.add('collapsed');
            const btn = panel.querySelector('.learning-collapse-btn');
            if (btn) {
                btn.textContent = '+';
            }
        }
    }

    expandPanel() {
        const panel = document.getElementById('learning-assessment-panel');
        if (panel) {
            panel.classList.remove('collapsed');
            const btn = panel.querySelector('.learning-collapse-btn');
            if (btn) {
                btn.textContent = '−';
            }
        }
    }
}

// Global functions for HTML onclick handlers
function toggleLearningLevel(level) {
    if (window.learningTracker) {
        window.learningTracker.toggleLevel(level);
    }
}

function toggleLearningPanel() {
    if (window.learningTracker) {
        const panel = document.getElementById('learning-assessment-panel');
        if (panel.classList.contains('collapsed')) {
            window.learningTracker.expandPanel();
        } else {
            window.learningTracker.collapsePanel();
        }
    }
}

function closeLearningBanner() {
    const banner = document.getElementById('learning-remembered-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.learningTracker = new LearningTracker();
});
