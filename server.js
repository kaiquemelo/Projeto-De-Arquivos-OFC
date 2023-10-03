const index = require(".");
var fs = require('fs');

require('dotenv').config({path:'variables.env'});

index.set('port' ,(process.env.PORT || 3000));
const server = index.listen(index.get('port'),() =>{
    console.log ("servidor Rodando na Porta :" + server.address().port);
});