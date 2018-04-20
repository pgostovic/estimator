import graphql from '../../lib/graphql';

export const getEstimate = () => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      low: 10000 + Math.round(Math.random() * 20000),
      high: 10000 + Math.round(Math.random() * 20000) + Math.round(Math.random() * 10000),
    });
  }, Math.round(Math.random() * 1000));
});

export const getEstimateX = (/* year, make, model, trim, mileage */) => graphql(`{

}`);
