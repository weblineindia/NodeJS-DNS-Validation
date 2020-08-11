const { isValidDNS } = require('.');

describe('isValidDNS', () => {
  it('it should return true for valid DNS `mail.projectdemo.biz`', async (done) => {
    const validAddress = 'mail.projectdemo.biz';
    const result = await isValidDNS(validAddress);
    expect(result).toBe(true);
    done();
  });
  it('it should return false for invalid DNS `mail.test.in`', async (done) => {
    const invalidAddress = 'mail.test.in';
    const result = await isValidDNS(invalidAddress);
    expect(result).toBe(false);
    done();
  });
});
