const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
          Let's Build Something Amazing
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
        </p>
        
        <Card3D>
          <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12">
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <a href="mailto:yogyashri@example.com" className="flex items-center gap-3 text-purple-300 hover:text-purple-200 transition-colors">
                <Mail className="w-6 h-6" />
                <span className="text-lg">yogyashri@example.com</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-purple-300 hover:text-purple-200 transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="text-lg">LinkedIn Profile</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-purple-300 hover:text-purple-200 transition-colors">
                <Github className="w-6 h-6" />
                <span className="text-lg">GitHub Profile</span>
              </a>
            </div>
          </div>
        </Card3D>
      </div>
    </section>
  );
};
