let trim = function() {
    let a = "    Rohit     ";
    console.log(a.trim());
}

let changetoLowerCase = function() {
    let s = " RoHiT sInGH";
    console.log(s.toLowerCase());
}

let changeToUpperCase = function() {
    let f = " RoHiT sInGH";
    console.log(f.toUpperCase());
}

module.exports.trim = trim;
module.exports.lower = changetoLowerCase;
module.exports.upper = changeToUpperCase;