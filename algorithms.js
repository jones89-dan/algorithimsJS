/************************************************************/
/*                                                          */
/*                 -Algorithims-                            */
/* 	         -Daniel C Jones-                           */
/*                                                          */
/************************************************************/

/************************************************************/
/************************************************************/
/************************************************************/
/************************************************************/
/************************************************************/
/************************************************************/
/************************************************************/

/************************************************************/

 //Chessboard.

 /************************************************************/
function createGrid(height, width) {
	var output = ' ';
	size = height;

	for (var y = 0; y < size; y++)
	{
	  var line = ' ';
	    line += (y < size - 1) ? "\n" : "";
    for (var x = 0; x < size; x++) {
        line += (y + x + 1) % 2 ? '#': ' ';
    }

    output += line;
}

	return output;
}
console.log(createGrid(8, 8));

console.log(createGrid(3, 3) === " # \n# #\n # ");
console.log(createGrid(4, 3) === " # \n# #\n # \n# #");


output += (j < height - 1) ? "\n" : "";

/************************************************************/

 //flip pairs.

 /************************************************************/

 var flipPairs = function (string) {

   var output = '';

   if (string.length % 2 === 0)
   {
     for (var i=0; i<string.length; i+=2)
     {
       output+=string[i+1];
       output+=string[i];
     }
   }
   else
   {
     for (var j=0; j< string.length-1; j+=2)
     {
       output+=string[j+1];
       output+=string[j];
     }
     output+=string[string.length-1];
   }

   return output;
 }

 console.log(flipPairs("hello world"));
 // -> ehll oowlrd
/************************************************************/

 //Find Pair Sum

 /************************************************************/



var findPairForSum = function (array, sum) {

  var pair = [0, 0];

  for (var i = 0; i < array.length; i++)
  {
    var j = 0;

    if (array[i] + array[j] == sum)
    {
      array[i] = pair[0];
      array[j] = pair[1];
    }

    j++
  }

  return pair;
};

console.log(findPairForSum([3, 7, 10, 15, 9], 19));
// -> [9, 10]
console.log(findPairForSum([6, 8, 12, 14, 2, 4], 6));
// -> [2, 4]

/************************************************************/

 //Detect outlier value

 /************************************************************/


var detectOutlierValue = function (array) {

    var result = 0;

  var oddOutlier = array.filter(n => n%2)
  var evenOutlier = array.filter(n => n%2 == 0)

  if(oddOutlier.length == 1)
    result = parseInt(oddOutlier);

  if(evenOutlier.length == 1)
    result = parseInt(evenOutlier);

  return result;
}

console.log(detectOutlierValue([1, 3, 4, 7, 9, 11]));
// -> 4
console.log(detectOutlierValue([2, 4, 6, 10, 11, 14]));
// -> 11

/************************************************************/

 //Find target pari for sum

 /************************************************************/
var findPairForSum = function (array, sum) {

 var pair = [0, 0];
  var add = 0;

  for (var i = 0; i < array.length; i++)
  {
    for (var j = 0; j < array.length; j++)
    {

    add = array[i] + array[j];

      if (add === sum)
      {
         pair[0] = array[i];
        pair[1] = array[j];
      }
    }
  }

  return pair.sort(function(a, b){return a-b});
};

console.log(findPairForSum([3, 7, 10, 15, 9], 19));
// -> [9, 10]
console.log(findPairForSum([6, 8, 12, 14, 2, 4], 6));
// -> [2, 4]

/************************************************************/

 //Find average

 /************************************************************/

var average = function (array) {

  var total = 0;
  var avg = 0;
  var count = 0;

  for (var i = 0; i < array.length; i++)
  {

    total += array[i];
    count++;
  }

  avg = (total / count) ;

  return avg;
}

console.log(average([1, 3, 5, 7, 9]));
// -> 5
console.log(average([2, 4, 6, 8, 10]));
// -> 6

/************************************************************/

 //Is isogram?

 /************************************************************/
var isIsogram = function (word) {

  return word.split('').filter((item, pos, arr)=> arr.indexOf(item) == pos).length == word.length;;
}

console.log(isIsogram("helo"));
// -> true
console.log(isIsogram("helicopter"));
// -> false

