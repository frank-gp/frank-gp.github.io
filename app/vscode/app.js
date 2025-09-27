// Shortcuts data
const shortcuts = {
  General: {
    icon: "fas fa-cog",
    items: [
      { key: "Ctrl+Shift+P, F1", desc: "Show Command Palette" },
      { key: "Ctrl+P", desc: "Quick Open, Go to File…" },
      { key: "Ctrl+Shift+N", desc: "New window/instance" },
      { key: "Ctrl+Shift+W", desc: "Close window/instance" },
      { key: "Ctrl+,", desc: "User Settings" },
      { key: "Ctrl+K Ctrl+S", desc: "Keyboard Shortcuts" },
    ],
  },
  "Basic editing": {
    icon: "fas fa-edit",
    items: [
      { key: "Ctrl+X", desc: "Cut line (empty selection)" },
      { key: "Alt+ ↑ / ↓", desc: "Move line up/down" },
      { key: "Shift+Alt + ↓ / ↑", desc: "Copy line up/down" },
      { key: "Ctrl+Shift+K", desc: "Delete line" },
      { key: "Ctrl+Enter", desc: "Insert line below" },
      { key: "Ctrl+Shift+Enter", desc: "Insert line above" },
      { key: "Ctrl+Shift+\\", desc: "Jump to matching bracket" },
      { key: "Ctrl+] / [", desc: "Indent/outdent line" },
      { key: "Home / End", desc: "Go to beginning/end of line" },
      { key: "Ctrl+Home", desc: "Go to beginning of file" },
      { key: "Ctrl+End", desc: "Go to end of file" },
      { key: "Ctrl+↑ / ↓", desc: "Scroll line up/down" },
      { key: "Alt+PgUp / PgDn", desc: "Scroll page up/down" },
      { key: "Ctrl+Shift+[", desc: "Fold (collapse) region" },
      { key: "Ctrl+Shift+]", desc: "Unfold (uncollapse) region" },
      { key: "Ctrl+K Ctrl+[", desc: "Fold (collapse) all subregions" },
      { key: "Ctrl+K Ctrl+]", desc: "Unfold (uncollapse) all subregions" },
      { key: "Ctrl+K Ctrl+0", desc: "Fold (collapse) all regions" },
      { key: "Ctrl+K Ctrl+J", desc: "Unfold (uncollapse) all regions" },
      { key: "Ctrl+K Ctrl+C", desc: "Add line comment" },
      { key: "Ctrl+K Ctrl+U", desc: "Remove line comment" },
      { key: "Ctrl+/", desc: "Toggle line comment" },
      { key: "Shift+Alt+A", desc: "Toggle block comment" },
      { key: "Alt+Z", desc: "Toggle word wrap" },
    ],
  },
  Navigation: {
    icon: "fas fa-compass",
    items: [
      { key: "Ctrl+T", desc: "Show all Symbols" },
      { key: "Ctrl+G", desc: "Go to Line..." },
      { key: "Ctrl+P", desc: "Go to File..." },
      { key: "Ctrl+Shift+O", desc: "Go to Symbol..." },
      { key: "Ctrl+Shift+M", desc: "Show Problems panel" },
      { key: "F8", desc: "Go to next error or warning" },
      { key: "Shift+F8", desc: "Go to previous error or warning" },
      { key: "Ctrl+Shift+Tab", desc: "Navigate editor group history" },
      { key: "Alt+ ← / →", desc: "Go back / forward" },
      { key: "Ctrl+M", desc: "Toggle Tab moves focus" },
    ],
  },
  "Search and replace": {
    icon: "fas fa-search",
    items: [
      { key: "Ctrl+F", desc: "Find" },
      { key: "Ctrl+H", desc: "Replace" },
      { key: "F3 / Shift+F3", desc: "Find next/previous" },
      { key: "Alt+Enter", desc: "Select all occurences of Find match" },
      { key: "Ctrl+D", desc: "Add selection to next Find match" },
      { key: "Ctrl+K Ctrl+D", desc: "Move last selection to next Find match" },
      { key: "Alt+C / R / W", desc: "Toggle case-sensitive / regex / whole word" },
    ],
  },
  "Multi-cursor and selection": {
    icon: "fas fa-mouse-pointer",
    items: [
      { key: "Alt+Click", desc: "Insert cursor" },
      { key: "Ctrl+Alt+ ↑ / ↓", desc: "Insert cursor above / below" },
      { key: "Ctrl+U", desc: "Undo last cursor operation" },
      { key: "Shift+Alt+I", desc: "Insert cursor at end of each line selected" },
      { key: "Ctrl+L", desc: "Select current line" },
      { key: "Ctrl+Shift+L", desc: "Select all occurrences of current selection" },
      { key: "Ctrl+F2", desc: "Select all occurrences of current word" },
      { key: "Shift+Alt+→", desc: "Expand selection" },
      { key: "Shift+Alt+←", desc: "Shrink selection" },
      { key: "Shift+Alt + (drag mouse)", desc: "Column (box) selection" },
      { key: "Ctrl+Shift+Alt + (arrow key)", desc: "Column (box) selection" },
      { key: "Ctrl+Shift+Alt+PgUp/PgDn", desc: "Column (box) selection page up/down" },
    ],
  },
  "Rich languages editing": {
    icon: "fas fa-code",
    items: [
      { key: "Ctrl+Space, Ctrl+I", desc: "Trigger suggestion" },
      { key: "Ctrl+Shift+Space", desc: "Trigger parameter hints" },
      { key: "Shift+Alt+F", desc: "Format document" },
      { key: "Ctrl+K Ctrl+F", desc: "Format selection" },
      { key: "F12", desc: "Go to Definition" },
      { key: "Alt+F12", desc: "Peek Definition" },
      { key: "Ctrl+K F12", desc: "Open Definition to the side" },
      { key: "Ctrl+.", desc: "Quick Fix" },
      { key: "Shift+F12", desc: "Show References" },
      { key: "F2", desc: "Rename Symbol" },
      { key: "Ctrl+K Ctrl+X", desc: "Trim trailing whitespace" },
      { key: "Ctrl+K M", desc: "Change file language" },
    ],
  },
  "Editor management": {
    icon: "fas fa-window-restore",
    items: [
      { key: "Ctrl+F4, Ctrl+W", desc: "Close editor" },
      { key: "Ctrl+K F", desc: "Close folder" },
      { key: "Ctrl+\\", desc: "Split editor" },
      { key: "Ctrl+ 1 / 2 / 3", desc: "Focus into 1st, 2nd or 3rd editor group" },
      { key: "Ctrl+K Ctrl+ ←/→", desc: "Focus into previous/next editor group" },
      { key: "Ctrl+Shift+PgUp / PgDn", desc: "Move editor left/right" },
      { key: "Ctrl+K ← / →", desc: "Move active editor group" },
    ],
  },
  "File management": {
    icon: "fas fa-folder",
    items: [
      { key: "Ctrl+N", desc: "New File" },
      { key: "Ctrl+O", desc: "Open File..." },
      { key: "Ctrl+S", desc: "Save" },
      { key: "Ctrl+Shift+S", desc: "Save As..." },
      { key: "Ctrl+K S", desc: "Save All" },
      { key: "Ctrl+F4", desc: "Close" },
      { key: "Ctrl+K Ctrl+W", desc: "Close All" },
      { key: "Ctrl+Shift+T", desc: "Reopen closed editor" },
      { key: "Ctrl+K Enter", desc: "Keep preview mode editor open" },
      { key: "Ctrl+Tab", desc: "Open next" },
      { key: "Ctrl+Shift+Tab", desc: "Open previous" },
      { key: "Ctrl+K P", desc: "Copy path of active file" },
      { key: "Ctrl+K R", desc: "Reveal active file in Explorer" },
      { key: "Ctrl+K O", desc: "Show active file in new window/instance" },
    ],
  },
  Display: {
    icon: "fas fa-desktop",
    items: [
      { key: "F11", desc: "Toggle full screen" },
      { key: "Shift+Alt+0", desc: "Toggle editor layout (horizontal/vertical)" },
      { key: "Ctrl+ = / -", desc: "Zoom in/out" },
      { key: "Ctrl+B", desc: "Toggle Sidebar visibility" },
      { key: "Ctrl+Shift+E", desc: "Show Explorer / Toggle focus" },
      { key: "Ctrl+Shift+F", desc: "Show Search" },
      { key: "Ctrl+Shift+G", desc: "Show Source Control" },
      { key: "Ctrl+Shift+D", desc: "Show Debug" },
      { key: "Ctrl+Shift+X", desc: "Show Extensions" },
      { key: "Ctrl+Shift+H", desc: "Replace in files" },
      { key: "Ctrl+Shift+J", desc: "Toggle Search details" },
      { key: "Ctrl+Shift+U", desc: "Show Output panel" },
      { key: "Ctrl+Shift+V", desc: "Open Markdown preview" },
      { key: "Ctrl+K V", desc: "Open Markdown preview to the side" },
      { key: "Ctrl+K Z", desc: "Zen Mode (Esc Esc to exit)" },
    ],
  },
  Debug: {
    icon: "fas fa-bug",
    items: [
      { key: "F9", desc: "Toggle breakpoint" },
      { key: "F5", desc: "Start/Continue" },
      { key: "Shift+F5", desc: "Stop" },
      { key: "F11 / Shift+F11", desc: "Step into/out" },
      { key: "F10", desc: "Step over" },
      { key: "Ctrl+K Ctrl+I", desc: "Show hover" },
    ],
  },
  "Integrated terminal": {
    icon: "fas fa-terminal",
    items: [
      { key: "Ctrl+`", desc: "Show integrated terminal" },
      { key: "Ctrl+Shift+`", desc: "Create new terminal" },
      { key: "Ctrl+C", desc: "Copy selection" },
      { key: "Ctrl+V", desc: "Paste into active terminal" },
      { key: "Ctrl+↑ / ↓", desc: "Scroll up/down" },
      { key: "Shift+PgUp / PgDn", desc: "Scroll page up/down" },
      { key: "Ctrl+Home / End", desc: "Scroll to top/bottom" },
    ],
  },
};

