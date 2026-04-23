# Major Project 2: Modern Portfolio (Dark Mode)

## The Goal
Create a sophisticated personal portfolio that showcases your work with a focus on:
- **Dark Mode**: Seamlessly switch between light and dark themes.
- **Micro-Animations**: Hover effects, smooth scroll, and reveal animations.
- **Glassmorphism**: A premium, frosted-glass look for the navigation and cards.
- **Responsive Grid**: Adapts perfectly to mobile, tablet, and desktop.

## 🛠 Hand's on Instructions
1. Use `dark:bg-slate-900` and `dark:text-white` to handle the theme switch.
2. Implement a `group-hover:translate-x-2` animation on project links.
3. Use `backdrop-blur-md` for the sticky navigation.

---

## ✅ Solution Code

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
    }
  </script>
  <title>Portfolio | Modern & Animated</title>
</head>
<body class="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">

  <!-- Navbar -->
  <nav class="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
      <span class="text-2xl font-black tracking-tighter">JS.</span>
      
      <div class="flex items-center gap-8">
        <div class="hidden md:flex gap-6 font-medium text-sm">
          <a href="#work" class="hover:text-indigo-500 transition-colors">Work</a>
          <a href="#about" class="hover:text-indigo-500 transition-colors">About</a>
          <a href="#contact" class="hover:text-indigo-500 transition-colors">Contact</a>
        </div>
        
        <!-- Dark Mode Toggle -->
        <button onclick="document.documentElement.classList.toggle('dark')" class="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:ring-2 ring-indigo-500 transition-all">
          <svg class="w-5 h-5 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
          <svg class="w-5 h-5 hidden dark:block text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="pt-40 pb-20 px-6">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-6xl md:text-8xl font-bold tracking-tighter leading-none animate-reveal">
        Designing digital <br>
        <span class="text-indigo-600">excreisences.</span>
      </h1>
      <p class="mt-8 text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
        I'm a product designer based in London, focused on building beautiful, interactive, and functional web applications.
      </p>
    </div>
  </section>

  <!-- Projects Grid -->
  <section id="work" class="py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-12">Selected Projects</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Project 1 -->
        <div class="group cursor-pointer">
          <div class="aspect-video bg-indigo-100 dark:bg-slate-800 rounded-3xl overflow-hidden mb-6">
            <div class="w-full h-full bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f')] bg-cover group-hover:scale-105 transition-transform duration-500"></div>
          </div>
          <div class="flex justify-between items-center">
            <div>
              <h3 class="text-xl font-bold">Fintech Dashboard</h3>
              <p class="text-slate-500 text-sm">UI/UX Design • 2024</p>
            </div>
            <div class="p-3 rounded-full border border-slate-200 dark:border-slate-700 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="group cursor-pointer">
          <div class="aspect-video bg-emerald-100 dark:bg-slate-800 rounded-3xl overflow-hidden mb-6">
            <div class="w-full h-full bg-[url('https://images.unsplash.com/photo-1551288049-bbbda536339a')] bg-cover group-hover:scale-105 transition-transform duration-500"></div>
          </div>
          <div class="flex justify-between items-center">
            <div>
              <h3 class="text-xl font-bold">E-commerce App</h3>
              <p class="text-slate-500 text-sm">Development • 2023</p>
            </div>
            <div class="p-3 rounded-full border border-slate-200 dark:border-slate-700 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer id="contact" class="py-20 px-6 border-t border-slate-200 dark:border-slate-800">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8 italic text-slate-400">Let's work together.</h2>
      <a href="mailto:hello@designer.com" class="text-2xl md:text-5xl font-bold hover:text-indigo-600 underline underline-offset-8 decoration-indigo-600 transition-colors">hello@designer.com</a>
    </div>
  </footer>

  <style>
    @keyframes reveal {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-reveal {
      animation: reveal 1s ease-out forwards;
    }
  </style>

</body>
</html>
```
