import { promiseTimeout } from '../promise';


const makePromise = (delay, shouldReject = false) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldReject) {
      reject(new Error('no'));
    } else {
      resolve('yes');
    }
  }, delay);
});

test('no timeout resolve', async () => {
  const result = await promiseTimeout(100, makePromise(1));
  expect(result).toBe('yes');
});

test('no timeout reject', async () => {
  try {
    await promiseTimeout(100, makePromise(1, true));
  } catch (err) {
    expect(err.message).toBe('no');
  }
});

test('timeout resolve', async () => {
  try {
    await promiseTimeout(100, makePromise(500));
  } catch (err) {
    expect(err.message).toBe('timeout');
  }
});

test('timeout reject', async () => {
  try {
    await promiseTimeout(100, makePromise(500, true));
  } catch (err) {
    expect(err.message).toBe('timeout');
  }
});
