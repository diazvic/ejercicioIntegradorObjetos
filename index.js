//Ejercitación integradora
// Tratá de usar las funciones declaradas en los ejercicios anteriores.

// Crea una pagina que tenga un titulo que diga "Hola!" y un botón que diga "Iniciar sesión"
//2.  Al hacer click en el botón Iniciar Sesión, debe hacerse visible un formulario con un campo usuario y otro contraseña, y un botón para enviar el form.

const boton = document.getElementById("boton-inicio");
const formulario = document.getElementById("formulario");
boton.onclick = () => {
	formulario.classList.toggle("formulario-oculto");
};
