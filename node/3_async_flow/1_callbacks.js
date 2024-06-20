function final(someInput, callback) {
  callback(`${someInput} terminated`);
}

function middleware(someInput, callback) {
  return final(someInput + 1, callback);
}

function initiate() {
  const someInput = 'input';
  middleware(someInput, function (result) {
    console.log(result);
  });
}

initiate()
