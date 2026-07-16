import { GraduationCap, ArrowLeft, CheckCircle2, UserPlus, CreditCard, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans flex flex-col">
      {/* Minimal Header */}
      <header className="py-6 px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition font-medium text-sm">
            <ArrowLeft className="h-4 w-4" /> Back to Pricing
          </Link>
          <div className="flex items-center gap-2 text-emerald-600 font-black text-2xl tracking-tighter">
            <GraduationCap className="h-7 w-7" />
            MicroCreds.
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-8 py-12 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Steps to Activate */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Complete Your Registration</h1>
            <p className="text-gray-500 text-sm mb-8">Follow these steps to set up your workshop or department issuer account.</p>

            <div className="relative border-l-2 border-emerald-100 pl-6 ml-4 space-y-10">
              
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute -left-[35px] top-0 bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold ring-4 ring-white">
                  1
                </div>
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  Create Issuer Account <UserPlus className="h-4 w-4 text-emerald-600" />
                </h3>
                <p className="text-sm text-gray-500 mt-1 mb-4">
                  Before subscribing to a plan, you must register your institution or workshop details.
                </p>
                <Link 
                  href="/sales" 
                  className="inline-flex items-center justify-center px-5 py-2 bg-emerald-50 text-emerald-700 font-bold text-sm rounded-lg border border-emerald-200 hover:bg-emerald-100 transition"
                >
                  Fill Access Form
                </Link>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute -left-[35px] top-0 bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold ring-4 ring-white">
                  2
                </div>
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  Admin Verification <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Our system admin reviews your access request to prevent spam. Once approved, you will receive an automated email containing your temporary password credentials.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute -left-[35px] top-0 bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold ring-4 ring-white">
                  3
                </div>
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  Subscription & Activation <CreditCard className="h-4 w-4 text-emerald-600" />
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Log in to your newly approved dashboard. Go to settings to set up your subscription billing via Bank Transfer or GoPay to officially lift your monthly issuing limits.
                </p>
              </div>

            </div>
          </div>

          {/* Warning Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-amber-900 text-sm">
            <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Important Security Notice:</span> Only verified educational institutions, certified bootcamps, and official workshop organizations are allowed to issue micro-credentials. All accounts are manually audited.
            </div>
          </div>
        </div>

        {/* Right 1 Column: Plan Summary Card */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl border-2 border-emerald-500 p-6 shadow-md sticky top-24">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded tracking-wide uppercase">Selected Plan</span>
            
            <h2 className="text-xl font-bold text-gray-900 mt-3 mb-1">University Pro</h2>
            <p className="text-xs text-gray-500 mb-4">Perfect for expanding programs & colleges</p>
            
            <div className="border-t border-b border-gray-100 py-4 my-4">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-sm text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-900">Rp 150.000</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-gray-600">Setup Fee</span>
                <span className="font-semibold text-gray-900">Rp 0</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline mb-6">
              <span className="font-bold text-gray-900 text-sm">Total Due</span>
              <span className="text-xl font-black text-emerald-600">Rp 150.000 <span className="text-xs font-normal text-gray-500">/ bln</span></span>
            </div>

            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Whats included:</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-xs text-gray-600">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Unlimited micro-credential issuing</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-gray-600">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Custom templates and color profiles</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-gray-600">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>CSV batch upload features</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-gray-600">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Access to the verified developer API</span>
              </li>
            </ul>

            <Link
              href="/sales"
              className="block w-full text-center py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition shadow-md hover:shadow-lg"
            >
              Confirm & Request Access
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}