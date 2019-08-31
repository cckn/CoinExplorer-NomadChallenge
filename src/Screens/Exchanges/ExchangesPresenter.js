import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";

const Container = styled.header``;

const Title = styled.title``;

const List = styled.ol``;

const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 30px;
  }
`;
const Name = styled.span`
  font-weight: 700;
`;
const Paragraph = styled.p`
  margin-top: 15px;
`;
const StyledLinks = styled.ul`
  margin-top: 15px;
`;
const StyledLink = styled.li``;

const ExchangesPresenter = class extends React.Component {
  render() {
    const {
      props: { exchanges, loading, error }
    } = this.props;

    return (
      <Container>
        <Title>Prices!</Title>
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error={error} />
        ) : (
          <List>
            {exchanges.map((exchange, idx) => {
              const { name, description, website } = exchange;
              const SIMPLE_DESC_LENGTH = 100;
              const simpleDesc =
                typeof description === "string" &&
                description.length > SIMPLE_DESC_LENGTH
                  ? description.slice(0, SIMPLE_DESC_LENGTH).trim() + "..."
                  : description;

              return (
                <Item key={idx}>
                  <Name>{name}</Name>
                  <Paragraph> {simpleDesc}</Paragraph>
                  <StyledLinks>
                    {website.map((link, idx) => (
                      <StyledLink key={idx}>
                        <a href={link}>{link}</a>
                      </StyledLink>
                    ))}
                  </StyledLinks>
                </Item>
              );
            })}
          </List>
        )}
      </Container>
    );
  }
};

ExchangesPresenter.propTypes = {
  props: PropTypes.shape({
    exchanges: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        website: PropTypes.arrayOf(PropTypes.string).isRequired
      })
    ),

    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  })
};

export default ExchangesPresenter;
