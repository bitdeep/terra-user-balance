# Fetch user balance 

This is sample code to demonstrate how to fetch balance from a wallet on Terra chain.

# To Investigate

To fetch balances from a specific contract like a farm, we need to query contract, sample code:
`await lcdClient.wasm.contractQuery(contractAddress, { balance: { address: your_wallet_address } })`
