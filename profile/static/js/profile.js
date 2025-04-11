function toggleVisibility(elementToShow, elementToHide) {
    const hideElement = document.querySelector(elementToHide);
    const showElement = document.querySelector(elementToShow);
    
    // Hide the element with a transition
    setTimeout(() => {
        hideElement.style.display = 'none';
        showElement.style.display = 'block';
    }, 300); // Match this duration with CSS transition duration
}

function showExperience() {
    toggleVisibility('.experience', '.name');
}

function hideExperience() {
    toggleVisibility('.name', '.experience');
}

function showEducation() {
    toggleVisibility('.education', '.profile-image');
}

function hideEducation() {
    toggleVisibility('.profile-image', '.education');
}

document.addEventListener('DOMContentLoaded', function() {
    var left_arrow = document.getElementById('left-arrow');
    var right_arrow = document.getElementById('right-arrow');

    left_arrow.addEventListener('click', function() {
        window.history.back(); // Navigate to the previous page
    });

    right_arrow.addEventListener('click', function() {
        window.location.href = right_arrow.href; // Navigate to the next level
    });

});