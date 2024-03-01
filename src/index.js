import  crypto from  'crypto'


const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048, 
    publicKeyEncoding: {
        type: 'pkcs1', // Chuẩn mã hóa khóa công khai
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs1', // Chuẩn mã hóa khóa riêng tư
        format: 'pem'
    }
});


const plaintext = 'xin chào việt  nam';


console.log({publicKey,privateKey})

const encrypted = crypto.publicEncrypt(publicKey,plaintext );
console.log('Encrypted:', encrypted.toString('hex'));

const decrypted = crypto.privateDecrypt(privateKey, encrypted);
console.log('Decrypted:', decrypted.toString('utf8'));



