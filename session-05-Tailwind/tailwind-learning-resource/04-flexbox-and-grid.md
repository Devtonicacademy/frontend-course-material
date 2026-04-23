# 04 - Flexbox & Grid

Layouts in modern web development are almost always built with Flexbox or Grid. Tailwind makes these powerful CSS features incredibly accessible.

## 1. Flexbox
Flexbox is ideal for one-dimensional layouts (a row OR a column).

### Key Classes:
- `flex`: Necessary to start.
- `flex-col`: Stack items vertically.
- `justify-center`: Align items to the center along the main axis.
- `items-baseline`: Align items according to their text baseline.
- `gap-4`: Adds 1rem spacing between all items.

### Example: Horizontal Navigation
```html
<div class="flex items-center justify-between p-6 bg-indigo-600 text-white rounded-lg">
  <div class="font-bold">Logo</div>
  <div class="flex gap-4">
    <span class="hover:bg-indigo-700 p-2 rounded cursor-pointer">Products</span>
    <span class="hover:bg-indigo-700 p-2 rounded cursor-pointer">Pricing</span>
    <span class="bg-white text-indigo-600 px-4 py-2 rounded-full font-medium">Join Now</span>
  </div>
</div>
```

---

## 2. Grid
Grid is best for two-dimensional layouts (rows AND columns).

### Key Classes:
- `grid`: The container.
- `grid-cols-3`: Creates three equal columns.
- `col-span-2`: Makes an item stretch across two columns.
- `gap-2`: 0.5rem gap between cells.

### Example: Dashboard Layout
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 bg-slate-50">
  <div class="col-span-1 md:col-span-2 bg-white p-10 rounded-xl shadow-md border-t-4 border-blue-500">
    <h2 class="text-2xl font-bold">Main Content</h2>
    <p class="text-slate-500 mt-4">This section spans 2 columns on desktop.</p>
  </div>
  <div class="bg-indigo-100 p-10 rounded-xl border border-indigo-200">
    <h3 class="font-semibold text-indigo-900">Sidebar</h3>
    <ul class="mt-4 space-y-2">
      <li class="bg-white px-3 py-1 rounded shadow-sm">Widget 1</li>
      <li class="bg-white px-3 py-1 rounded shadow-sm">Widget 2</li>
    </ul>
  </div>
</div>
```

[Next: Design & Typography](./05-design-and-typography.md)
