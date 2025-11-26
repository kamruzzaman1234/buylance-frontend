import mongoose from "mongoose";


export async function connect(){
    try{
        mongoose.connect(process.env.MONGODB_URL!)
        const connection = mongoose.connection

        connection.on('connected', ()=>{
            console.log("Mongodb connected")
        })

        connection.on('error', (err)=>{
            console.log("Mongodb Connection Error, Please make sure db is up and running" + err)
            process.exit()
        })


    }catch(error){
        console.log("Something went wrong in connection DB")
        console.log(error)
    }
}