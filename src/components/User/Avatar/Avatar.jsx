import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UserObject from '../../../types/User/UserObject';

const imageDimensions = {
  x: 150,
  y: 150,
};
const dimensionUnit = 'px';

/**
 * User avatar
 * @prop {UserObject} user User object
 */
const AvatarStructure = ({ user, className }) => {
  return (
    <div className={className}>
      <img
        src={user.avatarUrl}
        alt={`${user.name}'s avatar`}
        width={`${`${imageDimensions.x * 1.5}${dimensionUnit}`}`}
        height={`${`${imageDimensions.y * 1.5}${dimensionUnit}`}`}
      />
    </div>
  );
};

const Avatar = styled(AvatarStructure)`
  position: absolute;
  top: ${`${
    // This calculation is a mess
    imageDimensions.x -
    20 -
    Math.sqrt(imageDimensions.x ** 2 + imageDimensions.y ** 2)
  }${dimensionUnit}`};
  left: 50%;
  width: ${`${imageDimensions.x}${dimensionUnit}`};
  height: ${`${imageDimensions.y}${dimensionUnit}`};

  transform: translateX(-50%) rotate(45deg);
  overflow: hidden;
  border-width: 8px;
  border-style: solid;
  border-top-color: ${({ theme }) => theme.palette.secondary.light};
  border-left-color: ${({ theme }) => theme.palette.secondary.light};
  border-right-color: ${({ theme }) => theme.palette.secondary.main};
  border-bottom-color: ${({ theme }) => theme.palette.secondary.main};
  background-color: ${({ theme }) => theme.palette.primary.main};

  img {
    transform: rotate(-45deg) translateY(-25%);
  }
`;

AvatarStructure.propTypes = {
  user: PropTypes.instanceOf(UserObject),
  className: PropTypes.string,
};

export default Avatar;
