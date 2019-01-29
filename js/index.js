// Your code goes here

// change button color to crimson on mouseover.
const button = document.querySelectorAll('.btn');
button.forEach(button => {
    button.addEventListener('mouseover', e => {
        event.target.style['background-color'] = 'crimson';
    });
});