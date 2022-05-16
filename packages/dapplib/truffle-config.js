require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski street crawl pave proud include another army gas'; 
let testAccounts = [
"0x8005112ea35ded13087c4ef25b09c4b4898db5e77063bd7f4bf00e8c86d431ca",
"0xddbef314536801277f8cfd8c80557446e0b59e4f5fc622f1d72c8b633c7347e8",
"0xabb69dcf45da5c75508504e380a9ed190d4bdd9f878403b4122f09e1038a03d7",
"0xcaa958079c66baab722779b06e8f6b75e7b74defdc03888f248b21059f83150a",
"0xb5749c683478c24431d439e7bc84cf40eb6bebf6cbdcb582b3530740eb4077dc",
"0x5878501faf0af7aae7d70a9136e68edc80a10d9e019e8b35e312c4090d62c448",
"0x082c40c916753af2eff47a07970cf12775f0ec333c8b38dcde265641496b24cc",
"0x1fd2df1fa051f5eca1a69be33503134ac7b8898357d38234f87691890a3bbeb4",
"0x2f87b61e755a36a46c4691cb19bea27eeb19e791676338e8097ddb872a10f02d",
"0x01cbae538225ebf1fc2141c79294703a897adb360b656d2739260decc2404610"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


