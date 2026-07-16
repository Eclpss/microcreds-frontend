import Image from 'next/image';
import { Search, CheckCircle, Award, Layers, Clock, DollarSign, Download, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function VerifiedBadgePage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Top Navigation - Updated to Cerf Branding */}
      <header className="border-b border-gray-200 py-4 px-8 flex items-center justify-between bg-white">
        <div className="flex items-center gap-8 w-full max-w-7xl mx-auto">
          
          {/* Cerf Logo */}
          <Link href="/" className="flex items-center gap-2 text-emerald-600 font-black text-2xl tracking-tighter">
            <ShieldCheck className="h-7 w-7" />
            Cerf.
          </Link>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Search by badge name, organization, skill, or student..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
            />
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4 ml-auto">
            <Link href="/login" className="px-4 py-2 text-emerald-700 font-semibold border border-emerald-600 rounded-lg hover:bg-emerald-50 transition">
              Create Account
            </Link>
            <Link href="/login" className="px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition">
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* Verification Header - Emerald Theme */}
      <div className="bg-emerald-50 border-b border-emerald-100 py-6 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white border-2 border-emerald-200 rounded-full flex items-center justify-center text-emerald-700 font-bold text-xl shadow-sm">
              JS
            </div>
            <div>
              <p className="text-sm text-gray-600">This badge was issued to <Link href="/profile" className="text-emerald-700 hover:underline font-semibold">Joko Susanto</Link></p>
              <p className="text-sm text-gray-600">Date issued: October 24, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-emerald-800 font-bold bg-emerald-100 px-4 py-2 rounded-lg cursor-default border border-emerald-200">
              <CheckCircle className="h-5 w-5" /> Cryptographically Verified
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-emerald-600 text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition shadow-sm">
              🎉 Celebrate
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row gap-12">
        {/* Left Column: Badge Image */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="w-full max-w-sm aspect-square relative drop-shadow-xl transition-transform hover:scale-105 duration-300">
             {/* USG specific badge styling we made earlier */}
             <div className="w-full h-full bg-gradient-to-tr from-emerald-800 to-emerald-500 rounded-full border-8 border-gray-100 flex flex-col items-center justify-center p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 border-4 border-white/20 rounded-full m-2"></div>
                <Award className="h-20 w-20 text-white mb-2 z-10 opacity-90" />
                <h2 className="text-white font-black text-2xl text-center z-10 leading-tight tracking-wide">ADVANCED<br/>ALGORITHMS</h2>
                <div className="absolute bottom-10 bg-white/20 px-4 py-1 rounded-full backdrop-blur-sm">
                  <p className="text-white text-xs font-bold tracking-widest">HONORS</p>
                </div>
             </div>
          </div>
        </div>

        {/* Right Column: Badge Details */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Advanced Algorithms Honors
          </h1>
          <p className="text-gray-600 mb-6 flex items-center gap-2">
            Issued by <span className="text-emerald-700 font-semibold flex items-center gap-1"><ShieldCheck className="h-4 w-4"/> USG Computer Science Dept.</span>
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            This earner has demonstrated exceptional mastery of complex data structures and algorithmic efficiency. They have successfully implemented and analyzed advanced sorting, graphing, and dynamic programming algorithms, proving their ability to optimize code for high-performance computing environments.
          </p>
          
          <a href="#" className="text-emerald-700 hover:underline text-sm font-semibold mb-8 inline-block flex items-center gap-1">
             View USG Curriculum <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200">
              <Award className="h-4 w-4 text-emerald-600" /> Academic Honors
            </span>
            <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200">
              <Layers className="h-4 w-4 text-emerald-600" /> Advanced Level
            </span>
            <span className="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200">
              <Clock className="h-4 w-4 text-emerald-600" /> 16 Weeks
            </span>
          </div>

          {/* Skills Section */}
          <div className="mb-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
               Verified Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Dynamic Programming', 'Graph Theory', 'Time Complexity Analysis', 'Big-O Notation', 'Data Structures', 'C++', 'Algorithm Optimization'].map(skill => (
                <span key={skill} className="bg-white border border-gray-300 text-gray-700 px-3 py-1.5 rounded-md text-sm hover:border-emerald-500 hover:text-emerald-700 cursor-pointer transition shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Earning Criteria */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Earning Criteria</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-700">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Maintain a minimum GPA of 3.8 in core Computer Science curriculum.</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Complete the final algorithmic optimization project with a runtime efficiency scoring in the top 5% of the cohort.</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Pass the rigorous 4-hour proctored practical examination overseen by Dr. Budi Santoso.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Related Badges Section */}
      <section className="border-t border-gray-200 py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            More from USG Computer Science Dept.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Related Card 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex items-center gap-4 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg rotate-45 flex items-center justify-center shrink-0 border border-emerald-400 ml-2">
                 <div className="-rotate-45">
                    <h2 className="text-emerald-400 font-black text-[7px] text-center tracking-widest">WEB DEV</h2>
                 </div>
              </div>
              <div className="ml-2">
                <p className="font-bold text-gray-900 line-clamp-1">Full Stack Development</p>
                <p className="text-xs text-gray-500">USG Engineering Dept</p>
              </div>
            </div>
            
            {/* Related Card 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition flex items-center gap-4 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-full border-2 border-white flex items-center justify-center shrink-0 shadow-inner">
                 <h2 className="text-white font-black text-[7px] text-center">DATA<br/>SCIENCE</h2>
              </div>
              <div>
                <p className="font-bold text-gray-900 line-clamp-1">Data Science Fundamentals</p>
                <p className="text-xs text-gray-500">USG Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Links */}
      <footer className="bg-white border-t border-gray-200 py-8 px-8 flex justify-center md:justify-end text-sm text-gray-500 gap-6 flex-wrap">
         <a href="#" className="hover:text-emerald-600 transition">Request Demo</a> 
         <a href="#" className="hover:text-emerald-600 transition">About Cerf</a> 
         <a href="#" className="hover:text-emerald-600 transition">Terms</a> 
         <a href="#" className="hover:text-emerald-600 transition">Privacy</a> 
         <a href="#" className="hover:text-emerald-600 transition">Developers</a> 
         <a href="#" className="hover:text-emerald-600 transition">Support</a>
      </footer>
    </div>
  );
}