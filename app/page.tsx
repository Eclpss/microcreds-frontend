import { 
  ArrowRight, 
  GraduationCap, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Award, 
  Share2, 
  Zap, 
  BarChart3 
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Navigation - Rebranded to MicroCreds */}
      <header className="border-b border-gray-200 py-4 px-8 flex items-center justify-between bg-white sticky top-0 z-50">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-600 font-black text-3xl tracking-tighter">
            <GraduationCap className="h-8 w-8" />
            MicroCreds.
          </div>
          {/* UPDATED NAVIGATION LINKS HERE 👇 */}
          <div className="hidden md:flex items-center gap-6 font-medium text-gray-600">
            <Link href="/#features" className="hover:text-emerald-600 transition">Solutions</Link>
            <Link href="/#pricing" className="hover:text-emerald-600 transition">Pricing (IDR)</Link>
            <Link href="/" className="hover:text-emerald-600 transition">For Universities</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="px-4 py-2 text-gray-600 font-semibold hover:text-emerald-600 transition">
              Sign In
            </Link>
            <Link href="/sales" className="px-5 py-2 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition shadow-sm">
              Talk to Sales
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-6 border border-emerald-100">
          <Layers className="h-4 w-4" /> The New Standard in Micro-Credentials
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Verify Skills. <span className="text-emerald-600">Empower Futures.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          The premier digital micro-credentialing platform for higher education in Indonesia. Issue secure, verifiable badges that your learners can take anywhere.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/sales" className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-md hover:bg-emerald-700 transition shadow-lg flex items-center gap-2 text-lg">
            Start Issuing Certificates <ArrowRight className="h-5 w-5" />
          </Link>
          <button className="px-8 py-4 bg-white text-emerald-700 border-2 border-emerald-600 font-bold rounded-md hover:bg-emerald-50 transition shadow-sm text-lg">
            Request Demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-8 bg-white border-t border-gray-100 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything you need to issue credentials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">A powerful, all-in-one platform designed for universities, bootcamps, and modern workshop creators.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cryptographic Security</h3>
              <p className="text-gray-600 leading-relaxed">Every certificate is cryptographically signed and immutable, meaning employers can instantly verify its authenticity with 100% confidence.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Badge Studio</h3>
              <p className="text-gray-600 leading-relaxed">Design beautiful, branded digital badges that perfectly match your institutions identity using our built-in template creator.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast Issuing</h3>
              <p className="text-gray-600 leading-relaxed">Issue hundreds of certificates simultaneously. Upload a CSV of your graduating class and send them all out with a single click.</p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Share2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">One-Click Sharing</h3>
              <p className="text-gray-600 leading-relaxed">Students can instantly showcase their new skills by sharing their verified MicroCreds directly to their LinkedIn profiles or digital resumes.</p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
              <p className="text-gray-600 leading-relaxed">Track your programs success. See exactly how many students are opening, accepting, and sharing their credentials across the web.</p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-md transition group">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Integrations</h3>
              <p className="text-gray-600 leading-relaxed">Connect MicroCreds directly to your existing software. Use our robust API to automate badge issuing straight from your LMS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (The Payment System in Rupiah) */}
      <section id="pricing" className="py-24 px-8 bg-gray-50 border-t border-gray-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Start issuing micro-credentials today with plans tailored for Indonesian institutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-500 text-sm mb-6">For small bootcamps & courses</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">Rp 20.000</span>
                <span className="text-gray-500"> / bulan</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Up to 50 badges/month</li>
                <li className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> 2 Standard Templates</li>
                <li className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Basic Verification</li>
              </ul>
              <Link href="/sales" className="block w-full text-center py-2.5 border border-emerald-600 text-emerald-700 font-bold rounded-lg hover:bg-emerald-50 transition">
                Get Started
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-emerald-600 rounded-2xl border border-emerald-700 p-8 shadow-xl transform md:-translate-y-4 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-2">University Pro</h3>
              <p className="text-emerald-100 text-sm mb-6">For university departments</p>
              <div className="mb-6 text-white">
                <span className="text-4xl font-extrabold">Rp 150.000</span>
                <span className="text-emerald-100"> / bulan</span>
              </div>
              <ul className="space-y-4 mb-8 text-white">
                <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-emerald-300" /> Unlimited Badges</li>
                <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-emerald-300" /> Custom Branding & Logos</li>
                <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-emerald-300" /> Bulk Issue via CSV</li>
                <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="h-5 w-5 text-emerald-300" /> API Access</li>
              </ul>
             <Link href="/sales" className="block w-full text-center py-2.5 bg-white text-emerald-700 font-bold rounded-lg hover:bg-gray-50 transition shadow-sm">
                Upgrade to Pro
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-500 text-sm mb-6">For massive institutions</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Multiple Departments</li>
                <li className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> LMS Integrations</li>
                <li className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Dedicated Account Manager</li>
              </ul>
              <Link href="/sales" className="block w-full text-center py-2.5 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition">Talk to Sales</Link>
            </div>

          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-8 text-center text-gray-500">
        <p>© 2026 MicroCreds Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}