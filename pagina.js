// Función para mostrar el formulario cuando el usuario haga clic en el botón
function showForm() {
    const formSection = document.getElementById('formSection');
    formSection.style.display = 'block';  // Mostrar el formulario
}

// Función para manejar el envío del formulario
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar que el formulario se envíe de la forma tradicional
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Mostrar un mensaje de éxito (esto se puede personalizar o enviar los datos a un servidor)
    alert(`Gracias por registrarte, ${name}! Te hemos enviado un correo a ${email}.`);

    // Limpiar el formulario
    document.getElementById('registrationForm').reset();
    document.getElementById('formSection').style.display = 'none';  // Ocultar el formulario
});
