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
import {guardarDatos} from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {
   
})

const formEnvio = document.getElementById('form-envio')

formEnvio.addEventListener('submit', (e) => {
   e.preventDefault()

   const nombre = formEnvio['input-nombre']
   const contacto = formEnvio['input-contacto']
   const correo = formEnvio['input-correo']
   const cargo = formEnvio['input-cargo']


   guardarDatos(nombre.value, contacto.value, correo.value, cargo.value)
     
})