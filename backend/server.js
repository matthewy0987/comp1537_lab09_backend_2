const express = require("express")
const app = express()
port = 3000
const cors = require("cors")
app.use(cors())

app.listen(port, () =>
    console.log("3000 works")
)
// app.get("/", (req, resp) => {
//     res.sendFile("C:/Users/myoon/github-classroom/comp1537-f23-classroom/lab9-weather-app-node-js-and-express-js-matthewy0987/frontend/index.html");
// })

app.get("/weather", async (req, res) => {
    cityName = req.query.city
    resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a7d9a0d099cf4d8d11b976e2239c1121`)
    resJson = await resp.json()
    res.send(resJson)
})

// npm init
// npm i express
// npm i cors