// Global variables
let allSectionsCollapsed = false;

// Utility functions
function generateId(sectionName, key) {
  return `${sectionName}-${key}`.replace(/[^a-zA-Z0-9]/g, "-");
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.error("Error saving to localStorage:", e);
  }
}

function getFromStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.error("Error reading from localStorage:", e);
    return null;
  }
}

// Main functions
function renderShortcuts() {
  const container = document.getElementById("shortcutsContainer");
  container.innerHTML = "";

  Object.entries(shortcuts).forEach(([sectionName, section]) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "section";
    sectionDiv.setAttribute("data-section", sectionName);

    sectionDiv.innerHTML = `
        <div class="section-header" data-section="${sectionName}">
          <h2 class="section-title">
            <i class="${section.icon}"></i>
            ${sectionName}
            <span class="section-count">(${section.items.length})</span>
          </h2>
          <i class="fas fa-chevron-down section-toggle"></i>
        </div>
        <div class="section-content">
          ${section.items
            .map((item) => {
              const id = generateId(sectionName, item.key);
              return `
              <div class="shortcut-item" data-id="${id}">
                <div class="shortcut-checkbox">
                  <div class="checkbox-container">
                    <input type="checkbox" class="checkbox-input" id="check-${id}" data-id="${id}">
                    <div class="checkbox-custom"></div>
                  </div>
                </div>
                <div class="shortcut-keys">${item.key}</div>
                <div class="shortcut-description">${item.desc}</div>
                <div class="shortcut-actions">
                  <button class="action-btn" data-id="${id}" title="Mark as important">
                    <i class="fas fa-star"></i>
                  </button>
                </div>
              </div>
            `;
            })
            .join("")}
        </div>
      `;
    container.appendChild(sectionDiv);
  });

  // Add event listeners after rendering
  addEventListeners();
  loadProgress();
  updateStats();
}

