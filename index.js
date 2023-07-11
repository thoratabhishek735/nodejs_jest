const add=(a,b)=>{
    return a+b;
}

const error = ()=>{
    throw new Error("I am new error")
}

const promiseTest = (a,b) =>{
    return new Promise((resolve,reject)=>{
        if(a-b > 0){
            resolve("+ve")
        }else{
            reject("-ve")
        }
    })
}

const express = require("express");

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get("/users",(req,res)=>{
    res.status(200).json({
        users:[
           { name:"Abhishek",email:"at@gmail.com" },
           { name:"Kiran",email:"kt@gmail.com" }
        ]
    })
})

app.listen(5001)

module.exports = {
    add,error,promiseTest,app
}