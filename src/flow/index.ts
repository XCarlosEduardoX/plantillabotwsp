import BotWhatsapp from '@bot-whatsapp/bot';
import helloFlow from './hello.flow';
import welcomeFlow from './welcome.flow';
import chatbotFlow from './chatbot.flow';
import nodeFlow from './node.flow';
import productsFlow from './products.flow';
import stripeFlow from './stripe.flow';

/**
 * Debes de implementasr todos los flujos
 */
export default BotWhatsapp.createFlow(
    [
        helloFlow,
        welcomeFlow,
        stripeFlow,
        chatbotFlow,
        nodeFlow,
        productsFlow,

    ]
)