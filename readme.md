### 1. HASH 


<img src='https://ssl.vn/wp-content/uploads/2018/08/Hashing.png'/>


- **Hashing** - Hashing là một quy trình biến đổi dữ liệu từ một đầu vào thành một giá trị hash, thường là một chuỗi hoặc một số có độ dài cố định. Quy trình này thường áp dụng một thuật toán băm, được thiết kế để tạo ra một giá trị hash duy nhất cho mỗi đầu vào, sao cho bất kỳ thay đổi nhỏ nào trong đầu vào cũng sẽ dẫn đến một giá trị hash hoàn toàn khác biệt
- **Salting** - Về cơ bản, đó là một giá trị duy nhất có thể được thêm vào cuối,để tạo ra một giá trị băm khác nhau . Khi salting, giá trị bổ sung được gọi là “salt”.



- **Algorithm** :MD5,SHA256,...


```js

function hashPassword(password, salt) {
    const hash = crypto.createHash('sha256');
    hash.update(password + salt);
    return hash.digest('hex'); 
}

console.log(hashPassword('my-password','my-salt'))



```




---



### 2. Encode and Decode


<img src='https://ssl.vn/wp-content/uploads/2018/08/encryption-and-decryption.png' width='60%'/>

----
####  Hệ mã đối xứng (Symmetric Cryptography)

<img src='https://onetel.com.vn/wp-content/uploads/2020/05/M%C3%A3-h%C3%B3a-%C4%91%E1%BB%91i-x%E1%BB%A9ng.jpg'/>



#### Ưu điểm:
1. **Tốc độ**: Mã hóa đối xứng thường nhanh hơn mã hóa không đối xứng, đặc biệt là với việc xử lý dữ liệu lớn.
2. **Hiệu quả**: Quá trình mã hóa và giải mã đơn giản, hiệu quả và dễ triển khai.
3. **Hiệu suất cao**: Thích hợp cho việc mã hóa và giải mã hàng loạt dữ liệu trong thời gian thực.
4. **Quản lý khóa dễ dàng**: Không cần quản lý nhiều khóa như trong mã hóa không đối xứng.

#### Nhược điểm:
1. **Khóa chia sẻ**: Đòi hỏi sự chia sẻ khóa giữa người gửi và người nhận, làm tăng nguy cơ rò rỉ thông tin nếu khóa bị tiết lộ.
2. **Quản lý khóa phức tạp**: Khó khăn trong việc quản lý và phân phối khóa, đặc biệt khi làm việc với nhiều bên tham gia.
3. **Khả năng bị tấn công brute force**: Một số thuật toán đối xứng có khóa ngắn có thể bị tấn công brute force.


```js

- AES
import CryptoJS from 'crypto-js'

const plaintext = 'Hello, world!';
const key ='@@@###'


const ciphertext = CryptoJS.AES.encrypt(plaintext, key);
console.log('Cipher text: ' + ciphertext);


const decrypted = CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
console.log('Decrypted text: ' + decrypted);

```

---

#### Hệ mã bất đối xứng (Asymmetric Cryptography)


<img src='https://static.ffbbbdc6d3c353211fe2ba39c9f744cd.com/wp-content-learn/uploads/2021/01/22143723/Public-and-private-key-encryption.jpg' width='80%'/>


#### Ưu điểm:
1. **Tính bảo mật cao**: Mã hóa không đối xứng cung cấp một cơ chế bảo mật mạnh mẽ, đặc biệt trong việc trao đổi khóa và ký số.
2. **Không cần chia sẻ khóa**: Không yêu cầu chia sẻ khóa giữa người gửi và người nhận, giảm nguy cơ rò rỉ thông tin.
3. **Quản lý khóa dễ dàng**: Không gian khóa lớn hơn, đồng thời không cần phải quản lý nhiều khóa.

#### Nhược điểm:
1. **Tốc độ chậm hơn**: Thường có tốc độ chậm hơn so với mã hóa đối xứng, đặc biệt là trong việc xử lý dữ liệu lớn.
2. **Hiệu suất thấp**: Thích hợp cho các trường hợp mã hóa nhỏ lẻ hoặc không đòi hỏi hiệu suất cao.
3. **Khả năng tấn công Man-in-the-Middle (MITM)**: Không đối xứng có thể dễ dàng bị tấn công MITM nếu không có các biện pháp bảo mật phù hợp.

```js

- RSA

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


const plaintext = 'xin chào việt nam';


const encrypted = crypto.publicEncrypt(publicKey,plaintext );
console.log('Encrypted:', encrypted.toString('hex'));

const decrypted = crypto.privateDecrypt(privateKey, encrypted);
console.log('Decrypted:', decrypted.toString('utf8'));


```




### 3 References


1. Tool <a href='https://10015.io/tools/sha256-encrypt-decrypt'>encrypt-decrypt</a>

2. Docs <a href='https://crypto.stackexchange.com/questions'>questions</a>, <a href='https://tailieuhust.com/ly-thuyet-mat-ma-hust'> Slide bài giảng</a> 