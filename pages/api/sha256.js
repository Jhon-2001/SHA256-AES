// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import sha256 from 'crypto-js/sha256';


// const hash = bcrypt.hashSync("test",11);
const pwd='test'
// console.log(hash)
const hash2 = crypto.createHash('sha256').update(pwd).digest('hex');
console.log(hash2.length)
 
const hash3= sha256('test')
export default function handler(req, res) {
  res.status(200).json({hash2: hash2, length: hash2.length, hash3:hash3})
}
