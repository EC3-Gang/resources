---
title: Attributes
---

# Attributes

An HTML attribute is a modifier that provides additional information about an element. Attributes are added to the start tag of an element and are made up of a name and a value. The name and value are separated by an equals sign (`=`), and the value is enclosed in double quotes (`"`).

## Syntax

The basic syntax for an HTML attribute is as follows:

```html
<element attribute="value">content</element>
```

In this syntax, `attribute` is the name of the attribute, and `value` is the value of the attribute. The attribute is added to the start tag of the element.

## Example

Take an `<img>` element, for example:

```html
<img src="image.jpg" alt="A beautiful image" />
```

In this example, the `<img>` element has two attributes:

- `src`: The attribute that specifies the URL of the image to be displayed.
- `alt`: The attribute that specifies the alternative text for the image.

Each attribute is added to the start tag of the element and is made up of a name and a value.

## Common Attributes

There are several common attributes that can be used with most HTML elements. Some of the most common attributes include:

| Attribute | Description |
| --------- | ----------- |
| `id` | Specifies a unique identifier for the element. |
| `class` | Specifies one or more class names for the element. |
| `style` | Specifies the inline style for the element. |
| `title` | Specifies the title of the element. |
| `href` | Specifies the URL of the link. |
| `src` | Specifies the URL of the media resource. |
| `alt` | Specifies the alternative text for the media resource. |
| `width` | Specifies the width of the media resource. |
| `height` | Specifies the height of the media resource. |

These attributes can be used with a wide variety of elements to provide additional information about the element.

## Custom Attributes

In addition to the common attributes, it is also possible to create custom attributes for elements. Custom attributes are attributes that are not defined in the HTML specification but are used to provide additional information about an element. Custom attributes can be used to store data, provide additional functionality, or add semantic meaning to an element.

For example, consider the following `<div>` element:

```html
<div data-user-id="123" data-user-name="John Doe" data-user-role="admin">...</div>
```

In this example, the `<div>` element has three custom attributes:

- `data-user-id`: The attribute that specifies the user ID.
- `data-user-name`: The attribute that specifies the user name.
- `data-user-role`: The attribute that specifies the user role.

These custom attributes are used to store data about the user and provide additional information about the element.

## Boolean Attributes

Some attributes are boolean attributes, which means that they do not require a value. If the attribute is present, its value is considered to be `true`. If the attribute is not present, its value is considered to be `false`.

For example, consider the following `<input>` element:

```html
<input type="checkbox" checked />
```

In this example, the `checked` attribute is a boolean attribute. If the attribute is present, the checkbox is checked. If the attribute is not present, the checkbox is not checked.