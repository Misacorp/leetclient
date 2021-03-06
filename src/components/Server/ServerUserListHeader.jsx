import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const ServerUserListHeaderStructure = ({ className }) => {
  return (
    <div className={className}>
      <span>Name</span>
      <span>Leet count</span>
    </div>
  );
};

ServerUserListHeaderStructure.propTypes = {
  className: PropTypes.string,
};

const ServerUserListHeader = styled(ServerUserListHeaderStructure)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;

  padding: 0.5em 1rem;

  color: ${({ theme }) => theme.palette.secondary.light};
  font-size: ${({ theme }) => theme.typography.sizes[200]};
  text-transform: uppercase;
  font-weight: 600;
`;

export default ServerUserListHeader;
