import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-28 pb-16 flex items-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
        <div
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')] bg-cover bg-center"
          style={{ backgroundAttachment: "fixed" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="ml-[20px] text-center md:text-left">
          <p
            className={`text-primary font-medium tracking-widest mb-3 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            data-aos="fade-up"
          >
            7+ YEARS OF EXPERIENCE
          </p>
          <h1
            className={`text-4xl md:text-6xl font-display font-bold mb-6 leading-tight transition-all duration-500 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Senior VFX <br />
            <span className="text-primary">Project Coordinator</span>
          </h1>
          <p
            className={`text-light/70 text-lg mb-8 max-w-md mx-auto md:mx-0 transition-all duration-500 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Turning creative visions into reality through coordinated production
            excellence. Managing the invisible magic that makes the impossible
            appear on screen.
          </p>
          <div
            className={`flex flex-wrap gap-4 justify-center md:justify-start transition-all duration-500 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 bg-primary text-light rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 bg-transparent border border-light/20 text-light rounded-full hover:border-primary hover:text-primary transition-all cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQFi8qHQu5X1kw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684694244377?e=1752710400&v=beta&t=oFl__Vug5shJX9iVuMoXlE1rbpq4vjiO2THH3Qh7RFQ"
            alt="VFX Project Coordinator"
            className="ml-[-50px] rounded-2xl shadow-2xl shadow-primary/20 z-10 relative animate-float transition-transform duration-500 hover:scale-110"
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-2xl bg-gradient-to-b from-primary/30 to-secondary/30 blur-3xl -z-10 animate-pulse-slow"></div>

          {/* <div
            className="absolute -top-6 -right-6 bg-dark p-4 rounded-xl shadow-lg border border-primary/20 animate-float"
            style={{ animationDelay: "0.3s", zIndex: '10' }}
          >
            <p className="text-sm font-medium">Years of Experience</p>
            <p className="text-3xl font-display font-bold text-primary">7+</p>
          </div> */}

          {/* <div
            className="ml-[-100px] absolute -bottom-6 -left-6 bg-dark p-4 rounded-xl shadow-lg border border-primary/20 animate-float"
            style={{ animationDelay: "0.6s", zIndex: "10" }}
          >
            <p className="text-sm font-medium">Projects Coordinated</p>
            <p className="text-3xl font-display font-bold text-secondary">
              30 +
            </p>
          </div> */}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce" style={{zIndex: '10'}}>
        <a
          onClick={() => scrollToSection("about")}
          className="text-light opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
}
