import { LayoutDashboard, Users, Award, Settings, ShieldCheck, LogOut, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50 flex font-sans text-slate-800">

            {/* Shared Sidebar Navigation */}
            <aside className="w-64 bg-slate-900 text-white flex flex-col hidden md:flex fixed h-full z-10">
                <div className="p-6 flex items-center gap-2 text-emerald-400 font-black text-2xl tracking-tighter border-b border-slate-800">
                    <GraduationCap className="h-8 w-8" />
                    MicroCreds.
                </div>

                <nav className="flex-1 py-6 px-4 space-y-2">
                    <Link href="/dashboard" className="flex items-center gap-3 text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-lg font-medium transition">
                        <LayoutDashboard className="h-5 w-5" /> Dashboard
                    </Link>
                    <Link href="/dashboard/templates" className="flex items-center gap-3 text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-lg font-medium transition focus:bg-emerald-600 focus:text-white">
                        <Award className="h-5 w-5" /> Badge Templates
                    </Link>
                    <Link href="/dashboard/earners" className="flex items-center gap-3 text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-lg font-medium transition">
                        <Users className="h-5 w-5" /> Earners
                    </Link>
                    <Link href="/dashboard/settings" className="flex items-center gap-3 text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-lg font-medium transition">
                        <Settings className="h-5 w-5" /> Settings
                    </Link>
                    <Link href="/dashboard/requests" className="flex items-center gap-3 text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-lg font-medium transition">
                        <ShieldCheck className="h-5 w-5" /> Access Requests
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <Link href="/" className="flex items-center gap-3 text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-lg font-medium transition">
                        <LogOut className="h-5 w-5" /> Sign Out
                    </Link>
                </div>
            </aside>

            {/* Dynamic Content Area (This injects the specific pages) */}
            <main className="flex-1 md:ml-64 p-8">
                {children}
            </main>
        </div>
    );
}