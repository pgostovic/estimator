import { Selector } from 'testcafe';

/* global fixture */

fixture`Happy path: everything is as expected`
  .page`../dist/index.html`;

const yearSelect = Selector('select[name=year]');
const makeSelect = Selector('select[name=make]');
const modelSelect = Selector('select[name=model]');
const trimSelect = Selector('select[name=trim]');
const mileageInput = Selector('input[name=mileage]');
const nameInput = Selector('input[name=name]');
const emailInput = Selector('input[name=email]');
const phoneInput = Selector('input[name=phone]');

test('short form', async t => {
  await t.click('#go');

  await t.expect(Selector('.empty-details').exists).ok();
  await t.expect(Selector('.details').exists).notOk();

  await t.expect(nameInput.exists).notOk();
  await t.expect(emailInput.exists).notOk();
  await t.expect(phoneInput.exists).notOk();

  await t.click(yearSelect).click(yearSelect.find('option').nth(1));
  await t.click(makeSelect).click(makeSelect.find('option').nth(1));
  await t.click(modelSelect).click(modelSelect.find('option').nth(1));
  await t.click(trimSelect).click(trimSelect.find('option').nth(1));
  await t.typeText(mileageInput, '100000');

  await t.click('.calculateButton');

  await t.expect(Selector('.empty-details').exists).notOk();
  await t.expect(Selector('.details').exists).ok();
});


test('long form', async t => {
  await t.click('#go-long');

  await t.expect(Selector('.empty-details').exists).ok();
  await t.expect(Selector('.details').exists).notOk();

  await t.expect(nameInput.exists).ok();
  await t.expect(emailInput.exists).ok();
  await t.expect(phoneInput.exists).ok();

  await t.click(yearSelect).click(yearSelect.find('option').nth(1));
  await t.click(makeSelect).click(makeSelect.find('option').nth(1));
  await t.click(modelSelect).click(modelSelect.find('option').nth(1));
  await t.click(trimSelect).click(trimSelect.find('option').nth(1));
  await t.typeText(mileageInput, '100000');
  await t.typeText(nameInput, 'Esteban Coche');
  await t.typeText(emailInput, 'esteban.coche@gmail.xyz');
  await t.typeText(phoneInput, '5551234567');

  await t.click('.calculateButton');

  await t.expect(Selector('.empty-details').exists).notOk();
  await t.expect(Selector('.details').exists).ok();
});