function addEventListeners() {
  // Section toggle listeners
  document.querySelectorAll(".section-header").forEach((header) => {
    header.addEventListener("click", (e) => {
      const sectionName = e.currentTarget.getAttribute("data-section");
      toggleSection(sectionName);
    });
  });

  // Checkbox listeners
  document.querySelectorAll(".checkbox-input").forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const id = e.target.getAttribute("data-id");
      toggleLearned(id);
    });
  });

  // Important button listeners
  document.querySelectorAll(".action-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = e.currentTarget.getAttribute("data-id");
      toggleImportant(id);
    });
  });

  // Control button listeners
  document.getElementById("resetBtn").addEventListener("click", resetProgress);
  document.getElementById("toggleAllBtn").addEventListener("click", toggleAllSections);
  document.getElementById("exportBtn").addEventListener("click", exportProgress);
}

function toggleSection(sectionName) {
  const section = document.querySelector(`[data-section="${sectionName}"]`);
  if (section) {
    section.classList.toggle("collapsed");
  }
}

function toggleAllSections() {
  const sections = document.querySelectorAll(".section");
  allSectionsCollapsed = !allSectionsCollapsed;

  sections.forEach((section) => {
    if (allSectionsCollapsed) {
      section.classList.add("collapsed");
    } else {
      section.classList.remove("collapsed");
    }
  });
}

