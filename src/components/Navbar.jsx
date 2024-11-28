import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("home");

    const tabs = [
        { id: "home", text: "Home" },
        { id: "skills", text: "Skills" },
        { id: "projects", text: "Projects" },
        { id: "contact", text: "Contact" },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 w-2/3 mx-auto z-50">

            <div className="relative mx-auto">
                {/* Gradient Navigation Bar */}
                <div className="relative h-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-b-full flex justify-around items-center shadow-lg">
                    {/* Navigation Items */}
                    {tabs.map((tab) => (
                        <Link
                            key={tab.id}
                            to={tab.id}
                            smooth={true}
                            duration={500}
                            className="relative z-20 flex items-center justify-center w-16 h-16 cursor-pointer"
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {activeTab === tab.id ? (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute flex flex-col items-center justify-center top-8 text-white"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    {/* วงกลมสี Gradient พร้อมเงาและการลอย */}
                                    <motion.div
                                        className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 shadow-lg"
                                        // style={{
                                        //     background: "linear-gradient(to right, #ff6b6b, #f06543)", // Gradient สีวงกลม

                                        // }}
                                        animate={{
                                            y: [0, -3, 0], // ลอยขึ้นลง
                                        }}
                                        transition={{
                                            repeat: Infinity, // ทำซ้ำไม่มีสิ้นสุด
                                            duration: 2, // ระยะเวลาในแต่ละรอบ
                                            ease: "easeInOut", // รูปแบบการเคลื่อนไหว
                                        }}
                                    >
                                        {tab.text}
                                    </motion.div>

                                    {/* แถบ Gradient ด้านบน */}
                                    <div
                                        className="absolute rounded-t-full bg-gray-100"
                                        style={{
                                            width: "90px", // เพิ่มความกว้างของแถบ
                                            height: "38px", // ความสูง
                                            top: "-14px", // ตำแหน่งสูงกว่าวงกลม
                                            left: "calc(50% - 45px)", // จัดให้อยู่ตรงกลาง
                                            zIndex: -10, // ทำให้แถบขาวอยู่ใต้วงกลม
                                            border: "none", // ลบเส้นกรอบออก
                                        }}
                                    ></div>
                                </motion.div>
                            ) : (
                                <span className="text-gray-100 hover:text-white transition duration-300 ease-in-out">
                                    {tab.text}
                                </span>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
