import queryString from 'query-string';

/**
 * Makes a generic API request.
 * @prop {string} url     Target URL
 * @prop {string} method  Request method
 * @prop {object} body    Request body or GET parameters (if applicable)
 */
const apiRequest = async (url, method = 'GET', body) => {
  let finalURL = url;

  // Luodaan Authentication header, johon liitetään JWT.
  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
  });

  // Muodosta pyyntö.
  const request = { method, headers };

  if (method === 'GET' && body !== undefined && body !== null) {
    // Extract the base URL and any existing query parameters from the given URL
    const { url: baseUrl, query: existingQueryParams } = queryString.parseUrl(
      url,
    );

    // Create a query string from the given body and any existing query parameters
    const queryParams = { ...existingQueryParams, ...body };
    const query = queryString.stringify(queryParams, {
      arrayFormat: 'comma',
    });

    // The request is sent to the previously extracted baseUrl since url itself still contains a query string
    finalURL = `${baseUrl}?${query}`;
  }

  if (
    ['POST', 'PATCH'].includes(method) &&
    body !== undefined &&
    body !== null
  ) {
    request.body = JSON.stringify(body);
  }

  // Send the request
  const response = await fetch(finalURL, request);

  // Handle response
  if (response.ok) {
    try {
      const json = await response.json();
      return json;
    } catch (e) {
      // Error parsing response as JSON. Return the response directly.
      return response;
    }
  }

  throw new Error('API call failed');
};

export default apiRequest;
