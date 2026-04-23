# 03 - Layout & Spacing

Getting your layout right is half the battle. Tailwind simplifies this with intuitive classes for size, position, and spacing.

## 1. Spacing (Padding & Margin)
Tailwind uses a numeric scale (0 to 96) where `1` = `0.25rem` (4px).

### Padding (`p-`)
- `p-4`: Padding all sides (16px)
- `px-4`: Padding left/right
- `py-4`: Padding top/bottom

### Margin (`m-`)
- `m-2`: Margin all sides
- `mx-auto`: Center horizontally (requires a width or `block`)

### Example: Card with Spacing
```html
<div class="max-w-sm m-10 p-6 bg-slate-100 rounded-lg shadow">
  <h3 class="mb-4 text-lg font-bold">Spacing Example</h3>
  <p class="mt-2 text-slate-600">Notice the margins and padding around this card.</p>
</div>
```

---

## 2. Flexbox
Flexbox is the go-to for many layouts.

- `flex`: Sets `display: flex`
- `flex-col` / `flex-row`: Direction
- `justify-between` / `justify-center`: Horizontal alignment
- `items-center`: Vertical alignment

### Example: Centered Header
```html
<nav class="flex justify-between items-center p-4 bg-gray-800 text-white">
  <div class="font-bold text-xl">MyBrand</div>
  <ul class="flex space-x-6">
    <li><a href="#" class="hover:text-blue-400">Home</a></li>
    <li><a href="#" class="hover:text-blue-400">About</a></li>
  </ul>
</nav>
```

---

## 3. Position and Z-Index
- `relative`, `absolute`, `fixed`, `sticky`
- `top-0`, `left-0`, etc.
- `z-0` to `z-50`

### Example: Badge on Image
```html
<div class="relative w-48 h-48">
  <img src="https://via.placeholder.com/200" class="rounded-lg object-cover w-full h-full">
  <span class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">New</span>
</div>
```

[Next: Flexbox & Grid](./04-flexbox-and-grid.md)
