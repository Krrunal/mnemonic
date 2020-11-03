var Request = require("request");
var expressSession = require('express-session');
 
const bip39 = require('bip39');
var hdkey = require('hdkey')
var CryptoJS = require("crypto-js");


async function index(req, res) { 
  
   if (!req.body.mnemonic) {
        return res.json({
            status: false,
            message: 'mnemonic data not found'
        });
    } else {
        bip39.mnemonicToSeed(req.body.mnemonic)
        .then(s => {
            var root = hdkey.fromMasterSeed(s);
            var masterPrivateKey = root.privateKey.toString('hex');
            var masterPublicKey = root.publicKey.toString('hex');
            res.json({ 
                status: true,
                message: 'key generate successfully', 
                mnemonic: req.body.mnemonic, 
                masterPrivateKey: masterPrivateKey,   
                masterPublicKey: masterPublicKey,
                root: root
            }); 
        })
    }
    
};  
exports.index = index;


async function password(req, res) { 
   if (!req.body.password) {
        return res.json({
            status: false,
            message: 'password required'
        });
    } else {
        var encryptKey = CryptoJS.AES.encrypt(req.body.password, req.body.key).toString(); 
        
        var bytes  = CryptoJS.AES.decrypt(encryptKey, req.body.key);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);

        return res.json({
            status: true,
            message: 'key generate',
            key: encryptKey,
            originalText: originalText
        })
    }
    
};  
exports.password = password;
 
