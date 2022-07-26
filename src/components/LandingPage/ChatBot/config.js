import { createChatBotMessage } from 'react-chatbot-kit';
import LinkList from './LinkList';
import ResponseOptions from './ResponseOptions';




const botName = 'WALLAby';

const config = {
    botName: botName,
    initialMessages: [createChatBotMessage(`Hello!! I am ${botName}, I am here to help!`)],

    customStyles: {
        botMessageBox: {
            backgroundColor: '#591870',
        },
        chatButton: {
            backgroundColor: '#591870',
        },

    },

    widgets: [
        {
            widgetName: "responseOptions",
            widgetFunc: (props) => <ResponseOptions {...props} />,
        },
        {
            widgetName: "publicarProyecto",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Register",
                        url: `https://wallaby-neon.vercel.app/form`, 
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "contribuciones",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                    text: "Wallet",
                    url: `https://wallaby-neon.vercel.app/payment`, 
                    id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "registrado",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Login",
                        url: `https://wallaby-neon.vercel.app/login`, 
                        id: 1,
                    },
                    {
                        text: "Create NFT",
                        url: `https://wallaby-neon.vercel.app/form`, 
                        id: 1,
                    },
                    {
                        text: "Add favorites",
                        url:`https://wallaby-neon.vercel.app/login`, 
                        id: 2,
                    },
                ],
            },
        },
        {
            widgetName: "noRegistrado",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Buy NFT",
                        url: `https://wallaby-neon.vercel.app/home`, 
                        id: 1,
                    },
                    {
                        text: "Create NFT",
                        url: `https://wallaby-neon.vercel.app/form`, 
                        id: 1,
                    },
                    {
                        text: "See collections",
                        url: `https://wallaby-neon.vercel.app/home`, 
                        id: 2,
                    },
                    {
                        text: "Register",
                        url: `https://wallaby-neon.vercel.app/FormRegister`, 
                        id: 1,
                    },
                ],
            },
        },
        {
            widgetName: "WALLAby",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "About us",
                        url: `https://wallaby-neon.vercel.app/about`, 
                        id: 1,
                    },
                ],
            },
        },
    ],
};

export default config;