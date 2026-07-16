import { Search, Filter, MoreVertical, PlusCircle, CheckCircle2, Clock, Mail } from 'lucide-react';
import Link from 'next/link';

export default function EarnersPage() {
  return (
    <div className="space-y-6">
      
      {/* Header & Actions */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Earners Directory</h1>
          <p className="text-gray-500 text-sm mt-1">Manage students and track their credential history.</p>
        </div>
        {/* CHANGED THIS FROM A BUTTON TO A LINK */}
        <Link 
          href="/dashboard/earners/add" 
          className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-sm w-full md:w-auto"
        >
          <PlusCircle className="h-5 w-5" /> Add Earner
        </Link>
      </header>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input 
            type="text" 
            placeholder="Search by student name, email, or NIM..." 
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition bg-white">
          <Filter className="h-4 w-4" /> Filters
        </button>
      </div>

      {/* Earners Data Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                <th className="p-4 font-semibold">Student</th>
                <th className="p-4 font-semibold">Contact</th>
                <th className="p-4 font-semibold text-center">Badges Earned</th>
                <th className="p-4 font-semibold">Last Issued</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              
              {/* Row 1 */}
              <tr className="hover:bg-gray-50 transition">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">JS</div>
                    <div>
                      <p className="font-semibold text-gray-900">Joko Susanto</p>
                      <p className="text-xs text-gray-500">NIM: 220184759</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-gray-600 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" /> joko.s@student.usg.ac.id
                </td>
                <td className="p-4 text-center font-semibold text-gray-900">3</td>
                <td className="p-4 text-gray-500">Oct 24, 2026</td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-emerald-100">
                    <CheckCircle2 className="h-3 w-3" /> Active
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-gray-400 hover:text-gray-900 transition"><MoreVertical className="h-5 w-5" /></button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-gray-50 transition">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">SA</div>
                    <div>
                      <p className="font-semibold text-gray-900">Siti Aminah</p>
                      <p className="text-xs text-gray-500">NIM: 220184760</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-gray-600 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" /> siti.a@student.usg.ac.id
                </td>
                <td className="p-4 text-center font-semibold text-gray-900">1</td>
                <td className="p-4 text-gray-500">Oct 23, 2026</td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-yellow-100">
                    <Clock className="h-3 w-3" /> Pending Accept
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-gray-400 hover:text-gray-900 transition"><MoreVertical className="h-5 w-5" /></button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-gray-50 transition">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0">RP</div>
                    <div>
                      <p className="font-semibold text-gray-900">Reza Pratama</p>
                      <p className="text-xs text-gray-500">NIM: 220184332</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-gray-600 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" /> reza.p@student.usg.ac.id
                </td>
                <td className="p-4 text-center font-semibold text-gray-900">4</td>
                <td className="p-4 text-gray-500">Oct 22, 2026</td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-emerald-100">
                    <CheckCircle2 className="h-3 w-3" /> Active
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-gray-400 hover:text-gray-900 transition"><MoreVertical className="h-5 w-5" /></button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between text-sm">
          <span className="text-gray-500">Showing 1 to 3 of 892 earners</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded bg-white text-gray-500 hover:bg-gray-100 transition disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-100 transition">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
}