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
```

This is a very contrived example, but bear with me. Let's say I want to extract only the valid html tags, but not the text or react fragment tags (<></>) in the string.

We can do that using the following regular expression:

```
/<\/?[a-z]+>/gi
```

This regex returns strings that:

-begin and end with < **and** >

-optionally has a **_/_** as the second character

-includes one or more of the characters **_a-z_** and is case insensitive

## Table of Contents

- [Quantifiers](#quantifiers)
- [Bracket Expressions](#bracket-expressions)
- [Flags](#flags)
- [Character Escapes](#character-escapes)
- [Test Code for JavaScript](#test-code-for-javascript)

## Regex Components

### Quantifiers

> Quantifiers allow us to specify how many times the preceding expression must be found before it counts as a match. We used the quantifier **_+_** to specify that our a-z bracket expression must be found 1 or more times. This allowed us to return `<div>` and `<p>`, but not `<>`.
>
> We also used the **_?_** to specify that the **_/_** is optional. This lets us find both `<div>` and `</div>`.

### Bracket Expressions

> Bracket expressions let us match one or more of a group of characters to return. Our bracket expression **_[a-z]_** says to return any character between A-Z. This regex will return uppercase or lowercase because of the flags we specified in the next section.

### Flags

> Flags allow us to specify options that apply to the entire regex.
>
> The **_g_** flag stands for global. It will return all matches instead of just the first one.
>
> The **_i_** flag allows the regex to be case insensitive. This means our regex will return div or DIV, even though we specified to only find characters tha are lowercase a-z.

### Character Escapes

> We needed to search for the **_/_** which signifies a closing tag in html. The **_/_** is also a meta character in regex which needs to be escaped since it signifies opening and closing of a regex. Escaping the **_/_** with a **_\\_** tells the engine to not execute the next character, but instead treat it like a regular text character. I even had to escape the escape character in this markdown file!

### Test Code for JavaScript

> Here is some code you can run to test the regex. You can adapt it to your language of choice.

```
let testStr = `
<>
<div>
    <p>this is a sample of code and stuff.</p>
</div>
</>
// invalid tags below shouldnt be returned:

<invalid
invalid>
<12313>
<></>
<&**&*^&^>
`;

let regex = /<\/?[a-z]+>/gi;
console.log(testStr.match(regex));
```

## Author

My name is Odis Clemons and I am clearly an expert on regular expressions as you can see. You can contact me at odis.clemons@gmail.com or visit my github profile at [https://github.com/odisclemons](https://github.com/odisclemons).
