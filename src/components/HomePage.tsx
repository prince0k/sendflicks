import { Fragment } from 'react';
import { Hero, CategoryBrowse } from './HomeComponents';
import { RecipeCard, Newsletter } from './RecipeCard';
import { featuredRecipes } from '../data/recipes';

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
