import { Link } from 'react-router-dom';
import { Search, Filter, User, Share2, MessageSquare, AtSign } from 'lucide-react';

export function Header({ showSearch = false }: { showSearch?: boolean }) {
  return (
    <header className="bg-zinc-950 border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-[9px] tracking-[0.4em] uppercase text-zinc-500 font-bold mb-0.5">Culinary / Journal</div>
            <Link to="/" className="text-2xl font-black italic tracking-tighter text-white hover:text-zinc-300 transition-colors">
              Send Flicks&trade;
            </Link>
          </div>
          
          <div className="flex items-center gap-8">
            {showSearch && (
              <div className="hidden md:flex items-center gap-3 px-0 py-2 border-b border-zinc-800 focus-within:border-white transition-all">
                <Search className="w-4 h-4 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="SEARCH ARCHIVE" 
                  className="bg-transparent border-none focus:outline-none text-[10px] font-bold tracking-widest w-40 uppercase"
                />
              </div>
            )}
            
            <div className="flex items-center gap-6">
              <button className="text-zinc-400 hover:text-white transition-colors">
                <Filter className="w-5 h-5" />
              </button>
              <div className="w-5 h-5 bg-white rounded-full cursor-pointer hover:bg-zinc-300 transition-colors flex items-center justify-center overflow-hidden">
                <User className="w-3.5 h-3.5 text-black" />
              </div>
            </div>
          </div>
        </div>
        
        <nav className="flex items-center justify-start gap-10 overflow-x-auto no-scrollbar">
          {['Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Snacks', 'Drinks'].map((item) => (
            <Link 
              key={item} 
              to={`/category/${item.toLowerCase()}`}
              className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.25em] hover:text-white transition-colors whitespace-nowrap"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 flex flex-col gap-4">
          <Link to="/" className="text-xl font-black italic tracking-tighter text-white">FORK & FEAST</Link>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest leading-loose">
            Metric System &copy; 2024. <br />
            Culinary stories for the home kitchen.
          </p>
        </div>
        
        <div className="md:col-span-2 flex flex-col gap-6">
          <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">Explore</h4>
          <div className="flex flex-col gap-3">
            <Link to="/all" className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider hover:text-white transition-colors">
              Recipes
            </Link>
            <Link to="/privacy-policy" className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <a href="mailto:hello@sendflicks.local" className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="md:col-span-3"></div>

        <div className="md:col-span-3 flex flex-col gap-6 md:items-end">
          <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">Follow Us</h4>
          <div className="flex gap-2">
            {[Share2, MessageSquare, AtSign].map((Icon, idx) => (
              <button 
                key={idx}
                className="w-10 h-10 flex items-center justify-center border border-zinc-900 bg-zinc-900/50 rounded-full text-zinc-400 hover:bg-white hover:text-black transition-all"
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
          <div className="mt-4 flex flex-col text-right font-mono text-[9px] text-zinc-700">
            <span>AVAILABLE / 24.04</span>
            <span>FOR WORK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
