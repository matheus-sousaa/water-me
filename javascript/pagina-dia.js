window.addEventListener('load', () => {
  const configDefined = localStorage.getItem("config")
  if (configDefined){
    const config = JSON.parse(configDefined)
    document.getElementById("cupsNumber").innerHTML = `${config.cupsNumber}`
    const fullCupList = document.querySelector("ul#fullCups")
    for (let i=0; i<config.cupsNumber; i++) {
      const cupElement = document.createElement("li")
      cupElement.innerHTML = `
      <img src="assets/copo-cheio.svg">
      `
      fullCupList.appendChild(cupElement)
    }
    const span = document.querySelector("div span")
    const button = document.querySelector("div button#plusButton")
    window.less = () => {
      span.innerHTML = +span.innerHTML > 0 ? +span.innerHTML - 1 : 0;
      button.removeAttribute("disabled", true)
    }
    window.plus = () => {
      span.innerHTML = +span.innerHTML >= 0 && +span.innerHTML < config.cupsNumber ? +span.innerHTML + 1 : 0;

      if (+span.innerHTML === +config.cupsNumber) {
      button.setAttribute("disabled", true)
    }
    }
  }
})