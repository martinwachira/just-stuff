
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
