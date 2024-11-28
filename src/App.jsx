import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Experiences from "./pages/Experiences";

const App = () => {
  useEffect(() => {
    if (window.particlesJS) {
      console.log("Particles.js is initializing...");
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 50, // จำนวนอนุภาค
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#d9d9dd" // สีของอนุภาค
          },
          shape: {
            type: ["circle", "triangle", "star"]

          },
          opacity: {
            value: 0.5, // ความโปร่งใสของอนุภาค
            random: true
          },
          size: {
            value: 10, // ขนาดของอนุภาค
            random: true
          },
          line_linked: {
            enable: true, // เปิดเส้นเชื่อมระหว่างอนุภาค
            distance: 150,
            color: "#c6c6cd", // สีของเส้นเชื่อม
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3, // ความเร็วการเคลื่อนที่
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "window", // ตรวจจับทั้งหน้าจอ
          events: {
            onhover: {
              enable: true, // เปิดการตอบสนองเมื่อเมาส์อยู่ใกล้
              mode: "repulse" // อนุภาคดีดตัวออกจากเมาส์
            },
            onclick: {
              enable: true, // เปิดการตอบสนองเมื่อคลิก
              mode: "push" // เพิ่มอนุภาคเมื่อคลิก
            },
            resize: true // ปรับขนาดอนุภาคเมื่อขนาดหน้าจอเปลี่ยน
          },
          modes: {
            repulse: {
              distance: 100, // ระยะที่อนุภาคดีดตัว
              duration: 0.4
            },
            push: {
              particles_nb: 4 // เพิ่มอนุภาคใหม่เมื่อคลิก
            }
          }
        },
        retina_detect: true
      });
    } else {
      console.error("Particles.js is not loaded. Check if the library is included in your project.");
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Div สำหรับเอฟเฟกต์ Particles.js */}
      <div
        id="particles-js"
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed", // Fixed เพื่อให้คลุมทั้งหน้าจอ
          top: 0,
          left: 0,
          zIndex: -1,
          backgroundColor: "#F7FAFC" // สีพื้นหลังเทาอ่อน
        }}
      ></div>

      {/* คอนเทนต์หลัก */}
      <div className="relative z-10">
        <Navbar />
        <section id="home" className="min-h-screen flex justify-center items-center">
          <HomePage />
        </section>
        <section id="skills" className="min-h-screen flex justify-center items-center">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen flex justify-center items-center">
          <Projects />
        </section>
        <section id="experience" className="min-h-screen flex justify-center items-center">
          <Experiences />
        </section>
        <section id="contact" className="min-h-screen flex justify-center items-center">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
