# Freestyle Grid

**Common grids like [the Bootstrap's one](http://getbootstrap.com/css/#grid) are great for regular layout. But sometimes your page or UI component needs uncommon layout – 3, 5 or 11
grid columns. Then you need irregular grid. Freestyle grid.**

Freestyle Grid is LESS layout module for fluid and responsive – but irregular – grid. Suitable for non-layout grids such as thumbnails. Great for fast prototyping. Based on the [Block Grid](http://foundation.zurb.com/docs/components/block_grid.html) from Foundation framework.


## Table of Contents

* [Installation](#installation)
* [Examples](#examples)
* [Configuration](#configuration)
* [IE8 & old browsers support](#ie8-old-browsers-support)


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

You can [try it in your browser](http://www.vzhurudolu.cz/data/projects/freestyle-grid/demo/simple.html).

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

You can [try it in your browser](http://www.vzhurudolu.cz/data/projects/freestyle-grid/demo/small-large.html).


### 3rd example: 1/2 layout on small &amp; 1/5 on large displays with thumbnails

```html
<ul class="fgrid fgrid-small-2 fgrid-large-5">
  <li class="fgrid-item"><img …></li>
  …
</ul>
```

![Thumbnails demo](demo/assets/fgrid-thumbnails.jpg?raw=true)

You can [try it in your browser](http://www.vzhurudolu.cz/data/projects/freestyle-grid/demo/thumbnails.html).


## Configuration

You are welcome to change Freestyle Grid behavior with [LESS variables](less/freestyle-grid.less#L12):

* Generate your own classes with `@include-html-classes` set to `false` and [our mixins](less/freestyle-grid.less#L55).
* Change grid parameters with `@gutter-width` and `@max-columns`.
* Move breakpoints up or down by changing values of `@small-grid-start` and `@large-grid-start`.


## IE8 & old browsers support

## Authors

Made in Prague by Martin Michalek (martin@vzhurudolu.cz).
