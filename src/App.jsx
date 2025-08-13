import { useState, useEffect, useRef, createContext } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSun, FaMoon, FaExternalLinkAlt, FaAppStore, FaGooglePlay, FaBehance, FaGithub } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

// Social media profile URLs - replace with your actual usernames
const socialLinks = {
  facebook: 'https://www.facebook.com/profile.php?id=61579020306270',
  twitter: 'https://twitter.com/YourUsername', 
  instagram: 'https://www.instagram.com/perby_chae/',
  linkedin: 'https://www.linkedin.com/in/shenny-chagge-620233281/',
  behance: 'https://www.behance.net/shennylenn',
  github: 'https://github.com/Chagge-40'
}

// Theme context
const ThemeContext = createContext()

function Navbar({ darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header className={`sticky top-0 z-40 backdrop-blur border-b transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900/80 border-gray-700' 
        : 'bg-white/80 border-gray-100'
    }`}>
      <div className="container-page flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 font-black text-2xl tracking-tight">
          <img src="/images/logo.png" alt="CHAE Logo" className="h-35 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium transition-colors">
          {navLinks.map((n) => (
            <a 
              key={n.label} 
              href={n.href} 
              className={`hover:text-purple-500 transition-colors ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md transition-colors ${
              darkMode 
                ? 'text-gray-300 hover:bg-gray-800' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              darkMode 
                ? 'text-yellow-400 hover:bg-gray-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <a className="btn-primary hidden sm:inline-flex" href="mailto:shennylenn@gmail.com?subject=CV Request&body=Hello Shenny,%0D%0A%0D%0AI would like to request your CV/Resume.%0D%0A%0D%0ABest regards">
            Request CV
          </a>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t transition-colors duration-300 ${
          darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-100 bg-white'
        }`}>
          <div className="container-page py-4 space-y-3">
            {navLinks.map((n) => (
              <a 
                key={n.label} 
                href={n.href} 
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors hover:text-purple-500 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {n.label}
              </a>
            ))}
            <div className="pt-2">
              <a 
                className="btn-primary w-full text-center" 
                href="mailto:shennylenn@gmail.com?subject=CV Request&body=Hello Shenny,%0D%0A%0D%0AI would like to request your CV/Resume.%0D%0A%0D%0ABest regards"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero({ darkMode }) {
  return (
    <section id="home" className="section">
      <div className="container-page grid md:grid-cols-2 items-center gap-10">
        <div className="space-y-6">
          <p className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Hi I am</p>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Shenny Chagge <span className="block">DIGITAL</span> <span className={darkMode ? 'text-white' : 'text-gray-900'}>creative</span>
          </h1>
          <p className={`max-w-xl ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            I’m Shenny Chagge, the creative behind CHAE a digital studio specializing in design, motion graphics, and UI/UX development.
          </p>
          <div>
            <a href="#contact" className="btn-primary">Hire Me</a>
          </div>
        </div>
        <div className="relative mx-auto">
          <div className={`relative h-72 w-72 sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem] rounded-full border-8 overflow-hidden ${
            darkMode ? 'border-gray-700' : 'border-gray-100'
          }`}>
            <img
              src="/images/shenny.jpg"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function About({ darkMode }) {
  return (
    <section id="about" className="section">
      <div className="container-page grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-5">
          <h2 className={`heading ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
          <p className={`${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            My name is Shenny Chagge, a multidisciplinary creative with a background in Computer Science. Through CHAE, I help brands
            communicate visually through graphic design, motion graphics, and intuitive UI/UX design.
          </p>
          <div className={`flex gap-4 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <a aria-label="Facebook" href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors"><FaFacebookF /></a>
            <a aria-label="Twitter" href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors"><FaTwitter /></a>
            <a aria-label="Instagram" href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors"><FaInstagram /></a>
            <a aria-label="LinkedIn" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors"><FaLinkedinIn /></a>
            <a aria-label="Behance" href={socialLinks.behance} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors"><FaBehance /></a>
            <a aria-label="GitHub" href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors"><FaGithub /></a>
          </div>
        </div>
        <div className="space-y-6">
          {[{
            label: 'Website & mobile application development', value: 85,
          }, {
            label: 'Brand design and identity', value: 78,
          }, {
            label: 'Graphic Design and motion design', value: 90,
          }].map((skill) => (
            <div key={skill.label}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{skill.label}</span>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{skill.value}%</span>
              </div>
              <div className={`h-2.5 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div className="h-2.5 rounded-full bg-orange-500" style={{ width: `${skill.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services({ darkMode }) {
  const items = [
    { 
      title: 'UI/UX', 
      icon: '🎯',
      description: 'Creating intuitive user interfaces and seamless user experiences that delight users and drive engagement.'
    },
    { 
      title: 'Web & app', 
      icon: '💻',
      description: 'Building responsive, scalable web applications and mobile apps with modern technologies and best practices.'
    },
    { 
      title: 'Brand design', 
      icon: '🏷️',
      description: 'Developing unique brand identities that reflect your values and connect with your target audience.'
    },
    { 
      title: 'Graphic Design', 
      icon: '🎨',
      description: 'Creating compelling visual content that communicates your message effectively and stands out from the competition.'
    },
  ]
  return (
    <section id="services" className={`section transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className={`heading ${darkMode ? 'text-white' : 'text-gray-900'}`}>Services</h2>
          <p className={`max-w-2xl mx-auto mt-3 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            I transform ideas into digital reality through innovative design and development solutions that help businesses grow and succeed online.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s) => (
            <div key={s.title} className={`rounded-xl border p-6 hover:shadow-sm transition-colors duration-300 ${
              darkMode 
                ? 'border-gray-600 bg-gray-700 hover:bg-gray-600' 
                : 'border-gray-200 hover:bg-gray-50'
            }`}>
              <div className="text-3xl">{s.icon}</div>
              <h3 className={`mt-4 font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{s.title}</h3>
              <p className={`mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects({ darkMode }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [isHovered, setIsHovered] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const scrollRef = useRef(null)
  
  const categories = ['All', 'UI/UX', 'Web & app', 'Brand design', 'Graphic Design']
  const allCards = [
    { 
      img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop', 
      cat: 'Web & app', 
      title: 'AirCalling Landing Page Design',
      description: 'A modern, responsive landing page for AirCalling, a cloud-based calling platform. Features include user authentication, call management dashboard, and seamless mobile experience.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      duration: '3 weeks',
      client: 'AirCalling Inc.',
      website: 'https://aircalling.com',
      type: 'website'
    },
    { 
      img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop', 
      cat: 'Web & app', 
      title: 'Business Landing Page Design',
      description: 'Professional business website with lead generation forms, service showcases, and integrated analytics. Optimized for conversion and user engagement.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      duration: '2 weeks',
      client: 'Business Solutions Ltd.',
      website: 'https://businesssolutions.com',
      type: 'website'
    },
    { 
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop', 
      cat: 'Web & app', 
      title: 'Ecom Web Page Design',
      description: 'Full-featured e-commerce platform with shopping cart, payment integration, product catalog, and admin dashboard. Mobile-first responsive design.',
      technologies: ['React', 'Redux', 'Stripe API', 'Firebase'],
      duration: '6 weeks',
      client: 'ShopEasy Online',
      website: 'https://shopeasy.com',
      type: 'website'
    },
    { 
      img: 'https://images.unsplash.com/photo-1547658719-4f171f25ec3c?q=80&w=800&auto=format&fit=crop', 
      cat: 'UI/UX', 
      title: 'Mobile App Design',
      description: 'Intuitive mobile app design focusing on user experience and accessibility. Includes wireframes, prototypes, and user testing results.',
      technologies: ['Figma', 'Adobe XD', 'InVision', 'User Research'],
      duration: '4 weeks',
      client: 'TechStart Mobile',
      type: 'design',
      behance: 'https://behance.net/gallery/11223344/Mobile-App-Design-TechStart'
    },
    { 
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop', 
      cat: 'Brand design', 
      title: 'Brand Identity Design',
      description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines. Applied across all marketing materials.',
      technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Strategy'],
      duration: '5 weeks',
      client: 'InnovateCorp',
      type: 'design',
      behance: 'https://behance.net/gallery/12345678/Brand-Identity-Design-InnovateCorp'
    },
    { 
      img: 'https://images.unsplash.com/photo-1626785774573-4b79921d5c4c?q=80&w=800&auto=format&fit=crop', 
      cat: 'Graphic Design', 
      title: 'Marketing Materials',
      description: 'Comprehensive marketing collateral including brochures, social media graphics, email templates, and print advertisements.',
      technologies: ['Adobe Creative Suite', 'Canva Pro', 'Print Design'],
      duration: '3 weeks',
      client: 'Marketing Pro Agency',
      type: 'design',
      behance: 'https://behance.net/gallery/87654321/Marketing-Materials-Collection'
    },
  ]
  
  const filteredCards = activeCategory === 'All' ? allCards : allCards.filter(card => card.cat === activeCategory)
  
  // Auto-scrolling effect
  useEffect(() => {
    if (!scrollRef.current || isHovered) return
    
    const scrollContainer = scrollRef.current
    let scrollPosition = 0
    const scrollSpeed = 1
    
    const scroll = () => {
      if (isHovered) return
      
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }
    
    const interval = setInterval(scroll, 50)
    return () => clearInterval(interval)
  }, [isHovered])

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300
    }
  }
  
  return (
    <section id="projects" className="section">
      <div className="container-page">
        <div className="text-center mb-10">
          <h2 className={`heading ${darkMode ? 'text-white' : 'text-gray-900'}`}>My Projects</h2>
          <p className={`max-w-xl mx-auto mt-3 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>Providing creative and technical solutions to help businesses and individuals build, design, and grow their digital presence</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button 
              key={category} 
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                activeCategory === category 
                  ? 'bg-gray-900 text-white border-gray-900' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Manual Navigation Controls - Hidden on mobile for better touch experience */}
        <div className="hidden md:flex items-center justify-center gap-4 mb-6">
          <button 
            onClick={scrollLeft}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button 
            onClick={scrollRight}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>

        <div 
          ref={scrollRef}
          className="overflow-x-auto touch-pan-x"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex gap-6 min-w-max">
            {filteredCards.map((card) => (
              <article 
                key={card.title} 
                className="group w-80 flex-shrink-0 cursor-pointer"
                onClick={() => setSelectedProject(card)}
              >
                <div className={`aspect-[3/4] overflow-hidden rounded-2xl border bg-gray-50 ${
                  darkMode ? 'border-gray-600' : 'border-gray-200'
                }`}>
                  <img src={card.img} alt="" className="h-full w-full object-cover group-hover:scale-105 transition" />
                </div>
                <p className={`mt-3 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{card.cat}</p>
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{card.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className={`text-2xl transition-colors ${
                    darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  ×
                </button>
              </div>
              
              <img 
                src={selectedProject.img} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              
              <div className="space-y-4">
                <p className={`${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{selectedProject.description}</p>
                
                <div>
                  <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Duration:</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{selectedProject.duration}</p>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Client:</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{selectedProject.client}</p>
                  </div>
                </div>

                {/* Project Links */}
                {selectedProject.type === 'website' && selectedProject.website && (
                  <div className={`pt-4 border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <h4 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Visit Website:</h4>
                    <a 
                      href={selectedProject.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                    >
                      <FaExternalLinkAlt />
                      Open Website
                    </a>
                  </div>
                )}

                {selectedProject.type === 'mobile-app' && (
                  <div className={`pt-4 border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <h4 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Download App:</h4>
                    <div className="flex gap-3">
                      {selectedProject.appStore && (
                        <a 
                          href={selectedProject.appStore} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          <FaAppStore />
                          App Store
                        </a>
                      )}
                      {selectedProject.playStore && (
                        <a 
                          href={selectedProject.playStore} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <FaGooglePlay />
                          Google Play
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {selectedProject.type === 'design' && (
                  <div className={`pt-4 border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <p className={`italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      This is a design project. Click to view detailed mockups and design files. 
                      The project includes comprehensive design documentation, mockups, prototypes, 
                      and final deliverables that showcase the complete creative process.
                    </p>
                    {selectedProject.behance && (
                      <div className="mt-4">
                        <h4 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>View on Behance:</h4>
                        <a 
                          href={selectedProject.behance} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <FaBehance />
                          View Project on Behance
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function Testimonials({ darkMode }) {
  const [showForm, setShowForm] = useState(false)
  const [rating, setRating] = useState(5)
  const [testimonial, setTestimonial] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [company, setCompany] = useState('')
  
  // State for storing all testimonials
  const [testimonials, setTestimonials] = useState(() => {
    // Load testimonials from localStorage on component mount
    const saved = localStorage.getItem('portfolio-testimonials')
    return saved ? JSON.parse(saved) : [
      {
        id: 1,
        name: 'Timoth Johnson',
        role: 'CEO',
        company: 'TechStart Mobile',
        rating: 5,
        text: 'Working with Shenny was an absolute pleasure. His attention to detail and creative vision brought our mobile app design to life in ways we never imagined. The user experience is intuitive and the visual design is stunning.',
        date: '2024-01-15',
        avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop'
      },
      {
        id: 2,
        name: 'Michael Chen',
        role: 'Marketing Director',
        company: 'InnovateCorp',
        rating: 5,
        text: 'Shenny delivered an exceptional brand identity that perfectly captures our company values. The logo design, color palette, and overall brand guidelines have significantly improved our market presence.',
        date: '2024-01-10',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
      }
    ]
  })
  
  const [showAllTestimonials, setShowAllTestimonials] = useState(false)

  // Save testimonials to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('portfolio-testimonials', JSON.stringify(testimonials))
  }, [testimonials])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create new testimonial object
    const newTestimonial = {
      id: Date.now(), // Use timestamp as unique ID
      name: name.trim(),
      role: role.trim(),
      company: company.trim(),
      rating: rating,
      text: testimonial.trim(),
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      avatar: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?q=80&w=200&auto=format&fit=crop` // Random avatar
    }
    
    // Store user's name for delete permissions
    localStorage.setItem('current-user', name.trim())
    
    // Add new testimonial to the beginning of the list
    setTestimonials(prev => [newTestimonial, ...prev])
    
    // Reset form
    setTestimonial('')
    setName('')
    setRole('')
    setCompany('')
    setRating(5)
    setShowForm(false)
    
    // Show success message (optional)
    alert('Thank you for your testimonial! It has been added to the page.')
  }

  const deleteTestimonial = (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(prev => prev.filter(t => t.id !== id))
    }
  }

  return (
    <section id="testimonials" className="section">
      <div className="container-page">
        <div className="text-center mb-10">
          <h2 className={`heading ${darkMode ? 'text-white' : 'text-gray-900'}`}>Testimonials</h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>Hear what clients say about working with me, or share your own experience below.</p>
        </div>
        
        {/* Dynamic Testimonials List - Show only latest 5 */}
        <div className="space-y-6 mb-8">
          {testimonials.slice(0, 5).map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`mx-auto max-w-4xl rounded-2xl border p-8 md:p-10 transition-colors duration-300 ${
                darkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-center">
                <img 
                  className="h-16 w-16 rounded-full object-cover" 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                />
                <div className="flex-1 space-y-1">
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {testimonial.role}
                    {testimonial.company && ` at ${testimonial.company}`}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span 
                          key={star} 
                          className={`text-lg ${star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {testimonial.rating}/5
                    </span>
                  </div>
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    {new Date(testimonial.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                {/* Delete button - only show for admin or testimonial author */}
                {(localStorage.getItem('admin-mode') === 'true' || testimonial.name === localStorage.getItem('current-user')) && (
                  <button
                    onClick={() => deleteTestimonial(testimonial.id)}
                    className={`p-2 rounded-full hover:bg-red-100 transition-colors ${
                      darkMode ? 'text-red-400 hover:bg-red-900/20' : 'text-red-500 hover:bg-red-50'
                    }`}
                    title="Delete testimonial"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
              <p className={`mt-6 leading-relaxed ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* View More Link - Show only if there are more than 5 testimonials */}
        {testimonials.length > 5 && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAllTestimonials(!showAllTestimonials)}
              className={`text-purple-600 hover:text-purple-700 font-medium transition-colors ${
                darkMode ? 'hover:text-purple-400' : 'hover:text-purple-800'
              }`}
            >
              {showAllTestimonials ? 'Show Less' : `View All ${testimonials.length} Testimonials`}
            </button>
          </div>
        )}

        {/* Show All Testimonials when expanded */}
        {showAllTestimonials && testimonials.length > 5 && (
          <div className="space-y-6 mb-8">
            {testimonials.slice(5).map((testimonial) => (
              <div 
                key={testimonial.id}
                className={`mx-auto max-w-4xl rounded-2xl border p-8 md:p-10 transition-colors duration-300 ${
                  darkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                  <img 
                    className="h-16 w-16 rounded-full object-cover" 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                  />
                  <div className="flex-1 space-y-1">
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {testimonial.role}
                      {testimonial.company && ` at ${testimonial.company}`}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span 
                            key={star} 
                            className={`text-lg ${star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {testimonial.rating}/5
                      </span>
                    </div>
                    <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      {new Date(testimonial.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  {/* Delete button for expanded view */}
                  {(localStorage.getItem('admin-mode') === 'true' || testimonial.name === localStorage.getItem('current-user')) && (
                    <button
                      onClick={() => deleteTestimonial(testimonial.id)}
                      className={`p-2 rounded-full hover:bg-red-100 transition-colors ${
                        darkMode ? 'text-red-400 hover:bg-red-900/20' : 'text-red-500 hover:bg-red-50'
                      }`}
                      title="Delete testimonial"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </div>
                <p className={`mt-6 leading-relaxed ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Add Testimonial Button */}
        <div className="text-center">
          <button 
            onClick={() => setShowForm(!showForm)}
            className="btn-primary"
          >
            {showForm ? 'Cancel' : 'Add Your Testimonial'}
          </button>
        </div>

        {/* Testimonial Form */}
        {showForm && (
          <div className="mx-auto max-w-2xl mt-8">
            <form onSubmit={handleSubmit} className={`rounded-2xl p-8 border transition-colors duration-300 ${
              darkMode 
                ? 'border-gray-600 bg-gray-800' 
                : 'border-gray-200 bg-gray-50'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 text-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>Share Your Experience</h3>
              
              <div className="space-y-4">
                {/* Rating */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                  <p className={`text-sm mt-1 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>{rating} out of 5 stars</p>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                      darkMode 
                        ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="role" className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Your Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                      darkMode 
                        ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="e.g., CEO, Designer, Developer"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                      darkMode 
                        ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Enter company name (optional)"
                  />
                </div>

                {/* Testimonial */}
                <div>
                  <label htmlFor="testimonial" className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Your Testimonial *
                  </label>
                  <textarea
                    id="testimonial"
                    value={testimonial}
                    onChange={(e) => setTestimonial(e.target.value)}
                    required
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                      darkMode 
                        ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                        : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Share your experience working with me..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Submit Testimonial
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

function CTA({ darkMode }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    
    // Create mailto link with your email
    const mailtoLink = `mailto:shennylenn@gmail.com?subject=Portfolio Contact from ${email}&body=Hello Shenny,%0D%0A%0D%0AI would like to discuss a project with you.%0D%0A%0D%0AEmail: ${email}%0D%0A%0D%0ABest regards`
    
    // Open default email client
    window.open(mailtoLink, '_blank')
  }

  return (
    <section id="contact" className="section">
      <div className="container-page text-center">
        <h2 className={`heading ${darkMode ? 'text-white' : 'text-gray-900'}`}>Let{'\''}s Design Together</h2>
        <p className={`max-w-2xl mx-auto mt-3 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>Ready to start your next project? Send me a message and let's create something amazing together.</p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <input 
            type="email" 
            name="email"
            placeholder="Enter Your Email" 
            required
            className={`w-full sm:w-96 rounded-full border px-5 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
              darkMode 
                ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' 
                : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
            }`}
          />
          <button type="submit" className="btn-primary">Contact Me</button>
        </form>
        <p className={`mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>I'll get back to you at shennylenn@gmail.com</p>
      </div>
    </section>
  )
}

function Footer({ darkMode }) {
  return (
    <footer className={`border-t py-12 transition-colors duration-300 ${
      darkMode ? 'border-gray-700' : 'border-gray-200'
    }`}>
      <div className="container-page text-center">
        <div className="flex items-center justify-center gap-2 font-black text-2xl">
          <img src="/images/logo.png" alt="CHAE Logo" className="h-20 w-auto" />
        </div>
        <nav className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm transition-colors">
          {navLinks.map((n) => (
            <a 
              key={n.label} 
              href={n.href} 
              className={`hover:text-purple-500 transition-colors ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="mt-6 flex items-center justify-center gap-4 transition-colors">
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className={`hover:text-purple-500 transition-colors ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}><FaFacebookF /></a>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className={`hover:text-purple-500 transition-colors ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}><FaTwitter /></a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={`hover:text-purple-500 transition-colors ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}><FaInstagram /></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={`hover:text-purple-500 transition-colors ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}><FaLinkedinIn /></a>
          <a href={socialLinks.behance} target="_blank" rel="noopener noreferrer" className={`hover:text-purple-500 transition-colors ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}><FaBehance /></a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className={`hover:text-purple-500 transition-colors ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}><FaGithub /></a>
        </div>
        <p className={`mt-6 text-xs transition-colors ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>© 2025 CHAE digital creative All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`transition-colors duration-300 ${
      darkMode 
        ? 'text-gray-100 bg-gray-900' 
        : 'text-gray-900 bg-white'
    }`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <CTA darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/255625304234?text=Hello%20Shenny!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            darkMode 
              ? 'bg-green-500 hover:bg-green-600 text-white' 
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
