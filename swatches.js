// AMN - Unless SASS, CSS vars can be modified through Javascript

var swatches = document.querySelectorAll('.swatches span'); // AMN - we grab all four span
var root = document.querySelector(':root'); // AMN - we grab the html tag

// console.log("Swatches: ", swatches);
// console.log("root: ", root);

swatches.forEach((swatch) => {
    swatch.addEventListener('click', (e) => {
        root.style.setProperty('--theme-color', e.target.style.background);
    });
});
