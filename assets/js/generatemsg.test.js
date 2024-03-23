const { generateMessage } = require('./generatemsg');

describe('generateMessage', () => {
  test('returns a message containing the sender name for motivation category', () => {
    const senderName = 'John';
    const result = generateMessage('motivation', senderName);
    expect(result).toMatch(new RegExp(`${senderName}$`)); // Checks if senderName is at the end of the message
  });

  test('returns a message containing the sender name for gratitude category', () => {
    const senderName = 'Jane';
    const result = generateMessage('gratitude', senderName);
    expect(result).toMatch(new RegExp(`${senderName}$`));
  });

  test('returns a message containing the sender name for inspiration category', () => {
    const senderName = 'Doe';
    const result = generateMessage('inspiration', senderName);
    expect(result).toMatch(new RegExp(`${senderName}$`));
  });

  test('returns a correctly formatted message for a given category', () => {
    const senderName = 'Alex';
    const categories = ['motivation', 'gratitude', 'inspiration'];
    categories.forEach(category => {
      const result = generateMessage(category, senderName);
      expect(result).toContain(senderName); // Ensures the sender's name is included
      expect(typeof result).toBe('string'); // Ensures the result is a string
      expect(result).toMatch(new RegExp('- ' + senderName + '$')); // Ensures the message format "<message> - <senderName>"
    });
  });

  test('returns a non-empty string', () => {
    const result = generateMessage('motivation', 'Chris');
    expect(result).not.toBe('');
  });

});
