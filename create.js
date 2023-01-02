const { Firestore } = require('@google-cloud/firestore');
require('dotenv').config();

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

console.log(CREDENTIALS)

const firestore = new Firestore({
    projectId: CREDENTIALS.project_id,
    credentials: {
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    }
});

const collectionRef = firestore.collection('test');

const createMenuItem = async (id, record) => {

    try {
        await collectionRef.doc(id.toString()).set(record);
        console.log('Records created.');
    } catch (error) {
        console.log(`Error at createRecord --> ${error}`);
    }
};

let database = require('./sample.json');

for (let index = 0; index < database.length; index++) {
    let element = database[index];
    
    createMenuItem(index + 20, element);
}