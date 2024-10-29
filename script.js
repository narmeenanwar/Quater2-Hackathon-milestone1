// Get the elements
var skillsSection = document.getElementById('skills');
var toggleSkillsButton = document.getElementById('toogle-skills');
var skillsLabel = document.getElementById('skills-label');

// Add event listener to the button
toggleSkillsButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        skillsLabel.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide';
    }
    else {
        skillsSection.style.display = 'none';
        skillsLabel.style.display = 'none';
        toggleSkillsButton.textContent = 'Show';
    }
});
