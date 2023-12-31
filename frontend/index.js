document.getElementById("weatherBtn").addEventListener("click", async () => {
    let cityName = document.getElementById("cname").value
    // resp = await fetch(`http://localhost:3000/weather?city=${cityName}&units=metric`)
    resp = await fetch(`https://comp1537-lab09-backend-2.onrender.com/weather?city=${cityName}&units=metric`)
    resJson = await resp.json()
    document.getElementById("result").innerText =
        resJson.weather[0].description
    document.getElementById("result").innerText +=
        resJson.main.temp
    document.getElementById("result").innerHTML +=

        `<img src="https://openweathermap.org/img/wn/${resJson.weather[0].icon}@2x.png">`

})
