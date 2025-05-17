import { useTabs } from "../hooks/use-tabs";
import { User, Code, Heart } from "lucide-react";

export default function About() {
  const { activeTab, setActiveTab } = useTabs('profile');
  
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="bg-dark/50 border border-primary/20 rounded-3xl p-6 md:p-10 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="100">
          <div className="tabs flex flex-wrap justify-center gap-4 mb-10">
            <button 
              className={`px-6 py-3 rounded-full border border-primary/20 text-light hover:border-primary transition-all ${activeTab === 'profile' ? 'bg-primary text-dark' : 'bg-dark'}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
            <button 
              className={`px-6 py-3 rounded-full border border-primary/20 text-light hover:border-primary transition-all ${activeTab === 'experience' ? 'bg-primary text-dark' : 'bg-dark'}`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
            <button 
              className={`px-6 py-3 rounded-full border border-primary/20 text-light hover:border-primary transition-all ${activeTab === 'personal' ? 'bg-primary text-dark' : 'bg-dark'}`}
              onClick={() => setActiveTab('personal')}
            >
              Personal
            </button>
          </div>
          
          <div className={`tab-content ${activeTab === 'profile' ? 'block animate-slide-up' : 'hidden'}`} id="profile">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80" 
                  alt="Professional VFX Coordinator" 
                  className="rounded-2xl shadow-xl mx-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-dark">
                    <User size={16} />
                  </span>
                  Professional Profile
                </h3>
                <p className="text-light/80 mb-6 leading-relaxed">
                  As a Senior VFX Project Coordinator with 7+ years of experience, I serve as the vital bridge between creative teams and production management. My expertise lies in orchestrating complex visual effects pipelines across major film and television productions.
                </p>
                <p className="text-light/80 mb-8 leading-relaxed">
                  I translate creative visions into actionable production plans, ensuring that every VFX element is delivered on time, within budget, and at the highest quality. My strong technical understanding combined with exceptional organizational skills allows me to anticipate challenges and develop proactive solutions.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-dark/50 p-4 rounded-xl border border-primary/10">
                    <p className="text-sm text-light/60 mb-1">Client Communication</p>
                    <div className="w-full bg-dark/50 h-3 rounded-full">
                      <div className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full" style={{ width: "97%" }}></div>
                    </div>
                  </div>
                  <div className="bg-dark/50 p-4 rounded-xl border border-primary/10">
                    <p className="text-sm text-light/60 mb-1">Project Management</p>
                    <div className="w-full bg-dark/50 h-3 rounded-full">
                      <div className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="bg-dark/50 p-4 rounded-xl border border-primary/10">
                    <p className="text-sm text-light/60 mb-1">VFX Pipeline</p>
                    <div className="w-full bg-dark/50 h-3 rounded-full">
                      <div className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="bg-dark/50 p-4 rounded-xl border border-primary/10">
                    <p className="text-sm text-light/60 mb-1">Team Coordination</p>
                    <div className="w-full bg-dark/50 h-3 rounded-full">
                      <div className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full" style={{ width: "98%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`tab-content ${activeTab === 'experience' ? 'block animate-slide-up' : 'hidden'}`} id="experience">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-dark/70 p-6 rounded-2xl border border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Code size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-display font-bold mb-2">Senior VFX Coordinator</h4>
                <p className="text-light/50 text-sm mb-4">Dreamworks VFX • 2019-Present</p>
                <p className="text-light/70">Overseeing end-to-end VFX project coordination for major studio productions with budgets exceeding $50M. Managing cross-functional teams of 30+ artists and technicians.</p>
              </div>
              
              <div className="bg-dark/70 p-6 rounded-2xl border border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Code size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-display font-bold mb-2">VFX Project Coordinator</h4>
                <p className="text-light/50 text-sm mb-4">Visual Dynamics • 2016-2019</p>
                <p className="text-light/70">Coordinated high-profile VFX sequences for streaming platforms and television productions. Implemented efficient tracking systems that reduced delivery time by 15%.</p>
              </div>
              
              <div className="bg-dark/70 p-6 rounded-2xl border border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Code size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-display font-bold mb-2">Production Assistant</h4>
                <p className="text-light/50 text-sm mb-4">Pixel Perfect Studios • 2015-2016</p>
                <p className="text-light/70">Supported production teams on commercial projects. Learned VFX production pipeline fundamentals and developed core coordination skills.</p>
              </div>
            </div>
            
            {/* <div className="mt-12">
              <h3 className="text-2xl font-display font-bold mb-6">Education & Certification</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dark/70 p-6 rounded-2xl border border-primary/20 hover:border-primary transition-all flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <User size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold mb-1">Bachelor of Arts in Film Production</h4>
                    <p className="text-light/50 text-sm mb-2">University of Creative Arts • 2011-2015</p>
                    <p className="text-light/70 text-sm">Specialized in Post-Production and Visual Effects</p>
                  </div>
                </div>
                
                <div className="bg-dark/70 p-6 rounded-2xl border border-primary/20 hover:border-primary transition-all flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <User size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold mb-1">Certified Project Management Professional</h4>
                    <p className="text-light/50 text-sm mb-2">Project Management Institute • 2018</p>
                    <p className="text-light/70 text-sm">Specialized in Creative Production Management</p>
                  </div>
                </div>
              </div>
            </div> */}



          </div>
          
          <div className={`tab-content ${activeTab === 'personal' ? 'block animate-slide-up' : 'hidden'}`} id="personal">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-dark">
                    <Heart size={16} />
                  </span>
                  Beyond the Studio
                </h3>
                <p className="text-light/80 mb-6 leading-relaxed">
                  When I'm not coordinating VFX projects, you'll find me pursuing activities that fuel my creativity and maintain my work-life balance. I believe these personal pursuits enhance my professional approach, bringing fresh energy and perspectives to my coordination work.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-dark/70 p-5 rounded-xl border border-secondary/20 hover:border-secondary transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary text-xl">
                        <path d="M6.5 6.5h11"></path>
                        <path d="M20 15a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"></path>
                        <path d="M12 15a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"></path>
                        <path d="M4 15a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"></path>
                        <path d="M18 9v6"></path>
                        <path d="M10 9v6"></path>
                        <path d="M2 9v6"></path>
                        <path d="M6.5 4h11"></path>
                      </svg>
                      <h4 className="font-display font-bold">Gym Enthusiast</h4>
                    </div>
                    <p className="text-light/70 text-sm">Dedicated to fitness and the discipline it cultivates – qualities that transfer directly to my detail-oriented work.</p>
                  </div>
                  
                  <div className="bg-dark/70 p-5 rounded-xl border border-secondary/20 hover:border-secondary transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary text-xl">
                        <path d="M9 18V5l12-2v13"></path>
                        <circle cx="6" cy="18" r="3"></circle>
                        <circle cx="18" cy="16" r="3"></circle>
                      </svg>
                      <h4 className="font-display font-bold">Music Lover</h4>
                    </div>
                    <p className="text-light/70 text-sm">Constantly exploring new genres that inspire creative thinking and help maintain focus during complex projects.</p>
                  </div>
                  
                  <div className="bg-dark/70 p-5 rounded-xl border border-secondary/20 hover:border-secondary transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary text-xl">
                        <path d="M15 11h.01"></path>
                        <path d="M11 15h.01"></path>
                        <path d="M16 16h.01"></path>
                        <path d="m2 12 2.5 2.5a2.63 2.63 0 0 0 3.71 0L12 11"></path>
                        <path d="M5 19.5V15"></path>
                        <path d="M19 5h-7L8 9h11l-4 4"></path>
                        <path d="M18.5 2A2.5 2.5 0 0 1 21 4.5"></path>
                        <path d="M9.5 14.5 7 22"></path>
                      </svg>
                      <h4 className="font-display font-bold">Cooking Enthusiast</h4>
                    </div>
                    <p className="text-light/70 text-sm">Finding parallels between cooking and VFX coordination – both require precision, timing, and creative problem-solving.</p>
                  </div>
                  
                  <div className="bg-dark/70 p-5 rounded-xl border border-secondary/20 hover:border-secondary transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary text-xl">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                      <h4 className="font-display font-bold">Multi-tasking Pro</h4>
                    </div>
                    <p className="text-light/70 text-sm">Naturally excelling at juggling multiple responsibilities – essential for managing complex VFX production schedules.</p>
                  </div>
                </div>
                
                <p className="text-light/80 leading-relaxed">
                  My personal philosophy centers around maintaining balance while pursuing excellence. The precision and creativity I bring to my hobbies directly enhances my ability to coordinate complex VFX projects with both technical accuracy and artistic sensibility.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80" 
                  alt="Gym Enthusiast" 
                  className="rounded-2xl shadow-xl h-64 object-cover animate-float" 
                  style={{ animationDelay: "0.2s" }}
                />
                
                <img 
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80" 
                  alt="Music Lover" 
                  className="rounded-2xl shadow-xl h-64 object-cover animate-float" 
                  style={{ animationDelay: "0.4s" }}
                />
                
                <img 
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80" 
                  alt="Cooking Enthusiast" 
                  className="rounded-2xl shadow-xl h-64 object-cover animate-float" 
                  style={{ animationDelay: "0.6s" }}
                />
                
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80" 
                  alt="Multitasking Professional" 
                  className="rounded-2xl shadow-xl h-64 object-cover animate-float" 
                  style={{ animationDelay: "0.8s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
