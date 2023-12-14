/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false;
  }
  // Replacing all special characters with space
  str1 = str1.replace(/[^a-zA-Z0-9]/g, " ");
  str2 = str2.replace(/[^a-zA-Z0-9]/g, " ");
  // Converting strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  // Removing all spaces
  str1 = str1.trim();
  str2 = str2.trim();
  //splitting the string letters in to separate arrays
  str1 = str1.split("");
  str2 = str2.split("");
  // Sorting the splitted arrays
  str1 = str1.sort();
  str2 = str2.sort();
  // Joining the all splitted arrays to form a string again.
  str1 = str1.join("");
  str2 = str2.join("");
  // Checking whether the strings or equal. If they are, then those are anagrams.
  if (str1 === str2){
   return true;
  }
  return false;
 }
 
 
 module.exports = isAnagram;
