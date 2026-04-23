# 07 - Interactivity & Animation

Bring your website to life with smooth transitions, interactive states, and custom animations.

## 1. Transitions
- `transition-all`, `transition-colors`, `transition-opacity`, `transition-transform`
- `duration-75` to `duration-1000` (ms)
- `ease-in`, `ease-out`, `ease-in-out`, `ease-linear`

### Example: Hover Transition
```html
<div class="w-32 h-32 bg-blue-500 rounded-lg transition-all duration-500 ease-in-out hover:bg-red-500 hover:rotate-12 hover:scale-110 flex items-center justify-center text-white font-bold cursor-pointer">
  Hover Me
</div>
```

---

## 2. Animation (Pre-built)
Tailwind includes several built-in animations:
- `animate-spin` (Spinning loading icon)
- `animate-ping` (Radar ping effect)
- `animate-pulse` (Gentle fade in/out)
- `animate-bounce` (Up and down bounce)

### Example: Loading State
```html
<button class="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded">
  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r=10 stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Processing...
</button>
```

---

## 3. Transforms
- `scale-90`, `rotate-45`, `translate-x-4`, `skew-y-3`
- Combine with `hover:` or `active:` for reactive UI.

### Example: Interactive Menu Icon
```html
<div class="group h-10 w-10 flex flex-col justify-between p-2 cursor-pointer">
  <div class="h-1 w-full bg-slate-900 rounded transition-transform group-hover:rotate-45 group-hover:translate-y-2.5"></div>
  <div class="h-1 w-full bg-slate-900 rounded transition-opacity group-hover:opacity-0"></div>
  <div class="h-1 w-full bg-slate-900 rounded transition-transform group-hover:-rotate-45 group-hover:-translate-y-2.5"></div>
</div>
```

---

## 4. Interactivity
- `cursor-pointer`, `cursor-not-allowed`, `cursor-wait`
- `pointer-events-none` (Makes an element "clickable through")
- `select-none` (Prevents text selection)
- `scroll-smooth` (For smooth anchor links)

[Back to Home](./README.md)
