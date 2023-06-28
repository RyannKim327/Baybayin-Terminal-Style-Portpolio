const body = document.getElementById("terminal-main")

let iter = 0
let text = ""
let base
let hold = ""
let orig

let baybayinChecker = (text) => {
	let txt = text.replce(/\s/gi, "").replce(/([\W])+/gi, "")
	let _return = true
	for(let i = 0; i < txt.length; i++){
		let code = txt.charCodeAt(i)
		if(code <= 5888 && code >= 5942){
			_return = false
			break
		}
	}
	return _return
}

let execute = () => {
	if(baybayinChecker(hold)){
		text = "ᜋᜀᜀᜇᜒᜅ᜔ ᜋᜅ ᜃᜇᜃ᜔ᜆᜒᜇ᜔ ᜎᜅ᜔ ᜈᜅ᜔ ᜊᜌ᜔ᜊᜌᜒᜈ᜔ ᜀᜅ᜔ ᜋᜀᜀᜇᜒᜅ᜔ ᜁᜎᜄᜌ᜔ ᜇᜒᜆᜓ᜶"
		createText()
	}else{
		text = "Sample"
		createText()
	}
}

let createInput = () => {
	const container = document.createElement("div")
	const label = document.createElement("label")
	const input = document.createElement("input")
	label.textContent = "$"
	input.addEventListener("keyup", (event) => {
		if(input.value == ""){
			alert("Hindi po maaari na walang laman itong lalagyan, salamat po.")
		}else{
			event.preventDefault()
			input.readOnly = "readonly"
			hold = input.value.toLowerCase()
			orig = input.value
			execute()
		}
	})
	container.appendChild(label)
	container.appendChild(input)
	body.appendChild(container)
}

let typeText = () => {
	setTimeout(() => {
		if(iter < text.length){
			base.textContent += text[iter]
			iter++
			typeText()
		}else{
			createInput()
		}
	}, 25)
}

let createText = () => {
	base = document.createElement("span")
	typeText()
	body.appendChild(base)
}

text = 'ᜋᜎᜒᜄᜌᜅ᜔ ᜉᜄ᜔ᜇᜆᜒᜅ᜔ ᜐ ᜁᜐᜅ᜔ ᜎᜓᜄᜇ᜔ ᜃᜓᜅ᜔ ᜐᜀᜈ᜔ ᜉᜓᜇᜓ ᜊᜌ᜔ᜊᜌᜒᜈ᜔ ᜀᜅ᜔ ᜁᜌᜓᜅ᜔ ᜋᜊᜊᜐ᜵ ᜃᜓᜅ᜔ ᜏᜎ ᜃ ᜋᜅ᜔ ᜋᜂᜈᜏᜀᜈ᜔ ᜇᜒᜆᜓ᜵ ᜋᜀᜀᜇᜒ ᜃᜅ᜔ ᜋᜄ᜔ ᜀᜇᜎ᜔ ᜋᜓᜈ ᜈᜅ᜔ ᜊᜌ᜔ᜊᜌᜒᜈ᜔᜵ ᜂᜉᜅ᜔ ᜁᜌᜓᜅ᜔ ᜎ᜔ᜎᜓᜊᜓᜐ᜔ ᜈ ᜋᜂᜈᜏᜀᜈ᜔ ᜀᜅ᜔ ᜀᜃᜒᜅ᜔ ᜊᜒᜈᜊᜅ᜔ᜄᜒᜆ᜔᜶ ᜁᜆᜓ ᜅ ᜉᜎ ᜀᜅ᜔ ᜋᜅ ᜋᜀᜀᜇᜒ ᜋᜓᜅ᜔ ᜋᜄᜋᜒᜆ᜔ ᜇᜒᜆᜓ ᜐ ᜄᜒᜈᜏ ᜃᜓᜅ᜔ ᜏᜒᜊ᜔ᜐᜌ᜔ᜆ᜔᜶'
createText()