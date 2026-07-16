import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function AddEarnerPage() {
  return (
    <div className="max-w-3xl space-y-6">
      
      {/* Header */}
      <header className="mb-8">
        <Link href="/dashboard/earners" className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition font-medium text-sm mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to Directory
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Add New Earner</h1>
        <p className="text-gray-500 text-sm mt-1">Register a new student to your institutions credential directory.</p>
      </header>

      {/* Form Container */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
        <form className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
              <input type="text" id="firstName" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="e.g. Joko" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
              <input type="text" id="lastName" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="e.g. Susanto" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Student Email Address</label>
            <input type="email" id="email" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="student@usg.ac.id" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nim" className="block text-sm font-semibold text-gray-700 mb-1">Student ID (NIM)</label>
              <input type="text" id="nim" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="e.g. 220184759" />
            </div>
            <div>
              <label htmlFor="department" className="block text-sm font-semibold text-gray-700 mb-1">Department</label>
              <select id="department" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white">
                <option>Computer Science</option>
                <option>Information Systems</option>
                <option>Engineering</option>
                <option>Business Management</option>
              </select>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex items-center justify-end gap-4">
            <Link href="/dashboard/earners" className="px-5 py-2.5 text-gray-600 font-semibold hover:bg-gray-50 rounded-lg transition">
              Cancel
            </Link>
            {/* Using a Link here just so it loops back for the prototype demo */}
            <Link href="/dashboard/earners" className="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition shadow-sm flex items-center gap-2">
              <Save className="h-4 w-4" /> Save Earner
            </Link>
          </div>
        </form>
      </div>

    </div>
  );
}