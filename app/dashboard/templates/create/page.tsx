import { ArrowLeft, Upload, Plus, X, Save } from 'lucide-react';
import Link from 'next/link';

export default function CreateTemplatePage() {
  return (
    <div className="max-w-4xl pb-12">
      {/* Header */}
      <header className="mb-8">
        <Link href="/dashboard/templates" className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition font-medium text-sm mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to Templates
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Create New Badge Template</h1>
        <p className="text-gray-500 text-sm mt-1">Design a new certificate for your departments courses.</p>
      </header>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-8 space-y-8">
          
          {/* Top Section: Image & Basic Info */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Badge Image Uploader */}
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              <label className="block text-sm font-semibold text-gray-700">Badge Artwork</label>
              <div className="aspect-square border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 bg-gray-50 hover:bg-emerald-50 hover:border-emerald-400 hover:text-emerald-600 transition cursor-pointer group relative overflow-hidden">
                <Upload className="h-10 w-10 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Upload Image</span>
                <span className="text-xs mt-1 px-4 text-center">PNG or SVG (Max 2MB)</span>
              </div>
            </div>

            {/* Basic Details */}
            <div className="w-full md:w-2/3 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Badge Title</label>
                <input 
                  type="text" 
                  placeholder="e.g., Introduction to Machine Learning" 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none transition" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Earning Criteria / Description</label>
                <textarea 
                  rows={4} 
                  placeholder="Describe what the student must do to earn this badge..." 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none transition resize-none" 
                ></textarea>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Skills Section */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Skills Assessed</label>
            <p className="text-xs text-gray-500 mb-4">Add the core competencies this badge represents. Press enter to add a skill.</p>
            
            {/* Tag Input Simulator */}
            <div className="border border-gray-300 rounded-lg p-2 flex flex-wrap gap-2 items-center focus-within:ring-2 focus-within:ring-emerald-600 focus-within:border-transparent transition">
              
              <span className="flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md text-sm font-medium">
                Python <button className="hover:text-emerald-900"><X className="h-3 w-3" /></button>
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md text-sm font-medium">
                Data Analysis <button className="hover:text-emerald-900"><X className="h-3 w-3" /></button>
              </span>
              
              <input 
                type="text" 
                placeholder="Type a skill..." 
                className="flex-1 min-w-[150px] outline-none text-sm px-2 py-1 bg-transparent"
              />
            </div>
          </div>

        </div>
        
        {/* Footer Actions */}
        <div className="bg-gray-50 border-t border-gray-200 p-6 flex justify-end gap-4">
          <Link href="/dashboard/templates" className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-100 transition">
            Cancel
          </Link>
          <button className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition flex items-center gap-2 shadow-sm">
            <Save className="h-4 w-4" /> Save Template
          </button>
        </div>
      </div>
    </div>
  );
}