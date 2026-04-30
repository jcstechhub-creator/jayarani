import React from 'react';
import { qrImage, pageImages } from '@/data/image';
import { ShieldCheck, Star, Info, Smartphone } from 'lucide-react';
import PageHeader from '@/app/components/PageHeader';
 // Assuming standard project structure

const FeePaymentPage = () => {
  // Theme Color Reference:
  // Academic Blue: #1E3A8A (Financial Governance)
  // Metric Gold: #F59E0B (Security & Excellence)

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      
      {/* ✅ Corrected Academic PageHeader */}
      <PageHeader
        title="Fees & Payments"
        subtitle="Secure digital payment gateway aligned with E-Governance standards (Metric 7.3) for seamless institutional transactions."
        breadcrumb="Home / Admission / Fee-Payment"
        image={pageImages.studentsFeePayments}
      />

      <main className="max-w-4xl mx-auto py-16 px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Column: QR Code Section (Occupies 2/5) */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 text-center relative overflow-hidden group">
              {/* Gold Top Bar */}
              <div className="absolute top-0 left-0 w-full h-3 bg-[#F59E0B]"></div>
              
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-blue-50 rounded-2xl">
                   <Smartphone className="w-6 h-6 text-[#1E3A8A]" />
                </div>
              </div>

              <h3 className="text-[#1E3A8A] font-black text-2xl mb-8 uppercase tracking-tight">Scan to Pay</h3>
              
              {/* QR Container */}
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border-2 border-dashed border-slate-200 mb-8 flex justify-center group-hover:border-[#F59E0B] transition-colors duration-500">
                <img 
                  src={qrImage[0]} 
                  alt="QR Code for Fee Payment" 
                  className="w-56 h-56 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-2 mb-8">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Supported Apps</p>
                <p className="text-sm font-black text-slate-700">UPI • GPAY • PHONEPE • PAYTM</p>
                <div className="h-1 w-12 bg-[#F59E0B] mx-auto rounded-full mt-2"></div>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[#F59E0B] bg-orange-50 py-3 rounded-2xl border border-orange-100">
                <ShieldCheck className="w-5 h-5 fill-[#F59E0B] text-white" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">Verified Merchant</span>
              </div>
            </div>
          </div>

          {/* Right Column: Instructions & Compliance (Occupies 3/5) */}
          <div className="lg:col-span-3 space-y-8">
            
            <div className="bg-[#1A2E5A] text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-black text-xl mb-8 flex items-center uppercase tracking-tight">
                  <Info className="w-6 h-6 mr-3 text-[#F59E0B]" />
                  Payment Guidelines
                </h4>
                
                <ul className="space-y-6">
                  <li className="flex gap-4 items-start border-b border-white/10 pb-4">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold shrink-0">01</div>
                    <p className="text-sm text-blue-100 leading-relaxed font-medium">
                      Scan the QR code using any UPI-enabled application. Ensure the merchant name displays <span className="text-[#F59E0B] font-bold">Jayarani College</span>.
                    </p>
                  </li>
                  <li className="flex gap-4 items-start border-b border-white/10 pb-4">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold shrink-0">02</div>
                    <p className="text-sm text-blue-100 leading-relaxed font-medium">
                      Enter the exact fee amount. In the <strong>"Add a Note"</strong> section, strictly mention: <span className="text-white font-bold italic">Student Name & Reg. No</span>.
                    </p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold shrink-0">03</div>
                    <p className="text-sm text-blue-100 leading-relaxed font-medium">
                      After successful payment, take a <strong>screenshot</strong> of the Transaction ID and upload it to the student portal for verification.
                    </p>
                  </li>
                </ul>
              </div>
              <Star className="absolute right-[-30px] bottom-[-30px] w-64 h-64 text-white/5 rotate-12" />
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-6">
               <div className="h-16 w-1 border-l-4 border-[#F59E0B]"></div>
               <p className="text-xs text-slate-500 italic leading-relaxed">
                 "Maintaining transparent digital records is a mandatory requirement for 
                 <strong> Attribute 04 (Infrastructure & Finance)</strong> under the 2024 NAAC Binary Framework."
               </p>
            </div>
            
          </div>
        </div>

        {/* Framework Compliance Note */}
        <div className="mt-20 text-center border-t border-slate-200 pt-10">
          <p className="text-slate-400 text-[10px] italic tracking-[0.2em] font-bold uppercase">
            * Compliance: New NAAC Binary Metrics (March 2024) | Samarth E-Governance Aligned
          </p>
        </div>
      </main>

      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] tracking-[0.5em] uppercase font-black">
          Jayarani College | Financial Governance 2026
        </p>
      </footer>
    </div>
  );
};

export default FeePaymentPage;