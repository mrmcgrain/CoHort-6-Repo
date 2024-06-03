describe('addSum', () => {
  it('should return the sum of two positive numbers', () => {
    assert.strictEqual(addSum(2, 3), 5);
  });

  it('should return the sum of a positive and a negative number', () => {
    assert.strictEqual(addSum(2, -3), -1);
  });

  it('should return the sum of two negative numbers', () => {
    assert.strictEqual(addSum(-2, -3), -5);
  });

  it('should return the sum of zero and a number', () => {
    assert.strictEqual(addSum(0, 5), 5);
  });

  it('should return the sum of a number and zero', () => {
    assert.strictEqual(addSum(5, 0), 5);
  });
});describe('addSum', () => {
  it('should return the sum of two positive numbers', () => {
    assert.strictEqual(addSum(2, 3), 5);
  });

  it('should return the sum of a positive and a negative number', () => {
    assert.strictEqual(addSum(2, -3), -1);
  });

  it('should return the sum of two negative numbers', () => {
    assert.strictEqual(addSum(-2, -3), -5);
  });

  it('should return the sum of two decimal numbers', () => {
    assert.strictEqual(addSum(2.5, 3.7), 6.2);
  });

  it('should return NaN if either argument is not a number', () => {
    assert.strictEqual(isNaN(addSum('2', 3)), true);
    assert.strictEqual(isNaN(addSum(2, '3')), true);
    assert.strictEqual(isNaN(addSum('2', '3')), true);
  });
});