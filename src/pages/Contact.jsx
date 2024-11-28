import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Swal from "sweetalert2";


function Contact() {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_pf6qvla",
                "template_7evkwrw",
                formRef.current,
                "sQ3G-AHv9hU1Xel8G"
            )
            .then(
                (result) => {
                    console.log("Message sent successfully:", result.text);
                    Swal.fire({
                        html: `
        <div style="display: flex; align-items: center; gap: 8px;">
            <img src="/src/assets/SuccessToast.gif" alt="Success Animation" style="width: 40px; height: 40px;" />
            <span style="font-size: 16px; font-weight: bold; color: green;">Send Message Success 📨</span>
        </div>
    `,
                        position: "top-end",
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        toast: true,
                        background: "#ffffff",
                        didOpen: (toast) => {
                            toast.querySelector(".swal2-timer-progress-bar")?.style.setProperty("background-color", "green");
                            toast.addEventListener("click", Swal.close);
                        },
                    });
                },
                (error) => {
                    console.error("Failed to send message:", error.text);
                    alert("Failed to send message. Please try again.");

                }
            );
    };

    return (
        <div className="max-w-6xl mx-auto p-8 bg-gradient-to-b from-gray-50 to-gray-100">

            <motion.h2
                className="text-4xl font-semibold text-center mb-10 "
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Contact Me
            </motion.h2>

            {/* Contact Information */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-r from-white to-gray-50 p-8 rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800 ">Contact Information</h3>
                    <p className="flex items-center">
                        <strong className="text-gray-700 mr-2 sm:text-lg text-sm">Email:</strong>
                        <a href="mailto:gushbellpiriyapong@gmail.com" className="text-blue-600 hover:underline sm:text-lg text-sm">
                            gushbellpiriyapong@gmail.com
                        </a>
                    </p>
                    <p className="flex items-center">
                        <strong className="text-gray-700 mr-2 sm:text-lg text-sm">Phone:</strong>
                        <span className="text-blue-600 sm:text-lg text-sm">096-3034756</span>
                    </p>
                    <p className="flex items-center">
                        <strong className="text-gray-700 mr-2 sm:text-lg text-sm">LinkedIn:</strong>
                        <a
                            href="https://www.linkedin.com/in/piriyapongbell/"
                            className="text-blue-600 hover:underline sm:text-lg text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            linkedin.com/in/piriyapongbell
                        </a>
                    </p>
                    <p className="flex items-center">
                        <strong className="text-gray-700 mr-2 sm:text-lg text-sm">GitHub:</strong>
                        <a
                            href="https://github.com/bellgushbell"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline sm:text-lg text-sm"
                        >
                            github.com/bellgushbell
                        </a>
                    </p>
                </div>
            </motion.div>


            <div className="my-10"></div>


            <motion.div
                className="bg-gradient-to-r from-white to-gray-50 p-8 rounded-lg shadow-2xl "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700 ">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            placeholder="Your Name"
                            className="w-full mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            placeholder="Your Email"
                            className="w-full mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            className="w-full mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-2 px-4 rounded-xl font-bold shadow-lg transition-transform duration-200 cursor-pointer hover:scale-105 hover:shadow-[inset_0_0_8px_rgba(169,169,169,0.4),0_4px_15px_rgba(169,169,169,0.6),0_4px_15px_rgba(128,128,128,0.4)]">
                            SEND MESSAGE
                        </button>




                    </div>


                </form>
            </motion.div>
        </div >
    );
}

export default Contact;
