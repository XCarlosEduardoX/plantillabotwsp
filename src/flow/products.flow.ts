import BotWhatsapp from '@bot-whatsapp/bot';
import { fetchProducts } from '../services/products';

export default BotWhatsapp.addKeyword(['productos', 'catalogo'])
    .addAction(async (ctx, { flowDynamic }) => {
        const products = await fetchProducts();
        
        // Por cada producto, envía un mensaje con su información
        for (const product of products.data) {
            await flowDynamic([
                {
                    body: `*${product.name}*\nPrecio: $${product.price}\nDescripción: ${product.description}`
                }
            ]);
        }
    })
    .addAnswer('¿Te gustaría comprar alguno de nuestros productos?');