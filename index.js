const info = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `hi my name is ${info.name} from the campus ${info.campus}`
}));