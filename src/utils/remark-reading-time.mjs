import getReadingTime from "reading-time";
import mdastToString from 'mdast-util-to-string';

// Fix for CommonJS named export issue
const toString = typeof mdastToString === 'function' ? mdastToString : mdastToString.toString;

export default function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    
    // Set the readingTime on the frontmatter
    data.astro.frontmatter.readingTime = readingTime.text;
  };
}