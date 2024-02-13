---
title: Basics
---

# Basics

CSS (Cascading Style Sheets) is a style sheet language used to define the appearance and formatting of HTML documents. It is used to control the layout, colors, fonts, and other visual aspects of web pages. CSS can be used to style individual elements, groups of elements, or entire documents.

CSS can be stored in separate style sheets or embedded directly into HTML documents. It can be applied to HTML documents using the `style` attribute, the `<style>` element, or external style sheets.

## Syntax

CSS is made up of style rules that are used to define the appearance of HTML elements. Each style rule consists of a selector and a list of style declarations enclosed in curly braces. The selector is used to target the elements to which the style rule should be applied, and the style declarations are used to define the appearance of the targeted elements.

The basic syntax for a style rule is as follows:

```css
selector {
	property: value;
	property: value;
	property: value;
}
```

In this syntax, `selector` is the element or elements to which the style rule should be applied, and `property` and `value` are the style declarations that define the appearance of the targeted elements.

## Example

Consider the following example:

```css
p {
	color: red;
	font-size: 18px;
}
```

In this example, the style rule applies to all `<p>` elements in the document. The style rule consists of a selector (`p`) and a list of style declarations that change the color and font size of the text in the targeted elements.

## Comments

CSS supports comments, which are used to add explanatory notes to the code. Comments are not displayed in the browser and are used to provide information about the code to other developers or to remind yourself of important details.

The basic syntax for a comment is as follows:

```css
/* This is a comment */
```

In this syntax, the comment is enclosed in `/*` and `*/` and can span multiple lines. Anything between `/*` and `*/` is treated as a comment and is not displayed in the browser.


## Specificity

CSS uses a system of specificity to determine which style rules should be applied to an element when multiple conflicting style rules are present. Specificity is used to calculate the importance of a style rule and to determine which style rule should take precedence when multiple style rules are applied to the same element.

The specificity of a style rule is determined by the number of selectors, the types of selectors, and the presence of inline styles. The more specific a style rule is, the higher its precedence, and the more likely it is to be applied to the targeted elements.

The basic rules for calculating specificity are as follows:

- Inline styles have the highest specificity and will always take precedence over other style rules.
- ID selectors have higher specificity than class selectors and element selectors.
- Class selectors have higher specificity than element selectors.
- The universal selector (`*`) has the lowest specificity and will be overridden by any other style rule.

Here's a table that shows the specificity of different types of selectors:

| Selector | Specificity Value | Calculation |
| -------- | ----------------- | ----------- |
| * | 0 | 0 |
| element | 1 | 1 |
| .class | 10 | 10 |
| #id | 100 | 100 |
| div.class#id | 111 | 1 + 10 + 100 |
| `<p style="">` | 1000 | 1000 |
