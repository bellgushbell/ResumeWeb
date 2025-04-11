import React from "react";
import { motion } from "framer-motion";
import "../utills/ExperiencesCardCSS.css"; // นำเข้าคลาส CSS ที่คุณสร้างไว้
import { useTranslation } from "react-i18next";

function Experiences() {
    const { t } = useTranslation();
    const experiences = [
        {
            id: 1,
            title: t("Internship"),

            company: t("Co-operative Education Program at Teibto Co., Ltd."),
            year: "2018",
            details: [
                t("Gained expertise in NetSuite-ERP customization and workflow development."), t("Customized print forms for order and tax processing."),
            ],
        },
        {
            id: 2,
            title: t("ERP Consultant"),
            company: t("Enterprise Resource Planning Consultant at Teibto Co., Ltd."),
            year: "2019 - 2020",
            details: [
                t("Configured and customized NetSuite ERP for various industries, including AR/AP workflows, roles, and custom Suitelets of NetSuite."),
                t("Collaborated on ERP projects for 'Baywa' and 'Loxley,' importing master data, integrating voucher workflows, and traveling for on-site ERP setup."),
            ],
        },
        {
            id: 3,
            title: t("Family Business"),
            company: t("Quick Service Shop & Apartment Development"),
            year: "2021 - 2024",
            details: [
                t("Managed and grew the family business during COVID-19 by establishing 'Quick Service' a motorcycle and car repair shop."),
                t("Oversaw planning and construction of a family apartment project on inherited land."),
            ],
        },
        {
            id: 4,
            title: t("Fullstack JavaScript Bootcamp"),
            company: t("Software Park (Thai Programmer Association)"),
            year: t("July 2024 - November 2024"),
            details: [
                t("Completed a 4-month Fullstack JavaScript bootcamp mastering full-stack concepts from basics to advanced."),
                t("Presented during Demo Day real projects like a mobile case shop and a hotel booking system, built with React and Prisma for seamless deployment."),
            ],
        },
        {
            id: 5,
            title: t("Web Programmer"),
            company: t("Swordsman3 Online & EXP Up Topup (by Panasia Entertainment)"),
            year: t("Jan 2025 – Present"),
            details: [
                t("Designed and implemented animated loader screen and interactive UI for Class Preview, Highlight, News, and Gallery sections of Swordsman3 Online homepage."),
                t("Created dynamic preregister page with database-driven logic, progress bar with unlockable reward icons, email registration and social sharing integration, including file download and a 3-step milestone system to increase the counter."),
                t("Developed a complete top-up website system for Swordsman3 Online using PHP (Laravel), MySQL, and Bootstrap 5."),
                t("Integrated official game SDK API for account creation, authentication, and top-up confirmation with MD5 signature."),
                t("Added UX enhancements: real-time form validation, SweetAlert2 alerts, and localStorage form state saving."),
                t("Implemented secure user registration and login system with email OTP verification and CSRF protection, handling edge cases such as expired OTPs, duplicate accounts, invalid sessions, and optimizing OTP countdown logic.")
            ],

        }

    ];

    return (
        <div id="Career" className="max-w-4xl mx-auto p-6">
            <h3 className="flex justify-center font-semibold text-gray-800 mb-10 text-4xl">
                {t("Experiences")}
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
