import {Coins, LCDClient} from '@terra-money/terra.js';

const terra = new LCDClient({
    URL: 'https://lcd.terra.dev',
    chainID: 'columbus-5'
});

async function fetchTokens(){
    const accountInfo = await terra.auth.accountInfo(
        'terra1zsky63r58vc7dfn3ljj32ch6fyn4e5qd8skzyz'
    );
    // console.log(accountInfo);
    const r = await terra.bank.balance('terra1zsky63r58vc7dfn3ljj32ch6fyn4e5qd8skzyz');
    const coins:Coins = r[0];
    console.log(coins);
}

async function main() {
    try{
        await fetchTokens();
    }catch(e){
        console.log(e);
    }

}

    main();
