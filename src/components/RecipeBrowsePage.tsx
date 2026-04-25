import { Link, useParams } from 'react-router-dom';
import { RecipeCard } from './RecipeCard';
import { featuredRecipes } from '../data/recipes';

export function RecipeBrowsePage() {
  const { slug } = useParams();
  const heading = slug ? slug.replace(/-/g, ' ') : 'all recipes';
  const filtered = slug
    ? featuredRecipes.filter((recipe) => recipe.category.toLowerCase() === heading.toLowerCase())
    : featuredRecipes;

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 min-h-[60vh]">
      <div className="mb-10">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2">Browse</p>
        <h1 className="text-4xl md:text-5xl font-serif capitalize">{heading}</h1>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-700 p-8">
          <p className="text-zinc-300 mb-4">No recipes yet in this category.</p>
          <Link to="/all" className="text-white underline underline-offset-4">View all recipes</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </main>
  );
}
