import { motion } from 'motion/react';
import { Coffee, UtensilsCrossed, Utensils, Cake, Cookie, GlassWater, Flame, Soup } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Breakfast', icon: Coffee, path: '/category/breakfast' },
  { name: 'Lunch', icon: UtensilsCrossed, path: '/category/lunch' },
  { name: 'Dinner', icon: Utensils, path: '/category/dinner' },
  { name: 'Desserts', icon: Cake, path: '/category/desserts' },
  { name: 'Snacks', icon: Cookie, path: '/category/snacks' },
  { name: 'Drinks', icon: GlassWater, path: '/category/drinks' },
  { name: 'Grilling', icon: Flame, path: '/category/grilling' },
  { name: 'Slow Cooker', icon: Soup, path: '/category/slow-cooker' },
];

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex flex-col justify-end overflow-hidden bg-zinc-950 px-6 pb-20">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5AFu_VauF8kFE4g7lfaofnW1Up9sSYxN0kOPaRfaji5af8RhhW03BP711psf1wLnt4SRdvrm_RpYqzkJYiAslWCGaqw-ndWcS_6Vy271kuhNFyKH7YEqdehQjyiQzv5U441vp5WuwrtgbW4dJ3xuPRTGoIRThKu8nJVXqk1mCy-v074NXAP1eqV8JjZG0y8-xqQl6Gx1o3GwcvEpDMRv7cOSqlzIJSYnehjLLuu7r3UkxsoRxPSHbEE3-fXWMmOpbwh9Q-xdLZOs"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-1"></div>
      
      <div className="absolute top-0 left-0 w-full flex justify-center opacity-5 pointer-events-none select-none overflow-hidden z-0">
        <h1 className="text-[28vw] font-black uppercase leading-[0.75] tracking-[-0.05em] translate-y-[-10%]">
          FLAVOR
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-bold mb-4">Masterpiece / Southern Cuisine</div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-white">
            Slow-Roasted <br />
            <span className="text-zinc-600">Southern</span> Roast
          </h1>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/recipe/pot-roast" className="px-10 py-5 bg-white text-zinc-950 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-zinc-200 transition-all active:scale-95 shadow-2xl">
              Start Cooking
            </Link>
            <button className="px-10 py-5 border border-zinc-700 text-white font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white/10 transition-all">
              Save Archive
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CategoryBrowse() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-y border-white/5">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-600">Browse Collections</h2>
        <div className="h-px bg-zinc-900 flex-1 mx-8 mb-1"></div>
        <Link to="/all" className="text-[10px] font-black uppercase tracking-widest text-white hover:text-zinc-400 transition-colors">View All</Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-px bg-zinc-900 border border-zinc-900">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-zinc-950 h-40 p-6 flex flex-col justify-between hover:bg-zinc-900 cursor-pointer group transition-colors"
            >
              <Link to={cat.path} className="flex flex-col h-full justify-between">
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Type / {cat.name.slice(0, 3)}</span>
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">{cat.name}</h3>
                  <Icon className="w-4 h-4 text-zinc-700 group-hover:text-white transition-colors" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
