import { ArrowLeft, Send, Search, Award, CheckCircle2, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function IssueBadgePage() {
  return (
    <div className="max-w-4xl pb-12">
      {/* Header */}
      <header className="mb-8">
        <Link href="/dashboard" className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition font-medium text-sm mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Issue a Certificate</h1>
        <p className="text-gray-500 text-sm mt-1">Award a verified credential to a students digital wallet.</p>
      </header>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-8 space-y-10">
          
          {/* Step 1: Select Earner */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <h2 className="text-lg font-bold text-gray-900">Select Recipient</h2>
            </div>
            
            <div className="ml-11">
              <div className="relative max-w-lg">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="Search by student NIM or University Email..." 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 shadow-sm"
                />
              </div>
              
              {/* Mockup of a selected student */}
              <div className="mt-4 max-w-lg p-4 border-2 border-emerald-500 bg-emerald-50 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white text-emerald-700 flex items-center justify-center font-bold text-sm border border-emerald-200 shrink-0">JS</div>
                  <div>
                    <p className="font-bold text-gray-900">Joko Susanto</p>
                    <p className="text-xs text-gray-600">joko.s@student.usg.ac.id • NIM: 220184759</p>
                  </div>
                </div>
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Step 2: Select Template */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <h2 className="text-lg font-bold text-gray-900">Select Badge Template</h2>
            </div>
            
            <div className="ml-11 grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Selected Template Card */}
              <div className="border-2 border-emerald-500 bg-emerald-50 rounded-xl p-4 cursor-pointer flex gap-4 relative">
                <div className="absolute top-3 right-3 text-emerald-600"><CheckCircle2 className="h-5 w-5" /></div>
                <div className="w-16 h-16 bg-gradient-to-tr from-emerald-800 to-emerald-500 rounded-full border-2 border-white flex flex-col items-center justify-center shadow-inner shrink-0">
                  <h2 className="text-white font-black text-[6px] text-center">ADVANCED<br/>ALGORITHMS</h2>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Advanced Algorithms Honors</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">Awarded for mastering complex data structures and algorithmic efficiency.</p>
                </div>
              </div>

              {/* Unselected Template Card */}
              <div className="border border-gray-200 bg-white hover:border-emerald-300 rounded-xl p-4 cursor-pointer flex gap-4 transition">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg rotate-45 flex flex-col items-center justify-center shadow-inner shrink-0 border border-emerald-400 mt-2 ml-2">
                  <div className="-rotate-45 flex flex-col items-center">
                      <h2 className="text-emerald-400 font-black text-[5px] text-center tracking-widest">WEB DEV</h2>
                  </div>
                </div>
                <div className="ml-2">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">Full Stack Development</h3>
                  <p className="text-xs text-gray-500 line-clamp-2">Awarded for building responsive, full-stack web applications.</p>
                </div>
              </div>

            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Step 3: Evidence & Issue */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <h2 className="text-lg font-bold text-gray-900">Add Evidence (Optional)</h2>
            </div>
            
            <div className="ml-11 max-w-lg space-y-4">
              <p className="text-sm text-gray-500">Provide a link to the students project, portfolio, or passing test score to increase the credibility of this credential.</p>
              
              <div className="relative">
                <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input 
                  type="url" 
                  placeholder="https://github.com/jokodev/final-project" 
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
                />
              </div>
            </div>
          </section>

        </div>
        
        {/* Footer Actions */}
        <div className="bg-gray-50 border-t border-gray-200 p-6 flex justify-end gap-4">
          <Link href="/dashboard" className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 transition">
            Cancel
          </Link>
          <button className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
            Issue Certificate <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}