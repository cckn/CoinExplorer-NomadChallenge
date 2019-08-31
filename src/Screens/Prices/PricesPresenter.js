import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";

const Container = styled.header``;

const Title = styled.title``;

const List = styled.ol``;

const Item = styled.li``;

const PricesPresenter = class extends React.Component {
  render() {
    const {
      props: { prices, loading, error }
    } = this.props;

    return (
      <Container>
        <Title>Exchanges!</Title>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error={error} />
        ) : (
          <List>
            {prices.map((price, idx) => {
              const { name, symbol, UsdPrice } = price;
              return (
                <Item key={idx}>
                  {name} / {symbol} : ${UsdPrice}
                </Item>
              );
            })}
          </List>
        )}
      </Container>
    );
  }
};

PricesPresenter.propTypes = {
  props: PropTypes.shape({
    prices: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        symbol: PropTypes.string.isRequired,
        UsdPrice: PropTypes.number.isRequired
      })
    ),

    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  })
};

export default PricesPresenter;
