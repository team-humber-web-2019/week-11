// let colour0 = {r: 70, g: 100, b: 100};
// let colour1 = {r: 189, g: 40, b: 110};

const palette = [
    {r: 70, g: 100, b: 100},        // 0
    {r: 189, g: 40, b: 110}         // 1
]


const eleFirstPalette = document.getElementById('firstPalette');
eleFirstPalette.innerHTML += `
    <li class="colour" style="background-color:rgb(${palette[0].r},${palette[0].g},${palette[0].b})">
        rgb(${palette[0].r},${palette[0].g},${palette[0].b})
    </li>`;

eleFirstPalette.innerHTML += `
    <li class="colour" style="background-color:rgb(${palette[1].r},${palette[1].g},${palette[1].b})">
        rgb(${palette[1].r},${palette[1].g},${palette[1].b})
    </li>`;


// let eleFirstColour = document.getElementById('firstColour');

// Set the colour to the text (HTML) of our element
// eleFirstColour.innerHTML = `rgb(${colour.r},${colour.g},${colour.b})`;
// eleFirstColour.style.backgroundColor = `rgb(${colour.r},${colour.g},${colour.b})`;

