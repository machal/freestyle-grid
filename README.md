# Block Grid for LESS CSS

**Layout module for irregular grid. 
Based on (Foundation's [Block Grid](http://foundation.zurb.com/docs/components/block_grid.html) component).**

Regular grid like Bootstrap's is great but suitable for layouts only. If your UI component
needs uncommon layout, you want block grid. Sometimes 3, sometimes 5 sometimes 11 
grid columns. Block grid is solution for you.

# Examples

### 1st example: 1/3 layout

```html
<ul class="block-grid block-grid-3">
  <li>1) Lorem Ipsum…</li>
  <li>2) Lorem Ipsum…</li>
  <li>3) Lorem Ipsum…</li>
  <li>4) Lorem Ipsum…</li>
  <li>5) Lorem Ipsum…</li>
  <li>6) Lorem Ipsum…</li>
</ul>
```` html


### 2nd example: 1/3 layout + 1/6 on large displays

```
<ul class="block-grid block-grid-3 block-grid-large-6">
  <li>1) Lorem Ipsum…</li>
  <li>2) Lorem Ipsum…</li>
  <li>3) Lorem Ipsum…</li>
  <li>4) Lorem Ipsum…</li>
  <li>5) Lorem Ipsum…</li>
  <li>6) Lorem Ipsum…</li>
</ul>
````

# Configuration

You are welcome to use LESS variables:

```less
@include-html-classes:  true;   // Generate .block-grid-X classes or use your own?
@gutter-width:          14px;   // Gutter between grid columns
@max-columns:           12;     // Maximum number of columns you use on your project
@small-start:           500px;  // Start of small screen. Set tu 0 if you don't want Media Query for that
@large-start:           800px;  // Large grid start.
```


