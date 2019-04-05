const pasteBox = document.getElementById("no-paste");
	pasteBox.onPaste = e =>{
		e.preventDefault();
		return false;
	};
