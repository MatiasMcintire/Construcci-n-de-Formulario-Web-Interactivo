// Captura de elementos del formulario
const form          = document.getElementById("registrationForm");
const btnEnviar     = document.getElementById("btnEnviar");
const inputNombre   = document.getElementById("nombre");
const inputEmail    = document.getElementById("email");
const inputFecha    = document.getElementById("fechaNacimiento");
const selectPais    = document.getElementById("pais");
const checkTerminos = document.getElementById("terminos");
const inputApellido = document.querySelector('input[name="apellido"]');
const radioSeleccionado = () => document.querySelector('input[name="tipoEntrada"]:checked');
 
// Evento de envío
form.addEventListener("submit", function (event) {
  event.preventDefault();
 
  const nombre   = inputNombre.value.trim();
  const apellido = inputApellido.value.trim();
  const email    = inputEmail.value.trim();
  const fecha    = inputFecha.value;
  const pais     = selectPais.value;
  const entrada  = radioSeleccionado();
  const terminos = checkTerminos.checked;
 
  if (!nombre || !apellido || !email || !fecha || !pais || !entrada || !terminos) {
    alert("Por favor, completa todos los campos antes de continuar.");
    return;
  }
 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }
 
  alert("Los datos fueron enviados correctamente");
  form.reset();
});