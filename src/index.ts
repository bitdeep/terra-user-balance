import { LCDClient } from '@terra-money/terra.js';

const terra = new LCDClient({
    URL: 'https://lcd.terra.dev',
    chainID: 'columbus-5'
});

async function fetchMarketData(){
    const marketParams = await terra.market.parameters();
    const exchangeRates = await terra.oracle.exchangeRates();
    console.log(marketParams.base_pool);
    console.log(exchangeRates.get('uusd'));
}

async function main() {
    await fetchMarketData();
}

main();
