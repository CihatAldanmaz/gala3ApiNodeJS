const Player = require("../models/Player");
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://cihat1991:cA-+748596@galaapp-m6qmk.mongodb.net/test?retryWrites=true&w=majority",{ 
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const players = [
    new Player({
        name: "iki dort Squad",
        position: "gk",
        flagicon:"imdasda.com"
    }),
    new Player({
        name: "iki uc Squad",
        position: "wd",
        flagicon:"imdasda.com"
    })
];

var done = 0;
for (let i=0; i < players.length; i++){
    players[i].save(function(err, result){
        done++;
        if(done === players.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}