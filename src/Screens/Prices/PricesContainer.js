import React from "react";
import api from "../../api";
import PricesPresenter from "./PricesPresenter";

export default class extends React.Component {
  state = { prices: null, error: null, loading: true };
  async componentDidMount() {
    try {
      const { data } = await api.tickers();

      const prices = data.map(price => {
        const {
          name,
          symbol,
          quotes: {
            USD: { price: UsdPrice }
          }
        } = price;

        return {
          name,
          symbol,
          UsdPrice
        };
      });

      this.setState({
        prices
      });
    } catch (error) {
      this.setState({
        error: "Can't find prices information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { prices, loading, error } = this.state;
    return <PricesPresenter props={{ prices, loading, error }} />;
  }
}
