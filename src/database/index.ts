// import MockAdapter from '@bot-whatsapp/database/mock';
// export default new MockAdapter()
import MongoAdapter from '@bot-whatsapp/database/mongo';
const MONGO_DB_URI = 'mongodb://0.0.0.0:27017'
const MONGO_DB_NAME = 'db_bot'

const adapterDB = new MongoAdapter({
    dbUri: MONGO_DB_URI,
    dbName: MONGO_DB_NAME,
})

export default adapterDB