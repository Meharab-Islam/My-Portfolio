import React from "react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import MailIcon from "@/components/icons/MailIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import LocationIcon from "@/components/icons/LocationIcon";

export default function ContactPage() {
    // --- IMPORTANT: Fill in your details here ---
    const contactDetails = {
        email: "mdnibir178@gmail..com",
        phone: "+880 1837387206",
        location: "Faridpur, Dhaka, Bangladesh",
    };
    
    const socialLinks = {
        github: "https://github.com/Meharab-Islam",
        linkedin: "https://www.linkedin.com/in/meharab-islam-nibir-3b00b4219/",
        facebook: "https://www.facebook.com/share/19HraBFVSx/",
        whatsapp: "https://wa.me/8801837387206",
    };
    // ---------------------------------------------

    return (
        <div className="bg-white min-h-screen animate-fade-in-up">
            <div className="max-w-6xl mx-auto py-16 px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Get In Touch</h1>
                    <p className="mt-4 text-lg text-gray-600">I'm here to help. Have a question or a project in mind? Let's talk.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Contact Info & Socials */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-center gap-4">
                                    <MailIcon className="w-6 h-6 text-blue-600" />
                                    <a href={`mailto:${contactDetails.email}`} className="hover:text-blue-600">{contactDetails.email}</a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <PhoneIcon className="w-6 h-6 text-blue-600" />
                                    <span>{contactDetails.phone}</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <LocationIcon className="w-6 h-6 text-blue-600" />
                                    <span>{contactDetails.location}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Follow Me</h2>
                            <div className="flex items-center gap-5">
                                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors"><GitHubIcon className="h-7 w-7" /></a>
                                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors"><LinkedInIcon className="h-7 w-7" /></a>
                                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors"><FacebookIcon className="h-7 w-7" /></a>
                                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors"><WhatsAppIcon className="h-7 w-7" /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                                <input id="name" type="text" placeholder="Enter your name" className="text-gray-500 mt-1 w-full p-3 border border-gray-300 rounded-lg "/>
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
                                <input id="email" type="email" placeholder="Enter your email" className="text-gray-500 mt-1 w-full p-3 border border-gray-300 rounded-lg "/>
                            </div>
                            <div>
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
                                <textarea id="message" placeholder="How can I help you?" rows={5} className="text-gray-500 mt-1 w-full p-3 border border-gray-300 rounded-lg "></textarea>
                            </div>
                            <div className="text-left">
                                <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-md font-bold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}