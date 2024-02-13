# Box Model

The box model is a fundamental concept in CSS. It describes the space that each element occupies in a document. Each element is represented as a rectangular box, with the content, padding, border, and margin areas.

Here's a visual representation of the box model, courtesy of Wikipedia:

![](https://upload.wikimedia.org/wikipedia/commons/7/7a/Boxmodell-detail.png)

The box model consists of the following components:

- **Content**: The actual content of the element, such as text, images, or other media.
- **Padding**: The space between the content and the border. It is used to create space around the content and can be modified using the `padding` property in CSS.
- **Border**: The border that surrounds the padding and content. It is used to define the visual boundaries of the element and can be modified using the `border` property in CSS.
- **Margin**: The space between the border and the surrounding elements. It is used to create space between elements and can be modified using the `margin` property in CSS.


Here's it in action:

<code-preview>

```html
<style>
	.test-container {
		background-color: blue;
		display: flex;
	}

	.test-box {
		padding: 20px;
		border: 10px solid red;
		color: darkgreen;
		background-color: white;
		margin: 20px;
		width: 100%;
	}
</style>

<div class="test-container">
	<div class="test-box">
		Content
	</div>
</div>
```

</code-preview>

The blue area is the margin, the red area is the border, the white area is the padding, and the (dark) green text is the content.


## Box Sizing

The `box-sizing` property in CSS is used to control how the total width and height of an element is calculated. By default, the `box-sizing` property is set to `content-box`, which means that the width and height of an element are calculated based on the content area only.

Here's an example of the `box-sizing` property in action:

```css
/* Set the box-sizing property to border-box */
.element {
	box-sizing: border-box;
	width: 100px;
	padding: 10px;
	border: 1px solid black;
	margin: 10px;
}
```

In this example, the `box-sizing` property is set to `border-box`, which means that the width and height of the element are calculated based on the content, padding, and border areas. This ensures that the total width and height of the element remain consistent, regardless of the padding and border values.