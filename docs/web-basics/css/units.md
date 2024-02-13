# Units

Units in CSS are used to define the size of elements. There are a few different types of units in CSS. They are:

- **Absolute Units**: These units are fixed and do not change based on the size of the viewport or the parent element. Examples of absolute units include `px` (pixels), `pt` (points), and `in` (inches).

- **Relative Units**: These units are relative to the size of the viewport or the parent element. Examples of relative units include `%` (percentage), `em`, `rem`, `vw` (viewport width), and `vh` (viewport height).

- **Viewport Units**: These units are relative to the size of the viewport. Examples of viewport units include `vw` (viewport width) and `vh` (viewport height).

Many different CSS properties accept units, including `width`, `height`, `font-size`, `margin`, `padding`, and more. By using different units, you can create flexible and responsive designs that adapt to different screen sizes and devices.

Here are some examples of using different units in CSS:

```css
h1 {
	font-size: 36px; /* Absolute unit */
}

p {
	font-size: 1.2em; /* Relative unit */
}

div {
	width: 50%;
}

img {
	width: 100vw; /* Viewport unit */
	height: 50vh; /* Viewport unit */
}
```

## Absolute Units

Absolute units are fixed and do not change based on the size of the viewport or the parent element. They are useful for defining precise measurements and ensuring consistent layouts across different devices and screen sizes.

Here are some examples of absolute units in CSS:

| Unit | Description |
| ---- | ----------- |
| `px` | Pixels. A pixel is a single dot on a screen |
| `pt` | Points. A point is a unit of length commonly used in typography (1pt = 1/72 of 1in) |
| `pc` | Picas. A pica is a unit of length commonly used in typography (1pc = 12pt) |
| `in` | Inches. An inch is a unit of length equal to 1/12 of a foot (1in = 96px = 2.54cm) |
| `cm` | Centimeters |
| `mm` | Millimeters |

Who still uses freedom units anyways? I mean, inches and feet? Come on, people!

## Relative Units

Relative units are relative to the size of the viewport or the parent element. They are useful for creating flexible and responsive designs that adapt to different screen sizes and devices.

Here are some examples of relative units in CSS:

| Unit | Description |
| ---- | ----------- |
| `%` | Percentage. A percentage is a relative unit that is calculated based on the size of the parent element |
| `em` | Relative to the font size of the element |
| `rem` | Relative to the font size of the root element |
| `ch` | Relative to the width of the "0" (zero) character |
| `ex` | Relative to the x-height of the font |
| `vw` | Viewport width. Equal to 1% of the width of the viewport |
| `vh` | Viewport height. Equal to 1% of the height of the viewport |
| `vmin` | Equal to the smaller of `vw` or `vh` |
| `vmax` | Equal to the larger of `vw` or `vh` |

