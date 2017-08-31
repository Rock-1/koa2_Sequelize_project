/**
 * Created by fzy on 17/8/16.
 */
var jwt = require('jsonwebtoken');
var ObjectId = require('objectid');

function JwtSession() {
}

module.exports = new JwtSession() ;

/**
 * 生成token
 * @param users
 * @param cb
 */
JwtSession.prototype.getSession =  (users) =>{
  console.log(users)
  var expiresIn = 60 * 60 * 1000;
  var payload = {};
  payload.id = users.id;
  payload.name = users.userName;
  payload.userRole =users.userRole;
  var options = {
    "expiresIn": expiresIn
  };
  var token = jwt.sign(payload, '3mang', options);
  users.token = token;
  users.tokenTime = expiresIn;
  
   return users;

};

/**
 * 验证token
 * @param token
 * @param cb
 */
JwtSession.prototype.prverifySession =  async(token) => {
  try {
    let back =jwt.verify(token, '3mang');
    return back;
  } catch (error) {
    throw new Error(error)
  }
};
