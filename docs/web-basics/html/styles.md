---
title: Styles
---

# Styles

Styles are used to define the appearance of HTML elements. They can be used to change the font, color, size, and other properties of text and other content. Styles can be applied to elements using inline styles, internal styles, or external styles.

## Inline Styles

Inline styles are used to apply styles directly to individual elements. They are defined using the `style` attribute on the start tag of an element:

<code-preview>

```html
<p style="color: red; font-size: 18px;">This is a paragraph of text.</p>
```

</code-preview>

In this example, the `style` attribute is added to the `<p>` element to change the color and font size of the text. The value of the `style` attribute is a list of style declarations separated by semicolons. Each style declaration consists of a property name, a colon, and a value.

## Internal Styles

Internal styles are used to apply styles to an entire document. They are defined using the `<style>` element in the `<head>` section of the document:

```html
<!DOCTYPE html>
<html>
<head>
	<style>
		p {
			color: red;
			font-size: 18px;
		}
	</style>
</head>
<body>
	<p>This is a paragraph of text.</p>
</body>
</html>
```

In this example, the `<style>` element is used to define a style rule that applies to all `<p>` elements in the document. The style rule consists of a selector (`p`) and a list of style declarations enclosed in curly braces.

## External Styles

External styles are used to apply styles to an entire document. They are defined in an external CSS file and linked to the document using the `<link>` element in the `<head>` section of the document:

```html
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<p>This is a paragraph of text.</p>
</body>
</html>
```

```css
/* styles.css */
p {
	color: red;
	font-size: 18px;
}
```

In this example, the `<link>` element is used to link an external CSS file (`styles.css`) to the document. The CSS file contains a style rule that applies to all `<p>` elements in the document.
