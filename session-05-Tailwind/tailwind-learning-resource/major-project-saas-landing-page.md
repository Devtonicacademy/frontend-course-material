# Major Project: SaaS Landing Page

## The Goal
Combine everything you've learned to build a professional-grade SaaS Landing Page. This project includes:
- A responsive Navbar with a CTA.
- A Hero Section with a gradient background and a mockup image placeholder.
- A 3-column Features Section with icons.
- A Testimonial Section.
- A Footer.

## 🛠 Hand's on Instructions
1. **Layout**: Use `max-w-7xl mx-auto` to contain your content and keep it centered.
2. **Typography**: Use `tracking-tight` on headings for a modern look.
3. **Colors**: Use a consistent color palette (e.g., Slate for text, Indigo for actions).
4. **Interactivity**: Add `hover:` states to all buttons and links.

---

## ✅ Solution Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>VibeSaaS - Experience the Future</title>
</head>
<body class="bg-white font-sans text-slate-900 overflow-x-hidden">

  <!-- Navbar -->
  <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-indigo-600 rounded-lg"></div>
          <span class="text-xl font-bold tracking-tight">VibeSaaS</span>
        </div>
        <div class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#" class="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#" class="hover:text-indigo-600 transition-colors">Solutions</a>
          <a href="#" class="hover:text-indigo-600 transition-colors">Pricing</a>
          <button class="bg-indigo-600 text-white px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">Get Started</button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="relative pt-20 pb-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center">
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
          Deploy your ideas <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">quicker than ever.</span>
        </h1>
        <p class="mt-8 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          The all-in-one platform for creators and developers to build, launch, and scale their next big thing without touching complex infrastructure.
        </p>
        <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button class="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">Start Building Free</button>
          <button class="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">Watch Demo</button>
        </div>
      </div>
    </div>
    
    <!-- Background Decor -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-10">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-[128px]"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-[128px]"></div>
    </div>
  </header>

  <!-- Features Section -->
  <section class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Feature 1 -->
        <div class="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
          <div class="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Lightning Fast</h3>
          <p class="text-slate-600 leading-relaxed">Built with performance in mind. Your users will experience zero lag with our global edge network.</p>
        </div>
        <!-- Feature 2 -->
        <div class="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
          <div class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Secure by Default</h3>
          <p class="text-slate-600 leading-relaxed">Enterprise-grade security for every project. Encrypted at rest and in transit, so you can sleep easy.</p>
        </div>
        <!-- Feature 3 -->
        <div class="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
          <div class="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Deep Analytics</h3>
          <p class="text-slate-600 leading-relaxed">Understand your users better than ever with real-time data insights and custom event tracking.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-white border-t border-slate-100 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
      <div class="flex items-center gap-2 grayscale brightness-50">
        <div class="w-6 h-6 bg-slate-900 rounded"></div>
        <span class="text-lg font-bold tracking-tight">VibeSaaS</span>
      </div>
      <p class="text-slate-400 text-sm">© 2026 VibeSaaS Inc. Built with Tailwind CSS.</p>
      <div class="flex gap-6">
        <a href="#" class="text-slate-400 hover:text-slate-900"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
        <a href="#" class="text-slate-400 hover:text-slate-900"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
      </div>
    </div>
  </footer>

</body>
</html>
```