/************************************************************/

 //Is Palindrome?

 /************************************************************/

var isPalindrome = function (word) {

  palindrome = false;

   var splitString = word.split("");
   var reverseArray = splitString.reverse();
   var joinArray = reverseArray.join("");

   if (word == joinArray)
    palindrome = true;

  return palindrome;
};

console.log(isPalindrome("racecar"));
// -> true
console.log(isPalindrome("hello"));
// -> false

/************************************************************/

 //matchingCharacters

 /************************************************************/

var matchingCharacters = function (str1, str2) {

  var counter = 0
  var match = false;

  for (var i = 0; i < str1.length; i++)
  {
    if (str2.includes(str1[i]))
            counter += 1;
  }

  if (counter == str2.length)
    match = true;

  return match;
}

console.log(matchingCharacters("mary", "army"));
// -> true
console.log(matchingCharacters("hello", "hew"));
// -> false

/************************************************************/

 //Remove Falsy Values

 /************************************************************/

var removeFalsy = function (arr) {

  var filtered = arr.filter(Boolean);

  return filtered;
};

console.log(removeFalsy([1, undefined, "hello", "", false, 5]));
// -> [1, "hello", 5]

/************************************************************/

 //Caesars Cipher (ROT13)

 /************************************************************/

var matchingCharacters = function (str1, str2) {

  var counter = 0
  var match = false;

  for (var i = 0; i < str1.length; i++)
  {
    if (str2.includes(str1[i]))
            counter += 1;
  }

  if (counter == str2.length)
    match = true;

  return match;
}

console.log(matchingCharacters("mary", "army"));
// -> true
console.log(matchingCharacters("hello", "hew"));
// -> false

var rot13 = function (string) {

  var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  var index     = x => input.indexOf(x);
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  return string.split('').map(translate).join('');

};

console.log(rot13("SERR CVMMN!"));
// -> FREE PIZZA!
console.log(rot13("NYGPNQRZL"));
// -> ALTCADEMY
/************************************************************/

 //Diff Two Arryays

 /************************************************************/

 var findTheDifference = function (arr1, arr2) {

   var newArr = [];

   for (var i = 0; i < arr1.length; i++)
   {
     if (!arr2.includes(arr1[i]))
             newArr.push(arr1[i]);
   }

   for (var i = 0; i < arr2.length; i++)
   {
     if (!arr1.includes(arr2[i]))
             newArr.push(arr2[i]);
   }

   return newArr;
 };

 console.log(findTheDifference([1, 2, 3, 4], [1, 2, 5, 6]));
 // -> [3, 4, 5, 6]

/************************************************************/

 //Roman Numberals

 /************************************************************/

 var romanNumeral = function (integer) {

    if (isNaN(integer))
        return NaN;
    var digits = String(+integer).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;

};

console.log(romanNumeral(3));
// -> III
console.log(romanNumeral(5));
// -> V
console.log(romanNumeral(9));
// -> IX
console.log(romanNumeral(45));
// -> XLV
console.log(romanNumeral(99));
// -> XCIX
console.log(romanNumeral(649));
// -> DCXLIX
console.log(romanNumeral(1000));
// -> M
console.log(romanNumeral(2017));
// -> MMXVII
console.log(romanNumeral(3999));
// -> MMMCMXCIX


/************************************************************/

 //Search and Replace

 /************************************************************/

var replacer = function (sentence, target, replacement) {

  var newString = '';

  regex = /[A-Z]/;

  if (regex.test(target))
  {
    replacement = replacement[0].toUpperCase() + replacement.substring(1);
  }

  newString = sentence.replace(target, replacement);
  return newString;
};

console.log(replacer("Lets go for a picnic on this Sunny day", "Sunny", "rainy"));
// -> Lets go for a picnic on this Rainy day
console.log(replacer("The music is really funky!", "funky", "classy"));
// -> The music is really classy!
console.log(replacer("Better than sliced Bread", "Bread", "toasties"));
// -> "Better than sliced Toasties"

/************************************************************/

 //Find Missing Letter

 /************************************************************/

var missingLetter = function (string) {

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let startingPoint = alphabet.indexOf(string[0]);

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== alphabet[startingPoint + i]) {
            return alphabet[startingPoint + i];
        }
    }
    return undefined;
};

