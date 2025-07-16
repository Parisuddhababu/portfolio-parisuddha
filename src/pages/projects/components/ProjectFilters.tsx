interface ProjectFiltersProps {
  categories: string[];
  active: string;
  setActive: (cat: string) => void;
}

const ProjectFilters = ({ categories, active, setActive }: ProjectFiltersProps) => (
  <div className="flex justify-center mb-12 flex-wrap gap-4">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setActive(cat)}
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
          active === cat
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
            : "bg-white/10 backdrop-blur-sm border border-white/20 text-white/70 hover:text-white hover:bg-white/20"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default ProjectFilters; 