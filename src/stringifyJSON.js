// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


//FINAL SOLUTION HERE: https://vimeo.com/user28599195/review/110096079/e581e87b59
var isObject = function(object) {
  return {}.toString.call(object) === '[object Object]'
}

var stringifyJSON = function(obj) {
  if (typeof(obj) === "string") {
    // append quotations on beginning and end
    var stringArray = obj.split('')
    stringArray.unshift('"')
    stringArray.push('"')
    var newString = stringArray.join('')
    return newString; 
  }
  // if obj is [object Array]
  if (isArray(obj)) {
    //
    var string = "["
    //for loop that iterates array
      //recursion or something...
    return string + "]"
  }
  // elsif obj is [object Object]
    //
  // else 
    // return String(obj)
  else {
    return String(obj)
  }
  

};


// function isArray(o) {
//   return Object.prototype.toString.call(o) === '[object Array]';
// }

// Object.prototype.toString.call(o)
