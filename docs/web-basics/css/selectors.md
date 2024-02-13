# Selectors

Selectors are patterns used to select the elements you want to style. They are the part of CSS rules that determine which elements the styles apply to. Selectors can be used to target elements based on their type, class, ID, attributes, and more.

## Element Selectors

Element selectors are used to target elements based on their type. They consist of the name of the element, such as `p` for paragraphs, `h1` for headings, `a` for links, and so on.

```css
p {
	color: red;
}
```

In this example, the style rule applies to all `<p>` elements in the document. The style rule consists of a selector (`p`) and a list of style declarations that change the color of the text in the targeted elements.

## Class Selectors

Class selectors are used to target elements based on their class attribute. They consist of a period (`.`) followed by the name of the class.

```css
.highlight {
	background-color: yellow;
}
```

In this example, the style rule applies to all elements with the class `highlight`. The style rule consists of a selector (`.highlight`) and a list of style declarations that change the background color of the targeted elements.

## ID Selectors

ID selectors are used to target elements based on their ID attribute. They consist of a hash (`#`) followed by the name of the ID.

```css
#header {
	font-size: 24px;
}
```

In this example, the style rule applies to the element with the ID `header`. The style rule consists of a selector (`#header`) and a list of style declarations that change the font size of the targeted element.

## Attribute Selectors

Attribute selectors are used to target elements based on their attributes. They consist of square brackets (`[]`) containing the name of the attribute and an optional value.

```css
input[type="text"] {
	border: 1px solid #ccc;
}
```

In this example, the style rule applies to all `<input>` elements with the attribute `type="text"`. The style rule consists of a selector (`input[type="text"]`) and a list of style declarations that change the border of the targeted elements.

## Pseudo-classes and Pseudo-elements

Pseudo-classes and pseudo-elements are used to target elements based on their state or position. They consist of a colon (`:`) followed by the name of the pseudo-class or pseudo-element.

```css
a:hover {
	text-decoration: underline;
}
```

In this example, the style rule applies to all `<a>` elements when the mouse hovers over them. The style rule consists of a selector (`a:hover`) and a list of style declarations that change the text decoration of the targeted elements.

```css
p::before {
	content: "→ ";
}
```

In this example, the style rule applies to all `<p>` elements and adds an arrow before the text. The style rule consists of a selector (`p::before`) and a list of style declarations that add content to the targeted elements.

::: tip
The `content` property is usually only used with the `::before` and `::after` pseudo-elements to insert generated content before or after the content of an element.
:::


## Combinators

### Adjacent Sibling Combinator

Combinators are used to target elements based on their relationship to other elements. They consist of whitespace, `>`, `+`, or `~`.

```css
h1 + p {
	font-weight: bold;
}
```

In this example, the style rule applies to all `<p>` elements that are immediately preceded by an `<h1>` element. The style rule consists of a selector (`h1 + p`) and a list of style declarations that change the font weight of the targeted elements.

### Descendant Selector

```css
ul li {
	list-style-type: square;
}
```

In this example, the style rule applies to all `<li>` elements that are descendants of a `<ul>` element. The style rule consists of a selector (`ul li`) and a list of style declarations that change the list style type of the targeted elements.

### Child Selector

```css
ul > li {
	font-weight: bold;
}
```

In this example, the style rule applies to all `<li>` elements that are direct children of a `<ul>` element. The style rule consists of a selector (`ul > li`) and a list of style declarations that change the font weight of the targeted elements.

::: tip
The `>` combinator is used to target elements that are direct children of another element. It does not target elements that are nested further down the hierarchy, where the descendant selector would be used instead.
:::

### General Sibling Combinator

```css
h1 ~ p {
	font-style: italic;
}
```

In this example, the style rule applies to all `<p>` elements that are siblings of an `<h1>` element. The style rule consists of a selector (`h1 ~ p`) and a list of style declarations that change the font style of the targeted elements.

::: tip
The `~` combinator is used to target elements that are siblings of another element, regardless of their position in the hierarchy.
:::


## Grouping Selectors

Grouping selectors are used to apply the same styles to multiple selectors. They consist of a comma (`,`) separating the selectors.

```css
h1, h2, h3 {
	color: blue;
}
```

## Universal Selector

The universal selector (`*`) is used to target all elements in the document.

```css
* {
	margin: 0;
	padding: 0;
}
```

In this example, the style rule applies to all elements in the document. The style rule consists of a selector (`*`) and a list of style declarations that change the margin and padding of the targeted elements.

::: tip
The universal selector is often used to reset the default margin and padding of elements in a document to create a consistent layout.
:::
