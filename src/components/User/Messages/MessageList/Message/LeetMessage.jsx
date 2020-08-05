import styled from 'styled-components/macro';

/**
 * Leet message
 */
const LeetMessage = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-left-color: ${({ theme }) => theme.palette.primary.light};
`;

export default LeetMessage;
