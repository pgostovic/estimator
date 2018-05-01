import { Selector } from 'testcafe';

/* global fixture */

fixture`Happy Path - long`
  .page`http://localhost:8080/`;

const yearSelect = Selector('select[name=year]');
const makeSelect = Selector('select[name=make]');
const modelSelect = Selector('select[name=model]');
const trimSelect = Selector('select[name=trim]');
const mileageInput = Selector('input[name=mileage]');
const nameInput = Selector('input[name=name]');
const emailInput = Selector('input[name=email]');
const phoneInput = Selector('input[name=phone]');

test('My Test', async t => {
  await t.click('#go-long');

  await t.click(yearSelect).click(yearSelect.find('option').nth(1));
  await t.click(makeSelect).click(makeSelect.find('option').nth(1));
  await t.click(modelSelect).click(modelSelect.find('option').nth(1));
  await t.click(trimSelect).click(trimSelect.find('option').nth(1));
  await t.typeText(mileageInput, '100000');
  await t.typeText(nameInput, 'Esteban Coche');
  await t.typeText(emailInput, 'esteban.coche@gmail.xyz');
  await t.typeText(phoneInput, '5551234567');

  await t.click('.calculateButton');

  // await t.takeScreenshot('bubba.png');

  // await t.debug();
});
