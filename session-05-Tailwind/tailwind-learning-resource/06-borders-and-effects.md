# 06 - Borders & Effects

Adding depth and definition to your elements using borders, shadows, and filters.

## 1. Borders
- `rounded-sm`, `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full` (for pills/circles)
- `border`, `border-2`, `border-4`, `border-8`
- `border-slate-200`
- `border-t-4` (border top only)

### Example: Styled Card Border
```html
<div class="max-w-xs p-6 bg-white border-b-4 border-blue-500 rounded-lg shadow-sm hover:shadow-xl transition-shadow cursor-pointer">
  <h3 class="font-bold text-slate-800">Premium Plan</h3>
  <p class="text-slate-500 text-sm mt-2">Get all the features with our pro package.</p>
</div>
```

---

## 2. Shadows (Box Shadow)
Tailwind's shadows are beautifully crafted to give a modern lifting effect.
- `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-inner`

### Example: Floating Button
```html
<button class="bg-white text-slate-900 px-6 py-2 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
  Elevate
</button>
```

---

## 3. Opacity & Filters
- `opacity-0` to `opacity-100` (increments of 5/10)
- `blur-sm`, `blur-md`, `blur-lg`
- `grayscale`, `sepia`, `invert`
- `backdrop-blur-md` (Requires a semi-transparent background color like `bg-white/30`)

### Example: Glassmorphism Effect
```html
<div class="relative w-full h-64 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] bg-cover">
  <div class="p-8 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl text-white text-center">
    <h2 class="text-2xl font-bold">Glassmorphism</h2>
    <p class="mt-2 opacity-80">This effect is achieved using backdrop-blur and semi-transparent backgrounds.</p>
  </div>
</div>
```

[Next: Interactivity & Animation](./07-interactivity-and-animation.md)
