/**
 *
 * @param {helpers}
 * @returns
 *
 * Helpers
 */

/**
 const string = 'word';

 // Option 1
 string.split('');
 
 // Option 2
 [...string];
 
 // Option 3
 Array.from(string);
 
 // Option 4
 Object.assign([], string);
 
 // Result:
 // ['w', 'o', 'r', 'd']
 */

/** ------------------------------------------------------------------------ */

// Given a string s="abcabcbb", find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = (s) => {
  // create a variable to store the length of the longest substring
  let longest = 0;
  // create a variable to store the current substring
  let current = "";
  // loop through the string
  for (let i = 0; i < s.length; i++) {
    // if the current substring does not contain the current character
    if (current.indexOf(s[i]) === -1) {
      // add the current character to the current substring
      current += s[i];
    } else {
      // if the current substring does contain the current character
      // set the current substring to the current character
      current = s[i];
    }
    // if the length of the current substring is greater than the longest substring
    if (current.length > longest) {
      // set the longest substring to the current substring
      longest = current.length;
    }
  }
  // return the length of the longest substring
  return longest;
};

/**
    Implementation of Null Object Pattern
*/

/** ------------------------------------------------------------------------ */

class User {
  constructor(id, name, role) {
    this.id = id;
    this.name = name;
    this.role = role;
  }

  hasAccess() {
    return this.name === "Admin";
  }
}

class NullUser {
  constructor() {
    this.id = 99;
    this.name = "Anonymous";
    this.role = null;
  }

  hasAccess() {
    return false;
  }
}

const users = [
  new User(1, "Zoey", 1),
  new User(2, "Jane", 2),
  new User(3, "Jack", 2),
  new User(4, "Doe", 1),
];

const getUser = (id) => {
  const user = users.find((user) => user.id === id);
  if (user == null) {
    return new NullUser();
  } else {
    return user;
  }
};

const printUser = (id) => {
  const user = getUser(id);
  console.log(
    `User: ${user.name}, Role ${user.role === 1 ? "Admin" : "Guest"}`
  );
  if (user.role === 1) {
    console.log("Access Granted");
  } else if (user.role === 2) {
    console.log("Partial Access");
  } else {
    console.log("Access Denied");
  }
};

printUser(1);
printUser(2);
printUser(3);
printUser(4);
printUser(5);
printUser(99);

/** ------------------------------------------------------------------------ */

