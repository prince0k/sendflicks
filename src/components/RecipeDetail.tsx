import { useState } from 'react';
import { motion } from 'motion/react';
import { Bookmark, Printer, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const relatedRecipes = [
  {
    title: 'Maple Bourbon Baby Back Ribs',
    category: 'Dinner',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg5hTGag1ueOIs19OM9ItodUL4JUMiIKi5V3mC90_qX2-Lrd7EW3hqSRVoqjoAy4Bm0zuehFSlZfIRbmfE8l4jH4sHe_ThKDnigrgEMUzi4n49MSIzgSPfGZgxOUixafw-FHMIbxzgikKd1CQaxswVfrnSFvtoh9Cow7AXox0GJC5hh15Vva8GyE6zmI_QJtTeGbDOyhQAwMF9zVFLgd4KoYuGy-VQ9jsfoBSRc_t9nKleB5ci-x-MT0l1K6m4sKUdRUkqeFcjWB4'
  },
  {
    title: 'Vinegar-Based Carolina Slaw',
    category: 'Sides',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmI0lICVfD71WbR5w-U6hsiEJNAXBokOePxZvVBEEwZUMubYr0hRYegx2ShcH83jTbFSEviG6zdawYhNwP6-LS7Tsrh60T_EnsyKYWQOCgGxFeUwuV3FkaNhOUH2Y48rmTFS_KeUqYzaCtN9QaP1473TgkHnemR1KYi2GX3jXBNG-n0REfRn87aIqsU4YlC2-StSMpgA9nym2hpKuMRm4-m4t1NDpMxhE--7zS7ezuu28xw1kj9MgJbeHoet-VLiPsMpneRbIJaIE'
  },
  {
    title: 'Cast Iron Skillet Cornbread',
    category: 'Sides',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFOxAqVjIndmzCg12rgVTVuwOe2J0oEBBeTZDWSmtVeaJY-VBqg5Zo0lxWT_3s6Sf68BCD5un3kDcerzzZW62nIP5teXIcCofDu4PXbSG8ha1gIAXTpnRCep-JkSs-twXxCzjuM1BK36iQqHPKH4y4eQRJTi91Egfo5YphtW4-a3noifrG1oKqo5Bo03CJF-lOUNCzA-tW6O_4fCknuniMt9UKXWleXABi6f-kTkBsAoI8pecZo4_lsLE9c1HV5A95adMiXHcm4Eg'
  }
];

export function RecipeDetail() {
  const [servings, setServings] = useState(6);

  return (
    <main className="animate-fade-in bg-zinc-950 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none -translate-y-1/4 translate-x-1/4 z-0">
          <h1 className="text-[25vw] font-black uppercase leading-none tracking-tighter">SMOKED</h1>
        </div>

        <div className="flex flex-col gap-12 relative z-10">
          <div className="max-w-4xl">
            <div className="flex gap-4 mb-8">
              {['Southern', 'Weekend Project'].map(tag => (
                <span key={tag} className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 border border-zinc-800 px-4 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-8 leading-[0.9]">
              Slow-Smoked <br />
              <span className="text-zinc-600">Brisket</span> with <br />
              Dr. Pepper Glaze
            </h1>
            <p className="text-2xl font-light italic text-zinc-400 font-serif leading-relaxed max-w-2xl">
              A labor of love that rewards patience with melt-in-your-mouth tenderness and a uniquely sweet, peppery bark.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5">
             <button className="px-10 py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] hover:bg-zinc-200 transition-all flex items-center gap-3">
              <Bookmark className="w-4 h-4" /> Save Archive
            </button>
            <button className="px-10 py-5 border border-zinc-800 text-white font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white/10 transition-all flex items-center gap-3">
              <Printer className="w-4 h-4" /> Print PDF
            </button>
          </div>
        </div>
      </section>

      <div className="w-full aspect-[21/9] h-[50vh] min-h-[400px] overflow-hidden bg-zinc-900 mb-24 grayscale hover:grayscale-0 transition-all duration-1000">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcMeYbZpbyGvBLNkw8hIVc0XqCuRPDPYCh5Q-nqF0jzG65-gMy1fBxM7F1JP2BX_yhSqp8gk0AbDtzfuodYYTp2gMRB-E65xL_xPE37AJZ1EhUmCftupy9brWHOULEgOM5K5eSW5lpHnH0jccAdJUROT4wYbO7HQRtkAgaal4NFsCCKIXeaciVyyHFnCFyuDIyImvtcvroDPMH2vmYq42UJQu969-t1KAsUCSO2eG0D2R9-Pqsc84Qks9VTtlVeRwlCzAKAcUL53A"
          alt="Brisket"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900 mb-24 border border-zinc-900">
        {[
          { label: 'Prep Time', value: '15 mins' },
          { label: 'Cook Time', value: '45 mins' },
          { label: 'Total Time', value: '60 mins' },
          { label: 'Difficulty', value: 'Moderate' }
        ].map(item => (
          <div key={item.label} className="bg-zinc-950 p-10 flex flex-col items-center justify-center text-center">
            <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-2">{item.label}</span>
            <span className="text-xl font-black uppercase tracking-widest text-white">{item.value}</span>
          </div>
        ))}
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
        <aside className="lg:col-span-4 flex flex-col gap-12">
          <div className="bg-zinc-900/30 p-10 border border-white/5">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-white">Ingredients</h3>
              <div className="flex items-center gap-4 bg-zinc-950 border border-zinc-800 p-1">
                <button 
                  onClick={() => setServings(s => Math.max(1, s - 1))}
                  className="w-8 h-8 flex items-center justify-center hover:bg-zinc-800 transition-colors"
                >
                  <Minus className="w-3 h-3 text-zinc-500" />
                </button>
                <div className="flex flex-col items-center px-2">
                  <span className="text-[10px] font-black">{servings}</span>
                </div>
                <button 
                  onClick={() => setServings(s => s + 1)}
                  className="w-8 h-8 flex items-center justify-center hover:bg-zinc-800 transition-colors"
                >
                  <Plus className="w-3 h-3 text-zinc-500" />
                </button>
              </div>
            </div>
            
            <ul className="flex flex-col gap-6 text-[10px] font-bold uppercase tracking-widest">
              {[
                { name: 'Whole Beef Brisket', qty: '12 lbs' },
                { name: 'Coarse Kosher Salt', qty: '1/4 cup' },
                { name: 'Black Peppercorns, cracked', qty: '1/4 cup' },
                { name: 'Dr. Pepper Soda', qty: '2 cups' },
                { name: 'Apple Cider Vinegar', qty: '1/2 cup' },
                { name: 'Dark Brown Sugar', qty: '2 tbsp' },
                { name: 'Garlic Powder', qty: '1 tbsp' },
                { name: 'Cayenne Pepper', qty: '1/2 tsp' }
              ].map(ing => (
                <li key={ing.name} className="flex justify-between items-end border-b border-white/5 pb-3 group">
                  <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">{ing.name}</span>
                  <span className="text-white bg-zinc-800 px-2 font-mono text-[9px]">{ing.qty}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white text-black p-10">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8">Nutrition Analysis</h3>
            <div className="border-b border-black/10 pb-8 mb-8">
              <div className="flex justify-between items-baseline">
                <span className="text-5xl font-black italic tracking-tighter">480</span>
                <span className="text-[9px] uppercase font-bold tracking-widest opacity-60">CAL / SERV</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-y-8">
              {[
                { label: 'Total Fat', val: '32g' },
                { label: 'Protein', val: '42g' },
                { label: 'Carbs', val: '8g' },
                { label: 'Sodium', val: '840mg' }
              ].map(stat => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-[9px] font-bold uppercase opacity-50 mb-1">{stat.label}</span>
                  <span className="text-xl font-black">{stat.val}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <article className="lg:col-span-8">
          <h3 className="text-[11px] font-black uppercase tracking-[0.4em] mb-12 text-zinc-500 border-b border-zinc-900 pb-4">Preparation Archive</h3>
          <div className="flex flex-col gap-16">
            {[
              {
                num: '01',
                title: 'Trim and Season',
                desc: 'Trim the brisket to leave about 1/4 inch of fat cap. Season liberally with the salt and cracked pepper mixture, pressing the spices into the meat. Allow it to sit at room temperature for at least 30 minutes.'
              },
              {
                num: '02',
                title: 'Preheat the Smoker',
                desc: 'Heat your smoker to a consistent 225°F using post oak or hickory wood. Ensure a clean blue smoke is rolling before placing the brisket on the grates, fat-side up.'
              },
              {
                num: '03',
                title: 'The Smoke Journey',
                desc: 'Smoke the brisket until the internal temperature reaches 165°F (usually about 6-8 hours). During the last 2 hours, spritz occasionally with a 50/50 mix of Dr. Pepper and apple cider vinegar.'
              }
            ].map(step => (
              <div key={step.num} className="flex gap-12 group border-l border-zinc-900 pl-8 hover:border-white transition-colors">
                <span className="text-xl font-mono text-zinc-700 font-bold group-hover:text-white transition-colors">{step.num}</span>
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-4">{step.title}</h4>
                  <p className="text-zinc-400 leading-relaxed text-lg font-light">{step.desc}</p>
                </div>
              </div>
            ))}

            <div className="my-8 aspect-video grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-crosshair">
               <img 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuA47MP8DL8Kb835VHxmY6Xv0xd93rqAB4g8U1oT51J4a-aUB69eyH0t_1ZcqXaDtp18m82azfe9b8d21LWiJwov55NrC87uAwo2bWaqOPFige6Mo9UGnIiLX7mPMeQXuErhksyzC3cedrUhVvfSYLgJv-T3Fk-T1BUdS_k4ugvF3BndJ-CvrE5YeSEvp5kZmoHxnjL3ydk1AsGisWO-Cnw6OG7sedN7dY15UvsCtZxvpV7ylJWa5JqP_AlpbVjexMsGff8En38SOvw"
                 alt="Process"
                 className="w-full h-full object-cover"
               />
            </div>

            {[
              {
                num: '04',
                title: 'The Glaze & Wrap',
                desc: 'Mix the remaining Dr. Pepper with brown sugar and spices. Brush the brisket lightly, then wrap tightly in butcher paper. Return to the smoker until it reaches an internal temperature of 203°F.'
              },
              {
                num: '05',
                title: 'The Crucial Rest',
                desc: 'Remove from heat but keep wrapped. Place in an empty cooler and let rest for at least 1-2 hours. This allows the juices to redistribute for maximum tenderness. Slice against the grain to serve.'
              }
            ].map(step => (
              <div key={step.num} className="flex gap-12 group border-l border-zinc-900 pl-8 hover:border-white transition-colors">
                <span className="text-xl font-mono text-zinc-700 font-bold group-hover:text-white transition-colors">{step.num}</span>
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-4">{step.title}</h4>
                  <p className="text-zinc-400 leading-relaxed text-lg font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <section className="bg-zinc-900/20 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-16">Related Experiments</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
            {relatedRecipes.map((r, idx) => (
              <Link key={idx} to="#" className="bg-zinc-950 p-8 group hover:bg-zinc-900 transition-colors">
                <div className="aspect-video overflow-hidden bg-zinc-900 mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-3 block">Category / {r.category}</span>
                <h4 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-zinc-300 transition-colors">{r.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
