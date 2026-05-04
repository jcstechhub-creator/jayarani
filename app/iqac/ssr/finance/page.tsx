import React from 'react';
import { 
  CreditCard, FileText, Landmark, ShieldCheck, 
  Receipt, Users, HelpCircle, BarChart3, 
  ArrowUpRight, ArrowDownRight, Scale, AlertTriangle 
} from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
import { pageImages } from '@/data/image';

const FinancePage = () => {
  const financialPillars = [
    {
      title: "Sustainability & Growth",
      icon: <BarChart3 className="w-6 h-6 text-indigo-600" />,
      desc: "Long-term financial planning focused on corpus fund growth and institutional self-reliance."
    },
    {
      title: "Financial Controls",
      icon: <Scale className="w-6 h-6 text-blue-600" />,
      desc: "Rigid internal and external audit mechanisms ensuring every rupee is accounted for."
    },
    {
      title: "Risk Management",
      icon: <AlertTriangle className="w-6 h-6 text-amber-600" />,
      desc: "Strategic reserve maintenance and insurance protocols to mitigate fiscal uncertainties."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        title="Finance & Administration"
        subtitle="Ensuring fiscal transparency, resource optimization, and ethical financial governance in line with statutory audit standards."
        breadcrumb="Home / Administration / Finance"
        image={pageImages.adminSecretary}
      />

      <main className="max-w-7xl mx-auto -mt-12 px-6 pb-20 relative z-10">
        
        {/* Core Financial Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {financialPillars.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-white hover:border-indigo-300 transition-all group">
              <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-50 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-xl mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Financial Report Section */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Income & Expenditure Categories */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
                <Landmark className="text-indigo-900 mr-3" />
                Resource Mobilization & Utilization
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Income Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs tracking-widest">
                    <ArrowUpRight size={16} /> Income Streams
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                      <h4 className="font-bold text-slate-800 text-sm">Capital Income</h4>
                      <p className="text-xs text-slate-500 mt-1">Grants for infrastructure, endowments, and government project funding.</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                      <h4 className="font-bold text-slate-800 text-sm">Revenue Income</h4>
                      <p className="text-xs text-slate-500 mt-1">Tuition fees, consultancy services, and interest on institutional deposits.</p>
                    </div>
                  </div>
                </div>

                {/* Expenditure Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-rose-600 font-bold uppercase text-xs tracking-widest">
                    <ArrowDownRight size={16} /> Expenditure Allocation
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-rose-50 rounded-xl border border-rose-100">
                      <h4 className="font-bold text-slate-800 text-sm">Capital Expenditure</h4>
                      <p className="text-xs text-slate-500 mt-1">Laboratory upgrades, building expansion, and ICT equipment procurement.</p>
                    </div>
                    <div className="p-4 bg-rose-50 rounded-xl border border-rose-100">
                      <h4 className="font-bold text-slate-800 text-sm">Revenue Expenditure</h4>
                      <p className="text-xs text-slate-500 mt-1">Staff salaries, maintenance, research seed money, and student welfare.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Financial Controls Notice */}
            <div className="bg-indigo-900 rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <ShieldCheck className="w-10 h-10 text-indigo-300" />
                  <h3 className="text-2xl font-bold">Financial Controls & Audit</h3>
                </div>
                <p className="text-indigo-100 leading-relaxed mb-6">
                  Jayarani College adheres to a multi-tier audit system. <strong>Internal Audits</strong> are conducted quarterly, while <strong>Statutory External Audits</strong> are completed annually to ensure 100% compliance with educational and tax regulations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-white/10 px-4 py-2 rounded-full text-xs border border-white/20">Digital Ledger Management</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full text-xs border border-white/20">Budgetary Control Systems</span>
                  <span className="bg-white/10 px-4 py-2 rounded-full text-xs border border-white/20">Voucher Verification</span>
                </div>
              </div>
              <BarChart3 className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5" />
            </div>
          </div>

          {/* Sidebar: Office & E-Governance */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-indigo-600" />
                E-Governance Portal
              </h3>
              <div className="space-y-4">
                <button className="w-full text-left p-4 bg-slate-50 hover:bg-indigo-50 rounded-xl transition-colors group">
                  <span className="block font-bold text-sm text-slate-700">Online Fee Payment</span>
                  <span className="text-xs text-slate-400">Secure UPI/Net-Banking Gateway</span>
                </button>
                <button className="w-full text-left p-4 bg-slate-50 hover:bg-indigo-50 rounded-xl transition-colors group">
                  <span className="block font-bold text-sm text-slate-700">Download Receipts</span>
                  <span className="text-xs text-slate-400">Automated Tax-Compliant Receipts</span>
                </button>
              </div>
            </div>

            <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100 relative overflow-hidden">
              <h3 className="font-bold text-amber-900 mb-3 flex items-center relative z-10">
                <Users className="w-5 h-5 mr-2" />
                Welfare & Scholarships
              </h3>
              <p className="text-amber-800 text-xs mb-6 leading-relaxed relative z-10">
                Managed by the Finance Cell, we provide interest-free fee concessions and support for government scholarship applications to ensure inclusive growth.
              </p>
              <button className="w-full bg-amber-600 text-white py-3 rounded-xl font-bold hover:bg-amber-700 transition-colors text-sm relative z-10">
                Financial Aid Inquiry
              </button>
              <HelpCircle className="absolute -right-4 -bottom-4 w-24 h-24 text-amber-600/10" />
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-10 text-slate-400 text-xs uppercase tracking-widest border-t border-slate-200 bg-white">
        Official Finance Portal | Jayarani College © 2026
      </footer>
    </div>
  );
};

export default FinancePage;