# Flexbox

Flexbox is a layout model that allows elements to align and distribute space within a container. It is a one-dimensional layout method for laying out items in rows or columns.

## Flex Container

To create a flex container, you can use the `display` property with the value `flex` or `inline-flex`.

<code-preview>

```html
<style>
	.flex-container {
		display: flex;
	}


	.flex-container > div {
		margin: 5px;
		padding: 10px;
		font-size: 20px;
		background-color: lightgray;
		border: 1px solid black;
	}
</style>

<div class="flex-container">
	<div>1</div>
	<div>2</div>
	<div>3</div>
</div>

<div class="flex-container" style="flex-direction: column;">
	<div>1</div>
	<div>2</div>
	<div>3</div>
</div>

<!-- control -->
<div>
	<div>1</div>
	<div>2</div>
	<div>3</div>
</div>
```

</code-preview>

In this example, we have two flex containers. The first one is a row layout, and the second one is a column layout. The `flex-direction` property is used to specify the direction of the main axis.

## Flex Items

Flex items are the children of a flex container. They can be aligned and distributed within the flex container using various properties.

<code-preview>

```html
<style>
	.flex-container {
		display: flex;
	}

	.flex-container > div {
		margin: 5px;
		padding: 10px;
		font-size: 20px;
		background-color: lightgray;
		border: 1px solid black;
	}
</style>

<div class="flex-container">
	<div style="flex: 1;">1</div>
	<div style="flex: 2;">2</div>
	<div style="flex: 1;">3</div>
</div>

<div class="flex-container">
	<div style="order: 3;">1</div>
	<div style="order: 2;">2</div>
	<div style="order: 1;">3</div>
</div>
```

</code-preview>


In this example, we have two flex containers. The first one uses the `flex` property to specify the flex grow factor for each item. The second one uses the `order` property to specify the order of the items.


## Flex Properties

There are several properties that can be used to control the layout of flex items within a flex container.

- `flex-direction`: Specifies the direction of the main axis.
- `flex-wrap`: Specifies whether the flex items should wrap onto multiple lines.
- `flex-flow`: A shorthand property for setting the `flex-direction` and `flex-wrap` properties.
- `justify-content`: Specifies how the flex items are aligned along the main axis.
- `align-items`: Specifies how the flex items are aligned along the cross axis.

<code-preview>

```html
<style>
	.flex-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 200px;
	}

	.flex-container > div {
		margin: 5px;
		padding: 10px;
		font-size: 20px;
		background-color: lightgray;
		border: 1px solid black;
	}
</style>

<div class="flex-container">
	<div>1</div>
	<div>2</div>
	<div>3</div>
</div>

<div class="flex-container" style="flex-direction: row;">
	<div>1</div>
	<div>2</div>
	<div>3</div>
</div>

<div class="flex-container" style="align-items: flex-end;">
	<div>1</div>
	<div>2</div>
	<div>3</div>
</div>
```

</code-preview>


In this example, we have three flex containers. The first one uses the `flex-direction`, `justify-content`, and `align-items` properties to control the layout of the items. The second one changes the direction of the main axis to a row layout. The third one uses the `align-items` property to align the items along the cross axis.

