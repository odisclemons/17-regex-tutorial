# Computer Science for JavaScript: Regex Tutorial

A regular expression, or regex, is a search pattern designed to find strings within a specified string of text. They are incredibly powerful and have become ubiquitus in most programming languages even though they predate most of the programming languages popularly used today. I will explain the workings of a simple regex.

## Summary

Let's say I have the following react fragment:

```
<>
<div>
    <p>this is a sample of code and stuff.</p>
</div>
</>
`
```

This is a very contrived example, but bear with me. Let's say I want to extract only the valid html tags, but not the text or react fragment tags (<></>) in the string.

We can do that using the following regular expression:

```
/<\/?[a-z]+>/gi;
```

This regex contains

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## Regex Components

### Anchors

### Quantifiers

> Quantifiers allow us to specify how many times the preceding expression must be found before it counts as a match. We used the quantifier <b><i>+</i></b> to specify that our a-z bracket expression must be found 1 or more times. This allowed us to return `<div>` and `<p>`, but not `<>`.

We also used the <b><i>?</i></b> to specify that the

### Grouping Constructs

### Bracket Expressions

### Character Classes

> Bracket expressions let us match one or more of a group of characters to return. Our bracket expression <b><i>[a-z]</i></b> says to return any character between A-Z. This regex will return uppercase or lowercase because of the flags we specified in the next section.

### Flags

Flags allow us to specify options that apply to the entire regex.

> The <b><i>g</i></b> flag stands for global. It will return all matches instead of just the first one.

> The <b><i>i</i></b> flag allows the regex to be case insensitive. This means our regex will return div or DIV, even though we specified to only find characters with lowercase a-z.

### Character Escapes

## Author

A short section about the author with a link to the author's GitHub profile (replace with your information and a link to your profile)
