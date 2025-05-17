import { technicalSkills, managementSkills, specialtyAreas } from "../data/skills";
import { Cog, Users, Network, Calendar, MessageSquare, Flame } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Professional <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-xl mx-auto text-light/70">
            My expertise spans across technical coordination, creative management, and production efficiency,
            enabling seamless delivery of complex VFX projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right" data-aos-delay="100">
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <Cog className="text-primary" />
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-badge bg-dark/50 rounded-xl p-6 border border-primary/20 hover:border-primary transition-all transform hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 50}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-display font-bold">{skill.name}</h4>
                    <span className="text-primary">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-dark/50 h-2 rounded-full">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                  <p className="mt-3 text-light/70 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div data-aos="fade-left" data-aos-delay="100">
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <Users className="text-secondary" />
              Management Skills
            </h3>
            
            <div className="space-y-6">
              {managementSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-badge bg-dark/50 rounded-xl p-6 border border-secondary/20 hover:border-secondary transition-all transform hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 50}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-display font-bold">{skill.name}</h4>
                    <span className="text-secondary">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-dark/50 h-2 rounded-full">
                    <div 
                      className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                  <p className="mt-3 text-light/70 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-display font-bold mb-8 text-center">Multi-tasking Specialty Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialtyAreas.map((area, index) => (
              <div 
                key={index} 
                className="skill-badge bg-dark/50 rounded-xl p-6 border border-primary/20 hover:border-primary transition-all text-center"
                data-aos="fade-up"
                data-aos-delay={200 + index * 50}
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  {area.iconName === "network" && <Network className="text-primary" size={24} />}
                  {area.iconName === "calendar" && <Calendar className="text-primary" size={24} />}
                  {area.iconName === "message-square" && <MessageSquare className="text-primary" size={24} />}
                  {area.iconName === "flame" && <Flame className="text-primary" size={24} />}
                </div>
                <h4 className="font-display font-bold mb-2">{area.name}</h4>
                <p className="text-light/70 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
