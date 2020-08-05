import styled from 'styled-components/macro';

/**
 * Leeb message
 */
const LeebMessage = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main}80;
  border-left-color: ${({ theme }) => theme.palette.primary.light}80;
`;

export default LeebMessage;
