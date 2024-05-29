const amqp = require('amqplib');
const openedReviewModel = require('./models/openedReviewModel.js');

module.exports = {
    receiveConnection: async () => {
        amqp.connect(process.env.RABBIT).then(connection => {
        connection.createChannel().then(messageChannel => {
            const queue = 'opened_review';
            
            messageChannel.assertQueue(queue, {}).then(()=>{
                messageChannel.consume(queue, consumeMessage);            
            })

            function consumeMessage(msg) {
                console.log("Received a 'opened_reveiw' message");

                const parsedMsg = JSON.parse(msg.content);
                
                openedReviewModel.create(parsedMsg).then(()=>{
                    console.log("Acknowledging message was handled.");
                    messageChannel.ack(msg);
                })
            }

        })
    });
    },

}

