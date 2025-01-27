import {toNano} from "@ton/core";
import {AssetsSDK, createApi, createSender, importKey, PinataStorageParams} from "@ton-community/assets-sdk";

const NETWORK = 'testnet';
const api = await createApi(NETWORK);

const keyPair = await importKey(process.env.MNEMONIC!);
const sender = await createSender('highload-v2', keyPair, api);


const storage: PinataStorageParams = {
    pinataApiKey: process.env.PINATA_API_KEY!,
    pinataSecretKey: process.env.PINATA_SECRET!,
}

const sdk = AssetsSDK.create({
    api: api,
    storage: storage,
    sender: sender,
});

console.log('Using wallet', sdk.sender?.address);

export const createJetton = async () => {
    const jetton = await sdk.deployJetton({
        name: 'Jetton' + ((Math.random() * (50000 - 1) + 1) + (Math.random() * (5000 - 1) + 1)),
        decimals: 9,
        description: 'Test jetton',
        // symbol: 'TON',
    }, {
        adminAddress: sdk.sender?.address!,
        premintAmount: toNano('100'),
    });

    console.log("Jetton is created");
    

    return jetton
}
