const express=require("express");
const axios =require("axios");
const app=express()
app.listen(8080)

app.post('/payment',async(req,res)=>{
    try{

            const instServer='https://test.instamojo.com/api/1.1/payment-requests'
           const payload={
            amount:2000,
            buyer_name:' mahesh',
            phone:'7977727548',
            email:'mjm43487@gmail.com',
            purpose:'course'

           }
           const auth={

            headers :{
                'X-Api-key':'test_d9cde103eac127df50d52ff309d',
            'X-Auth-Token':'test_0d20dc7f39a8f20edaee9addbb8'

            }

           }
         const{data}= await axios.post(instServer,payload,auth)
         res.status(200).json(data)

    }
    catch(err)
    {
       res.status(500).json(err)
    } 
})
  


app.post('/payment',(req,res)=>{
    res.send("success")
})