import React from "react";
import styles from './CSS/ResponseOptions.module.css';



const ResponseOptions = (props) => {
    const options = [
        { 
            text: "How can I use my wallet?", 
            handler: props.actionProvider.handleContribuciones, 
            id: 1 },
        { 
            text: "Can I create my NFT?", 
            handler: props.actionProvider.handlePublicarProyecto,
            id: 2 
        },
        { 
            text: "I am a registered, how can I continue?", 
            handler: props.actionProvider.handleRegistrado, 
            id: 3 },
        { 
            text: "What can i do without registering?", 
            handler: props.actionProvider.handleNoRegistrado, 
            id: 4 
        },
    ];
    
    const optionsMarkup = options.map((option) => (
        <button
          className={styles.learning}
          key={option.id}
          onClick={option.handler}
        >
          {option.text}
        </button>
    ));
    
    return (
        <div className={styles.container}> {optionsMarkup} </div>
    );
};

export default ResponseOptions;