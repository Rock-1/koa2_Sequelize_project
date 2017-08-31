/**
 *
 * @Description 邮件发送 
 * 调用方法:sendMail('amor_zhang@qq.com','这是测试邮件', 'Hi Amor,这是一封测试邮件');
 *
 */

var nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');

smtpTransport = nodemailer.createTransport(smtpTransport({
    service: "QQ",    
    auth: {
        user: "756884223@qq.com",
        pass: "zouboddwgilgbgaa"
    }
}));

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
function email(){

}
    
email.prototype.sendMail = async(recipient, subject, html) => {

    return  await smtpTransport.sendMail({
        from: "756884223@qq.com",
        to: recipient,
        subject: subject,
        html: html
    })

}

module.exports = new email();