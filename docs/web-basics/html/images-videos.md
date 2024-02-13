# Images and Videos

## Images

### `<img>` Tag
Images are a great way to make your web pages more visually appealing. You can add images to your web pages using the `<img>` tag. The `<img>` tag is an empty tag, which means that it does not have a closing tag. The `<img>` tag requires two attributes: `src` and `alt`.

The `src` attribute specifies the URL of the image to be displayed. The URL can be a relative URL or an absolute URL. If the image is located in the same directory as the HTML file, you can use the image file name as the value of the `src` attribute. If the image is located in a different directory, you can use the relative path to the image file as the value of the `src` attribute. If the image is located on a different website, you can use the absolute URL of the image as the value of the `src` attribute.

The `alt` attribute specifies the alternative text for the image. The alternative text is used by screen readers to describe the image to visually impaired users. It is also displayed in place of the image if the image cannot be loaded. The `alt` attribute is required for all images, and it should provide a brief description of the image.

Here's an example of an `<img>` tag:

```html
<img src="image.jpg" alt="A beautiful image" />
```

In this example, the `<img>` tag has two attributes:

- `src`: The attribute that specifies the URL of the image to be displayed.
- `alt`: The attribute that specifies the alternative text for the image.

Each attribute is added to the start tag of the element and is made up of a name and a value.


### `<picture>` Tag

The `<picture>` tag is used to define multiple sources for an image based on different device characteristics, such as screen size, resolution, and pixel density. This allows you to provide different versions of an image to different devices, ensuring that each device receives the most appropriate version of the image.

The `<picture>` tag contains one or more `<source>` elements and an `<img>` element. The `<source>` elements specify the different versions of the image, and the `<img>` element specifies the default version of the image.

Here's an example of a `<picture>` tag:

```html
<picture>
	<source media="(min-width: 800px)" srcset="large-image.jpg">
	<source media="(min-width: 400px)" srcset="medium-image.jpg">
	<img src="small-image.jpg" alt="A beautiful image">
</picture>
```

In this example, the `<picture>` tag contains three elements:

- Two `<source>` elements, each with a `media` attribute and a `srcset` attribute. The `media` attribute specifies the conditions under which the image should be used, and the `srcset` attribute specifies the URL of the image to be displayed.
- One `<img>` element with a `src` attribute and an `alt` attribute. The `src` attribute specifies the URL of the default version of the image, and the `alt` attribute specifies the alternative text for the image.

### `<figure>` Tag

The `<figure>` tag is used to group together an image and its caption. It is often used to add captions to images, diagrams, illustrations, and other visual content. The `<figure>` tag is typically used in conjunction with the `<figcaption>` tag, which is used to define the caption for the image.

Here's an example of a `<figure>` tag:

```html
<figure>
	<img src="image.jpg" alt="A beautiful image">
	<figcaption>This is a beautiful image.</figcaption>
</figure>
```

## Videos

Videos are a great way to add multimedia content to your web pages. You can add videos to your web pages using the `<video>` tag. The `<video>` tag is an empty tag, which means that it does not have a closing tag. The `<video>` tag requires several attributes, including `src`, `controls`, and `autoplay`.

The `src` attribute specifies the URL of the video to be displayed. The URL can be a relative URL or an absolute URL. If the video is located in the same directory as the HTML file, you can use the video file name as the value of the `src` attribute. If the video is located in a different directory, you can use the relative path to the video file as the value of the `src` attribute. If the video is located on a different website, you can use the absolute URL of the video as the value of the `src` attribute.

The `controls` attribute specifies whether the video player should include playback controls, such as play, pause, and volume. If the `controls` attribute is present, the video player will include playback controls. If the `controls` attribute is not present, the video player will not include playback controls.

The `autoplay` attribute specifies whether the video should start playing as soon as it is loaded. If the `autoplay` attribute is present, the video will start playing as soon as it is loaded. If the `autoplay` attribute is not present, the video will not start playing until the user clicks the play button.

Here's an example of a `<video>` tag:

```html
<video src="video.mp4" controls autoplay>
	Your browser does not support the video tag.
</video>
```

In this example, the `<video>` tag has three attributes:

- `src`: The attribute that specifies the URL of the video to be displayed.
- `controls`: The attribute that specifies whether the video player should include playback controls.
- `autoplay`: The attribute that specifies whether the video should start playing as soon as it is loaded.

The text "Your browser does not support the video tag." is displayed in browsers that do not support the `<video>` tag.

