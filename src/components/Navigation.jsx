const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
          YP
        </div>
        
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
          <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
        </div>
        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-purple-400">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
          <div className="flex flex-col gap-4 p-4">
            <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
            <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};