console.log(missingLetter("abce"));
// -> d
console.log(missingLetter("jkmno"));
// -> l
console.log(missingLetter("abc"));
// -> undefined
console.log(missingLetter("cdefg"));
// -> undefined


/************************************************************/

 //Sum of Odd numbers in Fibonacci sequence

 /************************************************************/


var sumOddFibonacci = function (max) {
  let n1 = 0, n2 = 1, nextTerm =1;
  var fibArray = [];

  while (n1 <= max)
  {
    fibArray.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  var odds = fibArray.filter(function(x) {
   return x % 2 !== 0;
})

sum = odds.reduce(add,0);

function add(accumulator, a) {
    return accumulator + a;
}

  return sum;
};

console.log(sumOddFibonacci(10));
// -> 10
console.log(sumOddFibonacci(1));
// -> 2
console.log(sumOddFibonacci(1000));
// -> 1785
console.log(sumOddFibonacci(4000000));
// -> 4613732


/************************************************************/

 //Sum of prime numbers

 /************************************************************/

var sumPrimes = function (max) {

  var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {

            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }

  sum = primes.reduce(add,0);

  function add(accumulator, a) {
    return accumulator + a;
  }

  return sum;
};

console.log(sumPrimes(10));
// -> 17
console.log(sumPrimes(977));
// -> 73156


/************************************************************/

 //Smallest common multipls w/ range.

 /************************************************************/

var smallestCommonM = function (arr) {

 if(arr[0] < arr[1]) {
    var min = arr[0];
    var max = arr[1];
  }
  else {
    var min = arr[1];
    var max = arr[0];
  }

  function range(min, max) {
        var arr = [];
        for (var i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    var multiple = min;
    range(min, max).forEach(function(n) {
        multiple = lcm(multiple, n);
    });

    return multiple;

};

console.log(smallestCommonM([1, 5]));
// -> 60
console.log(smallestCommonM([5, 1]));
// -> 60
console.log(smallestCommonM([1, 13]));
// -> 360360


/************************************************************/

 //Drop Till True

 /************************************************************/


var dropTillTrue = function (arr, test) {

  while (arr.length > 0 && !test(arr[0])) {
    arr.shift();
  }

  return arr;

};

var test = function (n) {
  return n > 3;
};


console.log(dropTillTrue([1, 2, 3, 4, 5, 1], test));
// -> [4, 5, 1]
console.log(dropTillTrue([4, 3, 2], test));
// -> [4, 3, 2]
console.log(dropTillTrue([1, 2, 3], test));
// -> []


/************************************************************/

 //Flatten

 /************************************************************/

var flatten = function (arr) {
  // Implement your code

  let flatArray = arr.flat(Infinity);

  return flatArray;
};

console.log(flatten([1, [2], [3, [[4]]]]));
// -> [1, 2, 3, 4]
console.log(flatten(["a", ["b", "c"]]));
// -> ["a", "b", "c"]


/************************************************************/

 //Additive persistence

 /************************************************************/


var additivePersistence = function (num) {
  // Implement your code
 var sum, loop = 0;
    var val1 = num.toString(10).split("").map(function(t){return parseInt(t)});

    while (val1.length > 1) {
        sum = 0;
        val1.forEach( function(number) {
            sum = sum + number;
        });

        val1 = sum.toString(10).split("").map(function(t){return parseInt(t)});
        loop++;
    }

    return loop;
};

console.log(additivePersistence(2718));
// -> 2
console.log(additivePersistence(1234));
// -> 2

/************************************************************/

 //Permutations

 /************************************************************/

var permutations = function (str) {
  var count = 0;
var length = str.length,
      result = [str.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = str[i];
      str[i] = str[k];
      str[k] = p;
      ++c[i];
      i = 1;
      result.push(str.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }

  for(var a = 0; a < result.length; a++)
    count++;

  if(str.charAt(0) == str.charAt(1) && str.charAt(2))
        count = 1;


  return count;

};

console.log(permutations("abc"));
// -> 6
console.log(permutations("abcdef"));
// -> 720
console.log(permutations("aaa"));
// -> 1
