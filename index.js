let connection=require('./config')
let express=require('express')
let babuji=express()
// console.log(connection.connect)

babuji.get('/viewemp',  function(req, res) {

    let sqlquery='select * from students';
    connection.query(sqlquery, function(error, result){
        if(error)
        console.log('error');
         else
                   console.log(result)
                res.send(result);
    })
   
})
babuji.listen(4000, ()=>{
    console.log("server running on 4000 port");
});
