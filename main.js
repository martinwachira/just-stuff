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

/**
 * Merge two sorted linked lists, list1 and list2 in a one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 */

const mergeTwoLists = (list1, list2) => {
  let newList = { val: null, next: null };
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
  if (list1 == null) {
    current.next = list2;
    list2;
  }
  if (list2 == null) {
    current.next = list1;
    list1;
  }
  console.log("newList =", newList);
  return newList.next;
};

mergeTwoLists([1, 2], [3, 4, 5]);
