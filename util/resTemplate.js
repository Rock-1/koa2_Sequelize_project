module.exports = {
    res:(ctx,status,msg,data) => {
        if(!data){
            ctx.response.status= status;
            ctx.response.body = msg;
        }else {
            ctx.body = data;
        }
    },
    paramError:(paramName,text,selfData,code) => {
        var content = !text ? '是无效字段':text; 
        if(!selfData){
            return {
                    msg:paramName+content
                }
        }else {
            return {
                    msg:selfData
                }
        }
    },
    catchError:(ctx,code,e) =>{
        ctx.response.status= 200;
        ctx.response.body= {
            code:code,
            data:{
                msg:e
             }
         };        
    },
    successTemp: (ctx,code,data)=>{
        console.log(code)
        ctx.response.status= 200;
        ctx.response.body= {
            code:!data.code ? 200:data.code,
            returnData:{
                data:data
             }
         };
    }
    
}
