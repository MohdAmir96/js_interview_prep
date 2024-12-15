// .includes pollyfill

if (!Array.prototype.myIncludes) {
  Array.prototype.myIncludes = function (callback) {
    var array = [...this];
    for (var i = 0; i < array.length; i++) {
      if (callback(array[i], i)) {
        return true;
      }
    }
    return false;
  };
}
