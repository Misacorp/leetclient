import styled from 'styled-components/macro';

/**
 * Displays the count number of a message type.
 */
const Count = styled.span`
  display: block;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.sizes[600]};
  line-height: 1em;
`;

export default Count;
