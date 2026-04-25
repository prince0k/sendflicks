import { Fragment } from 'react';
import { Hero, CategoryBrowse } from './HomeComponents';
import { RecipeCard, Newsletter, Recipe } from './RecipeCard';

const featuredRecipes: Recipe[] = [
  {
    id: 'carnitas-tacos',
    title: 'Crispy Pork Carnitas Tacos',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANQwtm1Gi6Xx3PAVXITywnMUSHp-nTdXnSbtVj_Ek7SxcLGalYY_FxMUE7j5TbpsZWH0EAlkqsMXSB5khpEY_0Y99UbYdRSguAHUA_rq11zREp1HNRM9R_qEs3Lndlcc3PtNtyvIbmRnWr087PQNZ7dRGAXrRBIoWTe7QXaAT5jXalM0SFnATOwLMHtzadCwNPgZhC7YQsWBHyyg0UWZhh3ijg-78Aknk9IciALHFn-eTpjSjynXw084W5O1M4mGRNlBYSjTuMBfA',
    time: '45 mins',
    difficulty: 'Medium',
    calories: '420',
    tag: 'Weeknight Easy',
    category: 'Tex-Mex'
  },
  {
    id: 'peach-cobbler',
    title: 'Cast-Iron Peach Cobbler',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAYIppYEOQZ4WS01SARKnIMTx1t0V-0xpIiSYqOumvGTku7mRFsUYOwpO2K1fiHJkjQZyi-7uniV65gS33N4iWXKReUQ7OOftbmvI2aPTKOtGbOg5GF04tX23X4shlkgx6FHoyZlVUWWQ48v_Y2B1cAtwtjhxadNB6OMkMeAaMTfPA_PkXl_oYpSJOf9ALWsC7xhFH2b-_eYj2kDSLe4AVDlEUjsSRX8tnU_njJZeZkO5ThHKTuD4GPx4im-v_twu_ajuhSG6Ks8o',
    time: '1h 15m',
    difficulty: 'Easy',
    calories: '380',
    tag: 'Weekend Project',
    category: 'Southern'
  },
  {
    id: 'shrimp-salad',
    title: 'Summer Harvest Shrimp Salad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHXoB99or97j-rqBtxJheYByJfqOhErDXfzNv4x7P7nwLrNqaaFooHYlkJPC37Y6PWvIOvDK5eoYO-QqgUeW4q0_Pvbs2qbQGy_0BEbkRm4fnZ4KjC9d7DMZEb54G_vfkMTX7Jf57E9fbDe4R1Hp4ktpv1joo02sED-rERO4huF5menxqvGGL6gW8cUPOhEpgjRAphXWVE_U8LienjvgKHkx3HRtaodb_WHL03ZDEWxpzbsIdBDkG8L95yHeH9E1gZdHnhlWXu2ao',
    time: '20 mins',
    difficulty: 'Easy',
    calories: '290',
    tag: 'Weeknight Easy',
    category: 'Coastal'
  }
];

export function HomePage() {
  return (
    <main className="animate-fade-in">
      <Hero />
      <CategoryBrowse />
      
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1b1c1c] mb-3">Featured Recipes</h2>
              <p className="text-[#625e56] font-sans">Seasonal inspirations and quick weeknight solutions.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-5 py-2 bg-[#ffdbd0] text-[#7e2c0d] rounded-full text-[11px] font-bold uppercase tracking-wider">
                Weeknight Easy
              </span>
              <span className="px-5 py-2 bg-[#f0eded] text-[#625e56] rounded-full text-[11px] font-bold uppercase tracking-wider">
                Weekend Project
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
            {featuredRecipes.map((recipe) => (
              <Fragment key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </Fragment>
            ))}
          </div>
        </div>
      </section>
      
      <Newsletter />
    </main>
  );
}
