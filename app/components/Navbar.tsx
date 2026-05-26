"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Info,
  ShieldCheck,
  UserPlus,
  GraduationCap,
  ClipboardCheck,
  Users,
  Award,
  Globe,
  Settings,
  Lock,
  BookOpen,
  Mic,
  HeartHandshake,
  FileText,
  Mail,
  UserCircle,
  ChevronRight,
} from "lucide-react";

// alias separately
import { GraduationCap as AlumniIcon } from "lucide-react";
import { Lightbulb, Zap, Rocket, Briefcase } from "lucide-react";
import jlogo from "../../public/jlogo.png";
import Image from "next/image";
import Marqueemoving from "./Marqueemoving";


const navItems = [
  { label: "Home", path: "/", icon: Home },
  {
    label: "About Us",
    icon: Info,
    children: [
      { label: "About Us", path: "/about/about-us" },
      { label: "Vision & Mission", path: "/about/vision-mission" },
      { label: "College History", path: "/about/history" },
      { label: "College Profile", path: "/about/profile" },
      { label: "Academic Council", path: "/about/academic-council" },
      { label: "Annual Report", path: "/about/annual-report" },
    ],
  },
  {
    label: "Administration",
    icon: ShieldCheck,
    children: [
      { label: "Chairman & President", path: "/admin/chairman" },
      { label: "Vice President", path: "/admin/vice-president" },
      { label: "Secretary", path: "/admin/secretary" },
      { label: "Principal", path: "/admin/principal" },
      { label: "Treasurer", path: "/admin/treasurer" },
      { label: "Board of Trustees", path: "/admin/trustees" },
      { label: "ICC", path: "/admin/icc" },
      { label: "College Committee", path: "/admin/committee" },
      { label: "Organogram", path: "/admin/organogram" },
      // need to change the desing
    ],
  },
  {
    label: "Admission",
    icon: UserPlus,
    children: [
      { label: "Programmes Offered", path: "/admission/programs" },
      { label: "Hostel", path: "/admission/hostel" },
      { label: "Prospectus", path: "/admission/prospectus" },
      { label: "Admission Procedure", path: "/admission/procedure" },
      { label: "Fee Refund Policy", path: "/admission/refund-policy" },
    ],
  },
  {
    label: "Academics",
    icon: GraduationCap,
    children: [
      {
        label: "Departments",
        // path: "/academics/departments",
        subChildren: [
          { label: "English", path: "/academics/departments/english" },
          { label: "Mathematics", path: "/academics/departments/maths" },
          { label: "Physics", path: "/academics/departments/physics" },
          { label: "Computer Science", path: "/academics/departments/computer-science" },
          { label: "Commerce", path: "/academics/departments/commerce" },
        ],
      },
      { label: "Faculty Details", path: "/faculty-details" },
      { label: "Academic Calendar", path: "/academics/calendar" },
      { label: "Syllabus", path: "/academics/syllabus" },

      { label: "POs & COs", path: "/academics/pos-cos" },
    ],
  },

  {
    label: "IQAC",
    icon: ClipboardCheck,
    children: [
      { label: "About IQAC", path: "/iqac/about" },
      { label: "Vision & Mission", path: "/iqac/vision-mission" },
      { label: "Awards", path: "/academics/awards" },
      { label: "IQAC Members", path: "/iqac/members" },
      { label: "IQAC Meetings", path: "/iqac/meetings" },
      { label: "Feedback", path: "/iqac/feedback" },

      { label: "Policies", path: "/iqac/policies" },
      { label: "Quality Initiatives", path: "/iqac/initiatives" },
      { label: "Uniqueness of JCS", path: "/iqac/uniqueness" },

      // { label: "Academic Calendar", path: "/iqac/calendar" },
    ],
  },
  {
    label: "Student Support",
    icon: HeartHandshake,
    children: [
      { label: "Student Council", path: "/students/council" },
      { label: "Life Skill Training", path: "/students/life-skills" },
      {
        label: "Co-Curricular Activities",
        // path: "/students/activities",
        subChildren: [
          { label: "Fine Arts", path: "/students/activities/fine-arts" },
          { label: "Games & Sports", path: "/students/activities/games-sports" },
          { label: "Anti-Drug Club", path: "/students/activities/anti-drug-club" },
          { label: "Consumer Awarness", path: "/students/activities/consumer-awareness" },
          { label: "Reader Club", path: "/students/activities/reader-club" },
          { label: "Rotaract Club", path: "/students/activities/rotaract-club" },
          { label: "Eco Club", path: "/students/activities/eco-club" },
          { label: "Road Safety Club", path: "/students/activities/road-safety-club" },
          { label: "Literary Club", path: "/students/activities/literary" },
          { label: "Science Club", path: "/students/activities/science" },
          { label: "Student Support Resources", path: "/students/activities/student-support-resources" },
        ],
      },
      { label: "Scholarships", path: "/students/scholarship" },
      { label: "Fees & Payments", path: "/students/fee-payments" },
      { label: "Student Counselling", path: "/students/counselling" },
      { label: "Training & Placement", path: "/students/placement" },
      { label: "Baby Care Center", path: "/students/baby-care-centre" },
      { label: "Grievance Redressal Cell", path: "/students/grievance" },
      { label: "Anti-Ragging Cell", path: "/students/anti-ragging" },

      { label: "Women Empowerment Cell", path: "/students/women-empowerment" },

      { label: "Infant Jesus Power Cell", path: "/services/power-cell" },
    ],
  },
  {
    label: "Innovation",
    icon: Lightbulb,
    children: [
      { label: "JCS Tech Hub", path: "/innovation/jcs-techhub" },
      
      { label: "Entrepreneurship Development Cell", path: "/innovation/edc",
             subChildren: [
          {  label: "IIC", path: "/innovation/iic" },
         { label: "IPR ", path: "/innovation/ipr" },
         
        ],
        

       },
       
      { label: "Earn While You Learn", path: "/innovation/earn-while-you-learn" },
   
      { label: "Incubation ", path: "/innovation/incubation" },
    
      // { label: "enterperner develope skill", path: "/innovation/research" },
    ],
  },
  // {
  //   label: "Skill Development (d) ",
  //   icon: Zap,
  //   children: [
  //     { label: "Fine Arts Club", path: "/skills/fine-arts" },
  //     { label: "Literary Club", path: "/skills/literary" },
  //     { label: "Science Club", path: "/skills/science" },
  //     { label: "Service Club", path: "/skills/service" },
  //   ],
  // },

  {
    label: "Alumni/ae",
    icon: AlumniIcon,
    path: "/alumni/alumini-page"
  
  },
  {
    label: "Publication",
    icon: AlumniIcon,
    children: [
      { label: "Magazine", path: "/publication/magazine" },
      { label: "Books", path: "/publication/books" },
      { label: "Proceedings", path: "/publication/proceedings" },
      // { label: "Registration Form", path: "/alumni/register" },
    ],
  },
  {
    label: "UGC",
    icon: Globe,
    children: [
      { label: "ABC Banner", path: "/ugc/abc-banner" },
      // { label: "ABC Banner", path: "https://drive.google.com/file/d/1svNbF4Rcy9Y_dEbwlC8UfH98SGeM2crl/view?usp=drive_link" },
      { label: "ABC Video", path: "/ugc/abc-video" },
      // { label: "ABC Video", path: "https://drive.google.com/file/d/1L_QMCPtwm4sLnavu7X8WMloLIRNjo4-D/view?usp=drive_link" },
      { label: "NAT Cell", path: "/ugc/nat-cell" },
      // { label: "NAT Cell", path: "https://drive.google.com/file/d/1sWF0JMEa3UFK8_xgDxw5TfCodeC7A-L9/view?usp=drive_link" },
      { label: "Self-Discloser", path: "/ugc/self-discloser" },
    ],
  },

  {
    label: "ODL Student Login",
    icon: Lock,
    children: [
      { label: "NAAC", path: "/naac" },
      { label: "AISHE", path: "/aishe" },
      { label: "SSR", path: "/ssr" },
      { label: "NIRF", path: "/nirf" },
      { label: "Examinations", path: "/examinations" },
      { label: "Library", path: "/library" },
      { label: "IRINS-JCS", path: "/irins" },
    ], 
  },
];

