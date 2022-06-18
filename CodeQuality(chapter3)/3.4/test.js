it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});
// Ошибка: Три теста написаны как один, а должны быть выполнены по одному.
// Стоит создать descripte и поместить каждый вызов функции в it