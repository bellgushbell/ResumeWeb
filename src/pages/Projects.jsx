import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Projects = () => {
    const { t } = useTranslation();
    const projects = [
        {
            id: 1,
            title: t("Project: Phone Case E-Commerce"),
            description: t("Oct 2024 - Oct 2024 • Built an e-commerce cart with real-time pricing, animations, password reset emails, protected routes, and Framer Motion for smooth transitions. Introduced slide-to-pay to prevent accidental payments, supporting mobile. Provided admin tools for product management, stock, payment approval, and analytics with charts for sales, abandoned carts")
            ,
            videoUrl: "https://drive.google.com/file/d/16_UQstLrwOUcKPPeLFzGCoCzT-7vKBe7/preview",
            weblink: "https://projectphonecasefrontend.onrender.com",
            githubFrontend: "https://github.com/bellgushbell/ProjectPhoneCaseFrontEnd",
            githubBackend: "https://github.com/bellgushbell/ProjectPhoneCaseBackend",
            libraries: ["React", "Framer Motion", "Zustand", "Tailwind CSS", "React-Tostify", "NodeMailer", "Cloudinary", "Prisma", "JsonWebToken", "Multer", "Bcryptjs", "Express", "Lottie-react", "joi", "loading", "Chart.js", "Sweetalert2", "DaisyUI", "React-Responsive-Carousel", "Axios"],
        },
        {
            id: 2,
            title: t("Project: Hotel Booking"),
            description: t("Oct 2024 - Oct 2024 • Developed a booking system with location search, filters, price comparison, and discount codes. Integrated Stripe API for payments, Google Maps API for real-time positioning, and React Date Range for selecting check-in/out dates. Created a 3D card effect for promotions to boost engagement. Built image sliders with Swiper and Slick Carousel, customizing Toastify notifications with SweetAlert2. Enabled Google login, real-time admin chat using OAuth2 and Socket.io.")
            ,
            videoUrl: "https://drive.google.com/file/d/1RwZx_ffUNiGvvEVhMifri0uxIgOKhkcE/preview",
            weblink: "https://cc18-hotelproject-client.onrender.com",
            githubFrontend: "https://github.com/bellgushbell/CC18-HotelProject-Client.git",
            githubBackend: "https://github.com/bellgushbell/CC18-HotelProject-Server.git",
            libraries: ["React", "Framer Motion", "Zustand", "Tailwind CSS", "React-Tostify", "NodeMailer", "Cloudinary", "Prisma", "JsonWebToken", "Multer", "Bcryptjs", "Express", "joi", "Chart.js", "Sweetalert2", "Axios", "Moment", "React-Date-Range", "react-google-autocomplete", "slick-carousel", "socket.io-client", "swiper", "recharts", "Stripe", "OAth", "GoogleAPI", "react-places-autocomplete", "google-auth-library", "haversine-distance", "uuid"],
        },
        {
            id: 3,
            title: t("Project: Pokedex"),
            description: t("A TypeScript-based Pokedex project that fetches Pokemon data from the PokéAPI and displays it in a user-friendly format, categorizing Pokemon by type and offering a fully responsive design.Developed using React, Sass, Tailwind CSS, and Axios for API calls and state management with Zustand. To enhance search and sorting capabilities, the project utilizes match- sorter and sort - by libraries, allowing users to filter and organize Pokemon by name, type, or other criteria. LocalForage is employed for local data storage."),
            videoUrl: "https://drive.google.com/file/d/15D3a7OywmEakiDb4Yb22mo4-YHc0SDqe/preview",
            weblink: "https://pokedexproject.onrender.com",
            githubFrontend: "https://github.com/bellgushbell/PokedexProject",
            libraries: ["React", "Framer Motion", "Zustand", "Tailwind CSS", "Axios", "react-loading", "localforage", "match-sorter", "react-hook-form", "sort-by", "TypeScript", "sass", "react-router-dom"],

        },
        {
            id: 4,
            title: t("Project: Eco Pandora Box"),
            description: t("Eco Pandora Box is a donation platform with tiered rewards(10, 100, 1000, 10000).Features include a visually engaging 3D box design, easy payment via card, QR, and slide- to - pay, reward delivery with email details, admin tools for managing items and deliveries, and a support chat for tracking rewards."),
            videoUrl: "https://drive.google.com/file/d/105lBWS3_Lwoa44qwMV7BJdMzDouXMxHt/preview",
            weblink: "https://ecopandoraboxpersonalproject-client.onrender.com",
            githubFrontend: "https://github.com/bellgushbell/EcoPandoraBoxPersonalProject-Client",
            githubBackend: "https://github.com/bellgushbell/EcoPandoraBoxPersonalProject-Server",
            libraries: ["React", "Framer Motion", "Zustand", "Tailwind CSS", "Axios", "NodeMailer", "Socket.io", "Stripe", "JsonWebToken", "Multer", "Prisma", "Cloudinary", "Sweetalert2", "React-Tostify", "bcryptjs", "nodemon", "ReactThreeDrei", "ReactThreeFiber", "gsap", "three", "Lottie-Loading"],

        },
            {
            id: 5,
            title: t("Project: Game Swordsman3 Online"),
            description: t("Mar 2025 - Mar 2025 • Developed a cinematic gaming website for a mobile MMORPG using PHP as the backend. Integrated GSAP for animation, ScrollTrigger for scroll-based effects, and managed SEO meta updates dynamically with PHP. Added real-time news, event promotions, class preview with video/image switching, and GSAP-based loader with quote transitions. Connected to a MySQL database to render news and promotions with Axios and dynamic tab filters."),
            videoUrl: "https://drive.google.com/file/d/1qBw4vC2yi5o-AwNiwSCAuqj3ZBDBuj6h/preview",
            weblink: "https://swordsman3.com",
            githubFrontend: "https://github.com/bellgushbell/swordsman-online",
            libraries: [
                "PHP", "GSAP", "ScrollTrigger", "SweetAlert2", "Axios", "Bootstrap 5",
                "HTML5", "CSS3", "JavaScript", "jQuery", "Swiper.js", "MySQL"
            ],
            },

            {
                id: 6,
                title: t("Project: Preregister Swordsman3 Online"),
                description: t("Mar 2025 • Developed an interactive pre-registration page for a mobile MMORPG using PHP and JavaScript. The page features a visually engaging checkpoint-based reward system with GSAP and ScrollTrigger animations, dynamic SEO meta tags, and a fully responsive UI. Implemented a real-time registration counter synced with a MySQL database, along with email registration, social sharing integration, and user feedback using SweetAlert2."),
                videoUrl: "https://drive.google.com/file/d/1XK9oUL2RwQBHSzT7FzvpWFZHUZPU-3OW/preview",
                weblink: "https://dev.stationidea.com",
                githubFrontend: "https://github.com/bellgushbell/swordsman-online/blob/main/page/player/preregister-reward.php",
                githubBackend: "",
                libraries: [
                    "PHP", "JavaScript", "GSAP", "ScrollTrigger", "SweetAlert2", "Axios", "MySQL", "HTML5", "CSS3"
                ],
            },

            {
                id: 7,
                title: t("Project: CMS for Swordsman3 Online News"),
                description: t("Apr 2025 • Developed a custom content management system (CMS) for the News section of Swordsman3 Online using PHP and MySQL. Integrated SEO metadata input with live preview, Select2 keyword tagging, and role-based session access control. Added dynamic news filtering by category, image upload with preview, pagination, and modal-based image viewer. Ensured secure admin access and intuitive UX. Frontend designed with Bootstrap 5 and responsive layout."),
                videoUrl: "https://drive.google.com/file/d/1z7GqYYzKOYFU3zG9atcvehTGieZtByiJ/preview",
                weblink: "https://cms.stationidea.com/",
                githubFrontend: "https://github.com/bellgushbell/CMS-swordsman3-FrontEnd",
                githubBackend: "https://github.com/bellgushbell/CMS-swordsman3-BackEnd",
                
                libraries: [
                    "PHP", "JavaScript", "SweetAlert2", "MySQL", "Bootstrap 5", "HTML5", "CSS3", "jQuery", "Select2"
                ],
            },

            {
                id: 8,
                title: t("EXP TOPUP Swordsman3 Online"),
                description: t("Apr 2025 • Built a complete top-up website for the game Swordsman3 Online using Laravel and PHP. Implemented secure user registration and login with SDK API integration and OTP email verification. The registration system includes real-time validation, SweetAlert2 feedback, localStorage for input persistence, and session-based error handling. Backend manages user creation, authentication, and API signing with MD5. Designed with Bootstrap 5 for responsive UI and a smooth user experience. The top-up system is integrated with the game’s SDK and includes secure CSRF protection."),
                videoUrl: "https://drive.google.com/file/d/1ItBAWDgY9AakIoVx04h_xNumWAWZ396D/preview",
                weblink: "https://exptopupdev.stationidea.com/",
                githubFrontend: "https://github.com/PhanuphongBunrot/swordsman3",
                githubBackend: "https://github.com/PhanuphongBunrot/swordsman3",
                libraries: [
                    "Laravel", "PHP", "JavaScript", "SweetAlert2", "MySQL", "Bootstrap 5", "HTML5", "CSS3", "jQuery"
                ],
            }





    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };



    const handleMouseMove = (event, index) => {
        const card = document.getElementById(`project-card-${index}`);
        const shadow = document.getElementById(`shadow-card-${index}`);

        // คำนวณตำแหน่งของเมาส์ที่สัมพันธ์กับการ์ด
        const rect = card.getBoundingClientRect();
        const mouseX = event.clientX - rect.left; // ตำแหน่ง X ของเมาส์
        const mouseY = event.clientY - rect.top;  // ตำแหน่ง Y ของเมาส์

        // คำนวณการหมุนการ์ด
        const rotateX = ((mouseY / rect.height) - 0.5) * 15; // หมุนตามแกน X
        const rotateY = ((mouseX / rect.width) - 0.5) * -15; // หมุนตามแกน Y

        // คำนวณการดันการ์ดไปตามตำแหน่งเมาส์
        const scale = 1.05; // การขยายการ์ด
        const translateZ = -30; // กดการ์ดให้ลึกลงในแนว Z

        // เงา 3D
        const shadowTranslateZ = -50 + (translateZ / 2); // ปรับให้เงาลึกขึ้นตามการขยายของการ์ด

        // เพิ่มการดันการ์ดในทิศทางของเมาส์
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale}) translateZ(${translateZ}px)`;
        shadow.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${shadowTranslateZ}px)`;

    };

    const handleMouseLeave = (index) => {
        const card = document.getElementById(`project-card-${index}`);
        const shadow = document.getElementById(`shadow-card-${index}`);

        // รีเซ็ตการ์ดกลับไปที่ตำแหน่งเดิมเมื่อเมาส์ออกจากการ์ด
        card.style.transition = "transform 0.3s ease-out, z-index 0s ease-out"; // transition เพื่อความนุ่มนวล
        shadow.style.transition = "transform 0.3s ease-out"; //  transition ให้เงา

        // รีเซ็ตการหมุนและขนาดการ์ด
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)";
        shadow.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(-50px)"; // รีเซ็ตเงากลับ

    };









    return (
        <motion.div
            className="max-w-6xl mx-auto p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h3 className="flex justify-center font-semibold text-gray-800  text-3xl mb-10">
                {t("PROJECTS")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-[350px] sm:w-[1000px]">
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
                                    allowFullScreen
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
                                        {t("View Details")}
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
                            className="bg-white rounded-lg shadow-lg sm:w-2/3 w-[360px] sm:h-auto h-auto sm:p-6 p-2 relative "
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-0 right-0 rounded-full  text-black w-8 h-8 flex items-center justify-center hover:bg-red-600"
                            >
                                ×
                            </button>
                            <h3 className="sm:text-2xl text-base font-bold text-gray-800 ">
                                {selectedProject.title}
                            </h3>
                            <p className="text-gray-950 whitespace-pre-line ">
                                {selectedProject.description}
                            </p>
                            {/* ไลบารี่วิ่ง */}
                            <div className="relative overflow-hidden whitespace-nowrap">
                                <div className="animate-scroll inline-block sm:mb-5 sm:mt-5">
                                    {selectedProject.libraries &&
                                        selectedProject.libraries.map((lib, libIndex) => (
                                            <span key={libIndex} className="mx-4 text-sm font-medium text-gray-700">
                                                {lib}
                                            </span>
                                        ))}
                                </div>
                            </div>

                            <a
                                href={selectedProject.weblink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-950 whitespace-pre-line"
                            >
                                {t("website")}: <u>{selectedProject.weblink}</u>
                            </a>

                            <div className="flex gap-5 justify-center mt-3">
                                {selectedProject.githubFrontend && (
                                    <a
                                        href={selectedProject.githubFrontend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mb-1 sm:text-lg text-sm bg-gradient-to-r from-[#f08a4b] to-[#e05b3c] text-white py-2 px-2 rounded-lg font-bold shadow-lg transition-transform duration-200 cursor-pointer hover:scale-105 hover:shadow-[inset_0_0_8px_rgba(240,138,75,0.4),0_4px_15px_rgba(240,138,75,0.6),0_4px_15px_rgba(224,91,60,0.4)]"
                                    >
                                        GitHub Client
                                    </a>
                                )}
                                {selectedProject.githubBackend && (
                                    <a
                                        href={selectedProject.githubBackend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mb-1 sm:text-lg text-sm bg-gradient-to-r from-amber-700 to-amber-950 text-white py-2 px-2 rounded-lg font-bold shadow-lg transition-transform duration-200 cursor-pointer hover:scale-105 hover:shadow-[inset_0_0_8px_rgba(240,138,75,0.4),0_4px_15px_rgba(240,138,75,0.6),0_4px_15px_rgba(224,91,60,0.4)]"
                                    >
                                        GitHub Server
                                    </a>
                                )}


                            </div>


                        </motion.div>
                    </div>
                )
            }
        </motion.div >
    );
};

export default Projects;










