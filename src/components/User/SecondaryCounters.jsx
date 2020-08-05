import styled from 'styled-components/macro';

import Count from './Counter/Count';

/**
 * Leeb and failed leet counter container.
 */
const SecondaryCounters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.palette.secondary.light};

  ${Count} {
    padding-bottom: 0.5rem;
  }
`;

export default SecondaryCounters;
