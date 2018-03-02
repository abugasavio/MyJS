
function bar() {
  function baz() {
    bam = "yay";
  }
}

baz();
console.log(bam); // prints "yay"


var foo = function foobar() {
  return 'test'
}

foo();
foobar();
