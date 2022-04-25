let axios = require("axios")


let getStates = async function(req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function(req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function(req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByDistrict = async function(req, res) {
    try {
        let district = req.query.district_id
        let date = req.query.date
        console.log(`query params are : ${district} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })


    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function(req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let londonWeather = async function(req, res) {
    try {
        let place = req.query.q
        let ID = req.query.appid
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${ID}`,

        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let temperatureLondonWeather = async function(req, res) {
    try {
        let place = req.query.q
        let ID = req.query.appid
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${ID}`,

        }

        let result = await axios(options)
        console.log(result.data.main.temp)
        res.status(200).send({ msg: result.data.main.temp })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let sortBycity = async function(req, res) {
    try {
        let city = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let sortCity = []
        for (let i = 0; i < city.length; i++) {
            let place = { city: city[i] }
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=5767da79fbdfbc7a3b9a5fa2f0740d7c`)
            console.log(result.data.main.temp)
            place.temp = result.data.main.temp /// Bengaluru temp
            sortCity.push(place)

        }
        let sortarr = sortCity.sort(function(a, b) { return a.temp - b.temp })
        res.status(200).send({ status: true, msg: sortarr })


    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}













module.exports.sortBycity = sortBycity
module.exports.temperatureLondonWeather = temperatureLondonWeather
module.exports.londonWeather = londonWeather
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistrict = getByDistrict