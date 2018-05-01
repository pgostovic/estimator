import { Selector } from 'testcafe';

/* global fixture */

fixture`Happy Path - short`
  .page`http://localhost:8080/`;

const yearSelect = Selector('select[name=year]');
const makeSelect = Selector('select[name=make]');
const modelSelect = Selector('select[name=model]');
const trimSelect = Selector('select[name=trim]');
const mileageInput = Selector('input[name=mileage]');

test('My Test', async t => {
  await t.click('#go');

  await t.click(yearSelect).click(yearSelect.find('option').nth(1));
  await t.click(makeSelect).click(makeSelect.find('option').nth(1));
  await t.click(modelSelect).click(modelSelect.find('option').nth(1));
  await t.click(trimSelect).click(trimSelect.find('option').nth(1));
  await t.typeText(mileageInput, '100000');

  await t.click('.calculateButton');

  // await t.takeScreenshot('bubba.png');

  // await t.debug();
});
