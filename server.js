let express=require('express');
let app=express();
let cors=require('cors');

app.use(cors());


app.get('/users',(req,res)=>{
    res.json({users :" list of users"});
});


app.listen(3001,()=>{});