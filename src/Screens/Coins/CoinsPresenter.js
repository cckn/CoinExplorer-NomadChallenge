import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.header``;

const Title = styled.title``;

const List = styled.ol``;
const Item = styled.li``;
const Rank = styled.span`
  font-weight: 600;
`;

const CoinPresenter = ({ coins, loading, error }) => (
  <Container>
    <Title>Coins!</Title>
    {loading ? (
      <Loader />
    ) : (
      <List>
        {coins.map((coin, idx) => (
          <Item key={idx}>
            <Rank>#{coin.rank}</Rank> {coin.name} / {coin.symbol}
          </Item>
        ))}
      </List>
    )}
  </Container>
);

CoinPresenter.propTypes = {
  coins: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default CoinPresenter;
