//Variables para obtener el input e icono para ver o no contraseña  

let ojos = document.querySelectorAll('#eye');
let inputs = document.getElementsByClassName('ojoin');

Array.from(ojos).forEach((ojo, index) => {
  let input = inputs[index];
  ojo.addEventListener('click', mostrar);

  function mostrar() {
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }
});


//Función para poder ver o no contraseña


function abrirIndexHTML() {
    window.open("index.html", "_blank");
}
function abrirsala() {
  window.open("sala.html", "_blank");
}


function validarFormulario(event) {
    var campo = document.getElementById('campo');

    if (campo.value.trim() === '') {
      alert('Por favor, completa el campo');
      event.preventDefault(); // Evita que el formulario se envíe
    }
  }

let panelcn = document.getElementById('cn');
let panelill = document.getElementById('ill');

function abrircn(){
  panelcn.style.display = "flex";
  panelill.style.display = "none";
  panelip.style.display = "none";
  panelcal.style.display = "none";
}

let checkact = document.querySelectorAll('#checkact');
let checkaft = document.querySelectorAll('#checkaft');



Array.from(checkact).forEach((div, index) => {
  let checkbox = div.querySelector('#checkaft');
  div.addEventListener('click', camb);

  function camb() {
    checkbox.style.background = "#FCCE54";
    checkbox.style.left = "48%";
  }
  
  // Función para restaurar el estado original
  function restore() {
    checkbox.style.background = "#353535";
    checkbox.style.left = "2px";
  }

  // Asignar la función restore al evento de doble clic
  div.addEventListener('dblclick', restore);
});

let panelip = document.getElementById('ip');

function abririp(){
  panelip.style.display = "flex"
  panelcn.style.display = "none";
  panelill.style.display = "none";  
  panelcal.style.display = "none";
}

let panelcal = document.getElementById('cal');

function abrircal(){
  panelip.style.display = "none";
  panelcn.style.display = "none";
  panelill.style.display = "none";
  panelcal.style.display = "flex";
}