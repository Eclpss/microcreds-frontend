import { MapPin, Mail, Link as LinkIcon, Share2, Award, ShieldCheck, Grid, Clock, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function UserProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans pb-20">
      {/* Shared Navigation (Updated to MicroCreds) */}
      <header className="border-b border-gray-200 py-4 px-8 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-emerald-600 font-black text-2xl tracking-tighter">
            <GraduationCap className="h-7 w-7" />
            MicroCreds.
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">
              JS {/* Initials placeholder */}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 md:py-12 flex flex-col md:flex-row gap-8">
        
        {/* Left Column: User Info Card */}
        <aside className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center md:text-left">
            <div className="w-32 h-32 bg-gray-100 border-4 border-white shadow-lg rounded-full mx-auto md:mx-0 mb-4 flex items-center justify-center overflow-hidden">
              {/* User Avatar Placeholder */}
              <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900">Joko Susanto</h1>
            <p className="text-gray-500 font-medium mb-4">Undergraduate Student, USG</p>
            
            <div className="flex flex-col gap-3 text-sm text-gray-600 mb-6">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4 text-emerald-600" />
                Jakarta, Indonesia
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4 text-emerald-600" />
                joko.s@student.usg.ac.id
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <LinkIcon className="h-4 w-4 text-emerald-600" />
                <a href="#" className="hover:text-emerald-700 hover:underline">github.com/jokodev</a>
              </div>
            </div>

            <button className="w-full py-2 bg-emerald-50 text-emerald-700 font-semibold rounded-md border border-emerald-200 hover:bg-emerald-100 transition flex items-center justify-center gap-2">
              <Share2 className="h-4 w-4" /> Share Profile
            </button>
          </div>
        </aside>

        {/* Right Column: Badges & Achievements */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          
          {/* Tabs */}
          <div className="flex items-center gap-6 border-b border-gray-200 mb-8">
            <button className="pb-4 font-bold text-emerald-700 border-b-2 border-emerald-600 flex items-center gap-2">
              <Grid className="h-4 w-4" /> Badges (3)
            </button>
            <button className="pb-4 font-medium text-gray-500 hover:text-gray-700 flex items-center gap-2">
              <Award className="h-4 w-4" /> Certificates (1)
            </button>
          </div>

          {/* Badge Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Badge Card 1 */}
            <Link href="/badge" className="group bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col items-center text-center cursor-pointer">
              <div className="w-32 h-32 mb-4 relative transition-transform duration-300 group-hover:scale-105">
                 {/* Reusing the styling from our badge view */}
                 <div className="w-full h-full bg-gradient-to-br from-blue-900 to-black rounded-t-full rounded-b-xl border-4 border-yellow-500 flex flex-col items-center justify-center p-2 shadow-inner relative overflow-hidden">
                    <h3 className="text-yellow-500 font-bold text-[10px] mb-1 z-10">EMURGO</h3>
                    <div className="bg-red-600 w-full py-1 z-10">
                      <h2 className="text-white font-black text-[10px] leading-tight">BLOCKCHAIN<br/>FOUNDATIONS</h2>
                    </div>
                 </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">Foundations of Blockchain</h3>
              <p className="text-sm text-gray-500 mb-3">EMURGO Academy</p>
              <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                <ShieldCheck className="h-3 w-3" /> Verified
              </div>
            </Link>

            {/* Badge Card 2 (USG Specific) */}
            <div className="group bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col items-center text-center cursor-pointer">
              <div className="w-32 h-32 mb-4 relative transition-transform duration-300 group-hover:scale-105">
                 <div className="w-full h-full bg-gradient-to-tr from-emerald-800 to-emerald-500 rounded-full border-4 border-gray-100 flex flex-col items-center justify-center p-2 shadow-inner relative">
                    <Award className="h-8 w-8 text-white mb-1" />
                    <h2 className="text-white font-black text-xs text-center">ADVANCED<br/>ALGORITHMS</h2>
                 </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">Advanced Algorithms Honors</h3>
              <p className="text-sm text-gray-500 mb-3">USG Computer Science</p>
              <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                <ShieldCheck className="h-3 w-3" /> Verified
              </div>
            </div>

            {/* Badge Card 3 (USG Specific) */}
            <div className="group bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col items-center text-center cursor-pointer">
              <div className="w-32 h-32 mb-4 relative transition-transform duration-300 group-hover:scale-105">
                 <div className="w-full h-full bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg rotate-45 flex flex-col items-center justify-center p-2 shadow-inner relative border-2 border-emerald-400">
                    <div className="-rotate-45 flex flex-col items-center">
                        <h2 className="text-emerald-400 font-black text-[10px] text-center tracking-widest">WEB DEV</h2>
                        <h2 className="text-white font-bold text-xs text-center">FULL STACK</h2>
                    </div>
                 </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-1 line-clamp-2 mt-4">Full Stack Development</h3>
              <p className="text-sm text-gray-500 mb-3">USG Engineering Dept</p>
              <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                <ShieldCheck className="h-3 w-3" /> Verified
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}