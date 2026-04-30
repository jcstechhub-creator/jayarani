"use client";


import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import jlogo from "../../public/jlogo.png";
import { usePathname } from "next/navigation";


const resources = [
  {
    label: "Periyar University",
    link: "https://www.periyaruniversity.ac.in/",
  },
  {
    label: "UGC",
    link: "https://www.ugc.gov.in/",
  },
  {
    label: "SWAYAM",
    link: "https://swayam.gov.in/",
  },
  {
    label: "MOODLE",
    link: "https://moodle.net/login",
  },
  {
    label: "Directory of the Indian Government",
    link: "https://igod.gov.in/",
  },
  {
    label: "Open Government Data Platform",
    link: "https://data.gov.in/",
  },
  {
    label: "Election Commission of India",
    link: "https://voters.eci.gov.in/",
  },
  {
    label: "VISHAKA GUIDELINES",
    link: "https://drive.google.com/file/d/1haPKcbRz1Hw3Sqdgx1fEliWyghGFGmt8/view?usp=drive_link",
  },
  {
    label: "SAKSHAM - Guidelines",
    link: "https://drive.google.com/file/d/1G0dBferN1pIQwilSYue-3awzJfQ0dRU1/view?usp=drive_link",
  },
];


const Footer = () => {


  const pathname = usePathname();

  const hideLayout = ["/login", "/dashboard", "/dashboard/events", "/dashboard/news", "/dashboard/links"].includes(pathname);


  return (
    <>

      {!hideLayout &&


        <footer className="bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16">

            <div className="grid md:grid-cols-4 gap-10">

              {/* Logo + About */}
              <div className=" text-white  max-w-md">
                {/* Logo + Title */}
                <div className="flex items-center gap-3 mb-5">
                  <Image
                    src={jlogo}
                    alt="Jayarani College Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <span className="font-bold text-xl tracking-wide">
                    Jayarani College
                  </span>
                </div>

                {/* Leadership Section */}
                <div className="space-y-3 mb-5">
                  <div>
                    <p className="text-xs uppercase text-gray-400 tracking-wider">
                      Secretary
                    </p>
                    <p className="text-sm font-medium">
                      Rev. Sr. Dr. Jothi Mary, FIHM
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase text-gray-400 tracking-wider">
                      Principal
                    </p>
                    <p className="text-sm font-medium">
                      Rev. Sr. Dr. Jenitta Arockiasamy, FIHM
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                  Committed to academic excellence, innovation, and holistic development of students.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-lg mb-4">
                  Quick Links
                </h4>

                <div className="space-y-2">





                  {
                    [
                      {
                        title: "Rules and Regulations",
                        url: "/rules-and-regulations",
                        description: "Official guidelines regarding conduct, attendance, and examinations."
                      },
                      {
                        title: "Transportation Services",
                        // title: "Bus Routes",
                        url: "/bus-routes",
                        description: "Detailed information on college transport facility and safety protocols."
                      },
                      {
                        title: "eContent",
                        url: "/e-content",
                        description: "Digital learning resources including SWAYAM-NPTEL and MOOC programs."
                      },
                      {
                        title: "Downloads",
                        url: "/downloads",
                        description: "Access to scholarship forms and application documents."
                      },
                      {
                        title: "Faculty Details",
                        url: "/faculty-details",
                        description: "Profiles of the academic staff across all departments."
                      },
                      {
                        title: "Contact Us",
                        url: "/contact",
                        description: "College office location and emergency contact information."
                      }
                    ].map((l) => (
                      <Link
                        key={l.title}
                        href={l.url}
                        className="block text-sm text-gray-300 hover:text-yellow-400 transition"
                      >
                        {l.title}
                      </Link>
                    ))}
                </div>
              </div>

              {/* Courses */}
              <div>
                <h4 className="font-semibold text-lg mb-4">
                  Useful Links/Support
                </h4>








                {/* Election Commission of India */}






                <div className="space-y-2">
                  {resources.map((item) => (
                    <a
                      key={item.label}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-gray-300 hover:text-white transition"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact + Social */}
              <div>
                <h4 className="font-semibold text-lg mb-4">
                  Contact
                </h4>

                {/* Contact Info */}
                <div className="space-y-3 text-sm text-gray-300 mb-4">

                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-yellow-400" />
                    Nethimedu, Salem - 636002, Tamilnadu, India
                  </p>

                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-yellow-400" />
                    9150099240, 04272220800
                  </p>

                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-yellow-400" />
                    info@jcs.edu.in
                  </p>

                </div>

                {/* Social Icons */}
                <div className="grid grid-cols-3 gap-3">

                  <a
                    href="https://www.facebook.com/jayaranicollegesalem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://www.instagram.com/jayaranicollegesalem/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-pink-500 transition-all duration-300"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://x.com/Jayaranisalem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-black transition-all duration-300"
                  >
                    <FaXTwitter />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jayaranicollegesalem/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-blue-700 transition-all duration-300"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="https://wa.me/919150099240"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-green-500 transition-all duration-300"
                  >
                    <FaWhatsapp />
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-red-600 transition-all duration-300"
                  >
                    <FaYoutube />
                  </a>

                </div>

              </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-400">
              © Jayarani Arts and Science College for Women, Salem. All rights reserved.
              Maintained by JCS Tech Hub. Designed and developed by{" "}
              <a
                href="https://bostontechindia.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Boston Tech India
              </a>.
            </div>

          </div>
        </footer>}
    </>

  )

}





export default Footer;