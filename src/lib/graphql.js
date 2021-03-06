import { promiseTimeout } from './promise';

/**
 * @param {String} query graphql query
 * @param {Object} variables graphql query variables
 *
 * @returns {Promise} graphql response
 */
export default (query, variables) => (
  promiseTimeout(5000, fetch(__APP__.graphql, {
    method: 'POST',
    body: JSON.stringify({ query, variables }),
    headers: {
      'content-type': 'application/json',
    },
  }).then(resp => resp.json()).then(json => json.data))
);
