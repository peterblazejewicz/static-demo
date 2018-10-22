/// <reference path="custom-message.js" />
class Logger {
  log(msg: any): void {
    const customMessage = new CustomMessage(msg);
    console.log(msg.toString());
  }
}
