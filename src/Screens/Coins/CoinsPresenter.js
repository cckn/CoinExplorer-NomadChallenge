import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";

const Container = styled.header``;

const Title = styled.title``;

const List = styled.ol``;
const Item = styled.li``;
const Rank = styled.span`
  font-weight: 600;
`;

const CoinPresenter = class extends React.Component {
  render() {
    const {
      props: { coins, loading, error }
    } = this.props;

    return (
      <Container>
        <Title>Coins!</Title>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error={error} />
        ) : (
          <List>
            {coins.map((coin, idx) => {
              const { rank, name, symbol } = coin;
              return (
                <Item key={idx}>
                  <Rank>#{rank}</Rank> {name} / {symbol}{" "}
                  {rank === 1 ? "👑" : ""}
                </Item>
              );
            })}
          </List>
        )}
      </Container>
    );
  }
};

CoinPresenter.propTypes = {
  props: PropTypes.shape({
    coins: PropTypes.arrayOf(
      PropTypes.shape({
        rank: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        symbol: PropTypes.string.isRequired
      })
    ),
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  })
};

export default CoinPresenter;
