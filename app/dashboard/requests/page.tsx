import { CheckCircle2, XCircle, Clock, Building2, Mail } from 'lucide-react';

export default function AccessRequestsPage() {
  return (
    <div className="max-w-5xl pb-12">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded tracking-wide uppercase">Super Admin Only</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Issuer Access Requests</h1>
        <p className="text-gray-500 text-sm mt-1">Review and approve faculty requests to create new department accounts.</p>
      </header>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        
        {/* Request Card 1 (Pending) */}
        <div className="p-6 border-b border-gray-200 hover:bg-gray-50 transition">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            
            <div className="space-y-4 flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Dr. Siti Nurhaliza</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <span className="flex items-center gap-1"><Building2 className="h-4 w-4" /> Faculty of Business & Management</span>
                    <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> siti.n@faculty.usg.ac.id</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2.5 py-1 rounded-full text-xs font-bold border border-yellow-200">
                  <Clock className="h-3 w-3" /> Pending Review
                </span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm text-gray-700">
                <span className="font-semibold block mb-1">Additional Information:</span>
                We want to start issuing digital certificates for our final year entrepreneurship seminar. Expecting about 150 students per semester
              </div>
            </div>

            <div className="flex md:flex-col gap-3 shrink-0 pt-1 md:pt-0">
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition shadow-sm">
                <CheckCircle2 className="h-4 w-4" /> Approve & Create
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-2 border border-red-200 text-red-600 rounded-lg font-bold hover:bg-red-50 transition">
                <XCircle className="h-4 w-4" /> Deny
              </button>
            </div>
            
          </div>
        </div>

        {/* Request Card 2 (Already Approved) */}
        <div className="p-6 border-b border-gray-200 opacity-60">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            
            <div className="space-y-2 flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 line-through decoration-gray-400">Dr. Budi Santoso</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <span className="flex items-center gap-1"><Building2 className="h-4 w-4" /> Computer Science Dept.</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-xs font-bold border border-gray-200">
                  <CheckCircle2 className="h-3 w-3" /> Approved on Oct 20
                </span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}