function toggleLearned(id) {
  const item = document.querySelector(`[data-id="${id}"]`);
  const checkbox = document.getElementById(`check-${id}`);

  if (!item || !checkbox) return;

  if (checkbox.checked) {
    item.classList.add("learned");
    saveToStorage(`learned-${id}`, "true");
  } else {
    item.classList.remove("learned");
    saveToStorage(`learned-${id}`, "false");
  }

  updateStats();
}

function toggleImportant(id) {
  const item = document.querySelector(`[data-id="${id}"]`);
  const button = document.querySelector(`[data-id="${id}"].action-btn`);

  if (!item || !button) return;

  if (item.classList.contains("important")) {
    item.classList.remove("important");
    button.classList.remove("active");
    saveToStorage(`important-${id}`, "false");
  } else {
    item.classList.add("important");
    button.classList.add("active");
    saveToStorage(`important-${id}`, "true");
  }

  updateStats();
}

function loadProgress() {
  Object.entries(shortcuts).forEach(([sectionName, section]) => {
    section.items.forEach((item) => {
      const id = generateId(sectionName, item.key);
      const checkbox = document.getElementById(`check-${id}`);
      const itemElement = document.querySelector(`[data-id="${id}"]`);
      const button = document.querySelector(`[data-id="${id}"].action-btn`);

      if (!checkbox || !itemElement || !button) return;

      // Load learned status
      const learnedStatus = getFromStorage(`learned-${id}`);
      if (learnedStatus === "true") {
        checkbox.checked = true;
        itemElement.classList.add("learned");
      }

      // Load important status
      const importantStatus = getFromStorage(`important-${id}`);
      if (importantStatus === "true") {
        itemElement.classList.add("important");
        button.classList.add("active");
      }
    });
  });
}

function updateStats() {
  const totalCount = Object.values(shortcuts).reduce((sum, section) => sum + section.items.length, 0);
  const learnedCount = document.querySelectorAll(".shortcut-item.learned").length;
  const importantCount = document.querySelectorAll(".shortcut-item.important").length;
  const remainingCount = totalCount - learnedCount;
  const progressPercentage = totalCount > 0 ? Math.round((learnedCount / totalCount) * 100) : 0;

  // Update stat cards
  const totalEl = document.getElementById("totalShortcuts");
  const learnedEl = document.getElementById("learnedShortcuts");
  const importantEl = document.getElementById("importantShortcuts");
  const remainingEl = document.getElementById("remainingShortcuts");
  const progressFillEl = document.getElementById("progressFill");
  const progressTextEl = document.getElementById("progressText");

  if (totalEl) totalEl.textContent = totalCount;
  if (learnedEl) learnedEl.textContent = learnedCount;
  if (importantEl) importantEl.textContent = importantCount;
  if (remainingEl) remainingEl.textContent = remainingCount;

  if (progressFillEl) progressFillEl.style.width = `${progressPercentage}%`;
  if (progressTextEl) progressTextEl.textContent = `${progressPercentage}% completed (${learnedCount}/${totalCount})`;
}

function resetProgress() {
  if (!confirm("Are you sure you want to reset all progress? This action cannot be undone.")) {
    return;
  }

  // Clear all localStorage entries
  Object.entries(shortcuts).forEach(([sectionName, section]) => {
    section.items.forEach((item) => {
      const id = generateId(sectionName, item.key);
      saveToStorage(`learned-${id}`, "false");
      saveToStorage(`important-${id}`, "false");
    });
  });

  // Reset UI
  document.querySelectorAll(".checkbox-input").forEach((checkbox) => {
    checkbox.checked = false;
  });

  document.querySelectorAll(".shortcut-item").forEach((item) => {
    item.classList.remove("learned", "important");
  });

  document.querySelectorAll(".action-btn").forEach((button) => {
    button.classList.remove("active");
  });

  updateStats();
}

