/**
 * /*
 * Intermediate Algorithm Scripting: Convert HTML Entities
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 *
 * @format
 */

function convertHTML(str) {
  var word = str.split("");

  for (var i = 0; i < word.length; i++) {
    switch (word[i]) {
      case "<":
        word[i] = "&lt;";
        break;
      case "&":
        word[i] = "&amp;";
        break;
      case ">":
        word[i] = "&gt;";
        break;
      case '"':
        word[i] = "&quot;";
        break;
      case "'":
        word[i] = "&apos;";
        break;
    }
  }

  word = word.join("");
  return word;
}
