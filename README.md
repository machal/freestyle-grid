# Freestyle Grid

**Common grids like [the Bootstrap's one](http://getbootstrap.com/css/#grid) are great for regular layout. But sometimes your page or UI component needs uncommon layout – 3, 5 or 11
grid columns. Then you need irregular grid. Freestyle grid.**

Freestyle Grid is LESS layout module for fluid and responsive – but irregular – grid. Suitable for non-layout grids such as thumbnails. Great for fast prototyping. Based on the [Block Grid](http://foundation.zurb.com/docs/components/block_grid.html) from Foundation framework.


## Table of Contents

* [Installation](#installation)
* [Examples](#examples)
* [Configuration](#configuration)
* [IE8 support](#ie8-support)
* [Author and licence](#author-and-licence)


## Installation

```shell
bower install freestyle-grid
```


## Examples &amp; demos


### 1st example: 1/3 layout everywhere

```html
<ul class="fgrid fgrid-3">
  <p class="fgrid-item">Lorem Ipsum…</p>
  …
</ul>
```
![Simple demo](demo/assets/fgrid-simple.jpg?raw=true)

[Try it in your browser](http://www.vzhurudolu.cz/data/projects/freestyle-grid/demo/simple.html).

Have you noticed that you don't need to write markup for layout row? Yeah – writing layout markup
with Freestyle Grid is very fast!

### 2nd example: 1/2 layout on small &amp; 1/5 on large displays

```html
<div class="fgrid fgrid-small-2 fgrid-large-5">
  <p class="fgrid-item">Lorem Ipsum…</p>
  …
</div>
```

Note: `ul`/`li` markup is not required.

![Small/Large demo](demo/assets/fgrid-small-large.jpg?raw=true)

[Try it in your browser](http://www.vzhurudolu.cz/data/projects/freestyle-grid/demo/small-large.html).


### 3rd example: 1/2 layout on small &amp; 1/5 on large displays with thumbnails

```html
<ul class="fgrid fgrid-small-2 fgrid-large-5">
  <li class="fgrid-item"><img …></li>
  …
</ul>
```

![Thumbnails demo](demo/assets/fgrid-thumbnails.jpg?raw=true)

[Try it in your browser](http://www.vzhurudolu.cz/data/projects/freestyle-grid/demo/thumbnails.html).


## Configuration

You are welcome to change Freestyle Grid behavior with [LESS variables](less/freestyle-grid.less#L12):

* Generate your own classes with `@include-html-classes` set to `false` and [our mixins](less/freestyle-grid.less#L55).
* Change grid parameters with `@gutter-width` and `@max-columns`.
* Move breakpoints up or down by changing values of `@small-grid-start` and `@large-grid-start`.


## IE8 support

IE8- doesn't support Media Queries so you need to use [Respond.js](https://github.com/scottjehl/Respond) polyfill.

And if your grid items (`.fgrid-item`) are of unequal height, then you have to add `<div class="clearfix">` when starting new layout row. This is because IE8 and lower versions lacks `:nth-of-type` support.

So the IE8 simplified markup looks like this:

```html
<head>
  …
  <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <style>
      img { width: auto } /* http://stackoverflow.com/questions/8610077/height-auto-in-internet-explorer-8-and-below */
    </style>
  <![endif]-->
</head>
<body>
  <ul class="fgrid fgrid-small-2 fgrid-large-5">
    <li class="fgrid-item"><img …></li>
    …
    <!--[if lt IE 9]><div class="clearfix"></div><![endif]-->
    …
  </ul>
</body>
```

[Try it in your browser](http://www.vzhurudolu.cz/data/projects/freestyle-grid/demo/thumbnails-ie8.html).


## Author and licence

Made in Prague by Martin Michalek (martin@vzhurudolu.cz).

[MIT licence](http://opensource.org/licenses/mit-license.php).
