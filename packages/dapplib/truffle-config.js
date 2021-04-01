require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'half climb frown skull traffic develop remain hole hidden knee front slight'; 
let testAccounts = [
"0xeeb1d81718b27e85ebe3841fa6f57e388428e2a7a93c4b0a24aa00aac724a326",
"0xf1f4aba7175901cf19adbaeee1b5ea7d44680b90586724a947e9b18a8a2b6b8d",
"0xb5f86323f7a4580e3778c09cfa69e3bc440b809e17d6848123810bdc4678cd45",
"0x552ff15583c5e0d0346ca26f490e4920b8c099ae43dfb9a864708881facbcbdd",
"0x2b1299e638fd56bd71de80f908fcaf6c4dcd7174b55e9650aec56720f2a16ec2",
"0x44b9cc8cbe192894387d05c698685c6e2496dc810174060468dfedf46beb1d23",
"0x5c4dce29ab3d16118d77bc7fa381c71e757aa314bc19ccb8fc34f87d2fd903fb",
"0x7014e5735f02d7195581f3d0c564cc1e4e4c40d68fc94d50e88f707681351359",
"0x5e731fc9a388b058a566758d7e118a931a7ec3e1288f85f3df059683513e1e47",
"0x65ac7831b4b3ea624da0c859ef030e2fa17b1895f6d5c6fcf03b77330302394d"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

