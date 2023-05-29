/*=============== SHOW HIDDEN - PASSWORD ===============*/
/* const showHiddenPass = (loginPass, loginEye) =>{
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () =>{
      // Change password to text
      if(input.type === 'password'){
         // Switch to text
         input.type = 'text'

         // Icon change
         iconEye.classList.add('ri-eye-line')
         iconEye.classList.remove('ri-eye-off-line')
      } else{
         // Change to password
         input.type = 'password'

         // Icon change
         iconEye.classList.remove('ri-eye-line')
         iconEye.classList.add('ri-eye-off-line')
      }
   })
}

showHiddenPass('login-pass','login-eye') */
/* ===================================================================== */
import { guardarDatos } from './firebase.js';

window.addEventListener('DOMContentLoaded', () => {
   
});

const formEnvio = document.getElementById('form-envio');
const mensajeExito = document.getElementById('mensaje-exito');

formEnvio.addEventListener('submit', (e) => {
   e.preventDefault();

   const nombre = formEnvio['input-nombre'].value;
   const contacto = formEnvio['input-contacto'].value;
   const correo = formEnvio['input-correo'].value;
   //const cargo = formEnvio['input-cargo'].value;

   guardarDatos(nombre, contacto, correo);

   formEnvio.reset() 

   // Mostrar el mensaje de éxito
   mensajeExito.style.display = 'block';

   // Desvanecer el mensaje de éxito después de 3 segundos
   setTimeout(() => {
      mensajeExito.style.opacity = '0';
      setTimeout(() => {
         mensajeExito.style.display = 'none';
         mensajeExito.style.opacity = '1';
      }, 1000);
   }, 3000);
});

