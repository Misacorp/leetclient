import styled from 'styled-components';

const Label = styled.label`
  color: ${({ theme }) => theme.palette.secondary.light};
  display: block;
  font-size: ${({ theme }) => theme.typography.sizes[200]};
  text-transform: uppercase;
  font-weight: 600;
`;

export default Label;
