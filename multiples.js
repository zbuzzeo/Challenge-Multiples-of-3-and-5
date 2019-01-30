/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number (Number of multiples)
 * @return {Number}
 */

exports.sumOfAMultiple = (n) => {
  multiples = [];

  for (let i = 1; i < n; i++) {    
    i % 15 === 0 ? multiples.push(i)
    : i % 5 === 0 ? multiples.push(i)
    : i % 3 === 0 ? multiples.push(i)
    : console.log(`${i} is not a multiple of 3 or 5.`);
  }

  const sumMultiples = multiples.reduce((sum, x) => {
    console.log(`adding ${x} to ${sum}`);
    return sum += x;
  }, 0);

  return sumMultiples;
}
