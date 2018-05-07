var complexFunction = function(arg1, arg2) { 
  	return arg1 + arg2;
};
function cache(fn){
  let cacheObject = {};
  return (fn, arguments) => {
    let result = fn + arguments;
    if (result in cacheObject){
      console.log('Fetching from cache');
      return cacheObject[result];
    }else{
      console.log('Calculating result');
      cacheObject[result] = result;
      return result;
    }
  }
}
var cachedFunction = cache(complexFunction);
cachedFunction('foo', 'bar');
cachedFunction('foo', 'bar');
cachedFunction('foo', 'baz');
cachedFunction('fo', 'baz');
cachedFunction('foo', 'baz');