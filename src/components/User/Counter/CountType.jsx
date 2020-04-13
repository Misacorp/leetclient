import styled from 'styled-components';

const CountType = styled.span`
  display: block;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.sizes[500]};
  line-height: 1em;
`;

export default CountType;
