# Mini-Project 2: Responsive Pricing Section

## The Task
Create a 3-tier pricing section (Basic, Pro, Enterprise) that is:
- Fully responsive (stack on mobile, side-by-side on desktop).
- Features a "Recommended" badge on the Pro plan.
- Uses checkmark icons for features.

## 🛠 Hand's on Instructions
1. Use `grid-cols-1` for mobile and `lg:grid-cols-3` for desktop.
2. Use `scale-110` on the middle (Pro) card to make it stand out.
3. Use `divide-y` for the feature list.

---

## ✅ Solution Code

```html
<section class="py-20 bg-slate-50 px-4">
  <div class="max-w-6xl mx-auto text-center">
    <h2 class="text-4xl font-extrabold text-slate-900 sm:text-5xl">Simple, transparent pricing</h2>
    <p class="mt-4 text-xl text-slate-600">Choose the plan that's right for your business.</p>
  </div>

  <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-6xl mx-auto items-center">
    
    <!-- Basic Plan -->
    <div class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
      <h3 class="text-lg font-semibold text-slate-900">Basic</h3>
      <p class="mt-4 text-slate-500 italic">For personal projects</p>
      <div class="mt-6">
        <span class="text-4xl font-bold text-slate-900">$19</span>
        <span class="text-slate-500">/mo</span>
      </div>
      <ul class="mt-8 space-y-4 text-slate-600 flex-grow">
        <li class="flex items-center">
          <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          5 Projects
        </li>
        <li class="flex items-center">
          <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Community Support
        </li>
      </ul>
      <button class="mt-8 w-full py-3 px-6 rounded-xl border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors">Start Free Trial</button>
    </div>

    <!-- Pro Plan (Highlighted) -->
    <div class="relative bg-slate-900 p-10 rounded-2xl shadow-2xl lg:scale-110 z-10 flex flex-col">
      <div class="absolute top-0 right-8 -translate-y-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Recommended</div>
      <h3 class="text-lg font-semibold text-white">Pro</h3>
      <p class="mt-4 text-slate-400 italic">For startups & teams</p>
      <div class="mt-6">
        <span class="text-4xl font-bold text-white">$49</span>
        <span class="text-slate-400">/mo</span>
      </div>
      <ul class="mt-8 space-y-4 text-slate-300 flex-grow">
        <li class="flex items-center">
          <svg class="h-5 w-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Unlimited Projects
        </li>
        <li class="flex items-center">
          <svg class="h-5 w-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Priority Support
        </li>
        <li class="flex items-center">
          <svg class="h-5 w-5 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Custom Domain
        </li>
      </ul>
      <button class="mt-8 w-full py-4 px-6 rounded-xl bg-indigo-500 text-white font-bold hover:bg-indigo-600 transition-shadow shadow-lg shadow-indigo-500/20">Get Started Now</button>
    </div>

    <!-- Enterprise Plan -->
    <div class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
      <h3 class="text-lg font-semibold text-slate-900">Enterprise</h3>
      <p class="mt-4 text-slate-500 italic">For large scale apps</p>
      <div class="mt-6">
        <span class="text-4xl font-bold text-slate-900">$99</span>
        <span class="text-slate-500">/mo</span>
      </div>
      <ul class="mt-8 space-y-4 text-slate-600 flex-grow">
        <li class="flex items-center">
          <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Everything in Pro
        </li>
        <li class="flex items-center">
          <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          Dedicated Server
        </li>
      </ul>
      <button class="mt-8 w-full py-3 px-6 rounded-xl border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors">Contact Sales</button>
    </div>

  </div>
</section>
```
