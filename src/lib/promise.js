export const promiseTimeout = (ms, promise) => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('timeout'));
  }, ms);
  promise.then(resolve, reject);
});
