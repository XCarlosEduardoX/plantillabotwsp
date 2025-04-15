import BotWhatsapp from '@bot-whatsapp/bot';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(['hola', 'buenas', 'buen dia', 'buenas tardes', 'buenas noches', 'buenos dias', 'buenos noches', 'buenas noches'])
    .addAnswer('Un gusto tenerte de nuevo ¿Como puedo ayudarte el día de hoy 😀?')

