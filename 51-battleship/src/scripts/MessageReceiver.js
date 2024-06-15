const numToPaddedString = (n) => {
  return n.toString().padStart(2, '0');
};

class MessageReceiver {
  constructor(onMessageReceived, addTimestamp = false) {
    this.onMessageReceived = onMessageReceived;
    this.addTimestamp = addTimestamp;
  }

  send(message) {
    if (!this.onMessageReceived) return;

    if (this.addTimestamp) {
      const now = new Date();
      let timestamp = `[${numToPaddedString(now.getHours())}:`;
      timestamp += `${numToPaddedString(now.getMinutes())}:`;
      timestamp += `${numToPaddedString(now.getSeconds())}]`;
      message = `${timestamp}: ${message}`;
    }
    this.onMessageReceived(message);
  }
}

export default MessageReceiver;
