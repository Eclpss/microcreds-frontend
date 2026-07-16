import { PlusCircle, MoreVertical, Image as ImageIcon } from 'lucide-react';

import Link from 'next/link';
export default function BadgeTemplatesPage() {
  return (
    <div>
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Badge Templates</h1>
          <p className="text-gray-500 text-sm">Manage and create certificates for your department.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Create New Template Card */}
        <Link
          href="/dashboard/templates/create"
          className="h-64 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-500 hover:text-emerald-600 hover:border-emerald-500 hover:bg-emerald-50 transition group"
        >
          <PlusCircle className="h-10 w-10 mb-2 group-hover:scale-110 transition-transform" />
          <span className="font-semibold">Create New Template</span>
        </Link>

        {/* Existing Template 1 */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="h-32 bg-slate-800 flex items-center justify-center p-4 relative">
            <div className="w-20 h-20 bg-gradient-to-tr from-emerald-800 to-emerald-500 rounded-full border-2 border-white flex flex-col items-center justify-center shadow-inner">
              <h2 className="text-white font-black text-[8px] text-center">ADVANCED<br />ALGORITHMS</h2>
            </div>
            <button className="absolute top-2 right-2 text-white/70 hover:text-white bg-black/20 p-1 rounded"><MoreVertical className="h-4 w-4" /></button>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">Advanced Algorithms Honors</h3>
            <p className="text-xs text-gray-500 mb-4">USG Computer Science</p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Issued: <strong>245</strong></span>
              <button className="text-emerald-600 font-semibold hover:underline">Edit</button>
            </div>
          </div>
        </div>

        {/* Existing Template 2 */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="h-32 bg-slate-100 flex items-center justify-center p-4 relative">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg rotate-45 flex flex-col items-center justify-center shadow-inner border border-emerald-400">
              <div className="-rotate-45 flex flex-col items-center">
                <h2 className="text-emerald-400 font-black text-[6px] text-center tracking-widest">WEB DEV</h2>
              </div>
            </div>
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-800 bg-white/50 p-1 rounded"><MoreVertical className="h-4 w-4" /></button>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">Full Stack Development</h3>
            <p className="text-xs text-gray-500 mb-4">USG Engineering Dept</p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Issued: <strong>128</strong></span>
              <button className="text-emerald-600 font-semibold hover:underline">Edit</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}