/**
 * Implementation of Builder Pattern
 */

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class Person {
  constructor(
    name,
    {
      race,
      age = 27,
      phone = "+2547635352632",
      address = new Address("222", "Default Address"),
    } = {}
  ) {
    this.name = name;
    this.race = race;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

/**
class PersonBuilder {
  constructor(name) {
    this.person = new Person(name);
  }
  setAge(age) {
    this.person.age = age;
    return this;
  }
  setPhone(phone) {
    this.person.phone = phone;
    return this;
  }
  setAddress(address) {
    this.person.address = address;
    return this;
  }
  builder() {
    return this.person;
  }
}

const person = new PersonBuilder("Test")
  .setAge(27)
  .setPhone("254232329862")
  .setAddress(new Address("00232", "Ruiru"))
  .builder();
*/
const person = new Person("Martin", {
  age: 26,
  address: new Address("00100", "Nairobi"),
});
console.log(person);

/** ------------------------------------------------------------------------ */

/**
 * Grading method
 */
const grades = [73, 67, 38, 33];

function gradding(grades) {
  // Write your code here
  for (var i = 0; i < grades.length; i++) {
    let m = 0;
    if (grades[i] >= 38) {
      m = Math.ceil(grades[i] / 5) * 5;
      if (m - grades[i] < 3) {
        console.log("Pass", (grades[i] = m));
      } else {
        console.log("Pass", grades[i]);
      }
    } else {
      console.log("Fail", grades[i]);
    }
  }
  return grades;
}

gradding(grades);

/** ------------------------------------------------------------------------ */

/**
 * There is a large pile of socks that must be paired by color.
 * Given an array of integers representing the color of each sock,
 * determine how many pairs of socks with matching colors there are.
 */

const ar = [1, 2, 3, 4, 2, 3, 2, 2, 2, 1, 5, 6, 7, 5, 6, 7];
const n = 9;
function sockMerchant(n, ar) {
  let x = 0;
  let counts = [];
  let newAr = [];

  for (let i = 0; i < ar.length; i++) {
    x = ar[i];
    counts[x] = counts[x] >= 1 ? counts[x] + 1 : 1;
    //     if (counts[x] >= 1) {
    //       counts[x] = counts[x] + 1;
    //     } else {
    //       counts[x] = 1;
    //     }
    if (counts[x] % 2 === 0) {
      newAr.push(x);
    }
  }
  console.log("newAr =", newAr, "-- length of newAr =", newAr.length);
  return newAr.length;
}

sockMerchant(n, ar);

/** ------------------------------------------------------------------------ */

/**
 * calculate and get the median value of an array of numbers
 */

/** Buble Sort O(n^2) */

//Soln 1

let nums1 = [1, 4],
  nums2 = [8, 9],
  combined = [],
  swapped = false,
  med = 0;

for (let i = 0; i < nums1.length; i++) {
  combined.push(nums1[i]);
}
for (let x = 0; x < nums2.length; x++) {
  combined.push(nums2[x]);
}

for (let p = 0; p < combined.length; p++) {
  swapped = false;
  for (let y = 0; y < combined.length; y++) {
    if (combined[y] > combined[y + 1]) {
      let temp = combined[y];
      combined[y] = combined[y + 1];
      combined[y + 1] = temp;
      swapped = true;
    }
  }
  if (!swapped) {
    break;
  }
}

console.log("combined =", combined);

if (combined.length % 2 === 0) {
  med = (combined[combined.length / 2] + combined[combined.length / 2 - 1]) / 2;
  console.log("med 1 =", med);
} else {
  med = combined[Math.floor(combined.length / 2)];
  console.log("med 2 =", med);
}

// Soln 2

const findMedianSortedArrays = (nums1, nums2) => {
  let newAr = nums1.concat(nums2);
  newAr.sort((a, b) => a - b);
  let median = 0;
  if (newAr.length % 2 === 0) {
    median = (newAr[newAr.length / 2] + newAr[newAr.length / 2 - 1]) / 2;
  } else {
    median = newAr[Math.floor(newAr.length / 2)];
  }
  console.log("median =", median);
  return median;
};

findMedianSortedArrays([2, 5, 6], [4, 7]);

/** ------------------------------------------------------------------------ */

// Given a string s, return the longest palindromic substring in s using big o notation.

const longestPalindrome = (s) => {
  //   let max = 0;
  //   let longest = "";

  //   for (let i = 0; i < s.length; i++) {
  //     let current = s[i];
  //     let currentLength = 1;
  //     for (let j = i + 1; j < s.length; j++) {
  //       if (s[j] === s[i]) {
  //         current += s[j];
  //         currentLength++;
  //       } else {
  //         break;
  //       }
  //     }
  //     for (let x = i - 1; x >= 0; x--) {
  //       if (s[x] === s[i]) {
  //         current = s[x] + current;
  //         currentLength++;
  //       } else {
  //         break;
  //       }
  //     }
  //     if (currentLength > max) {
  //       max = currentLength;
  //       longest = current;
  //     }
  //   }
  //   console.log("longest =", longest);
  //   return longest;
  // };

  /** ---------------------------------------------------------------- */

  //   let str = s.split("");
  //   let longest = "";
  //   for (let i = 0; i < str.length; i++) {
  //     for (let j = i + 1; j < str.length; j++) {
  //       let temp = "";
  //       temp = temp.concat(str[i], str[j]);
  //       let x = i;
  //       let y = j;
  //       while (x > 0 && y < str.length) {
  //         if (str[x] === str[y]) {
  //           temp = temp.concat(str[x], str[y]);
  //           x--;
  //           y++;
  //         } else {
  //           break;
  //         }
  //       }
  //       if (temp.length > longest.length) {
  //         longest = temp;
  //       }
  //     }
  //   }
  //   console.log("longest palindrome =", longest);
  //   return longest;
  // };

  /** ---------------------------------------------------------------- */
  //   let longest = 0;
  //   let longestPalindrome = "";
  //   for (let i = 0; i <= s.length; i++) {
  //     let j = 0;
  //     while (j < s.length) {
  //       let sub = s.substring(i, j);
  //       let rev = sub.split("").reverse().join("");
  //       if (sub === rev) {
  //         if (sub.length >= longest) {
  //           longest = sub.length;
  //           longestPalindrome = sub;
  //         }
  //       }
  //       j++;
  //     }
  //   }
  //   console.log("longest palindrome =", longestPalindrome);
  //   return longestPalindrome;
  // };

  /** ---------------------------------------------------------------- */
  let longest = "",
    longestLength = 0;
  for (let i = 0; i <= s.length; i++) {
    let left = i,
      right = i;
    while (left >= 0 && right <= s.length) {
      if (s[left] === s[right]) {
        if (right - left + 1 > longestLength) {
          longest = s.slice(left, right + 1);
          longestLength = right - left + 1;
        }
      } else {
        break;
      }
      right++;
      left--;
    }
  }
  console.log("longest palindrome =", longest);
  return longest;
};

longestPalindrome("aacabdkacaa");

/** ------------------------------------------------------------------------ */

/**
 * Check if Palindrome
 */

const isPalindrome = (s) => {
  let initVal = s.toString().split("").join("");
  let newVal = s.toString().split("").reverse();
  let reversedVal = newVal.join("");
  console.log("init", initVal, "reversed", reversedVal);
  if (initVal === reversedVal) {
    console.log("True");
    return true;
  } else {
    console.log("False");
    return false;
  }

  /* ----second solnt--- */

  // if (s < 0 || (s % 10 === 0 && s !== 0)) return false;
  // let reverse = 0;
  // let num = s;
  // while (num > reverse) {
  //   reverse = (num % 10) + reverse * 10;
  //   num = parseInt(num / 10);
  // }
  // return num === reverse || num === parseInt(reverse / 10);
};

isPalindrome(02221);

/** ------------------------------------------------------------------------ */

// Palindrom -- string

function solution(inputString) {
    const len = inputString.length;
    for(let i=0; i<=len; i++){
        if(inputString[i] !== inputString[len - 1 - i]){
            return false;
        }
    }
    return true;
}
solution("aabaa")

/** ------------------------------------------------------------------------ */

/**
 * Merge two sorted linked lists, list1 and list2 in a one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 */

function Node(val, next) {
  this.val = val;
  this.next = next;
}
const mergeTwoLists = (list1, list2) => {
  let newList = new Node(null, null);
  let current = newList;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 ? list1 : list2;
  console.log("newList =", newList.next);
  return newList.next;
};

mergeTwoLists([1, 6], [2, 4, 5]);

/** ------------------------------------------------------------------------ */

/** Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid. */

const isValid = (str) => {
  s = [...str];
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(map[s[i]]);
      console.log("stack =", stack, "s[i] =", s[i]);
    } else {
      if (s[i] !== stack.pop()) {
        console.log("false");
        // return false;
      }
      console.log("true");
      // return true;
    }
  }
  return stack.length === 0;
};

