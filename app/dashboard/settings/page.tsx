import { Save, User, Building2, Key, Bell, Upload, Copy } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="max-w-5xl">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Platform Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your account, department details, and integrations.</p>
      </header>

      <div className="space-y-8">
        
        {/* Personal Profile Section */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 p-6 bg-gray-50 flex items-center gap-3">
            <User className="h-5 w-5 text-gray-500" />
            <h2 className="text-lg font-bold text-gray-900">Personal Profile</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xl font-bold border-2 border-emerald-200">
                BS
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                <Upload className="h-4 w-4" /> Change Avatar
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input type="text" defaultValue="Dr. Budi Santoso" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input type="email" defaultValue="budi@faculty.usg.ac.id" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Department / Organization Section */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 p-6 bg-gray-50 flex items-center gap-3">
            <Building2 className="h-5 w-5 text-gray-500" />
            <h2 className="text-lg font-bold text-gray-900">Department Branding</h2>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Department Name (Appears on Badges)</label>
              <input type="text" defaultValue="USG Computer Science Dept." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Issuer Logo</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                <Upload className="h-8 w-8 mb-2 text-emerald-600" />
                <p className="text-sm font-medium">Click to upload university or department logo</p>
                <p className="text-xs mt-1">SVG, PNG, or JPG (max. 2MB)</p>
              </div>
            </div>
          </div>
        </section>

        {/* API & Integrations Section (For the Backend Friend) */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden border-l-4 border-l-emerald-600">
          <div className="border-b border-gray-200 p-6 bg-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Key className="h-5 w-5 text-gray-500" />
              <h2 className="text-lg font-bold text-gray-900">API & Integrations</h2>
            </div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded">Developer Tools</span>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-sm text-gray-600">Use these keys to connect Cerf to your internal university LMS or automate badge issuing via webhooks.</p>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Production API Key</label>
              <div className="flex gap-2">
                <input type="password" readOnly value="cerf_live_8f92j3n8fh2938hf2398h" className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 outline-none font-mono text-sm" />
                <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition flex items-center gap-2">
                  <Copy className="h-4 w-4" /> Copy
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Webhook Endpoint URL</label>
              <input type="text" placeholder="https://your-n8n-server.com/webhook/issue-badge" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none font-mono text-sm" />
              <p className="text-xs text-gray-500 mt-2">We will send a POST request to this URL whenever a student accepts a badge.</p>
            </div>
          </div>
        </section>

        {/* Save Button */}
        <div className="flex justify-end pt-4 pb-12">
          <button className="flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-700 transition shadow-lg">
            <Save className="h-5 w-5" /> Save All Changes
          </button>
        </div>

      </div>
    </div>
  );
}