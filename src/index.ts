import {Coins, LCDClient, MsgExecuteContract} from '@terra-money/terra.js';

const terra = new LCDClient({
    URL: 'https://lcd.terra.dev',
    chainID: 'columbus-5'
});

async function fetchTokens(){
    const walletAddress = 'terra16a590uc6f5y2gjdpzhqsreuvfj7g7ncywxnnyh';
    const r = await terra.bank.balance(walletAddress);
    const coins:Coins = r[0];
    let balances = JSON.parse(JSON.parse(JSON.stringify( coins )));
    console.log('COIN ASSETS:')
    for( let coin in balances ){
        const coinInfo = balances[coin];
        console.log(coinInfo);
    }

    const contractAddress = 'terra140k6k2pmh2lmy4q4wyz5znqmtgwvs3gkgfeevq';
    const tShibaBalance = await terra.wasm.contractQuery(contractAddress, { balance: { address: walletAddress } })
    console.log('tShiba Balance', tShibaBalance);


}

async function main() {
    try{
        await fetchTokens();
    }catch(e){
        console.log(e);
    }

}

    main();
