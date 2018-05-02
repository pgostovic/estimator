import { makeEnum } from '../enum';

test('array enum', () => {
  const en = makeEnum('ONE', 'TWO', 'THREE');
  expect(en.ONE).toBe('ONE');
  expect(en.TWO).toBe('TWO');
  expect(en.THREE).toBe('THREEx');
});

test('object enum', () => {
  const en = makeEnum({
    ONE: 'UNO',
    TWO: 'DOS',
    THREE: 'TRES',
  });
  expect(en.ONE).toBe('UNO');
  expect(en.TWO).toBe('DOS');
  expect(en.THREE).toBe('TRES');
});

test('changing enum throws', () => {
  const en = makeEnum('ONE', 'TWO', 'THREE');
  expect(() => {
    en.ONE = 'SEVEN';
  }).toThrow();

  expect(() => {
    en.FOUR = 'FOUR';
  }).toThrow();
});
