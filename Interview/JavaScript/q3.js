// What will be the output?

for (var i = 1; i <= 5; i++) {
    setTimeout((function () {
      console.log(i);
    }), 0);
  }
  