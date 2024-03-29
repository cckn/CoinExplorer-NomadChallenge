import React from "react";
import api from "../../api";
import CoinsPresenter from "./CoinsPresenter";

export default class extends React.Component {
  state = { coins: null, error: null, loading: true };
  async componentDidMount() {
    try {
      const { data } = await api.coins();

      const coins = data
        .filter(coin => coin.rank !== 0)
        .sort((a, b) => a.rank - b.rank)
        .map(coin => {
          const { rank, name, symbol } = coin;
          return { rank, name, symbol };
        });

      this.setState({
        coins
      });
    } catch (error) {
      this.setState({
        error: "Can't find coins information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { coins, loading, error } = this.state;
    return <CoinsPresenter props={{ coins, loading, error }} />;
  }
}

// export default async () => {

//   return <h2>Coins!</h2>;
// };
