module.exports = () =>{
    return async function adminauth(ctx,next){
        console.log(ctx.session.openId)
        console.log('------------');
        console.log(process.openId);
        if(process.openId){
            await next()
        }else{
            ctx.body={data:'没有登录'}
        }
    }
}