---
title: CSS Sentence Case
excerpt: The argument has been made that form labels in Sentence Case are easier to read and friendlier. This article will show you how to implement Sentence Case in your website.
date: 2019-05-30 17:00:00 +0000
author: Burton Smith
image: "/uploads/covers/books-galore.jpg"
imageAlt: "dozens of open books"
---

When creating forms, I have always used Title Case (the first letter in each word is capitalized) for labels. In ["Making a case for letter case"](https://medium.com/@jsaito/making-a-case-for-letter-case-19d09f653c98), [John Saito](https://twitter.com/saitojohn) explains that using Sentence case has some distinct advantages including:

- easier to read
- easier to define (explain to other developers and designers what it is)
- friendlier
- easier to spot proper nouns

Title Case still has its merits, but after reading this article, I was inspired to make the switch. There is just one little problem - CSS does not provide this format natively and I want to be able to globally set this style so that developers and content managers do bot have to worry about formatting.

## Creating the Sentence Case Transformation

There are a couple of other text formatters available. The `text-transform` property provides some rules that we can take advantage of in order to get the desired result:

- `capitalize` - (aka - Title Case)
- `lowercase`
- `uppercase`

_(We won't be using `capitalize`, but I wanted to make a point of calling out that it exists as it is incredibly handy.)_


The CSS to make this happen was surprisingly simple:

<?prettify?>
```css
label {
    text-transform: lowercase;
}

label::first-letter {
    text-transform: uppercase;
}
```

Now, for a little markup...

<?prettify?>
```html
<form>
    <label for="first-name">FIRST NAME:</label>
    <input type="text" id="first-name" value="Abe" />

    <label for="last-name">last name:</label>
    <input type="text" id="last-name" value="Froman" />

    <label for="title">tItLe:</label>
    <input type="text" id="title" value="The Sausage King of Chicago" />
</form>
```

The result...

<style>
form {
    display: flex; 
    flex-direction: column;
    border: solid 1px gray;
}

input {
    margin-bottom: 1rem;
    padding: 0.5rem;
}

label {
    text-transform: lowercase;
    font-weight: bold;
}

label::first-letter {
    text-transform: uppercase;
}
</style>
<form class="mb-4 p-4">
    <label for="first-name">FIRST NAME:</label>
    <input type="text" id="first-name" value="Abe" />
    <label for="last-name">last name:</label>
    <input type="text" id="last-name" value="Froman" />
    <label for="title">tItLe:</label>
    <input type="text" id="title" value="The Sausage King of Chicago" />
</form>

## Conclusion

