const container = document.querySelector("#container");

for(let row_num = 0; row_num < 16; row_num++){

    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for(let pixel_num = 0; pixel_num < 16; pixel_num++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');   
        row.appendChild(pixel);
    }
}

const pixel_hover = document.querySelectorAll('.pixel');

pixel_hover.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.classList.toggle('active');
    })
})