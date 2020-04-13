import styled from 'styled-components';

/**
 * Failed leet message
 */
const FailedLeetMessage = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main}33;
  border-left-color: ${({ theme }) => theme.palette.primary.light}33;
`;

export default FailedLeetMessage;
