const Squad = require("../models/Squad");
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://cihat1991:cA-+748596@galaapp-m6qmk.mongodb.net/test?retryWrites=true&w=majority",{ 
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const squads = [
    new Squad({
        user: "5e8909500e1c3148b4f958c0",
        name: "yeni dort Squad",
        players:["5e8c0734bd6f1b8a25c71f4c","5e8c0757b5805a8a306020e3","5e8c0757b5805a8a306020e4"]
    }),
];

var done = 0;
for (let i=0; i < squads.length; i++){
    squads[i].save(function(err, result){
        done++;
        if(done === squads.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}