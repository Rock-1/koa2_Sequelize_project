const redis   = require('redis');
const client  = redis.createClient(6379, '127.0.0.1');

function createRedis (){
    
}

createRedis.prototype.setToken =  async(id, token) => {
    let ok =  await client.set(id, token); 
    return ok;   
};

createRedis.prototype.getToken =  async(id) => {
    return new Promise((resolve, reject) =>{
        client.get(id,function(err,data){
            if(err){
                reject(err)
                }
                resolve(data)
        });
    })
  };


  module.exports = new createRedis();