import axios from "axios";

const api = axios.create({
    baseURL: "https://api.coingecko.com/api/v3",
});

// Lista fixa das moedas que vamos oferecer no conversor
export const CRIPTOMOEDAS = [
    { id: "bitcoin", sigla: "BTC", nome: "Bitcoin" },
    { id: "ethereum", sigla: "ETH", nome: "Ethereum" },
    { id: "solana", sigla: "SOL", nome: "Solana" },
    { id: "cardano", sigla: "ADA", nome: "Cardano" },
];

export const MOEDAS_FIAT = ["usd", "brl", "eur"];

export async function getCotacoes() {
    const ids = CRIPTOMOEDAS.map((c) => c.id).join(",");
    const vsCurrencies = MOEDAS_FIAT.join(",");

    const response = await api.get("/simple/price", {
        params: {
            ids,
            vs_currencies: vsCurrencies,
        },
    });

    return response.data;
}