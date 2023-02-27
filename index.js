const container = document.querySelector(".container");
const input = document.querySelector("input")
const buttonReset = document.querySelector('.reset')

const setDivs = (e) => {
    const value = e.target.value;
    if (value > 64) {
        input.value = 64;
        return
    }
    if (value < 0) {
        input.value = 0;
        return;
    }
    createDivs(value)
}



const createDivs = (num) => {
    buttonReset.addEventListener('click', () => {
        const divs = document.querySelectorAll('.div-created');
        divs.forEach( div => div.style.backgroundColor = null)
    }) 
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const divCreated = document.createElement('div');
            divCreated.classList.add('div-created')
            divCreated.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = "black";
            })
            container.appendChild(divCreated)
        }
    }
}

input.addEventListener('change', setDivs)
createDivs(input.value)