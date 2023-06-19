const body = document.getElementById("terminal-main")

let iter = 0
let text = ""

let createText = () => {
	let base = document.createElement("span")
	setTimeout(() => {
		if(iter < text.length){
			base.textContent += text[iter]
			iter++
			createText()
		}
	}, 75)
	body.appendChild(base)
}

text = 'ᜋᜎᜒᜄᜌᜅ᜔ ᜉᜄ᜔ᜇᜆᜒᜅ᜔ ᜐ ᜁᜐᜅ᜔ ᜎᜓᜄᜇ᜔ ᜃᜓᜅ᜔ ᜐᜀᜈ᜔ ᜉᜓᜇᜓ ᜊᜌ᜔ᜊᜌᜒᜈ᜔ ᜀᜅ᜔ ᜁᜌᜓᜅ᜔ ᜋᜊᜊᜐ᜵ ᜃᜓᜅ᜔ ᜏᜎ ᜃ ᜋᜅ᜔ ᜋᜂᜈᜏᜀᜈ᜔ ᜇᜒᜆᜓ᜵ ᜋᜀᜀᜇᜒ ᜃᜅ᜔ ᜋᜄ᜔ ᜀᜇᜎ᜔ ᜋᜓᜈ ᜈᜅ᜔ ᜊᜌ᜔ᜊᜌᜒᜈ᜔᜵ ᜂᜉᜅ᜔ ᜁᜌᜓᜅ᜔ ᜎ᜔ᜎᜓᜊᜓᜐ᜔ ᜈ ᜋᜂᜈᜏᜀᜈ᜔ ᜀᜅ᜔ ᜀᜃᜒᜅ᜔ ᜊᜒᜈᜊᜅ᜔ᜄᜒᜆ᜔᜶ ᜁᜆᜓ ᜅ ᜉᜎ ᜀᜅ᜔ ᜋᜅ ᜋᜀᜀᜇᜒ ᜋᜓᜅ᜔ ᜋᜄᜋᜒᜆ᜔ ᜇᜒᜆᜓ ᜐ ᜄᜒᜈᜏ ᜃᜓᜅ᜔ ᜏᜒᜊ᜔ᜐᜌ᜔ᜆ᜔᜶'
createText()