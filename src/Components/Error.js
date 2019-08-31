import React from "react";
import styled from "styled-components";

const Error = styled.span``;

export default ({ error }) => {
  return <Error>{error}</Error>;
};