isValid("(){}}{");


/** ------------------------------------------------------------------------ */
// Pair of adjacent elements with largest product

function solution(inputArray) {
    const len = inputArray.length;
    let res1=0,
        res2=0,
        num=Number.MIN_SAFE_INTEGER;
    for(let i=0; i<len; i++){
       res1=inputArray[i];
       res2=inputArray[i+1];
       if(res1*res2 > num){
           num = res1*res2;
       }
    }
    return num;
}

solution([3,6,-3,7,4,5,6,2])

/** ------------------------------------------------------------------------ */

// Making array consecutive by counting the missing no of values

function ArrConsecutive(statues) {
    let s=statues.length,
        num=0;
    for(let i=0; i<s; i++){
        for(let x=0; x<s; x++){
            if(statues[x] > statues[x +1]){
                var t = statues[x];
                statues[x] = statues[x+1];
                statues[x+1] = t;
            }
        }        
    }
    for(i=0;i<=statues.length-2;i++){
        num+=(statues[i+1]-statues[i]-1);
    }
    
    return num;
}

ArrConsecutive([4,3,5,6,9,7])



/** ------------------------------------------------------------------------ */

// DB: TEST
// The resulting table should contain one row with a single column: the product with the lexicographically smallest name and highest amount


CREATE PROCEDURE mostExpensive()
BEGIN
	SELECT name FROM Products
    	WHERE (price * quantity) = (SELECT MAX(price * quantity) FROM Products)
	ORDER BY name
    	LIMIT 1;
END


/** ------------------------------------------------------------------------ */

// The resulting table should contain the names of the participants who took the 4th to 8th places inclusive, 
// sorted in descending order of their places.

CREATE PROCEDURE solution()
BEGIN
	SELECT name from leaderBoard
	ORDER BY score DESC
	LIMIT 3,5;
END


/** ------------------------------------------------------------------------ */

/*
The resulting table should contain four columns, weekday, mischief_date, author, and title, 
where weekday is the weekday of mischief_date (0 for Monday, 1 for Tuesday, and so on, with 6 for Sunday). 
The table should be sorted by the weekday column, 
and for each weekday Huey's mischief should go first, Dewey's should go next, and Louie's should go last. In case of a tie, 
mischief_date should be a tie-breaker. If there's still a tie, the record with the lexicographically smallest title should go first.
*/

CREATE PROCEDURE solution()
BEGIN
	SELECT (DAYOFWEEK(mischief_date)+5) % 7 as weekday, mischief_date, author, title
	FROM mischief
	ORDER BY weekday, CASE author WHEN 'Huey' THEN 1 WHEN 'Dewey' THEN 2 WHEN 'Louie' THEN 3 END,
	mischief_date, title ASC;
END


/** ------------------------------------------------------------------------ */

/**
It seems that only the users those attribute was generated by the old version of your special algorithm were affected. 
Such attributes have the following format (accurate to letter cases): 
<one or more arbitrary character>%<first name>_<second name>%<zero or more arbitrary characters>. 
It's your duty now to warn the users that have these attributes about possible risks.
*/

CREATE PROCEDURE solution()
BEGIN
	SELECT * FROM users WHERE attribute LIKE BINARY CONCAT('%_\%%',first_name,'\_',second_name, '%\%%')
	ORDER BY attribute ASC;
END


/** ------------------------------------------------------------------------ */
//check


CREATE PROCEDURE solution()
    SELECT id, IF (given_answer IS NULL, 'no answer', IF(given_answer=correct_answer, "correct", "incorrect")) AS checks
    FROM answers
    ORDER BY id;


/** ------------------------------------------------------------------------ */
