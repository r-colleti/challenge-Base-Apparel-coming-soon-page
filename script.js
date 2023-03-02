var inputEl = document.querySelector('.inpt');

function validMail() {
	event.preventDefault();

	if (inputEl.checkValidity() == false) {
		document.querySelector('.inputArea').classList.add('error');
		document.querySelector('.fLabel').style.display = 'flex';
	} else {
		document.querySelector('.inputArea').classList.remove('error');
		document.querySelector('.fLabel').style.display = 'none';
	}
}