// Función para manejar el envío del formulario
function handleSubmit(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Realizar alguna acción con los valores (ejemplo: mostrarlos en la consola)
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Mensaje:', message);

    // Restablecer el formulario
    document.getElementById('contact-form').reset();
  }

  // Asociar el evento de envío del formulario a la función
  document.getElementById('contact-form').addEventListener('submit', handleSubmit);