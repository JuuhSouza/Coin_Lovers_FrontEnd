export const getRanking = async () => {
    return {
        data: [
            {
                id: 1,
                nome: "Bitcoin",
                sigla: "BTC",
                usuarios: Math.floor(Math.random() * 10000),
            },
            {
                id: 2,
                nome: "Ethereum",
                sigla: "ETH",
                usuarios: Math.floor(Math.random() * 10000),
            },
            {
                id: 3,
                nome: "Solana",
                sigla: "SOL",
                usuarios: Math.floor(Math.random() * 10000),
            },
        ],
    };
};