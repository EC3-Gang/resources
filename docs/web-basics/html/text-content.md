---
title: Text Content
---

# Text Content

Text content is the text that is displayed on a web page. It can include headings (covered in the previous section), paragraphs, lists, links, and other types of text-based content.

## Paragraphs

Paragraphs are used to group together blocks of text. They are defined using the `<p>` element:

```html
<p>This is a paragraph of text.</p>
```

In this example, the text "This is a paragraph of text." is enclosed in a `<p>` element, which indicates that it is a paragraph of text.

Browsers usually display paragraphs with a blank line before and after the text to separate it from other content on the page.


## Text Formatting

Text formatting is used to change the appearance of text, such as making it bold, italic, or underlined. There are several elements that can be used to apply text formatting in HTML:

### Bold Text

Bold text is used to make text appear bold. It is defined using the `<b>` or `<strong>` element:

```html
<p>This is <b>bold text</b>.</p>
<p>This is <strong>strong text</strong>.</p>
```

::: tip
The HTML5 specification recommends that the `<b>` tag to be used only as a last resort when no other tag is more appropriate. The `<strong>` tag is recommended for text that is of strong importance, such as keywords in a document abstract, product names in a review, or other important text in a document.
:::

### Italic Text

Italic text is used to make text appear italic. It is defined using the `<i>` or `<em>` element:

```html
<p>This is <i>italic text</i>.</p>
<p>This is <em>emphasized text</em>.</p>
```

### Underlined Text

Underlined text is used to make text appear underlined. It is defined using the `<u>` element:

```html
<p>This is <u>underlined text</u>.</p>
```

### Strikethrough Text

Strikethrough text is used to make text appear with a line through the middle. It is defined using the `<s>` or `<strike>` element:

```html
<p>This is <s>strikethrough text</s>.</p>
```

### Highlighted Text

Highlighted text is used to make text appear highlighted. It is defined using the `<mark>` element:

```html
<p>This is <mark>highlighted text</mark>.</p>
```

### Superscript Text

Superscript text is used to make text appear smaller and above the baseline. It is defined using the `<sup>` element:

```html
<p>This is <sup>superscript text</sup>.</p>
```

### Subscript Text

Subscript text is used to make text appear smaller and below the baseline. It is defined using the `<sub>` element:

```html
<p>This is <sub>subscript text</sub>.</p>
```


## Line Breaks

Line breaks are used to create a new line within a block of text. They are defined using the `<br>` element:

```html
<p>This is the first line.<br>This is the second line.</p>
```

In this example, the `<br>` element is used to create a line break between the two lines of text.

## Horizontal Rules

Horizontal rules are used to create a horizontal line that separates content on a page. They are defined using the `<hr>` element:

```html
<p>This is the first section of content.</p>
<hr>
<p>This is the second section of content.</p>
```

## Preformatted Text

Preformatted text is used to display text exactly as it is written in the HTML document, including spaces, tabs, and line breaks. It is defined using the `<pre>` element:

```html
<pre>
	This is preformatted text.
		It includes spaces and tabs.
		It also includes line breaks.
</pre>
```

The above example will display the text exactly as it is written in the HTML document, including the spaces, tabs, and line breaks, but the following example will not:

```html
<p>
	This is preformatted text.
		It includes spaces and tabs.
		It also includes line breaks.
</p>
```

## Lists

Lists are used to group together related items. There are two types of lists in HTML: ordered lists and unordered lists.

### Ordered Lists

Ordered lists are used to group together items that have a specific order or sequence. They are defined using the `<ol>` element, and each item in the list is defined using the `<li>` element:

```html
<ol>
	<li>First item</li>
	<li>Second item</li>
	<li>Third item</li>
</ol>
```

### Unordered Lists

Unordered lists are used to group together items that do not have a specific order or sequence. They are defined using the `<ul>` element, and each item in the list is defined using the `<li>` element:

```html
<ul>
	<li>First item</li>
	<li>Second item</li>
	<li>Third item</li>
</ul>
```

### Definition Lists

Definition lists are used to group together terms and their definitions. They are defined using the `<dl>` element, and each term and definition is defined using the `<dt>` and `<dd>` elements, respectively:

```html
<dl>
	<dt>Term 1</dt>
	<dd>Definition 1</dd>
	<dt>Term 2</dt>
	<dd>Definition 2</dd>
	<dt>Term 3</dt>
	<dd>Definition 3</dd>
</dl>
```	

## Links

Links are used to create hyperlinks to other web pages, files, or resources. They are defined using the `<a>` element, and the `href` attribute is used to specify the URL of the link:

```html
<a href="https://www.example.com">Visit Example.com</a>
```

## Quotations

Quotations are used to indicate that a block of text is a quotation. There are two types of quotations in HTML: block quotations and inline quotations.

### Block Quotations

Block quotations are used to indicate that a block of text is a quotation. They are defined using the `<blockquote>` element:

```html
<blockquote>
	This is a block quotation.
	It can span multiple lines.
</blockquote>
```

### Inline Quotations

Inline quotations are used to indicate that a portion of text is a quotation. They are defined using the `<q>` element:

```html
<p>This is an <q>inline quotation</q> in a paragraph of text.</p>
```

Browsers usually add quotation marks around the text to indicate that it is a quotation.

## Abbreviations

Abbreviations are used to indicate that a portion of text is an abbreviation. They are defined using the `<abbr>` element, and the `title` attribute is used to specify the full form of the abbreviation:

```html
<p>The <abbr title="World Wide Web">WWW</abbr> is a system of interlinked hypertext documents.</p>
```

