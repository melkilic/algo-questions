/**
 * /*
 * Intermediate Algorithm Scripting: Pig LatinPassed
 * Pig Latin is a way of altering English Words. The rules are as follows:
 *
 * - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
 *
 * - If a word begins with a vowel, just add "way" at the end.
 *
 * Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
 *
 * @format
 */

function translatePigLatin(str, charPos = 0) {
  return ["a", "e", "i", "o", "u"].includes(str[0])
    ? str + (charPos === 0 ? "way" : "ay")
    : charPos === str.length
    ? str + "ay"
    : translatePigLatin(str.slice(1) + str[0], charPos + 1);
}

translatePigLatin("consonant");
