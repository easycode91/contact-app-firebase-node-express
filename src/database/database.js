const admin = require('firebase-admin');

let serviceAccount = require("../../node-firebase-crud-firebase-adminsdk-3wtwo-b049106d7b.json");

    admin.initializeApp({
        credential : admin.credential.cert(serviceAccount),
        databaseURL : 'https://node-firebase-crud.firebaseio.com/'
    })

    const db = admin.database();

module.exports = db;