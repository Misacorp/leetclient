import styled from 'styled-components/macro';

import { Link as RouterLink } from 'react-router-dom';

/**
 * Styled Link component;
 */
const Link = styled(RouterLink)`
  &,
  &:visited,
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.primary.light};
  }
`;

export default Link;
