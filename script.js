let i = 0
function addnum(value) {
	if (document.getElementById("output").value == 0) {
	document.getElementById("output").value = ""
}
	if (i == 1) {
		document.getElementById("output").value = ""
	i --
	}
	document.getElementById("output").value += value
}


function equals() {
	let output = eval(document.getElementById("output").value)
	document.getElementById("output").value = output
	i ++
}
function cleardisplay() {
	document.getElementById("output").value = "0"
}


function changeint() {
	if (document.getElementById("output").value > 0) {
		document.getElementById("output").value = "-" + document.getElementById("output").value
	} else {
	  	document.getElementById("output").value = Number(document.getElementById("output").value) + (2*(Math.sqrt(Number(document.getElementById("output").value)**2)))
	}

}
