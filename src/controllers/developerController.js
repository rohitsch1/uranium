const batchModel = require("../models/batchModel");
const developerModel = require("../models/developerModel");

const createDeveloper = async function (req, res) {
  let developer = req.body;
  let developerCreated = await developerModel.create(developer);
  res.send({ data: developerCreated });
};

const scholarshipDevelopers = async function (req, res) {
  const eligible = await developerModel.find({
    $and: [{ gender: "female" }, { percentage: { $gte: 70 } }],
  });
  res.send({ data: eligible });
};

const developers = async function (req, res) {
  const input = req.query;
  if(input.percentage){
    const developer = await developerModel.find({percentage:{$gte:req.query.percentage}});
    res.send({ data: developer });

  }else{
    const developer = await developerModel.find().populate('batch');
    res.send({ data: developer });
  }
 
};

const test = async function (req, res) {
//   const input = req.query;
 
    const developer = await developerModel.find().populate('batch');
    res.send({ data: developer });
  
 
};

module.exports.createDeveloper = createDeveloper;
module.exports.scholarshipDevelopers = scholarshipDevelopers;
module.exports.developers = developers;
module.exports.test = test;
