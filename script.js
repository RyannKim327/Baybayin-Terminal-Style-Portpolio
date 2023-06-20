const body = document.getElementById("terminal-main")

let iter = 0
let text = ""
let base

let createInput = () => {
	const container = document.createElement("div")
	const label = document.createElement("label")
	const input = document.createElement("input")
	label.textContent = "$"
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
	}, 75)
}

let createText = () => {
	base = document.createElement("span")
	typeText()
	body.appendChild(base)
}

text = 'ᜋᜎᜒᜄᜌᜅ᜔ ᜉᜄ᜔ᜇᜆᜒᜅ᜔ ᜐ ᜁᜐᜅ᜔ ᜎᜓᜄᜇ᜔ ᜃᜓᜅ᜔ ᜐᜀᜈ᜔ ᜉᜓᜇᜓ ᜊᜌ᜔ᜊᜌᜒᜈ᜔ ᜀᜅ᜔ ᜁᜌᜓᜅ᜔ ᜋᜊᜊᜐ᜵ ᜃᜓᜅ᜔ ᜏᜎ ᜃ ᜋᜅ᜔ ᜋᜂᜈᜏᜀᜈ᜔ ᜇᜒᜆᜓ᜵ ᜋᜀᜀᜇᜒ ᜃᜅ᜔ ᜋᜄ᜔ ᜀᜇᜎ᜔ ᜋᜓᜈ ᜈᜅ᜔ ᜊᜌ᜔ᜊᜌᜒᜈ᜔᜵ ᜂᜉᜅ᜔ ᜁᜌᜓᜅ᜔ ᜎ᜔ᜎᜓᜊᜓᜐ᜔ ᜈ ᜋᜂᜈᜏᜀᜈ᜔ ᜀᜅ᜔ ᜀᜃᜒᜅ᜔ ᜊᜒᜈᜊᜅ᜔ᜄᜒᜆ᜔᜶ ᜁᜆᜓ ᜅ ᜉᜎ ᜀᜅ᜔ ᜋᜅ ᜋᜀᜀᜇᜒ ᜋᜓᜅ᜔ ᜋᜄᜋᜒᜆ᜔ ᜇᜒᜆᜓ ᜐ ᜄᜒᜈᜏ ᜃᜓᜅ᜔ ᜏᜒᜊ᜔ᜐᜌ᜔ᜆ᜔᜶'
createText()