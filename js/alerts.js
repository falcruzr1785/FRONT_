

const form = document.querySelector('#formIniciar');

// form.innerHTML = `   
// <label for="correo" > Corrreo electronico </label>
// <input type="email" id="correo">

// <label for="password" > constraseña </label>
// <input type="password" id="password>

// <label for="nombre" > Nombre </label>
// <input type="text" id="nombre">

// <input type="button" value="Registrar">`
let correo = '';
let password ='';
let nombre = '';
        // Añadir evento click al botón
        boton.addEventListener('click', () => {
            Swal.fire({
                title: 'Formulario de Inicio de Sesión',
                html: `
                    <label for="correo">Correo electrónico</label>
                    <input type="email" id="correo">

                    <label for="password">Contraseña</label>
                    <input type="password" id="password" accesskey="*" >

                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre">
                `,
                showCancelButton: true,
                confirmButtonText: 'Iniciar sesión',
                preConfirm: () => {
                    correo = document.getElementById('correo').value;
                    password = document.getElementById('password').value;
                    nombre = document.getElementById('nombre').value;

                    // Aquí puedes realizar la lógica para enviar los datos del formulario al servidor o realizar cualquier otra acción.
                    // Por ejemplo:
                   
                }
            });
        });

        boton2.addEventListener('click', () => {

            console.log('Correo:', correo);
            console.log('Contraseña:', password);
            console.log('Nombre:', nombre);
        }

        )