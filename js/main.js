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