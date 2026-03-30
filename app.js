document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('loginForm');
	if (!form) return;

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		const email = document.getElementById('email').value.trim();
		const password = document.getElementById('password').value;

		// Aquí puedes integrar la lógica de autenticación.
		console.log('Login intent:', { email, password: password ? '●●●' : '' });
		alert('Intento de inicio de sesión con correo: ' + email);
	});
});
