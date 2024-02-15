# Background

The `background` property is a shorthand property for setting all the background properties at once. The properties that can be set, are:

- `background-color`
- `background-image`
- `background-repeat`
- `background-attachment`
- `background-position`

Here's an example of using the `background` property in CSS:

```css
body {
	background: #f0f0f0 url('background.jpg') no-repeat fixed center;
}
```

In this example, we're setting the background color to `#f0f0f0`, the background image to `background.jpg`, the background repeat to `no-repeat`, the background attachment to `fixed`, and the background position to `center`.

## Background Color

The `background-color` property allows you to specify the background color of an element.

Here's an example of using the `background-color` property in CSS:

```css
body {
	background-color: #f0f0f0;
}
```

In this example, we're setting the background color of the `body` element to `#f0f0f0`.

## Background Image

The `background-image` property allows you to specify the background image of an element.

```css
body {
	background-image: url('background.jpg');
}
```

In this example, we're setting the background image of the `body` element to `background.jpg`.

## Background Repeat

The `background-repeat` property allows you to specify how the background image should be repeated.

```css
body {
	background-repeat: no-repeat;
}
```

In this example, we're setting the background repeat of the `body` element to `no-repeat`.

You can also use the `background-repeat` property to specify the repeat behavior for the horizontal and vertical directions separately.

```css
body {
	background-repeat: repeat-x;
}
```

```css
body {
	background-repeat: repeat-y;
}
```

## Background Attachment

The `background-attachment` property allows you to specify whether the background image should scroll with the content or remain fixed.

```css
body {
	background-attachment: fixed;
}
```


## Background Position

The `background-position` property allows you to specify the position of the background image within the element.

```css
body {
	background-position: center;
}
```

You can also use the `background-position` property to specify the position using coordinates.

```css
body {
	background-position: 50% 50%;
}
```



