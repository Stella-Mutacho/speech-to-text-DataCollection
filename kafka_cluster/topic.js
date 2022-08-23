
const {Kafka}= require("kafkajs")

run();
async function run(){
    try {
        const kafka =new Kafka ({
            "clientId":"myapp",
            "brokers": ["localhost:9092"]

        })
        const admin= kafka.admin();
        console.log ("Connecting........")
        await admin.connect();
        console.log("Connected!")

        //Topic 1: Audio files 
        //Topic 2: Transcription files
        await admin.createTopics({
            "topics":[{
                "topic": "Users",
                "numPartitions": 2

            }]
        })   
        console.log("Created Successfully!")  
        admin.disconnect();
    } 
    catch (ex) 
    {
        console.error('something bad happened {ex}');
    }
    finally{
        process.exit(0);
    }

}