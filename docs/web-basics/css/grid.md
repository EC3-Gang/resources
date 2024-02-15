# Grids

CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay out items in rows and columns, and has many features that make building complex layouts straightforward.

## Grid Container

To create a grid container, you can use the `display` property with the value `grid`.

```css
.grid-container {
	display: grid;
}
```


## Grid Items

Grid items are the children of a grid container. They can be placed into specific grid cells using the `grid-row` and `grid-column` properties.

<code-preview>

```html
<style>
	.grid-container {
		display: grid;
		grid-template-columns: auto auto auto;
		grid-gap: 10px;
		background-color: #2196F3;
		padding: 10px;
	}

	.grid-item {
		background-color: rgba(255, 255, 255, 0.8);
		border: 1px solid #000;
		text-align: center;
		font-size: 30px;
	}
</style>

<div class="grid-container">
	<div class="grid-item">1</div>
	<div class="grid-item">2</div>
	<div class="grid-item">3</div>
	<div class="grid-item">4</div>
	<div class="grid-item">5</div>
	<div class="grid-item">6</div>
</div>
```

</code-preview>

In this example, we have a grid container with three columns and two rows. The `grid-template-columns` property is used to specify the size of the columns, and the `grid-gap` property is used to specify the gap between the grid items.

### Setting different column/row sizes

You can set different sizes for the columns and rows using the `grid-template-columns` and `grid-template-rows` properties for each grid container.

<code-preview>

```html
<style>
	.grid-container {
		display: grid;
		grid-template-columns: 100px 100px 100px;
		grid-template-rows: 80px 80px;
		grid-gap: 10px;
		background-color: #2196F3;
		padding: 10px;
	}

	.grid-item {
		background-color: rgba(255, 255, 255, 0.8);
		border: 1px solid #000;
		text-align: center;
		font-size: 30px;
	}
</style>

<div class="grid-container">
	<div class="grid-item">1</div>
	<div class="grid-item">2</div>
	<div class="grid-item">3</div>
	<div class="grid-item">4</div>
	<div class="grid-item">5</div>
	<div class="grid-item">6</div>
</div>
```

</code-preview>


### Row/Column Lines

You can use the `grid-template-rows` and `grid-template-columns` properties to specify the size of the rows and columns, and the `grid-row` and `grid-column` properties to place the grid items into specific grid cells.

<code-preview>

```html
<style>
	.grid-container {
		display: grid;
		grid-template-columns: 100px 100px 100px;
		grid-gap: 10px;
		background-color: #2196F3;
		padding: 10px;
	}

	.grid-item {
		background-color: rgba(255, 255, 255, 0.8);
		border: 1px solid #000;
		text-align: center;
		font-size: 30px;
	}

	.item1 {
		grid-column: 1 / 3;
		grid-row: 1 / 3;
	}
</style>

<div class="grid-container">
	<div class="grid-item item1">1</div>
	<div class="grid-item">2</div>
	<div class="grid-item">3</div>
	<div class="grid-item">4</div>
	<div class="grid-item">5</div>
	<div class="grid-item">6</div>
</div>v  
```

</code-preview>




