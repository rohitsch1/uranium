const authorModel = require('../models/authorModel')
const { count } = require("console")
const bookModel = require('../models/bookModel1')

let createNewAuthor = async function(req, res) {
    let data = req.body;
    let savedData = await authorModel.create(data)
    res.send({ msg: savedData })

}

let createNewBook = async function(req, res) {
    let dataBook = req.body;
    let savedData = await authorModel.create(dataBook)
    res.send({ msg: savedData })
}


let allBook = async function(req, res) {
    let savedData = await authorModel.find({ author_name: "Chetan Bhagat" })
    const id = savedData[0].author_id
    let bookName = await authorModel.find({ author_id }).select({ name: 1 })
    res.send({ msg: bookName })
}

let updatedBookPrice = async function(req, res) {
    let savedData = await authorModel.find({ name: "Two states" })
    const id = savedData[0].author_id
    let authorN = await authorModel.find({ author_id: id }).select({ author_name: 1, _id: 0 })

    const bookName = savedData[0].name
    const UpdatePrice = await authorModel.findOneAndUpdate({ name: bookName }, { price: 100 }, { new: true }).select({ price: 1, _id: 0 })
    res.send({ msg: UpdatePrice })
}

module.exports.createNewAuthor = createNewAuthor
module.exports.createNewBook = createNewBook
module.exports.allBook = allBook