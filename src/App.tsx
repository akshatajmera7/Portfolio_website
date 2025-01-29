import { useState } from 'react';
import { Github, Linkedin, Mail, Home, User, Trophy, Code, Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'achievements', icon: Trophy, label: 'Achievements' },
    { id: 'projects', icon: Code, label: 'Projects' },
  ];

  const projects = [
    {
      title: "Collaborative Canvas",
      description: "A real-time collaborative whiteboard application where users can add notes, draw shapes, and write text. Features include multi-user support, real-time updates, and the ability to save/export boards as images or JSON files.",
      github: "https://github.com/akshatajmera7/Collaborative-Canvas",
      tech: ["React", "WebSocket", "Canvas API", "Node.js"]
    },
    {
      title: "Floor Planner",
      description: "Java GUI-based room planning tool with features for saving, reloading, and editing layouts. Includes drag-and-drop functionality and real-time overlap detection.",
      github: "https://github.com/akshatajmera7/Floor_Planner",
      tech: ["Java", "JavaFX", "GUI Development"]
    },
    {
      title: "Slot Machine",
      description: "A JavaScript-based slot machine game with interactive features and animations.",
      github: "https://github.com/akshatajmera7/Slot_machine",
      tech: ["JavaScript", "HTML5", "CSS3", "Web Animation"]
    },
    {
      title: "Todo App",
      description: "A clean and efficient todo application built with JavaScript, featuring task management and local storage.",
      github: "https://github.com/akshatajmera7/ToDo-App",
      tech: ["JavaScript", "Local Storage", "UI/UX", "Front-end"]
    },
    {
      title: "Python Games Collection",
      description: "A collection of interactive games built using Python, demonstrating various programming concepts.",
      github: "https://github.com/akshatajmera7/Python-projects",
      tech: ["Python", "Game Development", "OOP"]
    },
    {
      title: "AgeWell",
      description: "AI-driven elderly care solution, finalist in SEEP 2.0. Provides accessible support for independent living.",
      tech: ["AI/ML", "Healthcare", "Python"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0014] text-white relative">

      <ScrollToTop />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-purple-900/20 backdrop-blur-lg z-50 border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => setActiveSection('home')}
              className="text-xl font-bold text-purple-300 hover:text-purple-100 transition-colors"
            >
              AA
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-purple-300 hover:text-purple-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-purple-300 bg-purple-900/30'
                      : 'text-purple-400 hover:text-purple-200 hover:bg-purple-900/20'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-purple-900/95 border-t border-purple-500/30">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-2 px-4 py-3 w-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-purple-300 bg-purple-900/30'
                    : 'text-purple-400 hover:text-purple-200 hover:bg-purple-900/20'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        {activeSection === 'home' && (
          <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-[#0a0014]" />
            <div className="relative z-10 text-center px-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent bg-300% animate-gradient">
                Akshat Ajmera
              </h1>
              <p className="text-xl text-purple-200 mb-8">Sophomore at BITS Pilani Hyderabad</p>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto animate-fadeIn">
            <h2 className="text-3xl font-bold mb-8 text-purple-400">About Me</h2>
            <div className="space-y-8">
              <Card className="p-6 bg-purple-900/20 border-purple-500/30 hover:bg-purple-900/30 transition-all duration-300">
                <p className="text-lg text-purple-100 leading-relaxed">
                  Hi, I'm Akshat Ajmera, an aspiring software engineer with a strong foundation in computer science fundamentals. My passion lies in exploring cutting-edge technologies, solving complex problems, and building impactful solutions. I thrive in collaborative environments and enjoy working with talented individuals to drive innovation.
                </p>
                <p className="text-lg text-purple-100 leading-relaxed mt-4">
                  With experience in data structures, algorithms, and multimodal data analysis, I am eager to learn from experienced professionals and take on challenging projects that push my boundaries. Whether it's contributing to meaningful initiatives or creating efficient, user-friendly applications, I am committed to delivering exceptional results.
                </p>
                <p className="text-lg text-purple-100 leading-relaxed mt-4">
                  Let's connect and create something extraordinary together!
                </p>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 bg-purple-900/20 border-purple-500/30 hover:bg-purple-900/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JS', 'React-JS', 'DSA'].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-purple-800/50 text-purple-200 hover:bg-purple-700/50 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
                <Card className="p-6 bg-purple-900/20 border-purple-500/30 hover:bg-purple-900/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Effective Communication',
                      'Project Management',
                      'Teamwork',
                      'Leadership',
                      'Critical Thinking',
                    ].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-purple-800/50 text-purple-200 hover:bg-purple-700/50 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Achievements Section */}
        {activeSection === 'achievements' && (
          <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto animate-fadeIn">
            <h2 className="text-3xl font-bold mb-8 text-purple-400">Key Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'IMO INT. RANK - 2',
                'JEE MAINS 99.81%tile',
                'NTSE Qualified',
                'KVPY Scholar',
                'JEE Advanced AIR-7098',
                'NSTSE AIR 93',
              ].map((achievement) => (
                <Card 
                  key={achievement} 
                  className="p-6 bg-purple-900/20 border-purple-500/30 hover:bg-purple-900/30 hover:scale-105 transition-all duration-300"
                >
                  <p className="text-center text-purple-200">{achievement}</p>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto animate-fadeIn">
            <h2 className="text-3xl font-bold mb-8 text-purple-400">Projects</h2>
            <div className="grid gap-8">
              {projects.map((project) => (
                <Card 
                  key={project.title}
                  className="p-6 bg-purple-900/20 border-purple-500/30 hover:bg-purple-900/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-purple-300">{project.title}</h3>
                    {project.github && (
                      <Button variant="outline" size="sm" className="hover:scale-105 transition-all" asChild>
                        <a href={project.github} target="_blank" rel="noopener">
                          <Github className="mr-2 h-4 w-4" /> View on GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                  <p className="text-purple-100 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-purple-800/50 text-purple-200 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-purple-400 bg-purple-900/20">
        <div className="flex justify-center gap-4 mb-4">
          <a 
            href="https://linkedin.com/in/akshatajmera07" 
            target="_blank" 
            rel="noopener" 
            className="hover:text-purple-300 hover:scale-110 transition-all"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com/akshatajmera7" 
            target="_blank" 
            rel="noopener" 
            className="hover:text-purple-300 hover:scale-110 transition-all"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="mailto:akshatajmera777@gmail.com" 
            className="hover:text-purple-300 hover:scale-110 transition-all"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="https://www.instagram.com/akshatajmera07/" 
            target="_blank" 
            rel="noopener" 
            className="hover:text-purple-300 hover:scale-110 transition-all"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a 
            href="https://www.facebook.com/people/Akshat-Ajmera/pfbid02B5fdq8WcQLa69KpHpn995ShDw2ZWZv9EfX8AdUkE7pcbnE3NEnrjU7nu33PsSV33l/" 
            target="_blank" 
            rel="noopener" 
            className="hover:text-purple-300 hover:scale-110 transition-all"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a 
            href="https://x.com/AkshatAjme47165" 
            target="_blank" 
            rel="noopener" 
            className="hover:text-purple-300 hover:scale-110 transition-all"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        <p>© 2024 Akshat Ajmera. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;