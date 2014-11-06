# Freestyle Grid

**LESS CSS Layout module for fluid and responsive, but irregular grid. Suitable for non-layout grids such as thumbnails. Based on [Block Grid](http://foundation.zurb.com/docs/components/block_grid.html) component from Foundation framework.**

Regular grids like [the one from Bootstrap](http://getbootstrap.com/css/#grid) are great for page layout. Sometimes your UI component needs uncommon layout – 3, 5 or 11
grid columns. Than you need irregular grid. Freestyle grid.

## Table of Contents

* [Examples](#examples)
* [Configuration](#configuration)
* [IE8 & old browsers support](#ie8-old-browsers-support)

## Examples

### 1st example: 1/3 layout

```html
<ul class="fgrid fgrid-3">
  <li>1) Lorem Ipsum…</li>
  <li>2) Lorem Ipsum…</li>
  <li>3) Lorem Ipsum…</li>
  <li>4) Lorem Ipsum…</li>
  <li>5) Lorem Ipsum…</li>
  <li>6) Lorem Ipsum…</li>
</ul>
```

### 2nd example: 1/3 layout + 1/6 on large displays

```html
<ul class="fgrid fgrid-3 fgrid-large-6">
  <li>1) Lorem Ipsum…</li>
  <li>2) Lorem Ipsum…</li>
  <li>3) Lorem Ipsum…</li>
  <li>4) Lorem Ipsum…</li>
  <li>5) Lorem Ipsum…</li>
  <li>6) Lorem Ipsum…</li>
</ul>
```

### `ul`/`li` markup is not required

If you don't want `ul`/`li` markup, use classes `.fgrid` for the parent and `.fgrid-item` for grid items on any element you want:


```html
<div class="fgrid fgrid-3">
  <div class="fgrid-item">1) Lorem Ipsum…</div>
  <div class="fgrid-item">2) Lorem Ipsum…</div>
  <div class="fgrid-item">3) Lorem Ipsum…</div>
</div>
```

## Configuration

You are welcome to use LESS variables:

```
@include-html-classes:  true;   // Generate .fgrid-X classes or use your own?
@gutter-width:          14px;   // Gutter between grid columns
@max-columns:           12;     // Maximum number of columns you use on your project
@small-start:           500px;  // Start of small screen. Set tu 0 if you don't want Media Query for that
@large-start:           800px;  // Large grid start.
```

## IE8 & old browsers support
