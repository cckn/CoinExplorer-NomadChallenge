import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ErrorSpan = styled.span``;

const Error = ({ error }) => {
  return <ErrorSpan>{error}</ErrorSpan>;
};

Error.propTypes = {
  error: PropTypes.string.isRequired
};

export default Error;
