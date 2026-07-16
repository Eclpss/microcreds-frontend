import { GraduationCap, Send, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col">
      {/* Minimal Header */}
      <header className="py-6 px-8 flex items-center w-full max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition font-medium text-sm">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-8 w-full flex flex-col lg:flex-row gap-16 items-center lg:items-start pt-8 pb-24">
        
        {/* Left Column: The Pitch */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-2 text-emerald-600 font-black text-3xl tracking-tighter mb-8">
            <GraduationCap className="h-8 w-8" />
            MicroCreds.
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Ready to empower your students?
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Fill out the form to request an Issuer account. Our team will verify your faculty credentials and set up your departments dashboard so you can start issuing verifiable digital certificates immediately.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Custom Badge Templates</h3>
                <p className="text-gray-600 text-sm">Design certificates that match your facultys branding and standards.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Bulk Issuing</h3>
                <p className="text-gray-600 text-sm">Issue hundreds of certificates to an entire graduating class with one click.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Immutable Verification</h3>
                <p className="text-gray-600 text-sm">Backed by cryptographic security so employers know the skills are real.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Issuer Access</h2>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition" placeholder="Budi" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition" placeholder="Santoso" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">University Email (.ac.id)</label>
                <input type="email" id="email" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition" placeholder="budi@faculty.usg.ac.id" />
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-semibold text-gray-700 mb-1">Faculty / Department</label>
                <select id="department" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition bg-white">
                  <option>Select a department...</option>
                  <option>Computer Science / IT</option>
                  <option>Engineering</option>
                  <option>Business & Management</option>
                  <option>Arts & Humanities</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="volume" className="block text-sm font-semibold text-gray-700 mb-1">Estimated Badges Per Year</label>
                <select id="volume" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition bg-white">
                  <option>0 - 100</option>
                  <option>100 - 500</option>
                  <option>500 - 2000</option>
                  <option>2000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Additional Information</label>
                <textarea id="message" rows={3} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition resize-none" placeholder="Tell us about the courses you want to issue certificates for..."></textarea>
              </div>

              <button type="button" className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition shadow-md flex items-center justify-center gap-2 mt-4">
                Submit Request <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}