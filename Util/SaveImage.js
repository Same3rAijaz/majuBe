import admin from "firebase-admin"
import { v4 } from 'uuid';
// import serviceAccount from "./serviceAccountKey.json"
import path from 'path';
const serviceAccount = {
    "type": "service_account",
    "project_id": "samc-67a5d",
    "private_key_id": "ebc26a6ef2a44e1699d04f3fb3ab789410764129",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCnjL0fasjd8Gn/\nrYw+JEUPa8PJfSEJqz0aGV2dVNoCL/Hb9tlvGltZOKt+M44kgvj8kKNMTg5o0pTf\n2cqdWH2xs8e7Sit8ZC+tUW1ay/YzmV/X8AqraUptzYsvNrYjDEleSYEvHzmiFpmP\nfLY2e1Ctzwqy+WJh9irseq1jTHBaOSzh81uh1c1yDlWYtGccUaZSpEaIS/Y66T34\nl+lRyeOkDMzStghEHRLShvzy7ZAWRTxLp5j3A0vakUZELSb84MsiMN2jwK2Bbi5a\nJTPzy9YpwcVoNuGTs/vHaeYtP6FKrcisUG5la1z3n8eNryKPdN1cGnlZNIcvz5Jc\nYas91IB9AgMBAAECggEABGxqjNMKqRNhFQs9reFSwnC3q1Dmp6Tx+MetKUt1cwPV\niJdoj66cNUuR+YO+b7fWf4KJESlpZ3qRzCQpnYRZ0zB6KDdx1PenK5YAA1rprdyR\ng3e2rGZb/PCliVJSNjQrlrXtl3MlWCJtHPTvsZoJXAFgmK+NWaVAZlxpyfqZZ8Ra\nO3BU5wj0MC03XypHnC5PR90+zKFSsCXbuwLe7Ut+kwT4Xy25ymrNlKN+khlOZDH6\nGm4vmy/hfF+2dZmeMAVniTPukmhyNxISSTMehMbqi6u4gVzBfQmP8DZtVTaTmSKI\nFZuQGIGnbcanvDliGdVvoE5z4OHswxRbLCbVD4IDwQKBgQDR3FkZliAF78dkUjZA\nDfm8LUHfa3ciVHuEFLKSf43qQTXccVnbuRGKKRLXWEToaSgSLxr5IDMWar8trJ+D\n3cav+Vu+niJV+PRhDotoT8Vl2ACnLI5mEdXkET//cWWc8FS3NZzMAvwrzCKJyCWf\ncfr6BLN+2Tt0Jj31xyZfGu3+QQKBgQDMYv1y2pK3xPH4zTiJKAaLdzymYcwpiJ4z\nFcdjJqeOolfJjpVAm2FZLUVcqrF1tDw6XQPe/3dMhGTkgJvV2YMlY7k6V+qFUqbN\nN9zcaXs9Jp94Go0rdPzob6VTkkCm7LsOaPUAJBuuRs/DBf3B0PDQLqp0stMjroWN\nkHWY8uorPQKBgExvk0xMb7F52gfiIbxG2tT9LubvP18TokFDQJ83MjtGMRXveyka\nSRcnSqOAlOiJlHy7B3oBjln121gJbbgbyMhDbHULJ7pkiK3pHEGL/HvRprs88Uif\n6mW9GrAxXy9AIbrxHgD4fVx+Z34DliBy5VS27aGgAZWWcC7asFEnf9OBAoGAc34o\na8NZDuEKPqZwoQhuElcRfY9b18hsZL+UyNFp826HHs0kR7rFmqe7Py7xUmrDcdNn\nwZYoKqPRg1GtPX1I31LnszFEw4u9188OTbqJOjfd+vc9+GWGGC4mhP/q6qhw1ya1\n8xt0TNmUw0ZaazAPNAR6q7D1IH+Y1jLgUMpLSp0CgYBdYWPsqQn3D2Y5si5/0thm\nR58dee+I41GHlJ+cVvnXRgwJkw0ycP/t+D3Gspd5U3NtgH2NU4kgMEAfcFD9BaEP\nr/kWjFrVqzs/8t2Yz5jcYYob38dd9LJiDhWK8loGqxnKG3bTbnR4TatJH6liuAAi\nOAeh1CXY5BKEkJHJffr6Wg==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-w1vvm@samc-67a5d.iam.gserviceaccount.com",
    "client_id": "116270170973214976815",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-w1vvm%40samc-67a5d.iam.gserviceaccount.com"
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://samc-67a5d.appspot.com'
})

async function saveFileToFirebase(file) {
    const bucket = admin.storage().bucket();
    const fileExtension = path.extname(file.originalname);
    const fileName = `${v4()}${fileExtension}`;
    const fileRef = bucket.file(fileName);

    // Upload the file to Firebase Cloud Storage
    await fileRef.save(file.buffer, {
        metadata: {
            contentType: file.mimetype
        }
    });

    // Make the file publicly accessible and get its download URL
    await fileRef.makePublic();
    const downloadURL = await fileRef.getSignedUrl({
        action: 'read',
        expires: '03-17-2025' // Set an expiry date for the URL
    });

    return downloadURL[0];
}

export default saveFileToFirebase;