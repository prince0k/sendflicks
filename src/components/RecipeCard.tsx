import { motion } from 'motion/react';
import { Heart, SignalHigh, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Recipe {
  id: string;
  title: string;
  image: string;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  calories: string;
  tag: string;
  category: string;
}

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <motion.article 
      whileHover={{ y: -5 }}
      className="group cursor-pointer flex flex-col h-full bg-zinc-900 border border-white/5 hover:border-white/20 transition-all p-1"
    >
      <Link to={`/recipe/${recipe.id}`} className="block relative overflow-hidden aspect-[4/5] bg-zinc-950">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white shadow-sm hover:bg-white hover:text-black transition-all z-10">
          <Heart className="w-4 h-4 fill-none group-hover:fill-current" />
        </button>
        <div className="absolute bottom-4 left-4">
          <span className="bg-white text-black text-[9px] px-3 py-1 uppercase tracking-[0.2em] font-black italic">
            {recipe.category}
          </span>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-bold uppercase tracking-tight text-white leading-none">
            {recipe.title}
          </h3>
          <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest whitespace-nowrap pt-1">
            {recipe.time}
          </span>
        </div>
        
        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-zinc-500 font-mono text-[9px] uppercase tracking-widest">
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5">
              <SignalHigh className="w-3 h-3" /> {recipe.difficulty}
            </span>
            <span className="flex items-center gap-1.5">
              <Flame className="w-3 h-3" /> {recipe.calories}
            </span>
          </div>
          <span className="text-white font-bold tracking-tighter">
            {recipe.tag.toUpperCase()}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function Newsletter() {
  return (
    <section className="bg-zinc-950 py-32 border-t border-white/5 relative overflow-hidden">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black uppercase text-white/2 pointer-events-none whitespace-nowrap">
        NEWSLETTER
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8">
          Kitchen Stories <span className="text-zinc-700 italic">to Inbox</span>
        </h2>
        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-12 max-w-lg mx-auto leading-loose">
          Join 50k+ home cooks receiving weekly recipes, tips, and stories.
        </p>
        <form className="flex flex-col sm:flex-row gap-6">
          <input 
            type="email" 
            placeholder="EMAIL_ADDRESS"
            className="flex-1 px-4 py-5 bg-transparent border-b border-zinc-800 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white transition-colors font-mono text-[10px] tracking-widest"
          />
          <button className="bg-white text-zinc-950 px-12 py-5 font-black uppercase tracking-[0.2em] text-[10px] hover:bg-zinc-200 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
