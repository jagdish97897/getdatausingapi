
let mysql=require('mysql');
let conn=mysql.createConnection(
    {
        user:'jagdish',
        password: '123456',
        host:'localhost',
        database:'babuji',
        port:3306
    }
)
conn.connect(function(err)
{
    if(err)
    {
        console.log('not connected');
    }
    else{
         console.log('connected')
    }
});
module.exports=conn;