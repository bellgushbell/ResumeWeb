import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Individual Project: Phone Case E-Commerce",
            description: `
                Oct 2024 – Oct 2024
               • Built an e-commerce cart with real-time pricing, animations, password reset emails, protected routes, and Framer Motion for smooth transitions.
• Introduced slide-to-pay to prevent accidental payments, supporting mobile.
• Provided admin tools for product management, stock, payment approval, and analytics with charts for sales, abandoned carts
            `,
            videoUrl: "https://drive.google.com/file/d/16_UQstLrwOUcKPPeLFzGCoCzT-7vKBe7/preview",
            weblink: "https://projectphonecasefrontend.onrender.com",
            githubFrontend: "https://github.com/bellgushbell/ProjectPhoneCaseFrontEnd",
            githubBackend: "https://github.com/bellgushbell/ProjectPhoneCaseBackend",
        },
        {
            id: 2,
            title: "Group Project: Hotel Booking",
            description: `
                Oct 2024 – Oct 2024  • Developed a booking system with location search, filters, price comparison, and discount codes.
• Integrated Stripe API for payments, Google Maps API for real-time positioning, and React Date Range for selecting check-in/out dates.
• Created a 3D card effect for promotions to boost engagement
• Built image sliders with Swiper and Slick Carousel, customizing Toastify notifications with SweetAlert2.
• Enabled Google login, real-time admin chat using OAuth2 and Socket.io
            `,
            videoUrl: "https://drive.google.com/file/d/1RwZx_ffUNiGvvEVhMifri0uxIgOKhkcE/preview",
            weblink: "https://hotel-book-client.onrender.com",
            githubFrontend: "https://github.com/NuttavichBig/CC18-GroupProject-Client",
            githubBackend: "https://github.com/NuttavichBig/CC18-GroupProject-Server",
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const handleMouseMove = (e, index) => {
        const card = document.getElementById(`project-card-${index}`);
        const shadow = document.getElementById(`shadow-card-${index}`);
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((centerY - y) / centerY) * 10;
        const rotateY = ((centerX - x) / centerX) * -10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        shadow.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(-50px)`;
    };

    const handleMouseLeave = (index) => {
        const card = document.getElementById(`project-card-${index}`);
        const shadow = document.getElementById(`shadow-card-${index}`);
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        shadow.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(-50px)";
    };

    return (
        <motion.div
            className="max-w-6xl mx-auto p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h3 className="flex justify-center font-semibold text-gray-800  text-3xl mb-10">
                PROJECTS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="relative"
                        style={{ perspective: "1000px" }}
                    >
                        <div
                            id={`shadow-card-${index}`}
                            className="absolute inset-0 rounded-lg"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.2)",
                                transform: "translateZ(-50px)",
                                boxShadow: "0 30px 50px rgba(0, 0, 0, 0.4)",
                                zIndex: -1,
                                transition: "transform 0.3s ease-out",
                            }}
                        ></div>
                        <div
                            id={`project-card-${index}`}
                            className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                            style={{
                                transformStyle: "preserve-3d",
                                transition: "transform 0.3s ease-out",
                            }}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            onClick={() => openModal(project)}
                        >
                            <div className="relative flex flex-col">
                                <iframe
                                    src={project.videoUrl}
                                    className="w-full h-48"
                                    allow="autoplay"
                                    style={{ border: 0 }}
                                ></iframe>

                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {project.title}
                                    </h3>
                                    <button
                                        onClick={() => openModal(project)}
                                        className="mt-5 bg-gradient-to-r from-blue-500 to-indigo-700 text-white py-2 px-4 rounded-lg font-bold shadow-lg transition-transform duration-200 cursor-pointer hover:scale-105 hover:shadow-[inset_0_0_8px_rgba(30,144,255,0.4),0_4px_15px_rgba(0,0,255,0.6),0_4px_15px_rgba(0,0,139,0.4)]"
                                    >
                                        View Details
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {
                selectedProject && (
                    <div
                        className="
    fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 sm:h-auto mx-auto sm:p-6 p-4"
                        onClick={closeModal}
                    >
                        <motion.div
                            className="bg-white rounded-lg shadow-lg sm:w-2/3 w-[400px] sm:h-auto h-[520px] sm:p-6 p-2 relative "
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600"
                            >
                                ×
                            </button>
                            <h3 className="sm:text-2xl text-base font-bold text-gray-800 ">
                                {selectedProject.title}
                            </h3>
                            <p className="text-gray-950 whitespace-pre-line ">
                                {selectedProject.description}
                            </p>
                            <a
                                href={selectedProject.weblink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-950 whitespace-pre-line"
                            >
                                website: <u>{selectedProject.weblink}</u>
                            </a>

                            <div className="flex gap-10 justify-center mt-3">
                                <a
                                    href={selectedProject.githubFrontend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mb-1 sm:text-lg text-sm bg-gradient-to-r from-[#f08a4b] to-[#e05b3c] text-white py-3 px-4 rounded-lg font-bold shadow-lg transition-transform duration-200 cursor-pointer hover:scale-105 hover:shadow-[inset_0_0_8px_rgba(240,138,75,0.4),0_4px_15px_rgba(240,138,75,0.6),0_4px_15px_rgba(224,91,60,0.4)]"
                                >
                                    GitHub Frontend
                                </a>

                                <a
                                    href={selectedProject.githubBackend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mb-1 sm:text-lg text-sm bg-gradient-to-r from-amber-700 to-amber-950 text-white py-3 px-4 rounded-lg font-bold shadow-lg transition-transform duration-200 cursor-pointer hover:scale-105 hover:shadow-[inset_0_0_8px_rgba(240,138,75,0.4),0_4px_15px_rgba(240,138,75,0.6),0_4px_15px_rgba(224,91,60,0.4)]"
                                >
                                    GitHub Backend
                                </a>



                            </div>


                        </motion.div>
                    </div>
                )
            }
        </motion.div >
    );
};

export default Projects;










