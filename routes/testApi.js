var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
const axios = require("axios");

state = {       
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IlJSVWZ3YjM2RTNhZERraEZETkRhIiwiY29tcGFueV9pZCI6IlNtNjdhNkEyNkR5S21mVUtTbTJ4IiwidmVyc2lvbiI6MSwiaWF0IjoxNjM2NTMyODA0OTYzLCJzdWIiOiJGV0hQN3NDSVpaSHpRcTlhUjFmdiJ9.9GsKJWuRyN0abji72w7KiKPCFtnaWm8jm9nF_7F3qnI',
    contacts:[],
}

var url = 'https://rest.gohighlevel.com/v1/contacts/'
var contacts = []


router.get("/",async function(req,res,next){
    while (url) {
        await axios({
            method: "GET",
            url: url,
            headers: {
                Authorization: `Bearer ${state.apiKey}`,
            }
        })
            .then((contact) => {
                contacts = contacts.concat(contact.data.contacts)
                url = contact.data.meta.nextPageUrl;
            })
            //console.log(contacts)
    }
    console.log(contacts)
    res.send(contacts);
});

module.exports=router;