// let myCollection = [
//     {
//       name: "School of Code mug",
//       count: 1,
//       whatILike: "It has my cute pixel character on it!"
//     },
//     {
//       name: "School of Code hat",
//       count: 2,
//       whatILike: "An often overlooked fashion accessory"
//     },
//     {
//       name: "School of Code pillow",
//       count: 1,
//       whatILike: "Eat. Sleep. Code. Repeat :)"
//     }
//   ];

import myCollection from "./collection.js";

//   console.log(myCollection);

  function describeItem (item) {
    if (item.count === 1) {
        console.log(`I have a ${item.name}. Here's what I like about it: ${item.whatILike}`)
    } else {
        console.log(`I have ${item.count} ${item.name}s. Here's what I like about them: ${item.whatILike}`)
    }
  }

// describeItem(myCollection[0]);

//Task 2d

function describeCollection(array) {
 for (let i=0; i<myCollection.length;i++) {
console.log(describeItem(array[i]))
 }
}

console.log(describeCollection(myCollection));
