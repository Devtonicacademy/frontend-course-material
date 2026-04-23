# Mini-Project 1: Modern Profile Card

## The Task
Build a sleek, modern profile card that includes:
- A profile image (circular).
- User name and occupation.
- A short bio.
- Social media stats (Followers, Following, Projects).
- A "Follow" button with a hover effect.

## 🛠 Hand's on Instructions
1. Use `flex` to center the card on the page.
2. Use `shadow-xl` for depth.
3. Use `hover:scale-105` on the card for a subtle "pop" effect.
4. Use `rounded-full` for the avatar.

---

## ✅ Solution Code

You can copy this into [Tailwind Play](https://play.tailwindcss.com/).

```html
<div class="min-h-screen bg-slate-100 flex items-center justify-center p-4">
  <div class="bg-white max-w-sm w-full rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
    <!-- Header/Background -->
    <div class="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
    
    <!-- Profile Info -->
    <div class="px-6 pb-6">
      <div class="relative">
        <img class="w-24 h-24 rounded-full border-4 border-white absolute -top-12 left-0 shadow-md object-cover" 
             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
             alt="Avatar">
      </div>
      
      <div class="mt-16">
        <h2 class="text-2xl font-bold text-slate-800">Alex Rivers</h2>
        <p class="text-indigo-600 font-medium">Senior Product Designer</p>
        <p class="mt-4 text-slate-600 leading-relaxed">
          Passionate about building beautiful, functional user interfaces. Vibe-coding my way through life with Tailwind CSS.
        </p>
      </div>

      <!-- Stats -->
      <div class="mt-6 pt-6 border-t border-slate-100 flex justify-between text-center">
        <div>
          <span class="block text-xl font-bold text-slate-800">2.4k</span>
          <span class="text-xs text-slate-500 uppercase tracking-wider">Followers</span>
        </div>
        <div>
          <span class="block text-xl font-bold text-slate-800">152</span>
          <span class="text-xs text-slate-500 uppercase tracking-wider">Following</span>
        </div>
        <div>
          <span class="block text-xl font-bold text-slate-800">48</span>
          <span class="text-xs text-slate-500 uppercase tracking-wider">Projects</span>
        </div>
      </div>

      <!-- Action Button -->
      <button class="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-95">
        Follow
      </button>
    </div>
  </div>
</div>
```
