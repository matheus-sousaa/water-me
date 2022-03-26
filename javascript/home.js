window.addEventListener('load', () => {
  const configDefined = localStorage.getItem("config")
  if (configDefined){
    const buttonsProgressDay = document.querySelectorAll("button.buttonDiaProgresso")
  buttonsProgressDay.forEach((button) => {
    button.removeAttribute("disabled")
  })
  }
})