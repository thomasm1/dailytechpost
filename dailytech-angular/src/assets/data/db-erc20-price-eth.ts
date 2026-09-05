// {
  // Example data structure for ERC20 token prices in ETH
//   "0x6b175474e89094c44da98b954eedeac495271d0f": 0.00032, // DAI

import { ChainTokenDetail } from "../../app/model/ChainTokenDetail";

export const ERC20_PRICE_ETH:  ChainTokenDetail = {
    "tokenName": "Byte",
    "tokenSymbol": "BYTE",
    "tokenLogo": "https://logo.moralis.io/0x1_0xde342a3e269056fc3305f9e315f4c40d917ba521_ba874d156ddd90c214399fc72e2e09db.webp",
    "tokenDecimals": "9",
    "nativePrice": {
        "value": "1931927921.11",
        "decimals": 18,
        "name": "Ether",
        "symbol": "ETH",
        "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
    },
    "usdPrice": 0.00000638695863221999,
    "usdPriceFormatted": "0.00000638695863221999",
    "exchangeName": "Uniswap v2",
    "exchangeAddress": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "tokenAddress": "0xde342a3e269056fc3305f9e315f4c40d917ba521",
    "priceLastChangedAtBlock": "24243904",
    "blockTimestamp": "1768525775000",
    "possibleSpam": false,
    "verifiedContract": true,
    "pairAddress": "0x8fbd26a7cb1ab65834c5ea245aa1f1e78d03ed30",
    "pairTotalLiquidityUsd": "904722.28",
    "securityScore": 73,
    "usdPrice24hr": 0.0000034779944393956,
    "usdPrice24hrUsdChange": 0.0000029089641928244,
    "usdPrice24hrPercentChange": 83.63912718991912,
    "24hrPercentChange": "83.63912718991912"
};