"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { PiArrowFatLineDownFill } from "react-icons/pi";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPhone
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  const projects = [
    { id: 1, title: "EICHAIN", desc: "React + GSAP", url: "https://eichain.io/" },
    { id: 2, title: "KITAAB APP", desc: "React Native App", url: "" },
    { id: 3, title: "SKILLED TRADES", desc: "React + Bootstrap", url: "https://www.skilledtrades.com/" },
    { id: 4, title: "247 PAYMENTS", desc: "React + Bootstrap", url: "https://247payments.com/" },
    { id: 5, title: "MAAZAMAX APP", desc: "React Native App", url: "" },
    { id: 6, title: "QREADY WEB AND APP", desc: "React + React Native + Bootstrap", url: "https://myqready.com/" },
    { id: 7, title: "MEDASK", desc: "React + Bootstrap", url: "https://medask.com.pk/" },
    { id: 8, title: "PRIVATE ERP SYSTEMS", desc: "Next + Tailwind", url: "" },
    { id: 9, title: "ELEGANCE INSPECTION", desc: "React + Bootstrap", url: "https://dulcet-lollipop-32fe20.netlify.app/" },

  ];

  const skills = ["React", "React Native", "Next.js", "Tailwind", "Bootstrap", "GSAP", "Framer Motion", "Html 5", "CSS3"];

  const testimonials = [
    { text: "Alizar delivers futuristic and modern interfaces that are simply amazing!", name: "Client 1" },
    { text: "The animations and interactions are next-level. Highly recommended!", name: "Client 2" },
    { text: "Superb work on React & GSAP. Truly innovative!", name: "Client 3" },
  ];

  const contacts = [
    {
      icon: <FaEnvelope size={30} />,
      url: "mailto:muhammadalizar@icloud.com",
    },
    {
      icon: <FaPhone size={30} />,
      url: "tel:+923102427314",
    },
    {
      icon: <FaLinkedin size={30} />,
      url: "https://pk.linkedin.com/in/alizar-raza-39067625a",
    },
    {
      icon: <FaGithub size={30} />,
      url: "https://github.com/",
    },
    // {
    //   icon: <FaTwitter size={30} />,
    //   url: "https://twitter.com/yourhandle",
    // },
  ];

  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const title = titleRef.current;

      // Split letters into spans
      const text = title.textContent || "";
      title.textContent = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        title.appendChild(span);
      });

      // Animate using GSAP — only x and scale, not opacity
      gsap.from(title.querySelectorAll("span"), {
        y: 50,
        scale: 0.8,
        stagger: 0.05,
        duration: 1.2,
        ease: "back.out(1.7)",
      });
    }
  }, []);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      gsap.from(imgRef.current, {
        y: -20,          // start slightly above
        scale: 0.8,      // start smaller
        opacity: 0,      // fade in
        duration: 1.5,
        ease: "back.out(1.7)",
        repeat: -1,      // infinite bounce
        yoyo: true,      // reverse animation
        delay: 0.5,
      });
    }
  }, []);

  return (
    <main className="text-light overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="hero-section d-flex flex-column justify-content-center align-items-center text-center"
      >
        <div
          className="
      hero-container 
      flex 
      items-center 
      justify-center 
      gap-4 
      min-h-screen 
      flex-col 
      md:flex-row
    "
        >
          <h1 className="font-bold gradient-text mb-0 text-6xl">
            Hi, I’m Alizar
          </h1>

          <img
            src="/me.jpg"
            alt="Alizar"
            className="rounded-full object-cover"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
        </div>

        <p className="fs-5 mb-4 hero-subtitle">
          Designing sleek, modern, and intelligent digital experiences — from web to mobile.
        </p>

        <div className="d-flex gap-3 flex-wrap justify-content-center">
          <a href="#projects" className="btn btn-outline-light btn-lg shadow-hover">
            View Projects
          </a>
          <a href="#contact" className="btn btn-info btn-lg shadow-hover">
            Contact Me
          </a>
        </div>

        <div className="hero-bubbles">
          {[...Array(12)].map((_, i) => (
            <span key={i} className={`bubble bubble-${i + 1}`}></span>
          ))}
        </div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          <PiArrowFatLineDownFill />
        </motion.div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="container py-5 projects-section">
    <motion.h2
  className="text-center display-5 fw-bold mb-5 text-light"
  animate={{ y: [0, -12, 0] }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  Highlighted Work
</motion.h2>

        <div className="row g-4">
          {projects.map((p) => (
            <div key={p.id} className="col-12 col-md-4">
              <motion.a
                href={p.url}
                whileHover={{ scale: 1.08, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="project-card d-block text-decoration-none"
              >
                <div className="project-glow"></div>
                <h3 className="fw-bold">{p.title}</h3>
                <p className="text-light-50">{p.desc}</p>
              </motion.a>
            </div>
          ))}
        </div>
      </section>

      {/* About / Skills Section */}
      <section id="about" className="container py-5 about-section">
        <h2 className="text-center display-5 fw-bold mb-5 text-light">About Me</h2>
        <p className="text-center fs-5 mb-5">
          I build reliable, scalable, and high-quality digital solutions with a strong focus on performance, usability, and clean engineering.        </p>
        <div className="row g-4">
          {skills.map((skill, i) => (
            <div key={i} className="col-12 col-md-4">
              <div className="skill-card p-4 rounded-3">
                <h4 className="fw-bold mb-2">{skill}</h4>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${80 + i * 4}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-5 testimonials-section">
        <h2 className="text-center display-5 fw-bold mb-5 text-light">Testimonials</h2>
        <div className="d-flex gap-4 overflow-auto px-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial-card p-4 rounded-3"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <p>"{t.text}"</p>
              <h6 className="fw-bold mt-3">{t.name}</h6>
            </motion.div>
          ))}
        </div>
      </section> */}
      <section id="impact" className="py-6 impact-section position-relative">
        <h2 className="text-center display-3 fw-bold mb-5 text-light">
          Impact & Results
        </h2>

        <motion.div
          className="d-flex gap-4 px-3"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          style={{ whiteSpace: "nowrap" }}
        >
          {[
            {
              metric: "22% Increase",
              desc: "Boosted user conversion through improved UI flow and performance refinement.",
            },
            {
              metric: "50% Faster",
              desc: "Reduced page load times with optimized architecture and efficient development practices.",
            },
            {
              metric: "Scalable Systems",
              desc: "Delivered stable, scalable development solutions used by growing businesses.",
            },
            {
              metric: "Better UX",
              desc: "Crafted smoother, intuitive interfaces leading to higher engagement.",
            },
            {
              metric: "Enhanced Reliability",
              desc: "Minimized bugs and downtime across multiple projects.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="impact-card flex-shrink-0 p-5 rounded-4 text-center me-4"
              style={{
                minWidth: "280px",
                background: "linear-gradient(135deg, #1f1f1f, #2a2a2a)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h3 className="fw-bold text-white mb-3" style={{ fontSize: "1.8rem" }}>
                {item.metric}
              </h3>
              <p className="text-white opacity-75 fs-6">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-5 contact-section text-center">
        <h2 className="display-3 fw-bold mb-5 text-light">Contact Me</h2>

        <div className="d-flex gap-5 justify-content-center flex-wrap">
          {contacts.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon d-flex align-items-center justify-content-center"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                color: "#00f2ff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 15px rgba(0,255,255,0.2)",
                transition: "0.3s",
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}
