export const getRanking = async () => {
    return {
        data: [
            {
                id: 1,
                nome: "Bitcoin",
                sigla: "BTC",
                icone: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png",
                preco: Math.floor(Math.random() * 1000),
                variacao7d: Math.floor(Math.random() * 201) - 100,
                marketCap: Math.floor(Math.random() * 1000),
                volume24h: Math.floor(Math.random() * 1000),
                fornecimento: "20.06M BTC",
                sparkline: gerarSparkline()
},
            {
                id: 2,
                nome: "Ethereum",
                sigla: "ETH",
                icone: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png",
                preco: Math.floor(Math.random() * 1000),
                variacao7d: Math.floor(Math.random() * 201) - 100,
                marketCap: Math.floor(Math.random() * 1000),
                volume24h: Math.floor(Math.random() * 1000),
                fornecimento: "20.06M BTC",
                sparkline: gerarSparkline()
            },
            {
                id: 3,
                nome: "Tether",
                sigla: "USDT",
                icone: "https://coin-images.coingecko.com/coins/images/325/large/Tether.png",
                preco: Math.floor(Math.random() * 1000),
                variacao7d: Math.floor(Math.random() * 201) - 100,
                marketCap: Math.floor(Math.random() * 1000),
                volume24h: Math.floor(Math.random() * 1000),
                sparkline: gerarSparkline()
            },
            {
                id: 4,
                nome: "BNB",
                sigla: "BNB",
                icone: "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
                preco: Math.floor(Math.random() * 1000),
                variacao7d: Math.floor(Math.random() * 201) - 100,
                marketCap: Math.floor(Math.random() * 1000),
                volume24h: Math.floor(Math.random() * 1000),
                sparkline: gerarSparkline()
            },
            {
                id: 5,
                nome: "Solana",
                sigla: "SOL",
                icone: "https://coin-images.coingecko.com/coins/images/4128/large/solana.png",
                preco: Math.floor(Math.random() * 1000),
                variacao7d: Math.floor(Math.random() * 201) - 100,
                marketCap: Math.floor(Math.random() * 1000),
                volume24h: Math.floor(Math.random() * 1000),
                sparkline: gerarSparkline()
            },
            {
                id: 6,
                nome: "XRP",
                sigla: "XRP",
                icone: "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png",
                preco: Math.floor(Math.random() * 1000),
                variacao7d: Math.floor(Math.random() * 201) - 100,
                marketCap: Math.floor(Math.random() * 1000),
                volume24h: Math.floor(Math.random() * 1000),
                sparkline: gerarSparkline()
            },
            {
                id: 7,
                nome: "Dogecoin",
                sigla: "DOGE",
                icone: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png",
                preco: Math.floor(Math.random() * 1000),
                variacao7d: Math.floor(Math.random() * 201) - 100,
                marketCap: Math.floor(Math.random() * 1000),
                volume24h: Math.floor(Math.random() * 1000),
                sparkline: gerarSparkline()
            },
            {
                id: 8,
                nome: "Cardano",
                sigla: "ADA",
                icone: "https://coin-images.coingecko.com/coins/images/975/large/cardano.png",
                preco: Math.floor(Math.random() * 1000),
                variacao7d: Math.floor(Math.random() * 201) - 100,
                marketCap: Math.floor(Math.random() * 1000),
                volume24h: Math.floor(Math.random() * 1000),    
                sparkline: gerarSparkline()
            },
            {
                id: 9,
                nome: "Avalanche",
                sigla: "AVAX",
                icone: "https://coin-images.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png",
                preco: Math.floor(Math.random() * 1000),
                variacao7d: Math.floor(Math.random() * 201) - 100,
                marketCap: Math.floor(Math.random() * 1000),
                volume24h: Math.floor(Math.random() * 1000),
                sparkline: gerarSparkline()
            },
            {
                id: 10,
                nome: "Polkadot",
                sigla: "DOT",
                icone: "https://coin-images.coingecko.com/coins/images/12171/large/polkadot.png",
                preco: Math.floor(Math.random() * 1000),
                variacao7d: Math.floor(Math.random() * 201) - 100,
                marketCap: Math.floor(Math.random() * 1000),
                volume24h: Math.floor(Math.random() * 1000),
                sparkline: gerarSparkline()
            },
        ],
    };
};

const randomEntre = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomDecimal = (min, max) => {
    return Number((Math.random() * (max - min) + min).toFixed(2));
};

const gerarSparkline = (quantidade = 12, min = 15, max = 40) => {
    return Array.from({ length: quantidade }, () => randomEntre(min, max));
};