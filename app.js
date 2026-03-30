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
  
	// Modal elements
	const forgotModal = document.getElementById('forgotModal');
	const signupModal = document.getElementById('signupModal');

	function openModal(modal) {
		if (!modal) return;
		modal.setAttribute('aria-hidden', 'false');
	}
	function closeModal(modal) {
		if (!modal) return;
		modal.setAttribute('aria-hidden', 'true');
		// reset forms inside
		const f = modal.querySelector('form');
		if (f) f.reset();
		const success = modal.querySelector('.modal-success');
		if (success) success.hidden = true;
		const formEl = modal.querySelector('form');
		if (formEl) formEl.hidden = false;
	}

	// Open buttons
	const openForgot = document.getElementById('openForgot');
	const openSignup = document.getElementById('openSignup');
	if (openForgot) openForgot.addEventListener('click', () => openModal(forgotModal));
	if (openSignup) openSignup.addEventListener('click', () => openModal(signupModal));

	// Close buttons
	const closeForgot = document.getElementById('closeForgot');
	const closeSignup = document.getElementById('closeSignup');
	const cancelForgot = document.getElementById('cancelForgot');
	const cancelSignup = document.getElementById('cancelSignup');
	if (closeForgot) closeForgot.addEventListener('click', () => closeModal(forgotModal));
	if (closeSignup) closeSignup.addEventListener('click', () => closeModal(signupModal));
	if (cancelForgot) cancelForgot.addEventListener('click', () => closeModal(forgotModal));
	if (cancelSignup) cancelSignup.addEventListener('click', () => closeModal(signupModal));

	// Forgot form
	const forgotForm = document.getElementById('forgotForm');
	const forgotSuccess = document.getElementById('forgotSuccess');
	const forgotDone = document.getElementById('forgotDone');
	if (forgotForm) {
		forgotForm.addEventListener('submit', function (e) {
			e.preventDefault();
			const email = document.getElementById('forgotEmail').value.trim();
			if (!email) {
				alert('Por favor ingresa un correo válido.');
				return;
			}
			// Simular envío
			forgotForm.hidden = true;
			if (forgotSuccess) forgotSuccess.hidden = false;
			console.log('Simulado: enviar enlace a', email);
		});
	}
	if (forgotDone) forgotDone.addEventListener('click', () => closeModal(forgotModal));

	// Signup form
	const signupForm = document.getElementById('signupForm');
	const signupSuccess = document.getElementById('signupSuccess');
	const signupDone = document.getElementById('signupDone');
	if (signupForm) {
		signupForm.addEventListener('submit', function (e) {
			e.preventDefault();
			const name = document.getElementById('signupName').value.trim();
			const email = document.getElementById('signupEmail').value.trim();
			const pass = document.getElementById('signupPassword').value;
			if (!name || !email || !pass) {
				alert('Por favor completa todos los campos.');
				return;
			}
			// Simular registro
			signupForm.hidden = true;
			if (signupSuccess) signupSuccess.hidden = false;
			console.log('Simulado: crear cuenta', { name, email });
		});
	}
	if (signupDone) signupDone.addEventListener('click', () => closeModal(signupModal));
});
