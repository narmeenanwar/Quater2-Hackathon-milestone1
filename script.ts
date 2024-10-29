
// Get the elements
const skillsSection = document.getElementById('skills') as HTMLTextAreaElement;
const toggleSkillsButton = document.getElementById('toogle-skills') as HTMLButtonElement;
var skillsLabel = document.getElementById('skills-label');

// Add event listener to the button
toggleSkillsButton.addEventListener('click', () => {
  if(skillsSection.style.display === 'none'){
    skillsSection.style.display = 'block';
    skillsLabel.style.display = 'block';
    toggleSkillsButton.textContent = 'Hide';

  }else{
    skillsSection.style.display = 'none';
    toggleSkillsButton.textContent = 'Show';
  }
});