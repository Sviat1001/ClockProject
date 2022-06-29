setInterval(setClock, 1000)

function setClock(){
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    const minuteRatio = currentDate.getMinutes() / 60
    const hourRatio = currentDate.getHours() / 60
}