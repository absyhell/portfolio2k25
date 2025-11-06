import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Briefcase, Award, GraduationCap, User, FileText, Sparkles, Zap, Rocket } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setCursorGlow({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100 overflow-hidden relative">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Cursor Glow Effect */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
          left: `${cursorGlow.x}px`,
          top: `${cursorGlow.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-purple-500/20' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Ayush Raj
          </h1>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative hover:text-cyan-400 transition-colors duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-purple-500/20 animate-float">
            <Code2 className="w-16 h-16" />
          </div>
          <div className="absolute top-40 right-20 text-cyan-500/20 animate-float animation-delay-2000">
            <Database className="w-20 h-20" />
          </div>
          <div className="absolute bottom-40 left-20 text-pink-500/20 animate-float animation-delay-4000">
            <Server className="w-12 h-12" />
          </div>
          <div className="absolute bottom-20 right-40 text-purple-500/20 animate-float animation-delay-1000">
            <Sparkles className="w-14 h-14" />
          </div>
        </div>

        <div className="max-w-4xl text-center relative z-10">
          <div className="mb-6 animate-fade-in-down">
            <span className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-4 border border-purple-500/30 backdrop-blur-sm animate-pulse-slow">
              <Rocket className="w-4 h-4 inline mr-2" />
              Available for Summer 2026 Internships
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            Building Scalable Web Apps
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
            MERN Stack Developer | IoT Enthusiast | ML Explorer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up">
            5th-semester CSE student passionate about creating smart solutions that make a difference. From real-time IoT systems to data-driven web applications, I love turning ideas into reality.
          </p>
          <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-500">
            <a href="https://github.com/absyhell" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-purple-500/50">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ayush-raj-288a0127a/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-blue-500/50">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://leetcode.com/u/AYUSHRAJ72790/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-yellow-600 transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-yellow-500/50">
              <Code2 className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-purple-400 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900/50 relative">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            About Me
          </h3>
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Hey there! I'm Ayush, a 5th-semester Computer Science student at <span className="text-cyan-400 font-semibold">Bangalore Institute of Technology</span>, specializing in Data Science. With a CGPA of 8.6, I'm deeply passionate about building web applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My journey in tech has been exciting—from creating IoT systems that monitor water quality in real-time to developing full-stack web applications that analyze blood donation trends. I'm a <span className="text-purple-400 font-semibold">MERN stack enthusiast</span> with a strong foundation in DSA (300+ LeetCode problems solved, Top 4.2%!) and a growing interest in Machine Learning.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Beyond coding, I'm an active member of the <span className="text-cyan-400 font-semibold">Google Developer Club</span>, where I've participated in 5+ hackathons and led teams in 3 competitions. I also have a creative side—I write poetry and have even been published in a government magazine!
            </p>
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl border border-purple-500/30 hover:scale-105 transition-transform duration-300">
              <h4 className="text-xl font-semibold mb-3 text-cyan-300 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                Hobbies & Interests
              </h4>
              <p className="text-gray-300">
                When I'm not coding, you'll find me writing poetry, exploring new technologies, solving algorithmic challenges, or collaborating with fellow developers on exciting projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Code2 className="w-8 h-8" />, title: 'Frontend', skills: ['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'], color: 'cyan' },
              { icon: <Server className="w-8 h-8" />, title: 'Backend', skills: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs'], color: 'purple' },
              { icon: <Database className="w-8 h-8" />, title: 'Databases', skills: ['MongoDB', 'MySQL'], color: 'pink' },
              { icon: <FileText className="w-8 h-8" />, title: 'Languages', skills: ['Java', 'Python', 'JavaScript'], color: 'cyan' },
              { icon: <Briefcase className="w-8 h-8" />, title: 'Core CS', skills: ['DSA', 'OOP', 'DBMS', 'OS', 'CN'], color: 'purple' },
              { icon: <Award className="w-8 h-8" />, title: 'Other Tools', skills: ['Git/GitHub', 'Generative AI', 'IoT (Arduino)', 'ML Basics'], color: 'pink' }
            ].map((category, idx) => (
              <div 
                key={idx} 
                className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`text-${category.color}-400 mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-purple-300">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-gray-300 hover:bg-purple-500/40 transition-colors duration-200 hover:scale-110 transform">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h3>
          <div className="space-y-8">
            {[
              {
                title: 'Smart Water Quality Monitoring System',
                tech: 'IoT • Arduino • Embedded Systems • C++',
                description: 'Designed an IoT-based embedded system for real-time water quality monitoring with an intelligent alarm system. Integrated multiple sensors (pH, turbidity, temperature, TDS) to track water parameters and alert users when quality falls below safe thresholds.',
                highlights: [
                  'Achieved 95%+ accuracy across 10+ water samples',
                  'Real-time monitoring with instant alert system',
                  'Multi-sensor integration for comprehensive analysis',
                  'Practical application for water safety management'
                ],
                gradient: 'from-blue-500 to-cyan-500',
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: 'Blood Donation Analysis System',
                tech: 'MERN Stack • React.js • Node.js • MongoDB • Data Visualization',
                description: 'Developed a full-stack web application to analyze and visualize regional blood donation trends, helping organizations optimize donor drives and improve blood bank management through data-driven insights.',
                highlights: [
                  'Interactive dashboards for trend analysis',
                  'Regional donation pattern visualization',
                  'Data-driven insights for strategic planning',
                  'Responsive design for cross-platform access'
                ],
                gradient: 'from-red-500 to-pink-500',
                icon: <Database className="w-6 h-6" />
              },
              {
                title: 'Personal Portfolio Website',
                tech: 'React.js • Tailwind CSS • Responsive Design',
                description: 'Built and maintain a modern, professional portfolio website to showcase projects, skills, and achievements. Features smooth animations, responsive design, and an intuitive user experience.',
                highlights: [
                  'Modern UI/UX with gradient effects',
                  'Fully responsive across all devices',
                  'Optimized performance and loading speed',
                  'Clean, maintainable codebase'
                ],
                gradient: 'from-purple-500 to-indigo-500',
                icon: <Code2 className="w-6 h-6" />
              }
            ].map((project, idx) => (
              <div 
                key={idx} 
                className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center space-x-2 px-4 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-xs font-semibold`}>
                    {project.icon}
                    <span>PROJECT {idx + 1}</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 group-hover:scale-125 transform" />
                </div>
                <h4 className="text-2xl font-bold mb-2 text-cyan-300 group-hover:text-cyan-200 transition-colors">{project.title}</h4>
                <p className="text-purple-300 text-sm mb-4">{project.tech}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-purple-300 mb-3">Key Highlights:</h5>
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start space-x-2 group/item">
                      <span className="text-cyan-400 mt-1 group-hover/item:scale-150 transition-transform duration-200">→</span>
                      <span className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Achievements Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education & Achievements
          </h3>
          
          {/* Education */}
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 mb-8 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2">
            <div className="flex items-start space-x-4">
              <GraduationCap className="w-12 h-12 text-cyan-400 flex-shrink-0 animate-pulse-slow" />
              <div>
                <h4 className="text-2xl font-bold text-cyan-300 mb-2">Bangalore Institute of Technology</h4>
                <p className="text-purple-300 mb-2">B.E. in Computer Science and Engineering (Data Science Specialization)</p>
                <p className="text-gray-400 mb-2">2023 - 2027</p>
                <p className="text-xl font-semibold text-cyan-400">CGPA: 8.6</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 mb-8 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
            <h4 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center">
              <Award className="w-8 h-8 mr-3 animate-pulse-slow" />
              Certifications
            </h4>
            <div className="space-y-4">
              {[
                { name: 'Supervised Machine Learning & Regression', org: 'DeepLearning.AI (Stanford) via Coursera' },
                { name: 'Postman API Fundamentals', org: 'Postman' }
              ].map((cert, idx) => (
                <div key={idx} className="pl-6 border-l-2 border-purple-500 hover:border-cyan-400 transition-colors duration-300 hover:pl-8 transform transition-all">
                  <p className="text-gray-200 font-semibold">{cert.name}</p>
                  <p className="text-gray-400 text-sm">{cert.org}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 hover:border-pink-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20 transform hover:-translate-y-2">
            <h4 className="text-2xl font-bold text-cyan-300 mb-6">Achievements</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'LeetCode Excellence', subtitle: '100 Days Badge • Top 4.2%', desc: '300+ problems solved across multiple difficulty levels', gradient: 'from-yellow-900/30 to-orange-900/30', border: 'yellow-500/30' },
                { title: 'Google Developer Club', subtitle: 'Active Member', desc: '5+ hackathons participated • Led 3 teams in competitions', gradient: 'from-blue-900/30 to-cyan-900/30', border: 'cyan-500/30' },
                { title: 'Published Author', subtitle: '', desc: 'Literary work featured in government magazine', gradient: 'from-purple-900/30 to-pink-900/30', border: 'purple-500/30' },
                { title: 'GSoC Challenges', subtitle: '', desc: 'Participated in Google Summer of Code related competitions', gradient: 'from-green-900/30 to-emerald-900/30', border: 'green-500/30' }
              ].map((achievement, idx) => (
                <div 
                  key={idx}
                  className={`bg-gradient-to-r ${achievement.gradient} rounded-xl p-6 border border-${achievement.border} hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer`}
                >
                  <h5 className="text-lg font-semibold text-yellow-300 mb-2">{achievement.title}</h5>
                  {achievement.subtitle && <p className="text-gray-300 text-sm mb-2">{achievement.subtitle}</p>}
                  <p className="text-gray-400 text-sm">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            Let's Connect!
          </h3>
          <p className="text-xl text-gray-300 mb-12">
            I'm actively looking for <span className="text-cyan-400 font-semibold">Summer 2026 internship opportunities</span> in MERN stack development. Let's build something amazing together!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
            <a href="mailto:ayushrajbit27@gmail.com" className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 group">
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              <span>Email Me</span>
            </a>
            <a href="https://www.linkedin.com/in/ayush-raj-288a0127a/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-6 py-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/absyhell" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-6 py-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
            <p className="text-gray-400 text-sm">
              Based in India • Open to remote and on-site opportunities • Available from May 2026
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Ayush Raj. Built with React & Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Crafted with 💜 and lots of ☕
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-scroll { animation: scroll 2s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out; }
        .animate-pulse-slow { animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </div>
  );
}
