const mongoose = require('mongoose');
module.exports = {
    name: 'ready',
    once: true,
    async execute() {
        console.log("Ready!")
    }
}