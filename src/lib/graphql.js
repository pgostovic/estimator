
export default (query, variables) => (
  fetch(__APP__.graphql, {
    method: 'POST',
    body: JSON.stringify({ query, variables }),
    headers: {
      'content-type': 'application/json',
    },
  }).then(resp => resp.json()).then(json => json.data)
);
