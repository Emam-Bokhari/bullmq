const {Queue} =require ("bullmq")

const notificationQueue=new Queue("email-queue");

async function init() {
    const response=await notificationQueue.add("send to email",{
        name:"Moshfiqur Rahman",
        email:"moshfiqurrahman36@gmail.com",
        subject:"Hello",
        body:"test"
    });

    console.log(response,response.id);


}

init();