window.addEventListener("load",() => {
  window.handlerSubmit=(event) => {
    event.preventDefault()
    console.log(event)
    const cupsNumber = event.target[0].value
    const cupsMl = event.target[1].value
    const periodNotification = event.target[2].value
    const config = {
      cupsNumber:cupsNumber,
      cupsMl:cupsMl,
      periodNotification:periodNotification
    }
    localStorage.setItem("config", JSON.stringify(config))
    window.location.reload()
  }
})