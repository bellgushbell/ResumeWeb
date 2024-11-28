import React from "react";
import { motion } from "framer-motion";
import "../utills/ExperiencesCardCSS.css"; // นำเข้าคลาส CSS ที่คุณสร้างไว้

function Experiences() {
    const experiences = [
        {
            id: 1,
            title: "Internship",

            company: "Co-operative Education Program at Teibto Co., Ltd.",
            year: "2018",
            details: [
                "Gained expertise in NetSuite-ERP customization and workflow development.",
                "Customized print forms for order and tax processing.",
            ],
        },
        {
            id: 2,
            title: "ERP Consultant",
            company: "Enterprise Resource Planning at Teibto Co., Ltd.",
            year: "2019 - 2020",
            details: [
                "Configured and customized NetSuite ERP for various industries, including AR/AP workflows, roles, and custom Suitelets.",
                "Collaborated on ERP projects for 'Baywa' and 'Loxley,' importing master data, integrating voucher workflows, and traveling for on-site ERP setup.",
            ],
        },
        {
            id: 3,
            title: "Family Business",
            company: "Quick Service Shop & Apartment Development",
            year: "2021 - 2024",
            details: [
                "Managed and grew the family business during COVID-19 by establishing 'Quick Service' a motorcycle and car repair shop.",
                "Oversaw planning and construction of a family apartment project on inherited land.",
            ],
        },
        {
            id: 4,
            title: "Fullstack JavaScript Bootcamp",
            company: "Software Park (Thai Programmer Association)",
            year: "July 2024 – November 2024",
            details: [
                "Completed a 4-month Fullstack JavaScript bootcamp mastering full-stack concepts from basics to advanced.",
                "Presented during Demo Day real projects like a mobile case shop and a hotel booking system, built with React and Prisma for seamless deployment.",
            ],
        },
    ];

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h3 className="flex justify-center font-semibold text-gray-800 mb-10 text-4xl">
                Experiences
            </h3>
            <div className="space-y-10">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        className="border-gradient inner-card"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 900,
                            damping: 20,
                            duration: 0.5,
                        }}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}

                    >
                        <div className="p-6">
                            <h4 className="text-3xl font-extrabold text-gray-900 mb-2">
                                {exp.title}
                            </h4>
                            <p className="italic text-lg text-gray-600 mb-4">
                                {exp.company}
                            </p>
                            <p className="text-lg font-medium text-gray-800 mb-4">
                                {exp.year}
                            </p>
                            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 text-lg">
                                {exp.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div >
    );
}

export default Experiences;
