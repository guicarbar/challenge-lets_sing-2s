window.onload = function() {
  // const das horas
  const agora = new Date()
  const horas = agora.getHours()

  // welcome
  const element = document.querySelector(".welcome_func")

  // pega a hora
  console.log(`Horário atual: ${horas}`)

  if (horas >= 6 && horas < 12) {
    // bom dia
    console.log("Bom dia")
    element.innerHTML = "Bom dia!"
  } else if (horas >= 12 && horas < 18) {
    // boa tarde
    console.log("Boa tarde")
    element.innerHTML = "Boa tarde!"
  } else {
    //boa noite
    console.log("Boa noite")
    element.innerHTML = "Boa noite!"
  }
}