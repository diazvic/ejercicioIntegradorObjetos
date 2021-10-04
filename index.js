//Ejercitación integradora
// Tratá de usar las funciones declaradas en los ejercicios anteriores.

// Crea una pagina que tenga un titulo que diga "Hola!" y un botón que diga "Iniciar sesión"
//2.  Al hacer click en el botón Iniciar Sesión, debe hacerse visible un formulario con un campo usuario y otro contraseña, y un botón para enviar el form.

const botonInicio = document.getElementById("boton-inicio");
const formulario = document.getElementById("formulario");
const titulo = document.getElementById("titulo");
const input = document.getElementById("input-usuario");
const inputContrasenia = document.getElementById("input-contrasenia");
const botonEnviar = document.getElementById("boton-enviar");

botonInicio.onclick = () => {
	formulario.classList.toggle("formulario-oculto");
};

//3.Definí un objeto usuario en javascript en donde estén definidas dos propiedades: nombreUsuario y contrasenia (o usá los objetos definidos antes).

const usuario = {
	nombreUsuario: "vic",
	contrasenia: "java2020",
};

// 4.Si los datos ingresados por el usuario en el form coinciden con los guardados en el objeto, la web debe:
// Mostrar como saludo "Hola {nombreUsuario}"
// Ocultar el botón "iniciar sesión"
// Mostrar dos botones nuevos: Cambiar mis datos, Cerrar sesión.
// Pista: Definí una variable global para guardar si el usuario inició sesión o no, y determinar a partir de ella qué elementos se deben mostrar en la página.
// let localStorage = 0;
// let sesionIniciada = false;

const inicioSesion = () => {
	if (
		input.value === usuario.nombreUsuario &&
		inputContrasenia.value === usuario.contrasenia
	) {
		titulo.textContent = `Hola ${usuario.nombreUsuario}`;
	}
};

botonEnviar.onclick = (e) => {
	e.preventDefault();
	inicioSesion();
};
