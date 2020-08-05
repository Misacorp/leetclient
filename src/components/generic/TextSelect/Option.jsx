import styled from 'styled-components/macro';

/**
 * An option in a TextSelect element.
 */
const Option = styled.button`
  border: none;
  background: transparent;
  font-family: ${({ theme }) => theme.typography.base.fontFamily};
  font-size: ${({ theme }) => theme.typography.sizes[400]};
  color: ${({ theme }) => theme.palette.secondary.lighter};
  cursor: pointer;

  position: relative;
  text-transform: uppercase;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0.5rem;
    right: 0.5rem;
    height: 2px;
    background-color: ${({ theme }) => theme.palette.secondary.lighter};
    transform: scaleX(0);
    transform-origin: left;

    transition: transform 0.2s ease-out;
  }

  &:focus,
  &:active,
  &:hover {
    outline: none;

    ::after {
      transform: scaleX(1);
    }
  }
`;

export default Option;
