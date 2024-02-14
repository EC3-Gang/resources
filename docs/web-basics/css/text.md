# Text

CSS provides a wide range of options for styling text, including font properties, text alignment, text decoration, and more. In this article, we'll explore some of the most common text-related properties in CSS.

## Font Properties

Font properties allow you to specify the appearance of text, including the font family, font size, font weight, and more.

### Font Family

The `font-family` property allows you to specify the font family for an element. You can use a specific font name, a generic font family, or a combination of both.

Here's an example of using the `font-family` property in CSS:

```css
body {
	font-family: "Arial", sans-serif;
}
```

In this example, we're specifying the font family for the `body` element to be "Arial". If "Arial" is not available, the browser will use a generic sans-serif font instead.

### Font Size

The `font-size` property allows you to specify the size of the text. You can use a variety of units to specify the font size, including pixels, ems, rems, and percentages.

Here's an example of using the `font-size` property in CSS:

```css
h1 {
	font-size: 36px;
}
```

In this example, we're specifying the font size for `h1` elements to be 36 pixels.

### Font Weight

The `font-weight` property allows you to specify the weight of the text, such as bold or normal.

Here's an example of using the `font-weight` property in CSS:

```css
p {
	font-weight: bold;
}
```

In this example, we're specifying that the text in `p` elements should be bold.


## Text Alignment

Text alignment properties allow you to control the alignment of text within an element.

### Text Align

The `text-align` property allows you to specify the horizontal alignment of text within an element.

Here's an example of using the `text-align` property in CSS:

```css
p {
	text-align: center;
}
```

In this example, we're specifying that the text in `p` elements should be centered horizontally.

### Vertical Align

The `vertical-align` property allows you to specify the vertical alignment of an inline or table-cell element.

Here's an example of using the `vertical-align` property in CSS:

```css
img {
	vertical-align: middle;
}
```

In this example, we're specifying that the image should be vertically aligned to the middle of the line.


## Text Decoration

Text decoration properties allow you to add visual effects to text, such as underlines, overlines, and line-throughs.

### Text Decoration

The `text-decoration` property allows you to specify the decoration of text within an element.

Here's an example of using the `text-decoration` property in CSS:

```css
a {
	text-decoration: underline;
}
```

In this example, we're specifying that the text in `a` elements should be underlined.

### Text Transform

The `text-transform` property allows you to specify the capitalization of text within an element.

Here's an example of using the `text-transform` property in CSS:

```css
h2 {
	text-transform: uppercase;
}
```

In this example, we're specifying that the text in `h2` elements should be displayed in uppercase letters.

### Letter Spacing

The `letter-spacing` property allows you to specify the spacing between characters in text.

Here's an example of using the `letter-spacing` property in CSS:

```css
p {
	letter-spacing: 2px;
}
```

In this example, we're specifying that the text in `p` elements should have 2 pixels of spacing between characters.

### Word Spacing

The `word-spacing` property allows you to specify the spacing between words in text.

Here's an example of using the `word-spacing` property in CSS:

```css
p {
	word-spacing: 5px;
}
```

In this example, we're specifying that the text in `p` elements should have 5 pixels of spacing between words.

## Line Height

The `line-height` property allows you to specify the height of a line of text.

Here's an example of using the `line-height` property in CSS:

```css
p {
	line-height: 1.5;
}
```

In this example, we're specifying that the line height for `p` elements should be 1.5 times the font size.

## Text Shadow

The `text-shadow` property allows you to add a shadow effect to text.

Here's an example of using the `text-shadow` property in CSS:

```css
h1 {
	text-shadow: 2px 2px 4px #000000;
}
```

In this example, we're specifying that the text in `h1` elements should have a shadow with an offset of 2 pixels horizontally and 2 pixels vertically, a blur radius of 4 pixels, and a color of black.

