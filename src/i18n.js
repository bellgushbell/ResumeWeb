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
            "Eco Pandora Box is a donation platform with tiered rewards(10, 100, 1000, 10000).Features include a visually engaging 3D box design, easy payment via card, QR, and slide- to - pay, reward delivery with email details, admin tools for managing items and deliveries, and a support chat for tracking rewards.": "Eco Pandora Box เป็นแพลตฟอร์มสำหรับการบริจาคพร้อมของรางวัลตอบแทนตามระดับ (10, 100, 1000, 10000) มาพร้อมกับกล่อง 3D ที่น่าสนใจ ระบบชำระเงินง่ายผ่านบัตร, QR และสไลด์จ่ายเงิน จัดส่งของรางวัลพร้อมรายละเอียดทางอีเมล มีเครื่องมือสำหรับผู้ดูแลในการจัดการสินค้าและสถานะการจัดส่ง และมีแชทสนับสนุนเพื่อติดตามของรางวัล",

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

            "Developed a complete top-up website system for Swordsman3 Online using PHP (Laravel), MySQL, and Bootstrap 5.":
                "พัฒนาเว็บไซต์ระบบเติมเงินแบบครบวงจรให้เกม Swordsman3 Online ด้วย PHP (Laravel), MySQL และ Bootstrap 5",

            "Integrated official game SDK API for account creation, authentication, and top-up confirmation with MD5 signature.":
                "ผสานการทำงานกับ SDK ของเกมอย่างเป็นทางการ เพื่อสร้างบัญชีผู้ใช้ ยืนยันตัวตน และยืนยันการเติมเงินด้วยลายเซ็น MD5",

            "Added UX enhancements: real-time form validation, SweetAlert2 alerts, and localStorage form state saving.":
                "เพิ่มประสบการณ์ใช้งานที่ดีขึ้นด้วยการตรวจสอบฟอร์มแบบเรียลไทม์ แจ้งเตือนด้วย SweetAlert2 และบันทึกสถานะฟอร์มด้วย localStorage",

            "Implemented secure user registration and login system with email OTP verification and CSRF protection, handling edge cases such as expired OTPs, duplicate accounts, invalid sessions, and optimizing OTP countdown logic.":
                "สร้างระบบสมัครและเข้าสู่ระบบที่ปลอดภัย พร้อมยืนยันตัวตนผ่านอีเมล OTP มีการป้องกัน CSRF และจัดการกรณีขอบเขต เช่น OTP หมดอายุ บัญชีซ้ำ เซสชันไม่ถูกต้อง และปรับปรุงระบบนับถอยหลัง OTP",

            "Designed and implemented animated loader screen and interactive UI for Class Preview, Highlight, News, and Gallery sections of Swordsman3 Online homepage.":
                "ออกแบบและพัฒนาอนิเมชันโหลดหน้า พร้อมส่วน UI แบบโต้ตอบ สำหรับหน้า Class Preview, Highlight, ข่าวสาร และแกลเลอรีของเว็บไซต์ Swordsman3 Online",

            "Created dynamic preregister page with database-driven logic, progress bar with unlockable reward icons, email registration and social sharing integration, including file download and a 3-step milestone system to increase the counter.":
                "พัฒนาหน้าลงทะเบียนล่วงหน้าแบบไดนามิก พร้อมระบบฐานข้อมูล, Progress Bar พร้อมไอคอนรางวัลปลดล็อก, ลงทะเบียนผ่านอีเมล, แชร์ผ่านโซเชียล, ดาวน์โหลดไฟล์ และระบบเก็บขั้นบรรลุ 3 ระดับเพื่อเพิ่มตัวเลขผู้ร่วมกิจกรรม",

            "Mar 2025 - Mar 2025 • Developed a cinematic gaming website for a mobile MMORPG using PHP as the backend. Integrated GSAP for animation, ScrollTrigger for scroll-based effects, and managed SEO meta updates dynamically with PHP. Added real-time news, event promotions, class preview with video/image switching, and GSAP-based loader with quote transitions. Connected to a MySQL database to render news and promotions with Axios and dynamic tab filters.":
                "มีนาคม 2025 • พัฒนาเว็บไซต์เกมมือถือแนว MMORPG รูปแบบเกม ด้วย PHP Java CSS เป็น Backend หลัก ผสาน GSAP สำหรับแอนิเมชัน และ ScrollTrigger เพื่อสร้างเอฟเฟกต์ตามการเลื่อนหน้า พร้อมจัดการข้อมูล SEO Meta แบบไดนามิกผ่าน PHP เพิ่มระบบแสดงข่าวสาร กิจกรรม โปรโมชั่นแบบเรียลไทม์ และหน้าแสดงคลาสพร้อมสลับวิดีโอ/รูปภาพ รวมถึงหน้ารอโหลดด้วย GSAP ที่มีคำคมเปลี่ยนแบบลื่นไหล เชื่อมต่อฐานข้อมูล MySQL เพื่อแสดงข่าวและโปรโมชันแบบเรียลไทม์ด้วย Axios และระบบแท็บกรองอัตโนมัติ",

            "Mar 2025 • Developed an interactive pre-registration page for a mobile MMORPG using PHP and JavaScript. The page features a visually engaging checkpoint-based reward system with GSAP and ScrollTrigger animations, dynamic SEO meta tags, and a fully responsive UI. Implemented a real-time registration counter synced with a MySQL database, along with email registration, social sharing integration, and user feedback using SweetAlert2.":
                "มีนาคม 2025 • พัฒนาหน้าลงทะเบียนล่วงหน้าแบบโต้ตอบสำหรับเกมมือถือแนว MMORPG โดยใช้ PHP และ JavaScript มาพร้อมระบบของรางวัลแบบปลดล็อกตามจุดเช็คพอยต์ แสดงผลด้วยแอนิเมชันจาก GSAP และ ScrollTrigger รองรับ SEO meta tag แบบไดนามิก และออกแบบให้รองรับการแสดงผลทุกอุปกรณ์ เสริมด้วย Progress Bar และระบบนับจำนวนผู้ลงทะเบียนแบบเรียลไทม์ที่เชื่อมต่อกับฐานข้อมูล MySQL พร้อมฟีเจอร์ลงทะเบียนผ่านอีเมล แชร์ผ่านโซเชียล และระบบแจ้งเตือนผู้ใช้ด้วย SweetAlert2",

            "Apr 2025 • Developed a custom content management system (CMS) for the News section of Swordsman3 Online using PHP and MySQL. Integrated SEO metadata input with live preview, Select2 keyword tagging, and role-based session access control. Added dynamic news filtering by category, image upload with preview, pagination, and modal-based image viewer. Ensured secure admin access and intuitive UX. Frontend designed with Bootstrap 5 and responsive layout.":
                "เมษายน 2025 • พัฒนาระบบจัดการเนื้อหา (CMS) สำหรับหมวดข่าวของเกม Swordsman3 Online ด้วย PHP และ MySQL รองรับการกรอกข้อมูล SEO พร้อมพรีวิวแบบเรียลไทม์ ระบบแท็กคีย์เวิร์ดด้วย Select2 และควบคุมสิทธิ์การเข้าถึงตามบทบาทผู้ใช้ เพิ่มฟีเจอร์กรองข่าวตามหมวดหมู่ อัปโหลดภาพพร้อมพรีวิว แสดงผลแบบแบ่งหน้า (Pagination) และดูภาพผ่านโมดัลแบบโต้ตอบ ออกแบบหน้าแอดมินให้ปลอดภัย ใช้งานง่าย และออกแบบ Frontend ด้วย Bootstrap 5 ที่รองรับทุกขนาดหน้าจอ",

            "Apr 2025 • Built a complete top-up website for the game Swordsman3 Online using Laravel and PHP. Implemented secure user registration and login with SDK API integration and OTP email verification. The registration system includes real-time validation, SweetAlert2 feedback, localStorage for input persistence, and session-based error handling. Backend manages user creation, authentication, and API signing with MD5. Designed with Bootstrap 5 for responsive UI and a smooth user experience. The top-up system is integrated with the game’s SDK and includes secure CSRF protection.":
                "เมษายน 2025 • พัฒนาเว็บไซต์ระบบเติมเงินแบบครบวงจรสำหรับเกม Swordsman3 Online ด้วย Laravel และ PHP พร้อมระบบสมัครสมาชิกและเข้าสู่ระบบที่ปลอดภัย รวมถึงระบบยืนยันตัวตนผ่านอีเมลด้วย OTP ผสานการทำงานกับ SDK ของเกมโดยตรง มีระบบตรวจสอบข้อมูลแบบเรียลไทม์ แจ้งเตือนผู้ใช้ด้วย SweetAlert2 และบันทึกข้อมูลฟอร์มด้วย localStorage พร้อมจัดการข้อผิดพลาดที่เกิดจากเซสชันฝั่งผู้ใช้ ฝั่ง Backend ทำการสร้างบัญชี การยืนยันตัวตน และการลงนาม API ด้วย MD5 ออกแบบ UI ด้วย Bootstrap 5 ให้รองรับการแสดงผลทุกอุปกรณ์ มอบประสบการณ์ใช้งานที่ลื่นไหล และระบบเติมเงินยังมีการป้องกัน CSRF อย่างปลอดภัย",

            "Project: Phone Case E-Commerce": " ร้านขายเคสมือถือ",
            "Project: Hotel Booking": " ระบบจองโรงแรม",
            "Project: Pokedex": " โปเกเด็กซ์ (สารานุกรมโปเกมอน)",
            "Project: Eco Pandora Box": " กล่องบริจาครักษ์โลก",
            "Project: Game Swordsman3 Online": " เว็บไซต์เกม Swordsman3 Online",
            "Project: Preregister Swordsman3 Online": " หน้าลงทะเบียนล่วงหน้า Swordsman3",
            "Project: CMS for Swordsman3 Online News": " CMS สำหรับ Swordsman3 Online",
            "EXP TOPUP Swordsman3 Online": " ระบบเติมเงิน EXP TOPUP"



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
