import React, { useState } from "react";
import Draggable from "react-draggable";
import { motion } from "framer-motion";

const skills = [
    { id: "1", name: "HTML", image: "/assets/html-icon.png" },
    { id: "2", name: "CSS", image: "/assets/css-icon.png" },
    { id: "3", name: "React", image: "/assets/react-icon.png" },
    { id: "4", name: "JavaScript", image: "/assets/javascript-icon.png" },
    { id: "5", name: "Bootstrap", image: "/assets/bootstrap-icon.png" },
    { id: "6", name: "Tailwind", image: "/assets/tailwind-icon.png" },
    { id: "7", name: "Figma", image: "/assets/figma-icon.png" },
    { id: "8", name: "Git", image: "/assets/git-icon.png" },
    { id: "9", name: "Postman", image: "/assets/postman-icon.png" },
    { id: "10", name: "Node.js", image: "/assets/nodejs-icon.png" },
    { id: "11", name: "MySQL", image: "/assets/mysql-icon.png" },
    { id: "12", name: "Prisma", image: "/assets/prisma-icon.png" },
    { id: "13", name: "Docker", image: "/assets/docker-icon.png" },
    { id: "14", name: "PHP", image: "/assets/php-icon.png" },
    { id: "15", name: "C", image: "/assets/c-icon.png" },
    { id: "16", name: "Python", image: "/assets/python-icon.png" },
];

