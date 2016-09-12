/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;

  // do your work here

  var fibonacciSubset = [1,2];

  var first = 1;
  var second = 2;
  var i = 1;

  while(fibonacciSubset[i] < maxFibValue) {
  	i++;
  	fibonacciSubset[i] = first + second;
  	first = second;
  	second = fibonacciSubset[i];	
  }

  for (var i = 0; i < fibonacciSubset.length; i++) {
  	if (fibonacciSubset[i] % 2 === 0) {
  		sum += fibonacciSubset[i];
  	}
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input
  var fibonacciSubset = [1,2];

  var first = 1;
  var second = 2;
  var i = 1;

  while(fibonacciSubset[i] < maxFibValue) {
  	i++;
  	fibonacciSubset[i] = first + second;
  	first = second;
  	second = fibonacciSubset[i];	
  }
  //do your work here
  if (fibonacciSubset[fibonacciSubset.length -1] > maxFibValue) {
  	fibonacciSubset.pop();
  	highest = fibonacciSubset.pop();
  } else {
	  highest = fibonacciSubset.pop();
  }
  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};