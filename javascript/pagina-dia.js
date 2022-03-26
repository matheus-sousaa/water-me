window.addEventListener('load', () => {
  const configDefined = localStorage.getItem("config")
  if (configDefined){
    const config = JSON.parse(configDefined)
    document.getElementById("cupsNumber").innerHTML = `${config.cupsNumber}`
  }
})