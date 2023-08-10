

        const formElement = document.getElementById('formV');
        const h1 = document.getElementById('h1');


formElement.addEventListener('submit', (event) => {

event.preventDefault();

const formData = new FormData();

const imageInput = document.getElementById('image1');
const selectedFile = imageInput.files[0];

formData.append('imagen', selectedFile, selectedFile.name); // archivo

// Crear la URL con los parámetros http://localhost:3000
const url = 'https://pruebawebappcr.azurewebsites.net/api/upload';

// Realizar la solicitud POST
fetch(url, {
    method: 'POST',
    body: formData
})
.then(response =>  {
    if(!response.ok){
        throw new Error ('No se logró la consulta la consulta al servidor')
    }
    return response.json();
})
.then(data => {
    console.log('console en index: datos desde el servidor:', data);
    
    h1.innerText= JSON.stringify(data);
    //getImage();
})
.catch(error => {
    console.error('Error al enviar el formulario', error);
});

        });//


const getImage = () => {
    // Crear la URL con los parámetros
    const urlGet = 'https://pruebawebappcr.azurewebsites.net/images';

    // Realizar la solicitud POST
    fetch(urlGet, {
        method: 'GET',

    })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se logró la consulta la consulta al servidor')
            }
            return response.blob();
        })
        .then(blob => {
            // Crear una URL para el objeto Blob
        const url = URL.createObjectURL(blob);

        console.log('Texto de la imagen:', blob);
        
        const imagenElement = document.getElementById('imagen');
        imagenElement.src = url;

        // Liberar los recursos asociados a la URL creada
        URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error('Error ', error);
        });

}