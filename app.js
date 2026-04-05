document.addEventListener('DOMContentLoaded', function () {
	// =========================
	// LOGIN (login.html)
	// =========================
	const loginForm = document.getElementById('loginForm');
	if (loginForm) {
		loginForm.addEventListener('submit', function (e) {
			e.preventDefault();
			const email = document.getElementById('email').value.trim();
			const password = document.getElementById('password').value;

			// Aquí puedes integrar la lógica de autenticación.
			console.log('Login intent:', { email, password: password ? '●●●' : '' });
			alert('Intento de inicio de sesión con correo: ' + email);
		});
	}

	// =========================
	// RECOVER (recover.html)
	// =========================
	const recoverForm = document.getElementById('recoverForm');
	if (recoverForm) {
		recoverForm.addEventListener('submit', function (e) {
			e.preventDefault();
			const email = document.getElementById('recoverEmail').value.trim();
			if (!email) {
				return;
			}
			const message = document.getElementById('recoverMessage');
			if (message) message.hidden = false;
			console.log('Recuperación (simulada) enviada a:', email);
		});
	}

	// =========================
	// REGISTER (register.html)
	// =========================
	const registerForm = document.getElementById('registerForm');
	if (registerForm) {
		registerForm.addEventListener('submit', function (e) {
			e.preventDefault();

			const name = document.getElementById('regName')?.value.trim() ?? '';
			const age = document.getElementById('regAge')?.value.trim() ?? '';
			const practiceSport = document.getElementById('regPracticeSport')?.value ?? '';
			const sportType = document.getElementById('regSportType')?.value.trim() ?? '';
			const personalGoal = document.getElementById('regGoal')?.value.trim() ?? '';
			const level = document.getElementById('regLevel')?.value ?? '';

			const email = document.getElementById('regEmail').value.trim();
			const password = document.getElementById('regPassword').value;

			console.log('Registro (simulado):', {
				name,
				age,
				practiceSport,
				sportType,
				personalGoal,
				level,
				email,
				password: password ? '●●●' : '',
			});
			alert('Registro enviado (simulado) para: ' + email);
		});
	}
});
