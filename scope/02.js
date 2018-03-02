var foo = (function () {
  var publicAPI = {
    baz: function () {
      publicAPI.baz
    },
    bam: function () {
      console.log("baz")
    }
  }
  return publicAPI;
})()

console.log(foo)
foo.baz(); /*?*/
