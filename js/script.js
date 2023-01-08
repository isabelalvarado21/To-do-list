var numberOfSquares = 6
var colors;
var squares = document.querySelectorAll('.square');
var pickedColor = document.querySelector('#colorDisplay');
var h1 = document.querySelector('h1');
var opcion = document.querySelectorAll(".opcion");
var btnReset = document.querySelector('#reset');

function reset() {
    colors= generateRandomColors(numberOfSquares);
    pickedColor.textContent = pickColor();
    for (let i = 0; i < squares.length; i++) {
    const element = squares[i];

    if(colors[i]){
        element.style.display = 'block';
        element.style.backgroundColor = colors[i];
        
    }else{
        element.style.display = 'none';
    }

    
    };
    h1.style.backgroundColor = '#232323';
    message.textContent = '';
    resetBtn.textContent = 'New Colors';

}

btnReset.addEventListener('click', function () {
    reset();
    
});

function setModo() {
    for (var i = 0; i < opcion.length; i++) {
        opcion[i].addEventListener("click", function(){
        opcion[0].classList.remove("selected")
        opcion[1].classList.remove("selected")
        this.classList.add("selected")
        console.log(this.textContent);
        if(this.textContent === "Easy"){
            numberOfSquares = 3;
        }else{
            numberOfSquares = 6;
        }
        
        reset()
        })
    }
}

function checkSquareClick() {
    
    for (let i = 0; i < squares.length; i++) {
        const element = squares[i];
        element.addEventListener('click', function () {
            var clickedColor = this.style.backgroundColor;

            var message = document.querySelector('#message');
            if(pickedColor.textContent !== clickedColor) {
                var bodyColor = document.querySelector('body');
                
                this.style.backgroundColor = '#232323';
                
                message.textContent = 'Try Again';
            }else{
                message.textContent = 'Correct';
                btnReset.textContent = 'Play Again?';
                
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
            };
        });
    }    

}

function init() {
    setModo();
    checkSquareClick();
    reset();
}

init();

function  changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        const element = squares[i];
        element.style.backgroundColor = color;
    }
}

function pickColor() {
    var numAletorio = Math.ceil(Math.random() * colors.length - 1);
    console.log(numAletorio)
    return colors[numAletorio];
}

// generar un Color rbg random (Aleatorio)

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    //console.log(`rgb(${red}, ${blue}, ${green})`);
    return `rgb(${red}, ${blue}, ${green})`;
}

// generar el arreglo con los colores aleatorios generados randomColor()
function generateRandomColors(cantidad) {
    var arreglo = [];
    for (let i = 0; i < cantidad; i++) {
        arreglo.push(randomColor());
        
    }
    //console.log(arreglo);
    return arreglo;
}
