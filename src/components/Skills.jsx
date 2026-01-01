const Skills = () => {
  const skills = [
    { icon: Code, title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { icon: Server, title: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { icon: Brain, title: "AI/ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API"] },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <Card3D key={idx}>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center mb-6">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};