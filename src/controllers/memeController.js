const axios = require('axios')

let getAllMemes = async function(req, res) {
    var options = {
        method: 'get',
        url: `https://api.imgflip.com/get_memes`
    }

    let result = await axios(options)
    let savaData = result.data
    res.status(200).send({ msg: savaData })

}


let createMemes = async function(req, res) {

    let id = req.query.template_id
    let txt0 = req.query.text0
    let txt1 = req.query.text1
    let UName = req.query.username //chewie12345
    let pswd = req.query.password //meme@123


    var options = {

        method: 'post',
        url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${txt0}&text1=${txt1}&username=${UName}&password=${pswd}`,

    }

    let result = await axios(options)
    let savaData = result.data
    console.log(savaData)
    res.status(200).send({
        data: savaData
    })
}


module.exports.getAllMemes = getAllMemes
module.exports.createMemes = createMemes