const key="3mang";
const crypto = require('crypto');
module.exports={
		md5AddSalt:function(password){
			var salt=Math.floor(Math.random()*100);
			var decipher = crypto.createHash('md5',key);
			var md5Pass=decipher.update(password+""+salt).digest("hex");
			return {
				salt:salt,
				md5Pass:md5Pass
			};
		},
		md5:function(password){
			var md5Pass = crypto.createHash('md5').update(password).digest("hex");
			return md5Pass
		},
		md5Salt:function(password,salt){
      if(salt == null){
        salt = '';
      }
			var decipher = crypto.createHash('md5',key);
			return decipher.update(password+salt).digest("hex");
		}
};