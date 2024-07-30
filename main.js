"use strict";
// Question 1: Installation of node and typescript
// Question 2:
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName = "farrukh";
console.log(`Hellow ${personName}, do you want to eat sweet?`);
// Question 3:
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personNAme = "Atif aslam";
console.log(personNAme.toLowerCase());
console.log(personNAme.toUpperCase());
console.log(personNAme.replace(/\b\w/g, (c) => c.toUpperCase()));
// Question 4:
/*Famous Quote: Find a quote from a famous person you admire.
Print the quote and the name of its author. Y
our output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/
console.log(`\n Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”");
console.log("Albert Einstein once said, \"A person who never made a mistake never tried anything new.\"");
// Question 5:
/*Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
Then compose your message and store it in a new variable called message. Print your message.*/
let famous_person = "Albert Einstein";
let message = "once said, “A person who never made a mistake never tried anything new.”";
let completeMessage = famous_person + message;
console.log(completeMessage);
// Question 6:
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
 so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
let personNAME = "\n\t Farrukh shan\t\n";
console.log(personNAME);
let personNAME2 = personNAME.trim();
console.log(personNAME2);
// Question 7 & 8:
/*Number Eight: Write addition, subtraction, multiplication, and division operations that each result
 in the number 8. Be sure to enclose your operations in print statements to see the results.
 You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.

*/
console.log(3 + 5);
console.log(16 - 8);
console.log(16 / 2);
console.log(2 * 4);
// Question 9:
/*Favorite Number: Store your favorite number in a variable.
Then, using that variable, create a message that reveals your favorite number. Print that message.*/
let favoriteNumber = 10;
console.log(`\n this number ${10} is my favorite number`);
// Question 10:
/*Adding Comments: Choose two of the programs you’ve written, and
add at least one comment to each. If you don’t have anything specific to write
because your programs are too simple at this point, just add your name and the current date
 at the top of each program file. Then write one sentence describing what the program does.*/
// name = farrukh
// date =-----
//store the number 10 into favoriteNumber variable and then print it by console.log command
// let favoriteNumber:number = 10;
//console.log(`this number ${10} is my favorite number`);
// Question 11:
/*Names: Store the names of a few of your friends in a array called names.
 Print each person’s name by accessing each element in the list, one at a time.*/
let names = ["farrukh", "shan", "ali"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
;
// Question 12:
/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be personalized
with the person’s name.*/
let names2 = ["farrukh", "shan", "ali"];
let messages1 = "please join us at anarkali sharp 9pm";
for (let i = 0; i < names2.length; i++) {
    console.log(names2[i], messages1);
}
;
// Question 13:
/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
let favtransp = ["honda70", "honda125", "YR"];
for (let i = 0; i < favtransp.length; i++) {
    console.log("i would like to own a", favtransp[i]);
}
// Question 14:
/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */
let Guest = ["shan", "ali", "ahmed"];
for (let i = 0; i < Guest.length; i++) {
    console.log("I would like to invite you", Guest[i], "at dinner");
}
// Question 15:
/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite. */
console.log("Mr", Guest[0], "rejected our invitation due to some reason");
let absentguest = "shan";
let newguest = "adil";
absentguest = newguest;
for (let i = 0; i < Guest.length; i++) {
    console.log("I would like to invite you", Guest[i], "at dinner");
}
// Question 16:
/* More Guests: You just found a bigger dinner table,
so now more space is available. Think of three more guests to invite to dinner.*/
console.log(`\n i would like to inform all of you that i found a bigger round table so i am going to invide further 3 more guest \n`);
Guest.unshift("hammad");
Guest.splice(2, 0, "shan");
Guest.push("zeeshan");
for (let i = 0; i < Guest.length; i++) {
    console.log("I would like to invite you", Guest[i], "at dinner");
}
// Question 17:
/**Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */
console.log(`\n I can invite only a two guest due to unavailability of dining table with in a time \n`);
while (Guest.length < 2) {
    let removeguest = Guest.pop();
    console.log(removeguest, `sorry you are not invited for dinner`);
}
for (let i = 0; i < Guest.length; i++) {
    console.log(Guest[i], `you are still invited in for dinner`);
}
// Question 18:
// /** Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order
let visitPlaces = ["islamabad", "lahore", "karachi", "peshawar"];
// Print your array in its original order.
console.log("\n Original order:", visitPlaces);
// Print your array in alphabetical order without modifying the actual list.
console.log("Alphabatical order:", [...visitPlaces].sort());
// Show that your array is still in its original order by printing it.
console.log("Original order:", visitPlaces);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("ReverseAlphabatical order:", [...visitPlaces].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("Original order:", visitPlaces);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("AgainReverseAlphabatical order:", visitPlaces.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("AgainReverseAlphabatical order:", visitPlaces.reverse().reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabatical order:", visitPlaces.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */
console.log("ReverseAlphabatical order:", visitPlaces.sort().reverse());
// Question 19:
/**Dinner Guests: Working with one of the programs from Exercises 14 through 18,
  print a message indicating the number of people you are inviting to dinner. */
console.log("the number of people who invite to dinner is:", Guest.length);
//   step 20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let sArray = ["mountains", "ravi", "lahore"];
sArray.forEach(sArray => { console.log(sArray); });