export default function Navbar() {



  const [sidebarSubDropdown, setSidebarSubDropdown] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [sidebarDropdown, setSidebarDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // const hideLayout = ["/login", "/dashboard"].includes(pathname);

  const hideLayout = ["/login", "/dashboard", "/dashboard/events", "/dashboard/news", "/dashboard/links"].includes(pathname);


  console.log(pathname, "forign love");
  const [ssrDropdownOpen, setSsrDropdownOpen] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  return (
    <>
      {!hideLayout &&
        <div className="sticky top-0 z-[100]">

          <div className="bg-white border-b  relative z-[100] overflow-visible">
            <div className="max-w-[95%] mx-auto px-4 h-10 flex items-center justify-between text-[11px] font-bold tracking-tight overflow-visible">
              <div className=" hidden md:flex  items-center gap-6 text-gray-500">
                <Link href="/aishe" className="hover:text-[#2F4A8A] transition-colors">AISHE</Link>
                <Link href="/nirf" className="hover:text-[#2F4A8A] transition-colors">NIRF</Link>
                {/* <Link href="/ssr" className="hover:text-[#2F4A8A] transition-colors">SSR</Link> */}
                {/* <Link href="/naac" className="hover:text-[#2F4A8A] transition-colors">NAAC</Link> */}

                {/* SSR Criteria Wise with dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setSsrDropdownOpen(true)}
                  onMouseLeave={() => setSsrDropdownOpen(false)}
                >
                  <button className="hover:text-[#2F4A8A] transition-colors flex items-center gap-1">
                    SSR Criteria Wise <ChevronDown size={10} className={`transition-transform duration-200 ${ssrDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {ssrDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 z-[999]">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 w-72">
                        {[
                          { label: "01. Curriculum Design", path: "/iqac/ssr/curriculum-design" },
                          { label: "02. Faculty", path: "/iqac/ssr/faculty" },
                          { label: "03. Infrastructure", path: "/iqac/ssr/infrastructure" },
                          { label: "04. Finance", path: "/iqac/ssr/finance" },
                          { label: "05. Learning & Teaching", path: "/iqac/ssr/learning-teaching" },
                          { label: "06. Extended Curricular", path: "/iqac/ssr/extended-curricular" },
                          { label: "07. Governance", path: "/iqac/ssr/governance" },
                          { label: "08. Student Outcomes", path: "/iqac/ssr/student-outcomes" },
                          { label: "09. Research & Innovation", path: "/iqac/ssr/research-innovation" },
                          { label: "10. Sustainability", path: "/iqac/ssr/sustainability" },
                        ].map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            className="block px-4 py-2 text-[11px] font-semibold text-slate-600 hover:bg-blue-50 hover:text-[#2F4A8A] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link href="/examinations" className="hover:text-[#2F4A8A] transition-colors">Examinations</Link>
                <Link href="/library" className="hover:text-[#2F4A8A] transition-colors">Library</Link>
                {/* <Link href="/irins-jcs" className="hover:text-[#2F4A8A] transition-colors">IRINS-JCS</Link> */}
              </div>

              <div className="flex justify-end w-full md:w-auto items-center gap-4">
                <Link
                  href="https://mail.google.com/a/jcs.edu.in"
                  target="_blank"
                  className="flex items-center gap-1.5 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Mail size={14} /> Webmail
                </Link>
                <Link
                  href="http://pride.periyaruniversity.ac.in/pucdoe/ODLRegister/"
                  target="_blank"
                  className="bg-yellow-400 text-[#2F4A8A] px-3 py-1 rounded-full flex items-center gap-1.5 hover:bg-yellow-500 transition-all shadow-sm"
                >
                  <UserCircle size={14} /> ODL Student Login
                </Link>
              </div>
            </div>
          </div>

          <Marqueemoving />

          {/* ================= NAVBAR ================= */}
          <nav className="bg-white/95 backdrop-blur-md border-b shadow-sm relative z-50">
            <div className="max-w-[95%] mx-auto px-4 relative">
              <div className="flex items-center justify-between h-20">

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-3 group shrink-0">
                  <Image
                    src={jlogo}
                    alt="Jayarani College Logo"
                    width={50}
                    height={50}
                    className="rounded-md transition-transform group-hover:scale-105"
                  />
                  <div className="hidden sm:block">
                    <h1 className="text-lg font-bold text-[#2F4A8A] leading-tight">
                      Jayarani College, Salem
                    </h1>
                    <p className="text-[10px] md:text-xs text-gray-500 font-medium">
                      (Jayarani Arts & Science <br /> College for Women)
                    </p>
                  </div>
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden xl:flex items-center gap-1">
 {navItems.slice(0, 7).map((item) => {
    // 1. Logic to check if this specific item or any of its children are active
    const isHomeActive = item.path === "/" && pathname === "/";
    const isChildActive = item.children?.some((child) => {
      const childActive = pathname === child.path;
      const subChildActive = child.subChildren?.some(sub => pathname === sub.path);
      return childActive || subChildActive;
    });
    
    const isActive = isHomeActive || isChildActive || (item.path !== "/" && pathname.startsWith(item.path || "none"));

    return (
      <div
        key={item.label}
        className="relative group/main"
        onMouseEnter={() => { setActiveDropdown(item.label); setSsrDropdownOpen(false); }}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {/* NAV ITEM */}
        <div className="relative px-3 py-2 group">
          {item.path ? (
            <Link
              href={item.path}
              className={`text-[13px] font-semibold transition flex items-center gap-1.5 ${
                isActive ? "text-[#2F4A8A]" : "text-gray-700 hover:text-[#2F4A8A]"
              }`}
            >
              <item.icon
                size={16}
                className={isActive ? "text-yellow-500" : "text-gray-400 group-hover:text-[#2F4A8A]"}
              />
              {item.label}
            </Link>
          ) : (
            <button className={`text-[13px] font-semibold flex items-center gap-1.5 transition ${
              isActive ? "text-[#2F4A8A]" : "text-gray-700 hover:text-[#2F4A8A]"
            }`}>
              <item.icon
                size={16}
                className={isActive ? "text-yellow-500" : "text-gray-400 group-hover:text-[#2F4A8A]"}
              />
              {item.label}
              <ChevronDown
                className={`w-3 h-3 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
              />
            </button>
          )}

          {/* Underline Indicator */}
          <span
            className={`absolute left-0 bottom-0 h-[3px] bg-yellow-400 transition-all duration-300 ${
              isActive || activeDropdown === item.label ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </div>

        {/* LEVEL 1 DROPDOWN */}
        {item.children && (
          <div className="absolute left-0 top-full w-64 pt-2 opacity-0 invisible group-hover/main:opacity-100 group-hover/main:visible transition-all duration-300 translate-y-2 group-hover/main:translate-y-0 z-50 pointer-events-none group-hover/main:pointer-events-auto">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2">
              {item.children.map((child, indexf) => {
                const isThisChildActive = pathname === child.path || child.subChildren?.some(sub => pathname === sub.path);
                
                return (
                  <div key={child.label} className="relative group/sub">
                    <Link
                      href={child.path || "#"}
                      className={`flex items-center justify-between px-5 py-3 text-sm transition-colors ${
                        isThisChildActive ? "bg-blue-50 text-[#2F4A8A] font-bold" : "text-gray-700 hover:bg-blue-50 hover:text-[#2F4A8A]"
                      }`}
                    >
                      {child.label}
                      {child.subChildren && <ChevronRight size={14} />}
                    </Link>
                    {/* ... (Level 2 subChildren mapping remains the same) */}

      {child.subChildren && (
                                  <div
                                    className={`absolute top-0 w-56 ${indexf > 5 ? "right-full mr-0" : "right-full ml-0"
                                      } opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 translate-x-2 group-hover/sub:translate-x-0 pointer-events-none group-hover/sub:pointer-events-auto`}
                                  >  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2">
                                      {child.subChildren.map((sub) => (
                                        <Link
                                          key={sub.path}
                                          href={sub.path}
                                          className="block px-5 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#2F4A8A] transition-colors"
                                        >
                                          {sub.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                )}
                    
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  })}

                  {/* EXPLORE BUTTON */}
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="ml-4 p-2.5 bg-[#2F4A8A] text-white rounded-lg hover:bg-[#1f3a73] transition-all shadow-md active:scale-95 flex items-center gap-2 px-4"
                  >
                    <Menu size={18} />
                    <span className="text-sm font-semibold">Explore</span>
                  </button>
                </div>

                {/* MOBILE HAMBURGER */}
                <button
                  className="xl:hidden p-2 text-[#2F4A8A] bg-gray-100 rounded-md"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu size={24} />
                </button>

              </div>
            </div>
          </nav>
          {/* ================= SIDEBAR ================= */}

          <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[150] transform transition-all duration-300 ease-in-out border-l border-gray-100 ${sidebarOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between p-5 border-b border-gray-50 bg-gray-50/50">
            <Image className="h-10 w-10" src={jlogo} alt="" />
        findthislo      {/* <div className="flex flex-col">
                <h2 className="font-bold text-xl text-[#2F4A8A]">Main Menu</h2>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                  Jayarani College
                </span> 
              </div> */}
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* MENU */}
            <div className="overflow-y-auto h-[calc(100%-85px)] p-4 space-y-2 custom-scrollbar">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-50 pb-2">

                  {/* DIRECT LINK */}
                  {item.path ? (
                    <Link
                      href={item.path}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all ${pathname === item.path
                        ? "bg-blue-50 text-[#2F4A8A]"
                        : "text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                      <item.icon
                        size={18}
                        className={`mr-3 ${pathname === item.path ? "text-[#2F4A8A]" : "text-gray-400"
                          }`}
                      />
                      {item.label}
                    </Link>
                  ) : (
                    <div className={`${item.label == "ODL Student Login"
                      ? "lg:hidden"
                      : ""
                      }`} >
                      {/* MAIN DROPDOWN */}
                      <button
                        className={`w-full flex justify-between items-center px-4 py-3 rounded-xl font-medium transition-all ${sidebarDropdown === item.label
                          ? "text-[#2F4A8A] bg-blue-50/50"
                          : "text-gray-700 hover:bg-gray-50"
                          }`}
                        onClick={() =>
                          setSidebarDropdown(
                            sidebarDropdown === item.label ? null : item.label
                          )
                        }
                      >
                        <div className="flex items-center">


                          <item.icon
                            size={18}
                            className={`mr-3 ${sidebarDropdown === item.label
                              ? "text-[#2F4A8A]"
                              : "text-gray-400"
                              } `}
                          // onClick={() =>console.log( item.label)}
                          />

                          {item.label}
                        </div>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${sidebarDropdown === item.label ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* CHILDREN */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${sidebarDropdown === item.label
                          ? "max-h-[600px] opacity-100"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="pl-11 pr-2 py-2 space-y-1">

                          {item.children?.map((child) => (
                            <div key={child.label}>

                              {/* CHILD WITH SUBMENU */}
                              {child.subChildren ? (
                                <>
                                  <button
                                    onClick={() =>
                                      setSidebarSubDropdown(
                                        sidebarSubDropdown === child.label
                                          ? null
                                          : child.label
                                      )
                                    }
                                    className="w-full flex justify-between items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100 hover:text-[#2F4A8A]"
                                  >
                                    <div className="flex items-center">
                                      <ChevronRight size={14} className="mr-2 text-gray-300" />
                                      {child.label}
                                    </div>

                                    <ChevronDown
                                      size={14}
                                      className={`transition-transform ${sidebarSubDropdown === child.label
                                        ? "rotate-180"
                                        : ""
                                        }`}
                                    />
                                  </button>

                                  {/* SUB CHILDREN */}
                                  <div
                                    className={`overflow-hidden transition-all duration-300 ${sidebarSubDropdown === child.label
                                      ? "max-h-[400px] opacity-100"
                                      : "max-h-0 opacity-0"
                                      }`}
                                  >
                                    <div className="pl-6 py-1 space-y-1">
                                      {child.subChildren.map((sub) => (
                                        <Link
                                          key={sub.path}
                                          href={sub.path}
                                          onClick={() => setSidebarOpen(false)}
                                          className={`block px-4 py-2 text-xs rounded-md transition ${pathname === sub.path
                                            ? "text-[#2F4A8A] bg-blue-50"
                                            : "text-gray-500 hover:bg-gray-100 hover:text-[#2F4A8A]"
                                            }`}
                                        >
                                          {sub.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </>
                              ) : (
                                /* NORMAL CHILD */
                                <Link
                                  href={child.path}
                                  onClick={() => setSidebarOpen(false)}
                                  className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${pathname === child.path
                                    ? "text-[#2F4A8A] bg-blue-50 border-l-4 border-[#2F4A8A]"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-[#2F4A8A]"
                                    }`}
                                >
                                  <ChevronRight
                                    size={14}
                                    className={`mr-2 ${pathname === child.path
                                      ? "text-[#2F4A8A]"
                                      : "text-gray-300"
                                      }`}
                                  />
                                  {child.label}
                                </Link>
                              )}
                            </div>
                          ))}

                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {sidebarOpen && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[140] transition-opacity duration-300" onClick={() => setSidebarOpen(false)} />}

          <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
        </div>

      }
    </>
  );
}