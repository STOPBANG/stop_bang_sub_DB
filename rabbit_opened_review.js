const amqp = require('amqplib');
const openedReviewModel = require('./models/openedReviewModel.js');

module.exports = {
    receiveConnection: async () => {
        amqp.connect(process.env.RABBIT).then(connection => {
        connection.createChannel().then(messageChannel => {
            const queue = 'opened_review';

            function consumeMessage(msg) {
                console.log("Received a 'opened_reveiw' message");
                const parsedMsg = JSON.parse(msg.content.toString());
                
                openedReviewModel.create(parsedMsg).then(()=>{
                    console.log("Acknowledging message was handled.");
                    messageChannel.ack(msg);
                })
            }
            messageChannel.consume(queue, consumeMessage);

        })
        });
    },

}

