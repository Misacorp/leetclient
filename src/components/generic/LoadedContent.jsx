import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import apiRequest from '../../services/apiRequest';

/**
 * Wrapper for components that require data to be loaded from a remote location.
 * Handles loading the required data and keeping the user informed of what is happening.
 * Displays an error and a retry button if fetching fails.
 * @prop {string}   url          URL to fetch data from.
 * @prop {string}   errorMessage Message to display in case of an error.
 * @prop {function} children     Component to render with the loaded data.
 */
const LoadedContentStructure = ({ url, errorMessage, children, className }) => {
  const [data, setData] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  /**
   * Fetch data from the given url.
   */
  const fetchData = useCallback(async () => {
    try {
      setFetchError(null);
      const response = await apiRequest(url);
      setData(response);
    } catch (err) {
      setFetchError(err);
    }
  }, [url]);

  // Get organisation data
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (data) {
    // Pass the loaded data to this component's children.
    // Styles defined in this component should not be rendered as all elements here are no longer necessary.
    return children(data);
  }

  // When data is unavailable, either render...
  let content = null;

  if (!data) {
    if (fetchError) {
      content = (
        <p>
          {errorMessage} ({fetchError})
        </p>
      );
    } else {
      content = <p>Loading...</p>;
    }
  }

  return <div className={className}>{content}</div>;
};

const LoadedContent = styled(LoadedContentStructure)``;

LoadedContentStructure.propTypes = {
  url: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default LoadedContent;
