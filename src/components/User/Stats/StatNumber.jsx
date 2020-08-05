import styled from 'styled-components/macro';

/**
 * Number of a StatTracker
 */
const StatNumber = styled.span`
  margin-right: 0.5rem;
  font-size: ${({ theme }) => theme.typography.sizes[600]};
  color: ${({ theme }) => theme.palette.secondary.light};
  line-height: 1em;
`;

export default StatNumber;
