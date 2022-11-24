import crypto from 'crypto';

const cred = {
  login: 'test',
  password: 'test123',
};

function encrypt(cred) {
  console.log('encrypting', cred);
}

encrypt(cred);
// dencrypt(cred);
