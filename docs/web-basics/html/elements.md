---
title: Elements
---

# Elements

A HTML element is a component of a HTML document that defines the structure and content of the document. Elements are made up of a start tag, an end tag, and the content between the tags. The start tag and end tag are enclosed in angle brackets (`<` and `>`), and the end tag includes a forward slash (`/`) before the element name.

## Syntax

The basic syntax for an HTML element is as follows:

```html
<element>content</element>
```

Where:

- `<element>`: The start tag of the element.
- `content`: The content of the element.
- `</element>`: The end tag of the element.

## Example

Take the example from the previous page:

```html
<!DOCTYPE html>
<html>
<head>
	<title>My First Web Page</title>
</head>
<body>
	<h1>Hello, World!</h1>
	<p>This is my first web page.</p>
</body>
</html>
```

In this example, the document contains several elements, including:

- `<html>`: The root element of the document.
- `<head>`: The element that contains meta-information about the document.
- `<title>`: The element that specifies the title of the document.
- `<body>`: The element that contains the content of the document.
- `<h1>`: The element that specifies a level 1 heading.
- `<p>`: The element that specifies a paragraph of text.

Each of these elements has a start tag, an end tag, and content between the tags.


## Self-Closing Elements

Some elements do not have content and are self-closing. These elements only have a start tag and do not have an end tag. The start tag is followed by a forward slash (`/`) before the closing angle bracket (`>`).

The basic syntax for a self-closing element is as follows:

```html
<element />
```

For example, the `<img>` element is a self-closing element that is used to embed images in a document. It does not have an end tag, so it is written as follows:

```html
<img src="image.jpg" alt="Image" />
```

In this example, the `<img>` element has two attributes (`src` and `alt`) that specify the image source and alternative text for the image. The element is self-closing because it does not have any content.