import ArrayBufferConverter from '../basic';
import getBuffer from '../app';

test('Загружать данные в буфер', () => {
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(getBuffer());
  expect(bufferConverter.buffer).toEqual(getBuffer());
});

test('Возвращать строку из буфера', () => {
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(getBuffer());
  expect(bufferConverter.toString()).toBe(
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}',
  );
});
