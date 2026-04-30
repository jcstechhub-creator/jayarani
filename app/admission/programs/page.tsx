

import Link from "next/link";
import {
  BookOpen,
  Laptop,
  Calculator,
  Brain,
  TrendingUp,
  Globe,
} from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import { pageImages, courseImages, contentImages } from "@/data/image";
// import Layout from "@/components/Layout";

const courseSections = [
  // ✅ UG
  {
    titlenew: "Explore Our",
    title: "UG Programmes (3 Years)",
    desc: "Our undergraduate Programmes are designed to build strong academic foundations, practical skills, and career-ready knowledge across science, commerce, and arts streams.",
    data: [
      { name: "B.A. English", desc: "Language, literature & communication", path: "/admission/programs/bsc/ba-english", icon: BookOpen, image: "/courses/ug_ba_english.png" },
      { name: "B.Com. General", desc: "Business, finance & accounting basics", path: "/admission/programs/bsc/bcom", icon: TrendingUp, image: "/courses/ug_bcom.png" },
      { name: "B.Com. CA", desc: "Commerce integrated with IT", path: "/admission/programs/bsc/bcom-ca", icon: Laptop, image: "/courses/ug_bcom_ca.png" },
      { name: "B.Sc. Computer Science", desc: "Core computing & programming", path: "/admission/programs/bsc/bsc-cs", icon: Laptop, image: "/courses/ug_bsc_cs.png" },
      { name: "B.Sc. Computer Science (AI & DS)", desc: "AI & Data Science specialization", path: "/admission/programs/bsc/bsc-ai-ds", icon: Brain, image: "/courses/ug_bsc_aids.png" },
      { name: "B.Sc. Mathematics", desc: "Mathematics & analytical thinking", path: "/admission/programs/bsc/bsc-maths", icon: Calculator, image: "/courses/ug_bsc_maths.png" },
      { name: "B.Sc. Physics", desc: "Fundamentals of physical sciences", path: "/admission/programs/bsc/bsc-physics", icon: Globe, image: "/courses/ug_bsc_physics.png" },
    ],
  },

  // ✅ PG
  {
    titlenew: "Advance Your Career with ",
    title: "ODL PG Programmes (2 Years)",
    desc: "Our postgraduate Programmes focus on advanced knowledge, research skills, and specialization to help students excel in academics, industry, and competitive careers.",
    data: [
      { name: "M.A. Tamil", desc: "Tamil literature & research", path: "/admission/programs/odlpg/matamil", icon: BookOpen, image: "/courses/pg_ma_tamil.png" },
      { name: "M.A. History (E/T Medium)", desc: "Historical analysis & research", path: "/admission/programs/odlpg/mahistory", icon: Globe, image: "/courses/pg_ma_history.png" },
      { name: "M.A. Economics (E/T Medium)", desc: "Economic theories & applications", path: "/admission/programs/odlpg/maeco", icon: TrendingUp, image: "/courses/pg_ma_eco.png" },
      { name: "M.A. Sociology (E/T Medium)", desc: "Social systems & behavior", path: "/admission/programs/odlpg/masoc", icon: Globe, image: "/courses/pg_ma_sociology.png" },
      { name: "M.A. English", desc: "Advanced language & literature", path: "/admission/programs/odlpg/maenglish", icon: BookOpen, image: "/courses/pg_ma_english.png" },
      { name: "M.Com.", desc: "Commerce & financial expertise", path: "/admission/programs/odlpg/mcom", icon: TrendingUp, image: "/courses/pg_mcom.png" },
      { name: "M.Sc. Mathematics", desc: "Advanced mathematical concepts", path: "/admission/programs/odlpg/mscmaths", icon: Calculator, image: "/courses/pg_msc_maths.png" },
      { name: "MBA", desc: "Leadership & business management", path: "/admission/programs/odlpg/mba", icon: TrendingUp, image: "/courses/pg_mba.png" },
      { name: "MCA", desc: "Advanced software & applications", path: "/admission/programs/odlpg/mca", icon: Laptop, image: "/courses/pg_mca.png" },
    ],
  },

  // ✅ Diploma
  {
    titlenew: "Build Practical Skills with",
    title: "ODL Diploma Programmes (1 Year)",
    desc: "Our diploma Programmes provide industry-relevant practical knowledge and hands-on training to prepare students for immediate employment opportunities.",
    data: [
      { name: "Diploma in Social Welfare Administration", desc: "Social service & welfare", path: "/admission/programs/odldiploma/swa", icon: Globe, image: "/courses/dip_social_welfare.png" },
      { name: "Diploma in NGO Management", desc: "NGO operations & leadership", path: "/admission/programs/odldiploma/ngo", icon: Globe, image: "/courses/dip_ngo.png" },
      { name: "Diploma in Digital Marketing", desc: "SEO & online marketing", path: "/admission/programs/odldiploma/dm", icon: TrendingUp, image: "/courses/dip_digital.png" },
      { name: "Diploma in Financial Planning", desc: "Finance & investment skills", path: "/admission/programs/odldiploma/fp", icon: TrendingUp, image: "/courses/dip_finance.png" },
    ],
  },

  // ✅ Certificate
  {
    titlenew: "Enhance Your Skills with",
    title: "ODL Certificate Courses (6 Months)",
    desc: "Short-term certificate Courses designed to enhance employability, technical expertise, and specialized skills in various domains.",
    data: [
      { name: "Rural Development & Panchayat Raj", desc: "Village development systems", path: "/admission/programs/cc/rdpr", icon: Globe, image: "/courses/cert_rural.png" },
      { name: "Social Entrepreneurship", desc: "Impact-driven startups", path: "/admission/programs/cc/se", icon: Brain, image: "/courses/cert_entrepreneur.png" },
      { name: "Library & Information Science", desc: "Library systems", path: "/admission/programs/cc/lis", icon: BookOpen, image: "/courses/cert_library.png" },
      { name: "Data Visualisation", desc: "Analytics & data insights", path: "/admission/programs/cc/dv", icon: Brain, image: "/courses/cert_data_vis.png" },
      { name: "Tally with GST", desc: "Accounting & GST tools", path: "/admission/programs/cc/tallygst", icon: Calculator, image: "/courses/cert_tally.png" },
      { name: "Environmental Impact Assessment", desc: "Environmental studies", path: "/admission/programs/cc/eia", icon: Globe, image: "/courses/cert_eia.png" },
      { name: "Disaster Management", desc: "Emergency response skills", path: "/admission/programs/cc/dm", icon: Globe, image: "/courses/cert_disaster.png" },
      { name: "GST Filing", desc: "Tax filing & compliance", path: "/admission/programs/cc/gstf", icon: Calculator, image: "/courses/cert_gst.png" },
    ],
  },
];