function exportProgress() {
  const progress = {};
  Object.entries(shortcuts).forEach(([sectionName, section]) => {
    progress[sectionName] = {};
    section.items.forEach((item) => {
      const id = generateId(sectionName, item.key);
      progress[sectionName][item.key] = {
        learned: getFromStorage(`learned-${id}`) === "true",
        important: getFromStorage(`important-${id}`) === "true",
        description: item.desc,
      };
    });
  });

  const dataStr = JSON.stringify(progress, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "vscode-shortcuts-progress.json";
  link.click();

  URL.revokeObjectURL(url);
}

function setupSearch() {
  const searchInput = document.getElementById("searchInput");

  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    const shortcutItems = document.querySelectorAll(".shortcut-item");
    const sections = document.querySelectorAll(".section");

    if (searchTerm === "") {
      // Show all items and sections
      shortcutItems.forEach((item) => item.classList.remove("hidden"));
      sections.forEach((section) => {
        section.classList.remove("hidden");
        section.classList.remove("collapsed");
      });
    } else {
      // Hide all sections first
      sections.forEach((section) => section.classList.add("hidden"));

      shortcutItems.forEach((item) => {
        const keys = item.querySelector(".shortcut-keys")?.textContent.toLowerCase() || "";
        const desc = item.querySelector(".shortcut-description")?.textContent.toLowerCase() || "";
        const matches = keys.includes(searchTerm) || desc.includes(searchTerm);

        if (matches) {
          item.classList.remove("hidden");
          // Show parent section
          const section = item.closest(".section");
          if (section) {
            section.classList.remove("hidden", "collapsed");
          }
        } else {
          item.classList.add("hidden");
        }
      });
    }
  });

  // Clear search on Escape
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchInput.value = "";
      searchInput.dispatchEvent(new Event("input"));
      searchInput.blur();
    }
  });
}

function setupKeyboardNavigation() {
  document.addEventListener("keydown", (e) => {
    // Prevent conflicts when user is typing in search
    if (document.activeElement && document.activeElement.tagName === "INPUT") {
      return;
    }

    // Toggle sections with number keys (1-9)
    if (e.key >= "1" && e.key <= "9" && e.altKey) {
      e.preventDefault();
      const sectionIndex = parseInt(e.key) - 1;
      const sections = document.querySelectorAll(".section");
      if (sections[sectionIndex]) {
        sections[sectionIndex].classList.toggle("collapsed");
      }
    }

    // Export with Ctrl+E
    if (e.ctrlKey && e.key === "e") {
      e.preventDefault();
      exportProgress();
    }

    // Reset with Ctrl+Shift+R
    if (e.ctrlKey && e.shiftKey && e.key === "R") {
      e.preventDefault();
      resetProgress();
    }

    // Focus search with Ctrl+F
    if (e.ctrlKey && e.key === "f" && !e.shiftKey) {
      e.preventDefault();
      const searchInput = document.getElementById("searchInput");
      if (searchInput) {
        searchInput.focus();
      }
    }
  });
}

function addAnimations() {
  // Animate stats on load
  setTimeout(() => {
    const statNumbers = document.querySelectorAll(".stat-number");
    statNumbers.forEach((stat, index) => {
      stat.style.animation = `countUp 1s ease-out ${index * 0.2}s forwards`;
    });
  }, 500);
}

function showWelcomeMessage() {
  console.log(`
  🚀 VSCode Shortcuts Interactive Guide
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  📋 Features:
  ✅ Check off shortcuts as you learn them
  ⭐ Mark important shortcuts with the star button
  🔍 Search through all shortcuts (Ctrl+F)
  📊 Track your learning progress
  💾 Export your progress as JSON
  🎯 Keyboard navigation support
  
  ⌨️  Keyboard Shortcuts:
  • Ctrl+F: Focus search
  • Ctrl+E: Export progress
  • Ctrl+Shift+R: Reset progress
  • Alt+1-9: Toggle sections
  • Esc: Clear search
  
  Happy learning! 🎉
    `);
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  console.log("VSCode Shortcuts app initializing...");

  try {
    renderShortcuts();
    setupSearch();
    setupKeyboardNavigation();
    addAnimations();
    showWelcomeMessage();

    console.log("VSCode Shortcuts app initialized successfully!");
  } catch (error) {
    console.error("Error initializing app:", error);
  }
});
