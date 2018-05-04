const a = window.document.createElement('a');

export const parseUrl = url => {
  a.href = url || '';
  const {
    hash, host, hostname, href, origin, pathname, port, protocol, search,
  } = a;
  const params = {};
  search.split(/[&?]/).filter(x => !!x).forEach(nvp => {
    const [n, v] = nvp.split('=');
    params[n] = v;
  });
  return {
    hash, host, hostname, href, origin, pathname, port, protocol, search, params,
  };
};
