const btn = document.getElementById('button');
const dropDown = document.getElementById('nav-drop');

btn.addEventListener('click', toggleButton);
function toggleButton(){
    dropDown.classList.toggle('hide')
};

// Select ALL read more/less buttons and collapse divs
const readMoreButtons = document.querySelectorAll('.more');
const readLessButtons = document.querySelectorAll('.less');

// Add event listeners to each read more button
readMoreButtons.forEach((button) => {
    button.addEventListener('click', showContent);
});

// Add event listeners to each read less button
readLessButtons.forEach((button) => {
    button.addEventListener('click', hideContent);
});

function showContent(click){
    const collapseBlock = this.nextElementSibling; // Get the collapse div after this button
    const readLessButton = collapseBlock.nextElementSibling; // Get the read less button
    
    collapseBlock.style.display = 'block';
    this.style.display = 'none';
    readLessButton.style.display = 'block';
}

function hideContent(click){
    const collapseBlock = this.previousElementSibling; // Get the collapse div before this button
    const readMoreButton = collapseBlock.previousElementSibling; // Get the read more button
    
    collapseBlock.style.display = 'none';
    readMoreButton.style.display = 'block';
    this.style.display = 'none';
}