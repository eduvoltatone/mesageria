const amqp = require('amqplib/callback_api');

const receiveMessages = () => {
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
      console.log(`[*] Waiting for messages in ${queue}. To exit press CTRL+C`);

      channel.consume(queue, (msg) => {
        console.log(`[x] Received ${msg.content.toString()}`);
      }, { noAck: true });
    });
  });
};

receiveMessages();