const page = () => {
  return (
    <>
      <PageHeader
        title="Academic Programmes"
        subtitle="Comprehensive Outcome-Based Education (OBE) aligned with the New Education Policy, fostering excellence through skill integration and academic flexibility."
        breadcrumb="Home / Academics / Courses"
        // Using an image that reflects a modern, collaborative learning environment
        image={pageImages.admissionPrograms}
      />
      <section className="py-20 bg-gray-50">
        {courseSections.map((section, index) => (
          <div key={index} className="mb-20">
            <div className="max-w-7xl mx-auto px-6 mb-10">
              <h1 className="text-4xl md:text-4xl font-bold leading-tight">
                {section.titlenew}{" "}
                <span className="text-red-900">{section.title}</span>
              </h1>

              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
                {section.desc}
              </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.data.map((course, i) => {
                const Icon = course.icon;

                return (
                  <Link
                    key={i}
                    href={course.path}
                    className="group relative rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-xl shadow-md">
                      <Icon className="w-6 h-6 text-red-900" />
                    </div>

                    <div className="absolute bottom-0 p-6 text-white">
                      <h3 className="text-xl font-bold">
                        {course.name}
                      </h3>

                      <p className="text-sm text-white/80 mt-1 opacity-0 group-hover:opacity-100 transition">
                        {course.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
        {/* ✅ SWAYAM-NPTEL Section from Image */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="bg-[#FFF9C4] rounded-[3rem] p-8 md:p-12 border border-yellow-200 shadow-xl overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left Column: Branding & SPOC */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-white p-4 rounded-2xl shadow-sm">
                    {/* Replace with actual logo path if available */}
                    <img src={contentImages.swayamLogo} alt="Swayam" className="h-12" />
                  </div>
                  <div className="text-[#1A2E5A]">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">College Chapter ID: 7464</p>
                    <h2 className="text-2xl font-bold">Free Online Education</h2>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Jayarani College facilitates premium digital learning through the <strong>MHRD (Government of India)</strong> project.
                    Enroll in world-class courses via the <strong>SWAYAM-NPTEL</strong> local chapter.
                  </p>

                  <div className="flex items-center gap-6 p-6 bg-white/60 rounded-3xl border border-white">
                    <div className="w-16 h-16 bg-red-900 text-white rounded-2xl flex items-center justify-center font-bold text-xs text-center leading-tight">
                      SCAN <br /> ME
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Single Point of Contact (SPOC)</p>
                      <h4 className="text-lg font-bold text-red-900">Dr. D. Arul Pon Daniel</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: NPTEL Bank Details */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-inner border border-slate-100">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-xl font-black text-[#1A2E5A] tracking-tighter italic underline decoration-red-500">NPTEL Exam Payment Details</h4>
                  <TrendingUp className="text-red-900" />
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 py-2 border-b border-slate-50">
                    <span className="text-xs font-bold text-slate-400 uppercase">Account Name</span>
                    <span className="text-sm font-bold text-slate-700">NPTEL</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-slate-50">
                    <span className="text-xs font-bold text-slate-400 uppercase">Account No.</span>
                    <span className="text-sm font-mono font-bold text-[#2F4A8A]">0035861183063</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-slate-50">
                    <span className="text-xs font-bold text-slate-400 uppercase">IFSC Code</span>
                    <span className="text-sm font-mono font-bold text-[#2F4A8A]">SBIN0001055</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b border-slate-50">
                    <span className="text-xs font-bold text-slate-400 uppercase">Bank / Branch</span>
                    <span className="text-xs font-medium text-slate-600">State Bank of India <br /> IIT Madras, Chennai</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-red-50 rounded-xl border border-red-100 text-center">
                  <p className="text-[10px] font-bold text-red-900 uppercase">Ensure payment is made only for certified NPTEL exams</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ✅ Extra Info */}
        <div className="max-w-7xl mx-auto px-6 mt-10">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Additional Programmes & Opportunities
            </h3>

            <p className="text-gray-700 mb-3">
              <strong>Open & Distance Learning (ODL):</strong> Flexible Certification, Diploma and PG Programmes available for both boys & girls, enabling students to pursue education alongside other commitments.
            </p>

            <p className="text-gray-700">
              <strong>Add-On Skill Courses:</strong> Aari Work, Beautician, Driving, Typewriting, French & German,
              NPTEL–SWAYAM (IIT), TNPSC / Banking / SEBI Coaching, Basic Computing, Tally & ERP — designed to enhance employability and practical skills.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;