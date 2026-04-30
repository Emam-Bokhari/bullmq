const {Worker}=require("bullmq")

const worker=new Worker("email-queue",(job)=>{
console.log("This is received a message")
console.log(`Sending email to this ${job.data.email}`);
})