import React from 'react';
import { CreditCard, FileText, Landmark, ShieldCheck, Receipt, Users, HelpCircle } from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';

const FinancePage = () => {
  const accounts = [
    {
      title: "Online Fee Portal",
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      desc: "Secure payment gateway for tuition and hostel fees via Net Banking, UPI, or Cards."
    },
    {
      title: "Scholarship Cell",
      icon: <Users className="w-6 h-6 text-green-600" />,
      desc: "Financial aid management, including funds generated from the 'Honesty Shop' initiatives."
    },
    {
      title: "E-Governance",
      icon: <FileText className="w-6 h-6 text-purple-600" />,
      desc: "Digital documentation and automated receipt generation for all administrative transactions."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      {/* <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Finance & Administration</h1>
          <p className="text-slate-400 text-lg">
            Ensuring fiscal transparency and efficient administrative support through secure 
            E-Governance and ethical financial practices.
          </p>
        </div>
      </div> */}

      <PageHeader
  title="Finance & Administration"
  subtitle="Ensuring fiscal transparency and efficient administrative support through secure E-Governance and ethical financial practices in line with IQAC audit standards."
  breadcrumb="Home / Administration / Finance"
  // Using an image that reflects professional office management and secure digital systems
  // image="/newgirlimages/image-1.jpeg
  // 
  image="/banner/banner4.jpeg" 
/>

      <main className="max-w-6xl mx-auto -mt-10 px-6 pb-20">
        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {accounts.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 transition-colors group">
              <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-xl mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content: Fee Structure & Transparency */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex items-center mb-6">
                <Landmark className="text-blue-900 mr-3" />
                <h2 className="text-2xl font-bold text-slate-800">Financial Transparency</h2>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                As per IQAC guidelines, Jayarani College maintains a strict audit trail for all 
                financial transactions. Our administrative office is equipped with a modern 
                infrastructure to assist students with billing, refunds, and financial counseling.
              </p>
              
              <div className="overflow-hidden rounded-xl border border-slate-100">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-600 font-medium">
                    <tr>
                      <th className="px-6 py-4">Service</th>
                      <th className="px-6 py-4">Processing Time</th>
                      <th className="px-6 py-4">Mode</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-6 py-4 font-medium">Fee Receipts</td>
                      <td className="px-6 py-4">Instant</td>
                      <td className="px-6 py-4">Email/Portal</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Scholarship Approval</td>
                      <td className="px-6 py-4">5-7 Working Days</td>
                      <td className="px-6 py-4">Direct Transfer</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Caution Deposit Refund</td>
                      <td className="px-6 py-4">15 Working Days</td>
                      <td className="px-6 py-4">Bank Transfer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Security Notice */}
            <div className="bg-blue-900 rounded-3xl p-8 text-white flex items-start space-x-6">
              <div className="bg-blue-800 p-4 rounded-2xl">
                <ShieldCheck className="w-8 h-8 text-blue-300" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Secure Transactions</h4>
                <p className="text-blue-200 text-sm">
                  All digital payments are protected by end-to-end encryption. The college 
                  does not store your credit card or CVV details. Always verify the 
                  URL is <strong>https://</strong> before making a payment.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar: Office Contacts */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                <Receipt className="w-5 h-5 mr-2 text-slate-400" />
                Office Hours
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="font-semibold">9:00 AM - 4:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">9:00 AM - 1:00 PM</span>
                </li>
                <li className="text-red-500 italic mt-4 text-xs">
                  * Office remains closed on Sundays & Public Holidays.
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2" />
                Need Assistance?
              </h3>
              <p className="text-amber-800 text-xs mb-4">
                For queries regarding bank loans or special fee concessions for needy students.
              </p>
              <button className="w-full bg-amber-600 text-white py-2 rounded-lg font-bold hover:bg-amber-700 transition-colors text-sm">
                Contact Accountant
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-10 text-slate-400 text-xs uppercase tracking-widest">
        Official Finance Portal | Jayarani College © 2026
      </footer>
    </div>
  );
};

export default FinancePage;