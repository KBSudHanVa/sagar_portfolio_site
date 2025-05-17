// import { useState, useEffect, useRef } from "react";
import { projects } from "../data/projects";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";


export default function Projects() {
  const { ref
    // , inView 
  } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="projects"
      className="py-20 relative bg-gradient-to-b from-dark to-dark/50"
    >
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-xl mx-auto text-light/70">
            A selection of major film and streaming projects where I led VFX
            coordination efforts, managing complex visual effects sequences that
            brought creative visions to life.
          </p>
        </div>

        {/* <div ref={ref} className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20 mb-16" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="carousel"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="w-full h-[500px] relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent group-hover:opacity-90 opacity-75 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-dark/80 backdrop-blur-md p-6 rounded-xl border border-primary/20">
                    <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
                    <p className="text-primary mb-3">{project.type} • {project.year}</p>
                    <p className="text-light/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}

        <div
          ref={ref}
          className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20 mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="carousel"
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={index}
                className="w-full h-[550px] md:h-[600px] lg:h-[650px] relative group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent group-hover:opacity-90 opacity-75 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-dark/80 backdrop-blur-md p-6 rounded-xl border border-primary/20">
                    <h3 className="text-2xl font-display font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary mb-3">
                      {project.type} • {project.year}
                    </p>
                    <p className="text-light/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-display font-bold mb-8">
            Project Highlights
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-dark/50 border border-primary/20 rounded-xl p-6 backdrop-blur-sm transform hover:scale-105 transition-transform">
              <p className="text-4xl font-display font-bold text-primary mb-2">
                30+
              </p>
              <p className="text-light/70">Major Projects</p>
            </div>
            <div className="bg-dark/50 border border-primary/20 rounded-xl p-6 backdrop-blur-sm transform hover:scale-105 transition-transform">
              <p className="text-4xl font-display font-bold text-primary mb-2">
                8,500+
              </p>
              <p className="text-light/70">VFX Shots Delivered</p>
            </div>
            <div className="bg-dark/50 border border-primary/20 rounded-xl p-6 backdrop-blur-sm transform hover:scale-105 transition-transform">
              <p className="text-4xl font-display font-bold text-primary mb-2">
                45+
              </p>
              <p className="text-light/70">Team Members Managed</p>
            </div>
            <div className="bg-dark/50 border border-primary/20 rounded-xl p-6 backdrop-blur-sm transform hover:scale-105 transition-transform">
              <p className="text-4xl font-display font-bold text-primary mb-2">
                97%
              </p>
              <p className="text-light/70">On-Time Delivery Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
