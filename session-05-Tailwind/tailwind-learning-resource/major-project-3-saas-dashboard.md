# Major Project 3: SaaS Dashboard (Dark Mode)

## The Goal
Design a data-rich, responsive SaaS Dashboard that demonstrates:
- **Complex Layout**: Sidebar and Header with a multi-column main area.
- **Data Visualization**: Styled statistics cards and tables.
- **Search & Filtering**: UI elements for managing data.
- **Dark Mode**: Professional high-contrast dark theme.

## 🛠 Hand's on Instructions
1. Use `md:flex` to create the sidebar-main layout.
2. Use `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` for the stats cards.
3. Implement `hover:bg-slate-50 dark:hover:bg-slate-800` for table rows.

---

## ✅ Solution Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
    }
  </script>
  <title>Analytics Dashboard</title>
</head>
<body class="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans">

  <div class="flex min-h-screen">
    
    <!-- Sidebar -->
    <aside class="hidden lg:flex w-64 flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 sticky top-0 h-screen">
      <div class="p-6">
        <h2 class="text-xl font-bold flex items-center gap-2">
          <div class="w-8 h-8 bg-indigo-600 rounded"></div> Horizon
        </h2>
      </div>
      
      <nav class="flex-1 px-4 space-y-1">
        <a href="#" class="flex items-center px-4 py-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 rounded-xl font-semibold">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          Dashboard
        </a>
        <a href="#" class="flex items-center px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          Analytics
        </a>
        <a href="#" class="flex items-center px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1m0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          Users
        </a>
      </nav>

      <div class="p-4 border-t border-slate-200 dark:border-slate-800">
        <button onclick="document.documentElement.classList.toggle('dark')" class="w-full flex items-center justify-center p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          <svg class="w-5 h-5 mr-2 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
          <svg class="w-5 h-5 mr-2 hidden dark:block text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          Theme Toggle
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col">
      <header class="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 flex items-center justify-between">
        <h1 class="text-xl font-bold">Dashboard</h1>
        <div class="flex items-center gap-4">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </span>
            <input type="text" placeholder="Search..." class="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm border-none focus:ring-2 ring-indigo-500 outline-none">
          </div>
          <img class="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700" src="https://ui-avatars.com/api/?name=User" alt="User">
        </div>
      </header>

      <div class="p-8">
        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p class="text-sm text-slate-500 dark:text-slate-400">Total Revenue</p>
            <h3 class="text-2xl font-bold mt-2">$45,231.89</h3>
            <span class="text-emerald-500 text-xs font-bold font-semibold">+20.1% from last month</span>
          </div>
          <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p class="text-sm text-slate-500 dark:text-slate-400">Active Subscriptions</p>
            <h3 class="text-2xl font-bold mt-2">+2350</h3>
            <span class="text-emerald-500 text-xs font-bold font-semibold">+180.1% from last month</span>
          </div>
          <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p class="text-sm text-slate-500 dark:text-slate-400">Monthly Usage</p>
            <div class="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-indigo-600 w-[65%]"></div>
            </div>
            <p class="text-[10px] mt-2 text-slate-400 uppercase">65% of monthly allowance used</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p class="text-sm text-slate-500 dark:text-slate-400">Support Tickets</p>
            <h3 class="text-2xl font-bold mt-2">12</h3>
            <span class="text-rose-500 text-xs font-bold font-semibold">+2 new since yesterday</span>
          </div>
        </div>

        <!-- Recent Activity Table -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div class="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h3 class="font-bold">Recent Transactions</h3>
            <button class="text-sm text-indigo-600 font-medium hover:underline">View All</button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead class="bg-slate-50 dark:bg-slate-800/50 text-[10px] uppercase font-bold text-slate-400">
                <tr>
                  <th class="px-6 py-3">Customer</th>
                  <th class="px-6 py-3">Status</th>
                  <th class="px-6 py-3">Amount</th>
                  <th class="px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td class="px-6 py-4 font-medium italic">John Doe</td>
                  <td class="px-6 py-4"><span class="px-2 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs rounded-full">Success</span></td>
                  <td class="px-6 py-4">$250.00</td>
                  <td class="px-6 py-4 text-slate-400 text-xs">Today at 2:00 PM</td>
                </tr>
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td class="px-6 py-4 font-medium italic">Sarah Smith</td>
                  <td class="px-6 py-4"><span class="px-2 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs rounded-full">Pending</span></td>
                  <td class="px-6 py-4">$1,200.00</td>
                  <td class="px-6 py-4 text-slate-400 text-xs">Today at 1:15 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>

</body>
</html>
```
