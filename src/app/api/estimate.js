import graphql from '../../lib/graphql';

export const getEstimate = () => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      low: 10000 + Math.round(Math.random() * 20000),
      high: 10000 + Math.round(Math.random() * 20000) + Math.round(Math.random() * 10000),
    });
  }, Math.round(Math.random() * 200));
});

export const createTradeIn = (rooftopId, name, email, phoneNumber, year, makeId, modelId, subModelId, mileageKms) => graphql(`
  mutation(
    $rooftopId: String!,
    $firstName: String!,
    $lastName: String!,
    $email: String!,
    $phoneNumber: String!,
    $year: Int!,
    $makeId: String!,
    $modelId: String!,
    $subModelId: String!,
    $mileage: MileageInput!
  ) {
    tradeInCreate(
      rooftopId: $rooftopId,
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
      phoneNumber: $phoneNumber,
      year: $year,
      makeId: $makeId,
      modelId: $modelId,
      subModelId: $subModelId,
      mileage: $mileage,
      trim: "nothing"
    ) {
      id
    }
  }
`, {
  rooftopId,
  firstName: name,
  lastName: name,
  email,
  phoneNumber,
  year,
  makeId,
  modelId,
  subModelId,
  mileage: { amount: mileageKms, unit: 'km' },
}).then(resp => resp.tradeInCreate);
