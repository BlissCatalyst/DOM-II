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

// Fun in the sun reverse colors on mouse enter on each module. Then go back when the mouse leaves.
const fun = document.querySelectorAll('.destination');
fun.forEach(fun => {
    fun.addEventListener('mouseenter', e => {
        e.target.style.cssText = "color: white; background-color: black";
    });
});
fun.forEach(fun => {
    fun.addEventListener('mouseleave', e => {
        e.target.style.cssText = "color: black; background-color: white";
    });
});