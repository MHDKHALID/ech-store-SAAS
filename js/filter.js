// Filter functionality for products page
document.addEventListener('DOMContentLoaded', function() {
    // This file can be used for additional filter enhancements
    // The main filter logic is in main.js
    
    // Add visual feedback for active filters
    const filterCheckboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.closest('label');
            if (this.checked) {
                label.style.fontWeight = 'bold';
                label.style.color = '#2563eb';
            } else {
                label.style.fontWeight = 'normal';
                label.style.color = '';
            }
        });
    });
});
