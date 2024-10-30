const amqp = require('amqplib/callback_api');

const sendMessage = (msg) => {
  amqp.connect('amqp://localhost', (err, connection) => {
    if (err) {
      throw err;
    }

    connection.createChannel((err1, channel) => {
      if (err1) {
        throw err1;
      }

      const queue = 'tasks';

      channel.assertQueue(queue, { durable: false });
      channel.sendToQueue(queue, Buffer.from(msg));

      console.log(`[x] Sent ${msg}`);
    });

    setTimeout(() => {
      connection.close();
    }, 500);
  });
};

module.exports = sendMessage;
