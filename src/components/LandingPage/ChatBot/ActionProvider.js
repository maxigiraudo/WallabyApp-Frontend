import 'react-chatbot-kit/build/main.css'

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef, createCustomMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }
  
    handleHello() {
        const greetingMessage = this.createChatBotMessage('How can I help?', 
        {
            widget: "responseOptions",
        });
        this.updateChatbotState(greetingMessage);
    }

    handleWALLAby() {
      const message = this.createChatBotMessage('Do you want to meet the team?',
        {
          widget:"WALLAby",
        }
      );
      this.updateChatbotState(message);
    }

    handlePublicarProyecto = () => {
        const message = this.createChatBotMessage("Let's create your NFT!:",
          {
            widget: "publicarProyecto",
          }
        );
        this.updateChatbotState(message);
    };

    handleContribuciones = () => {
        const message = this.createChatBotMessage("Set up your wallet:",
          {
            widget: "contribuciones",
          }
        );
        this.updateChatbotState(message);
    };
    
    handleRegistrado = () =>{
        const message = this.createChatBotMessage("Once you register you can:",
            {
              widget: "registrado",
            }
          );
          this.updateChatbotState(message);
    };

    handleNoRegistrado = () =>{
        const message = this.createChatBotMessage("if you are not registered, you still can explore and buy NFT:",
            {
              widget: "noRegistrado",
            }
          );
          this.updateChatbotState(message);
    };

    handleSaludo = () => {
      const message = this.createChatBotMessage("Nice to meet you, I hope to see you soon:");
      this.updateChatbotState(message);

    }

    handleDefault = () => {
      const message = this.createChatBotMessage("I'm sorry, I don't understand. Let's try again.")
      this.updateChatbotState(message);
      this.handleHello()
    }


    updateChatbotState(message) {
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }
}
  
export default ActionProvider;