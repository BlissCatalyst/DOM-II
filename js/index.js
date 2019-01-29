// Your code goes here

// change button color to crimson on mouseover.
const button = document.querySelectorAll('.btn');
button.forEach(button => {
    button.addEventListener('mouseover', e => {
        e.target.style['background-color'] = 'crimson';
    });
});

// change back to normal color on click
button.forEach(button => {
    button.addEventListener('click', e => {
        e.target.style.cssText = "background-color: #17A2B8";
    });
});