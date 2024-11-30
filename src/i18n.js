// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
        translation: {

        },
    },
    th: {
        translation: {
            "Piriyapong Bunjusook": "นาย พิริยพงศ์ บรรจุสุข",
            "I am a motivated individual aspiring to be a Full Stack Developer with strong problem-solving skills and experience in front-end and back-end development. Committed to improving my skills and contributing to the organization’s growth.": "ผมมีความมุ่งมั่นที่จะเป็น Junior Full Stack Developer ที่มีทักษะการแก้ปัญหาที่ดี และอยากเป็นDev ในด้านต่างๆอย่างเต็มตัว อยากมีประสบการณ์พัฒนาในด้าน Front-End และ Back-End มุ่งมั่นที่จะพัฒนาความสามารถของตนเองอย่างต่อเนื่อง และพร้อมที่จะมีส่วนร่วมในการพัฒนาและเติบโตขององค์กรอย่างเต็มที่",
            "Personal Details": "ประวัติส่วนตัว",
            "NickName": "ชื่อเล่น", "Bell": "เบลล์",
            "Gender": "เพศ", "Male": "ชาย",
            "Age": "อายุ",
            "Nationality": "สัญชาติ", "Thai": "ไทย",
            "Languages": "ความถนัดทางภาษา", "Thai (Native), English (Basic)": "ไทย (หลัก) อังกฤษ (พื้นฐาน)",
            "Date of Birth": "วันเกิด", "March 26, 1996": "26 มีนาคม ค.ศ.1996/พ.ศ.2539",
            "Education": "ประวัติการศึกษา",
            "High School Diploma": "ระดับมัธยมศึกษา", "Surawittayakarn School (Provincial School of Surin), Thailand": "โรงเรียนสุรวิทยาคาร (โรงเรียนประจำจังหวัด) สุรินทร์ ประเทศไทย",
            "Bachelor of Computer Engineering": "ปริญญาตรี วิศวกรรมคอมพิวเตอร์",
            "Suranaree University of Technology, Nakhon Ratchasima 2014 - 2018": "มหาวิทยาลัยเทคโนโลยีสุรนารี, จัวหวัดนครราชสีมา 2014 - 2018",
            "Graduated a 4-year program with a unique 3-term per year system, emphasizing intensive learning and including exams at the end of each term, providing an intensive learning experience.": "จบการศึกษาจากหลักสูตร 4 ปี คณะวิศวกรรมศาสตร์ ที่มีระบบการเรียนแบบ 3 เทอมต่อปี มีการสอบในตอนท้ายของแต่ละเทอม เน้นการเรียนที่เข้มข้นเพื่อเสริมสร้างประสบการณ์การเรียนรู้",
            "Strengths": "จุดแข็งและความสนใจ", "Adaptability": "การปรับตัว พลิกแพลง", "Fast Learner": "เรียนรู้ได้ไว ขยันเรียนรู้สิ่งใหม่ๆ", "Teamwork": "ทีมเวิร์ค ทำงานเป็นทีมได้ดี รับฟัง",
            "Interest": "ความสนใจ",
            " AI Research, Software Developer , UX UI Advance, Cloud Computing": " ♥ ค้นคว้าเกี่ยวกับ AI สนใจศึกษาเพื่อประยุกต์ใช้งาน, ♥ UX/UI ขั้นสูง สนใจการออกแบบที่สวยงามและใช้งานง่าย เพื่อตอบโจทย์ผู้ใช้อย่างมีประสิทธิภาพ, ♥ การพัฒนาซอฟต์แวร์ ชอบสร้างเครื่องมือและแอปพลิเคชันที่ช่วยแก้ปัญหาและพัฒนาประสบการณ์ผู้ใช้, ♥ ระบบคลาวด์ สนใจเทคโนโลยีคลาวด์ที่ช่วยจัดการและประมวลผลข้อมูลในยุคดิจิทัล",
            "SKILLS": "ทักษะ",
            "PROJECTS": "โปรเจ็กต์/ผลงาน",
            "View Details": "ดูเพิ่มเติม",
            "Individual Project: Phone Case E-Commerce": "โปรเจ็กต์เดี่ยว: ร้านเคสมือถือ PT(Pretty) Case",
            "Oct 2024 - Oct 2024 • Built an e-commerce cart with real-time pricing, animations, password reset emails, protected routes, and Framer Motion for smooth transitions. Introduced slide-to-pay to prevent accidental payments, supporting mobile. Provided admin tools for product management, stock, payment approval, and analytics with charts for sales, abandoned carts": "Oct 2024 - Oct 2024 • พัฒนาเว็บไซต์ขายเคสมือถือออนไลน์พร้อมฟีเจอร์ซื้อขาย อนิเมชันตระกร้า เพิ่มลดราคา อีเมลรีเซ็ตรหัสผ่าน และการเปลี่ยนหน้าแบบลื่นไหลด้วย Framer Motion รวมถึงเพิ่มฟีเจอร์ Slide- to-Pay เพื่อป้องกันผู้ใช้กดปุ่มจ่ายเงินโดยไม่ตั้งใจ พร้อมระบบจัดการสินค้า สต็อก อนุมัติการชำระเงิน และแสดงผลวิเคราะห์ด้วยกราฟยอดขายและตะกร้าสินค้าที่ถูกทิ้ง",
            "Group Project: Hotel Booking": "โปรเจกต์กลุ่ม: จองโรงแรมHotelBoox",
            "Oct 2024 - Oct 2024 • Developed a booking system with location search, filters, price comparison, and discount codes. Integrated Stripe API for payments, Google Maps API for real-time positioning, and React Date Range for selecting check-in/out dates. Created a 3D card effect for promotions to boost engagement. Built image sliders with Swiper and Slick Carousel, customizing Toastify notifications with SweetAlert2. Enabled Google login, real-time admin chat using OAuth2 and Socket.io.": "Oct 2024 - Oct 2024 • พัฒนาระบบจองโรงแรมที่มีฟีเจอร์ค้นหาตำแหน่ง ฟิลเตอร์ เปรียบเทียบราคา และโค้ดส่วนลด พร้อมผสาน Stripe API สำหรับชำระเงิน Google Maps API แสดงตำแหน่งแบบเรียลไทม์ และ React Date Range ในการเลือกวันเช็คอิน/เช็คเอาท์ เพิ่มเอฟเฟกต์การ์ด 3 มิติสำหรับโปรโมชัน สไลด์รูปภาพด้วย Swiper และ Slick Carousel พร้อมปรับแต่งแจ้งเตือนด้วย Toastify และ SweetAlert2 และเปิดใช้ Google Login OAuth2 กับระบบแชทเรียลไทม์ผ่าน Socket.io",
            "Individual Project: Pokedex": "โปรเจกต์เดี่ยว: โปเกมอนเดกซ์",
            "A TypeScript-based Pokedex project that fetches Pokemon data from the PokéAPI and displays it in a user-friendly format, categorizing Pokemon by type and offering a fully responsive design.Developed using React, Sass, Tailwind CSS, and Axios for API calls and state management with Zustand. To enhance search and sorting capabilities, the project utilizes match- sorter and sort - by libraries, allowing users to filter and organize Pokemon by name, type, or other criteria. LocalForage is employed for local data storage.": "โปรเจ็กต์เป็นสารานุกรมโปรเกมอน ที่พัฒนาด้วย TypeScript ใช้ PokéAPI ดึงข้อมูลโปเกมอนและแสดงผลในรูปแบบใช้งานง่าย จัดหมวดหมู่ตามประเภทโปเกมอนและรองรับทุกอุปกรณ์ พัฒนาด้วย React, Sass, Tailwind CSS และ Axios พร้อมจัดการStateด้วย Zustand ใช้ match-sorter และ sort-by สำหรับการกรองและจัดเรียงข้อมูล และ LocalForage สำหรับจัดเก็บข้อมูลในเครื่อง เพิ่มความสะดวกและรวดเร็วให้ผู้ใช้งาน",
            "Individual Project: Eco Pandora Box": "โปรเจกต์เดี่ยว: Pandora Box รักโลก",
            "website": "เว็ปไซต์",

            "Experiences": "ประสบการณ์",
            "Internship": "ฝึกงาน",
            "Co-operative Education Program at Teibto Co., Ltd.": "สหกิจศึกษาที่บริษัท Teibto Co., Ltd.",
            "Gained expertise in NetSuite-ERP customization and workflow development.": "ปรับแต่งระบบ NetSuite-ERP และการพัฒนากระบวนการทำงาน (Workflow)",
            "Customized print forms for order and tax processing.": "จัดการปริ๊นซ์ฟอร์ม สร้างใบสั่งซื้อใบขนส่งและการใบจัดการภาษี",
            "ERP Consultant": "ที่ปรึกษาระบบ ERP",
            "Enterprise Resource Planning Consultant at Teibto Co., Ltd.": "ที่ปรึกษาระบบวางแผนทรัพยากรที่บริษัท Teibto Co., Ltd.",
            "Configured and customized NetSuite ERP for various industries, including AR/AP workflows, roles, and custom Suitelets of NetSuite.": "อยู่ Project Team ตั้งค่าระบบERP ให้บริษัทต่างๆ รวมถึงการจัดการกระบวนการบัญชีลูกหนี้/เจ้าหนี้ (AR/AP workflows) บทบาทการใช้งาน (roles) และการปรับแต่ง Suitelets ของ NetSuite",
            "Collaborated on ERP projects for 'Baywa' and 'Loxley,' importing master data, integrating voucher workflows, and traveling for on-site ERP setup.": "ร่วมงานในโครงการ ERP สำหรับ 'Baywa' และ 'Loxley' โดยดำเนินการนำเข้าข้อมูลหลัก (master data) รวมถึงการผสานการทำงานของกระบวนการบันทึกเอกสาร (voucher workflows) และเดินทางไปตั้งค่าระบบ ERP ณ สถานที่จริง",

            "Family Business": "ธุรกิจครอบครัว",
            "Quick Service Shop & Apartment Development": "ร้านซ่่อมมอไซต์ของพ่อ และ บูรณาการอามารคเมนต์ให้เช่า",
            "Managed and grew the family business during COVID-19 by establishing 'Quick Service' a motorcycle and car repair shop.": "ช่วงโควิดกลับไปช่วยก่อตั้งร้านซ่อมรถแต่งรถให้พ่อและบริหารจัดการ",
            "Oversaw planning and construction of a family apartment project on inherited land.": "มีแพลนกำลังสร้างอาพาร์ตเมนต์ให้เช่า ที่ได้ที่ดินจากมรดก ตอนนี้ให้ครอบครัวดูแลอยู่",
            "Fullstack JavaScript Bootcamp": "บูสต์แคมป์ Fullstack JavaScrip",
            "Software Park (Thai Programmer Association)": "ซอฟแวร์พาร์ค สมาคมโปรแกรมเมอไทย",
            "July 2024 - November 2024": "กรกฎาคม 2024 - พฤศจิกายน 2024",
            "Completed a 4-month Fullstack JavaScript bootcamp mastering full-stack concepts from basics to advanced.": "สำเร็จการอบรมบูตแคมป์ Fullstack JavaScript ระยะเวลา 4 เดือน ฝึกขั้นพื้นฐานต่างๆจนถึงขั้นทำเองได้",
            "Presented during Demo Day real projects like a mobile case shop and a hotel booking system, built with React and Prisma for seamless deployment.": "นำเสนองานจริง ในวันDemo Day สัมภาษณ์งานจริง และทำโปรเจ็กต์โดยใช้React Prisma NodeJS รวมทั้งการนำไปใช้จริง ",

            "Contact Me": "ติดต่อฉัน",
            "Contact Information": "ช่องทางการติดต่อ",
            "Send Message To Me": "ส่งข้อความหาฉัน", "Name": "ชื่อ", "Email": "อีเมล", "Message": "ข้อความ", "SEND MESSAGE": "ส่งข้อความ",




        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", //เริ่มต้น
        fallbackLng: "en",//ผู้ใช้เลือกภาษาที่ไม่มีการแปลใน resources (เช่น ภาษาไทย) ระบบจะใช้ภาษาอังกฤษ
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
