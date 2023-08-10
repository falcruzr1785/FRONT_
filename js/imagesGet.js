const imagesList = [];

const getImage = () => {
    //'http://localhost:3000/api/images'
    
    const urlGet = 'pruebawebappcr.azurewebsites.net';

    fetch(urlGet)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se logró la consulta al servidor');
            }
            return response.json(); // Parsear la respuesta como JSON
        })
        .then(imageDataArray => {
            const imagenElement = document.getElementById('imagenElement');
            const cant = document.getElementById('cant');
            console.log("image array",imageDataArray)
            if (imageDataArray.length > 0) {
               

                cant.value =  imageDataArray.length
                imageDataArray.forEach(imagen => {
                    
                const imageData = imagen; // Obtener el primer objeto de datos de imagen
                const imageUrl = `data:${imageData.contentType};base64,${imageData.data}`;
               // Crear un nuevo elemento <img> y asignar la URL
              
               const img = document.createElement("img");
               console.log("imageUrl  ",imageUrl)
               img.src = imageUrl;
               img.style.margin = '100px'; // Opcional: agregar margen entre las imágenes
           
               imagenElement.appendChild(img); // Agregar la imagen al contenedor

            });
            } else {
                imagenElement.textContent = 'No hay imágenes disponibles.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

getImage();