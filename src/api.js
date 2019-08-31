import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/",
  params: {}
});

export default {
  tickers: () => api.get("tickers"),
  exchanges: () => api.get("exchanges"),
  coins: () => api.get("coins")
};
