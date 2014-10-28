// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

var hasClass = function(node, className) {
  
  // Patrick's way more clunker method:

  // var classCheck = function (node, className) {
  //   console.log(node.classList);
  //   if (node.classList > 0) {
  //     var classlist = node.classList;
  //     for (var i = 0; i < classlist.length; i++) {
  //       if (classlist[i] == className) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     }
  //   }
  
  var classlist = node.className.split(" ");
  return classlist.indexOf(className) >= 0;
};

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  
  // create a results array
  var results = [];

  // start with some kind of node
  node = node || document.body;

  // check if the node has the appropriate className
  if ( hasClass(node, className)) {
    // if it does, add it to the results array
    results.push(node);
  }
      
  // check if the node has any children 
  //why do we actually need the if here?
  if ( node.children ) {
    //if it does, we loop through the children
    for (var i = 0; i < node.children.length; i++) {
      // for each of the children, we invoke the function, passing in each of them
      results = results.concat(getElementsByClassName(className, node.children[i]))
      // at that point, add the return value into the results array
    }
  }  
      
  // finish by returning results array
  return results;

};