function Skills() {
    const [items, setItems] = useState(skills);

    // State for tracking position of the card after drag
    const [draggingPositions, setDraggingPositions] = useState(
        skills.reduce((acc, skill) => {
            acc[skill.id] = { x: 0, y: 0 }; // Set initial positions to (0, 0)
            return acc;
        }, {})
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Delay for each child
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const handleDrag = (e, data, skillId) => {
        // Update the position of the card during drag
        setDraggingPositions((prevPositions) => ({
            ...prevPositions,
            [skillId]: { x: data.x, y: data.y },
        }));
    };

    const handleDragStop = (e, data, skillId) => {
        // Save the new position of the card after drag
        setDraggingPositions((prevPositions) => ({
            ...prevPositions,
            [skillId]: { x: data.x, y: data.y },
        }));
    };

    return (
        <div
            className="max-w-full mx-auto p-8"
            style={{
                perspective: "1000px", // Enable perspective for Parallax Effect
            }}
        >
            <h3 className="flex justify-center font-semibold text-gray-800 mb-5 text-3xl">
                SKILLS
            </h3>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="sm:w-full grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-8"
            >
                {items.map((skill, index) => (
                    <motion.div
                        key={skill.id}
                        variants={cardVariants}
                        className="relative"
                    >
                        <Draggable
                            axis="both"
                            position={draggingPositions[skill.id]}
                            onDrag={(e, data) => handleDrag(e, data, skill.id)}
                            onStop={(e, data) => handleDragStop(e, data, skill.id)}
                        >
                            <div
                                className="sm:h-auto h-[100px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center cursor-move transition-all duration-200 ease-out hover:bg-gray-600 hover:text-white"
                                style={{
                                    transition: "all 0.2s ease-out",
                                    userSelect: "none", // Prevent text selection during drag
                                    touchAction: "none", // Disable browser default touch actions
                                }}
                            >
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-16 h-16 mb-4 "
                                />
                                <h3 className="sm:text-lg text-base font-bold text-gray-800 text-inherit">
                                    {skill.name}
                                </h3>
                            </div>
                        </Draggable>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Skills;




// import React, { useState } from "react";
// import Draggable from "react-draggable"; // นำเข้าไลบรารี react-draggable
// import { motion } from "framer-motion";

// const skills = [
//     { id: "1", name: "HTML", image: "/src/assets/html-icon.png" },
//     { id: "2", name: "CSS", image: "/src/assets/css-icon.png" },
//     { id: "3", name: "React", image: "/src/assets/react-icon.png" },
//     { id: "4", name: "JavaScript", image: "/src/assets/javascript-icon.png" },
//     { id: "5", name: "Bootstrap", image: "/src/assets/bootstrap-icon.png" },
//     { id: "6", name: "Tailwind", image: "/src/assets/tailwind-icon.png" },
//     { id: "7", name: "Figma", image: "/src/assets/figma-icon.png" },
//     { id: "8", name: "Git", image: "/src/assets/git-icon.png" },
//     { id: "9", name: "Postman", image: "/src/assets/postman-icon.png" },
//     { id: "10", name: "Node.js", image: "/src/assets/nodejs-icon.png" },
//     { id: "11", name: "MySQL", image: "/src/assets/mysql-icon.png" },
//     { id: "12", name: "Prisma", image: "/src/assets/prisma-icon.png" },
//     { id: "13", name: "Docker", image: "/src/assets/docker-icon.png" },
//     { id: "14", name: "PHP", image: "/src/assets/php-icon.png" },
//     { id: "15", name: "C", image: "/src/assets/c-icon.png" },
//     { id: "16", name: "Python", image: "/src/assets/python-icon.png" },
// ];

// function Skills() {
//     const [items, setItems] = useState(skills);

//     // State for tracking position of the card after drag
//     const [draggingPositions, setDraggingPositions] = useState(
//         skills.reduce((acc, skill) => {
//             acc[skill.id] = { x: 0, y: 0 }; // Set initial positions to (0, 0)
//             return acc;
//         }, {})
//     );

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.1, // Delay for each child
//             },
//         },
//     };

//     const cardVariants = {
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0 },
//     };

//     const handleDrag = (e, data, skillId) => {
//         // Update the position of the card during drag
//         setDraggingPositions((prevPositions) => ({
//             ...prevPositions,
//             [skillId]: { x: data.x, y: data.y },
//         }));
//     };

//     const handleDragStop = (e, data, skillId) => {
//         // Save the new position of the card after drag
//         setDraggingPositions((prevPositions) => ({
//             ...prevPositions,
//             [skillId]: { x: data.x, y: data.y },
//         }));
//     };

//     return (
//         <div
//             className="max-w-full mx-auto p-8"
//             style={{
//                 perspective: "1000px", // Enable perspective for Parallax Effect
//             }}
//         >
//             <h3 className="flex justify-center font-semibold text-gray-800 mb-5 text-3xl">
//                 SKILLS
//             </h3>
//             <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={containerVariants}
//                 className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
//             >
//                 {items.map((skill, index) => (
//                     <motion.div
//                         key={skill.id}
//                         variants={cardVariants}
//                         className="relative"
//                     >
//                         <Draggable
//                             axis="both" // สามารถลากได้ทั้งแกน X และ Y
//                             position={draggingPositions[skill.id]} // ใช้ตำแหน่งที่บันทึกไว้
//                             onDrag={(e, data) => handleDrag(e, data, skill.id)} // อัปเดตตำแหน่งระหว่างลาก
//                             onStop={(e, data) => handleDragStop(e, data, skill.id)} // เก็บตำแหน่งหลังจากลากเสร็จ
//                             scale={1} // ปรับขนาดการลาก
//                         >
//                             <div
//                                 id={`skill-card-${index}`}
//                                 className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ease-out hover:bg-gray-600 hover:text-white"
//                                 style={{
//                                     transition: "all 0.2s ease-out",
//                                 }}
//                             >
//                                 <img
//                                     src={skill.image}
//                                     alt={skill.name}
//                                     className="w-16 h-16 mb-4 cursor-pointer"
//                                 />
//                                 <h3 className="text-lg font-bold text-gray-800 text-inherit cursor-pointer">
//                                     {skill.name}
//                                 </h3>
//                             </div>
//                         </Draggable>
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </div>
//     );
// }

// export default Skills;
