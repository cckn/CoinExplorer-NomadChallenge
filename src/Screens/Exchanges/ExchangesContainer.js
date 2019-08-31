import React from "react";
import api from "../../api";
import ExchangesPresenter from "./ExchangesPresenter";

export default class extends React.Component {
  state = { exchanges: null, error: null, loading: true };
  async componentDidMount() {
    try {
      const { data } = await api.exchanges();

      const exchanges = data.map(exchange => {
        const {
          name,
          description,
          links: { website }
        } = exchange;
        return {
          name,
          description,
          website
        };
      });

      this.setState({
        exchanges
      });
    } catch (error) {
      this.setState({
        error: "Can't find exchanges information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { exchanges, loading, error } = this.state;
    return <ExchangesPresenter props={{ exchanges, loading, error }} />;
  }
}
