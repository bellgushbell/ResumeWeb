import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";
import { useTranslation } from "react-i18next";

const roles = ["Frontend Developer", "Backend Developer", "UI/UX Designer"];

function HomePage() {
    const { t } = useTranslation();
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
            <div className="flex flex-col items-center justify-center text-center pt-20 pb-5 ">
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
                <h1 className="mt-6 text-2xl font-extrabold text-gray-600 sm:text-4xl ">
                    {t("Piriyapong Bunjusook")}
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
                <p className="mt-4 text-lg text-gray-600 max-w-2xl leading-relaxed font-medium sm:pl-0 sm:pr-0 pl-5 pr-5 ">
                    {t("I am a motivated individual aspiring to be a Full Stack Developer with strong problem-solving skills and experience in front-end and back-end development. Committed to improving my skills and contributing to the organization’s growth.")}
                </p>
            </div>


            <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-stretch space-y-4 md:space-y-0 md:space-x-4">
                    <motion.div
                        className="flex-1 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 min-h-[150px]"
                        variants={itemVariants} whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-base font-semibold text-gray-800 border-b-2 pb-2 border-gray-200">
                            {t("Personal Details")}
                        </h3>
                        <motion.ul
                            className="mt-2 space-y-1 text-sm text-gray-600"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.li variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}>

                                <strong>{t("NickName")}:</strong> {t("Bell")}
                            </motion.li>
                            <motion.li variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}>
                                <strong>{t("Gender")}:</strong> {t("Male")}
                            </motion.li>
                            <motion.li variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}>
                                <strong>{t("Age")}:</strong> 28
                            </motion.li>
                            <motion.li variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}>
                                <strong>{t("Nationality")}:</strong> {t("Thai")}
                            </motion.li>
                            <motion.li variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}>
                                <strong>{t("Languages")}:</strong> {t("Thai (Native), English (Basic)")}
                            </motion.li>
                            <motion.li variants={itemVariants} whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}>
                                <strong>{t("Date of Birth")}:</strong> {t("March 26, 1996")}
                            </motion.li>
                        </motion.ul>
                    </motion.div>

                    <motion.div
                        className="flex-1 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 min-h-[150px]"
                        variants={itemVariants} whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-base font-semibold text-gray-800 border-b-2 pb-2 border-gray-200" >
                            {t("Education")}
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
                                <strong>{t("High School Diploma")}:</strong> {t("Surawittayakarn School (Provincial School of Surin), Thailand")}<br></br> 2007 - 2013
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}
                            >
                                <strong>{t("Bachelor of Computer Engineering")}:</strong> {t("Suranaree University of Technology, Nakhon Ratchasima 2014 - 2018")}<br></br> {t("Graduated a 4-year program with a unique 3-term per year system, emphasizing intensive learning and including exams at the end of each term, providing an intensive learning experience.")}
                            </motion.li>
                        </motion.ul>
                    </motion.div>

                    <motion.div
                        className="flex-1 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 min-h-[150px]"
                        variants={itemVariants} whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-base font-semibold text-gray-800 border-b-2 pb-2 border-gray-200">
                            {t("Strengths")}
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
                                ✔️ {t("Adaptability")}
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}
                            >
                                ✔️ {t("Fast Learner")}
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}
                            >
                                ✔️ {t("Teamwork")}
                            </motion.li>
                            <br></br>
                            <motion.li
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" }}
                            >

                                <strong>{t("Interest")}:</strong>{t(" AI Research, Software Developer , UX UI Advance, Cloud Computing")}
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default HomePage;
