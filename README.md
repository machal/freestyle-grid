# Freestyle Grid

**Regular grids like [the Bootstrap's one](http://getbootstrap.com/css/#grid) are great for regular layout. Sometimes your page or UI component needs uncommon layout – 3, 5 or 11
grid columns. Then you need irregular grid. Freestyle grid.**

LESS CSS layout module for fluid and responsive – but irregular – grid. Suitable for non-layout grids such as thumbnails. Great for fast prototyping. Based on the [Block Grid](http://foundation.zurb.com/docs/components/block_grid.html) from Foundation framework.


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

You can try [in your browser](http://www.vzhurudolu.cz/data/projects/freestyle-grid/demo/simple.html).

### 2nd example: 1/2 layout on small &amp; 1/5 on large displays

```html
<div class="fgrid fgrid-small-2 fgrid-large-5">
  <p class="fgrid-item">Lorem Ipsum…</p>
  …
</div>
```

Note: `ul`/`li` markup is not required.

![Small/Large demo](demo/assets/fgrid-small-large.jpg?raw=true)

You can try [in your browser](http://www.vzhurudolu.cz/data/projects/freestyle-grid/demo/small-large.html).


### 3rd example: 1/2 layout on small &amp; 1/5 on large displays with thumbnails

```html
<ul class="fgrid fgrid-small-2 fgrid-large-5">
  <li class="fgrid-item"><img …></li>
  …
</ul>
```

![Thumbnails demo](demo/assets/fgrid-thumbnails.jpg?raw=true)

You can try [in your browser](http://www.vzhurudolu.cz/data/projects/freestyle-grid/demo/thumbnails.html).

## Configuration

You are welcome to use LESS variables:

```
@include-html-classes:  true;   // Generate .fgrid-X classes or use your own?
@gutter-width:          14px;   // Gutter between grid columns
@max-columns:           12;     // Maximum number of columns you use on your project
@small-grid-start:      640px;  // Small screen breakpoint.
@large-grid-start:      1025px; // Large screen breakpoint.
```

## IE8 & old browsers support
