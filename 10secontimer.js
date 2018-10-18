
function call10Times(start) { 
	if (start > 10) return;
	console.log(start);
	setTimeout(() => call10Times(start + 1), 1000);
}

call10Times(0);
