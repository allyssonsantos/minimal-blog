import React from 'react';
import styled, { withTheme, css } from 'styled-components';

import { Link, Box } from '.';

const Wrapper = styled.footer`
  border: 1px solid #e5e5e5;
  padding: 24px 10px;
  margin: 0;
  margin-top: 62px;

  a + a {
    margin-left: 36px;
  }
`;

const Center = styled.div`
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme: { sizes } }) => css`
    max-width: ${sizes.maxWidth}px;
  `}
`;

const Footer = ({ theme }) => (
  <Wrapper>
    <Center>
      <Box
        as="span"
        color={theme.colors.grays[1]}
        size="0.875rem"
        weight="bold"
        display="inline-block"
      >
        © Feito por Allysson
      </Box>
      <div>
        <Link to="https://www.linkedin.com/in/allyssonsantos/">LinkedIn</Link>
        <Link to="https://twitter.com/_allyssonsantos">Twitter</Link>
        <Link to="https://github.com/allyssonsantos">Github</Link>
      </div>
    </Center>
  </Wrapper>
);

export default withTheme(Footer);
