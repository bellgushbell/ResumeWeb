// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// กำหนดข้อความภาษาไทยและอังกฤษ
const resources = {
    en: {
        translation: {
            "home": "Home",
            "skills": "Skills",
            "projects": "Projects",
            "contact": "Contact",
            "Personal Details": "Personal Details",
            // เพิ่มข้อความที่ต้องการแปล
        },
    },
    th: {
        translation: {
            "home": "หน้าแรก",
            "skills": "ทักษะ",
            "projects": "โครงการ",
            "contact": "ติดต่อ",
            "Personal Details": "ประวัติส่วนตัว",
            // เพิ่มข้อความที่ต้องการแปล
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "th", // ค่าเริ่มต้นให้เป็นภาษาไทย
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
