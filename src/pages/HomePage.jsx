import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";

const roles = ["Frontend Developer", "Backend Developer", "UI/UX Designer"];

function HomePage() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let timeout;
        if (typing) {
            const nextChar = roles[currentRoleIndex].slice(0, displayedText.length + 1);
            timeout = setTimeout(() => {
                setDisplayedText(nextChar);
                if (nextChar === roles[currentRoleIndex]) {
                    setTyping(false);
                }
            }, 100);
        } else {
            timeout = setTimeout(() => {
                setTyping(true);
                setDisplayedText("");
                setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }, 2000);
        }
        return () => clearTimeout(timeout);
    }, [displayedText, typing, currentRoleIndex]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className=" min-h-screen font-sans"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="flex flex-col items-center justify-center text-center pt-20 pb-5">
                <motion.div
                    className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center shadow-xl overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                        type: "spring",
                        stiffness: 900,
                        damping: 20,
                    }}
                >
                    <motion.img
                        src={profilepic}
                        alt="profile-pic"
                        className="w-full h-full object-contain"

                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                        }}
                    />
                </motion.div>
                <h1 className="mt-6 text-4xl font-extrabold text-gray-600">
                    Piriyapong Bunjusook
                </h1>
                <motion.div
                    className="mt-4 h-10 text-xl font-semibold text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {displayedText}
                    <span className="blinking-cursor">|</span>
                </motion.div>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed font-medium">
                    I am a motivated individual aspiring to be a Full Stack Developer with strong problem-solving skills and experience in front-end and back-end development. Committed to improving my skills and contributing to the organization’s growth.
                </p>
            </div>


            <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-stretch space-y-4 md:space-y-0 md:space-x-4">
                    <motion.div
                        className="flex-1 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 min-h-[150px]"
                        variants={itemVariants} whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-base font-semibold text-gray-800 border-b-2 pb-2 border-gray-200">
                            Personal Details
                        </h3>
                        <motion.ul
                            className="mt-2 space-y-1 text-sm text-gray-600"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.li variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}>

                                <strong>NickName:</strong> Bell
                            </motion.li>
                            <motion.li variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}>
                                <strong>Gender:</strong> Male
                            </motion.li>
                            <motion.li variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}>
                                <strong>Age:</strong> 28
                            </motion.li>
                            <motion.li variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}>
                                <strong>Nationality:</strong> Thai
                            </motion.li>
                            <motion.li variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}>
                                <strong>Date of Birth:</strong> March 26, 1996
                            </motion.li>
                        </motion.ul>
                    </motion.div>

                    <motion.div
                        className="flex-1 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 min-h-[150px]"
                        variants={itemVariants} whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-base font-semibold text-gray-800 border-b-2 pb-2 border-gray-200" >
                            Additional Details
                        </h3>
                        <motion.ul
                            className="mt-2 space-y-1 text-sm text-gray-600"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.li
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}
                            >
                                <strong>Languages:</strong> Thai (Native), English (Basic)
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}
                            >
                                <strong>Interests:</strong> AI Research, Software Development
                            </motion.li>
                        </motion.ul>
                    </motion.div>

                    <motion.div
                        className="flex-1 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 min-h-[150px]"
                        variants={itemVariants} whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-base font-semibold text-gray-800 border-b-2 pb-2 border-gray-200">
                            Strengths
                        </h3>
                        <motion.ul
                            className="mt-2 space-y-1 text-sm text-gray-600"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.li
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}
                            >
                                ✔️ Adaptability
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}
                            >
                                ✔️ Fast Learner
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}
                            >
                                ✔️ Teamwork
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default HomePage;
