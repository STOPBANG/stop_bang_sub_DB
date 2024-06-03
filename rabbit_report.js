const amqp = require('amqplib');
const reportModel = require('./models/reportModel.js');

module.exports = {
    recieveConnection: async () => {
        try {
            const connection = await amqp.connect(process.env.RABBIT);
            const messageChannel = await connection.createChannel();
            const queue = 'reportQueue';

            await messageChannel.assertQueue(queue, { durable: true });

            messageChannel.consume(queue, async (msg) => {
                if (msg !== null) {
                    console.log("Received a 'report' message");

                    const parsedMsg = JSON.parse(msg.content);
                    console.log("parsedMsg: ", parsedMsg);

                    try {
                        await reportModel.create(parsedMsg);
                        console.log("Report entry created successfully.");
                        messageChannel.ack(msg);
                    } catch (error) {
                        console.error("Error creating report entry:", error);
                        // Optionally, reject the message and requeue it
                        messageChannel.nack(msg, false, true);
                    }
                }
            });
        } catch (error) {
            console.error('RabbitMQ connection or consumption error:', error);
        }
    }
};
