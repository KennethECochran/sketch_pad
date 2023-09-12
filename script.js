const container = document.querySelector("#container");
  
for(let row_num = 0; row_num < 16; row_num++){
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for(let pixel_num = 0; pixel_num < 16; pixel_num++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.setAttribute('style', `height: ${56}px; width: ${56}px;`)
        row.appendChild(pixel);
    }
}

const pixel_hover = document.querySelectorAll('.pixel');
pixel_hover.forEach((pixel) => {
pixel.addEventListener('mouseover', () => {
    pixel.classList.toggle('active');
    });
});

function newGrid(squares){
    let size = 900/squares;

    if(squares > 100){
        alert("Please input a number less than 100!");
    }

    else{
        const rows = document.querySelectorAll('.row');
        rows.forEach((row) => {
            row.remove();
        })

        for(let row_num = 0; row_num < squares; row_num++){
            let row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);

            for(let pixel_num = 0; pixel_num < squares; pixel_num++){
                let pixel = document.createElement('div');
                pixel.classList.add('pixel');
                pixel.setAttribute('style', `height: ${size}px; width: ${size}px;`);
                row.appendChild(pixel);
            }
        }

        const pixel_hover = document.querySelectorAll('.pixel');
        pixel_hover.forEach((pixel) => {
            pixel.addEventListener('mouseover', () => {
                pixel.classList.toggle('active');
            });
        });

    }

}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    
    const pixel_hover = document.querySelectorAll('.pixel');
    pixel_hover.forEach((pixel) => {
    pixel.classList.remove('active');
    });

    let num_squares = prompt("How many pixels would you like in your grid? (1-100) ");
    newGrid(num_squares);
});