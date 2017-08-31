const request = require('request')
const xml2js = require('xml2js');
const builder = new xml2js.Builder();  // JSON->xml
const parser = new xml2js.Parser();   //xml -> json


function requestUtil() {
    
}
requestUtil.prototype.post = (url,d)=>{
    return new Promise((resolve, reject) =>{
        var option = {
            url: url,
            method: "POST",
            headers: {
                "Content-Type":"application/xml"
            },
            body: d
        };
          request(option,(err,res,data)=>{
                if(err){
                    reject(err)
                    }
                    resolve(data)
            })
    })
}

requestUtil.prototype.json2xml = (xml) =>{
    return new Promise((resolve, reject) =>{
         parser.parseString(xml,(err,data)=>{
            if(err){
                reject(err);
            }
                resolve(data)                
            
         });                
    })     
}

module.exports = new requestUtil();