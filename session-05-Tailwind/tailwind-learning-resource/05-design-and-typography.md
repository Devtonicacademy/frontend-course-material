# 05 - Design & Typography

Tailwind comes with a professionally designed palette and typography system out of the box.

## 1. Typography
Typography is subtle but makes the biggest difference in a "premium" feel.

- `font-sans`, `font-serif`, `font-mono`
- `text-xs` to `text-9xl`
- `font-thin` to `font-black` (100 to 900)
- `leading-tight`: Custom line height
- `tracking-widest`: Custom letter spacing

### Example: Hero Text
```html
<div class="text-center py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
  <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6">
    Code at the speed of <span class="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-emerald-400">thought.</span>
  </h1>
  <p class="max-w-2xl mx-auto text-xl text-slate-300 font-light italic">
    Stop writing custom CSS and start vibe-coding with Tailwind.
  </p>
</div>
```

---

## 2. Colors & Gradients
Tailwind provides over 20 color families (slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose).

- `text-blue-500`
- `bg-indigo-600`
- `border-slate-200`
- `bg-gradient-to-tr` (top-right)
- `from-blue-500 via-purple-500 to-pink-500`

### Example: Gradient Button
```html
<button class="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all active:scale-95">
  Launch App
</button>
```

[Next: Borders & Effects](./06-borders-and-effects.md)
