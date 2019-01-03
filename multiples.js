/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number (Number of multiples)
 * @return {Number}
 */

// make a helper function getMultiples( multiplesOf, multiplesUpTo ); call this to get multiples of 3 and 5 up to 10.
// store both groups of multiples in an array together.
// loop through every item in that array and add them up.
// store the total as sum and return it.

exports.sumOfAMultiple = function (n) {
    let sum = 0;
    const combinedMults = [  ];
    const getMultiples = ( multiplesOf, multiplesUpTo ) => {
        const numIterations = Math.floor ( multiplesUpTo / multiplesOf );
        let origMult = multiplesOf;
        let mults = [  ];
        // this may be looping too many times. should only loop 3 times to find 3 multiples of 3 below 10.
        // if we divide multiplesUpTo by multiples Of ( 10 / 3 ) and take the Math.floor of that number then we can loop the correct amount of times. May be a simpler way though.
        // 10 / 3 = 3.333333 and the Math.floor will have it loop 3 times. getMultiples( 3, 10 ) should return [ 3, 6, 9 ];
        /*
        const numIterations = Math.floor ( multiplesUpTo / multiplesOf );
        for ( let i = 0; i < numIterations; i++ ) {
            // . . .

        }
        */
        for ( let i = 0; i < numIterations; i++ ) {
            console.log( `origMult is: ${ origMult }\n multiplesOf is: ${ multiplesOf }` );
            mults.push( multiplesOf += origMult );
            combinedMults.concat( mults );
            // return mults;
            // only goes up to 6.
            return `origMult is: ${ origMult }\n multiplesOf is: ${ multiplesOf }`;
        }
    }

    // getMultiples( 3, n );
    // getMultiples( 5, n );

    for ( let i = 0; i < combinedMults; i++ ) {
        if ( !combinedMults[i - 1] ) {
            sum += ( combinedMults[i - 1] + combinedMults[i] );
        }
    }
    return sum;

};
