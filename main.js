function carregar() {
	var msg = window.document.getElementById('msg')
	var img = window.document.getElementById('imagem')
	var data = new Date()
	var hora =  data.getHours()
	msg.innerHTML = `Horário:  ${hora}`

	if (hora >= 0 && hora < 12)
	{
		//bom dia
		img.src = "morning.png"
		document.body.style.background = '#b6a18e'
	}
	else if (hora >= 12 && hora < 18)
	{
		//boa tarde
		img.src = "afternoon.png"
		document.body.style.background = '#745c3e'
	}
	else{
		img.src = "night.png"
		document.body.style.background = '#664c57'
		//boa noite
	}
}
