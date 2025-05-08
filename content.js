// Function to uncheck all viewed checkboxes
function uncheckAllViewed() {
    // Find all checkboxes in the PR files changed tab
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="viewed"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.click();
        }
    });
}

// Function to create and add the button
function addUnviewButton() {
    // Check if we're on a PR page
    if (!window.location.pathname.includes('/pull/')) {
        return;
    }

    // Check if button already exists
    if (document.getElementById('unview-all-button')) {
        return;
    }

    // Find the PR toolbar
    const toolbar = document.querySelector('.pr-toolbar');
    if (!toolbar) {
        return;
    }

    // Create button
    const button = document.createElement('button');
    button.id = 'unview-all-button';
    button.className = 'btn btn-sm';
    button.style.marginLeft = '8px';
    button.textContent = 'Unview All';
    button.addEventListener('click', uncheckAllViewed);

    // Add button to toolbar
    toolbar.appendChild(button);
}

// Run when the page loads
addUnviewButton();

// Also run when the URL changes (for SPA navigation)
let lastUrl = location.href;
new MutationObserver(() => {
    if (location.href !== lastUrl) {
        lastUrl = location.href;
        addUnviewButton();
    }
}).observe(document, { subtree: true, childList: true }); 