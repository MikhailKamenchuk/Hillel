var complexFunction = function(arg1, arg2) { 
  	return arg1 + arg2;
};
function cache(){
  let cacheObject = {};
  console.log(arguments);
  return (arguments) => {
    console.log(arguments);
    if (arguments in cacheObject){
      console.log('Fetching from cache');
      return console.log(cacheObject);
    } else{
      console.log('Calculating result');
      let result = arguments;
      cacheObject[arguments] = result;
      return result;
    }
  }
}
var cachedFunction = cache(complexFunction);
cachedFunction('foo', 'bar');
cachedFunction('foo', 'bar');
cachedFunction('foo', 'baz');