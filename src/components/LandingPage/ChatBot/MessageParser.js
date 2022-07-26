class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hey')) {
            return this.actionProvider.handleHello();
        } else if (lowerCaseMessage.includes('nft') || lowerCaseMessage.includes('create'))  {
            return this.actionProvider.handlePublicarProyecto();
        } else if (lowerCaseMessage.includes('register')) {
            return this.actionProvider.handleNoRegistrado();
        } else if (lowerCaseMessage.includes('registered') || lowerCaseMessage.includes('login') || lowerCaseMessage.includes('log in')) {
            return this.actionProvider.handleRegistrado();
        } else if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('value') || lowerCaseMessage.includes('wallet') || lowerCaseMessage.includes('buy') || lowerCaseMessage.includes('money') || lowerCaseMessage.includes('pay')) {
            return this.actionProvider.handleContribuciones();
        } else if (lowerCaseMessage.includes('WALLAby') || lowerCaseMessage.includes('team') || lowerCaseMessage.includes('about') || lowerCaseMessage.includes('robot') || lowerCaseMessage.includes('you') || lowerCaseMessage.includes('name')) {
            return this.actionProvider.handleWALLAby();
        } else if (lowerCaseMessage.includes('thank you') || lowerCaseMessage.includes('thanks') || lowerCaseMessage.includes('bye')) {
            return this.actionProvider.handleSaludo();
        } else {
           return this.actionProvider.handleDefault();
        }


    }
}

export default MessageParser;