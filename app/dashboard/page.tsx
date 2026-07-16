import { Users, Award, PlusCircle, ShieldCheck, Search, MoreVertical } from 'lucide-react';
import Link from 'next/link';

export default function DashboardHomePage() {
    return (
        <div>
            {/* Top Header */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">USG Computer Science Dept.</h1>
                    <p className="text-gray-500 text-sm">Welcome back, Dr. Budi Santoso</p>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:flex-none">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Search earners..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm w-full md:w-64"
                        />
                    </div>
                    {/* Ensure import Link from 'next/link'; is at the top */}
                    <Link
                        href="/dashboard/issue"
                        className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition shadow-sm whitespace-nowrap"
                    >
                        <PlusCircle className="h-5 w-5" /> Issue Badge
                    </Link>
                </div>
            </header>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-emerald-100 text-emerald-700 rounded-lg">
                        <Award className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Total Issued</p>
                        <h2 className="text-2xl font-bold text-gray-900">1,248</h2>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-blue-100 text-blue-700 rounded-lg">
                        <Users className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Active Earners</p>
                        <h2 className="text-2xl font-bold text-gray-900">892</h2>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-purple-100 text-purple-700 rounded-lg">
                        <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-500">Active Templates</p>
                        <h2 className="text-2xl font-bold text-gray-900">14</h2>
                    </div>
                </div>
            </div>

            {/* Recent Activity Table */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                    <h2 className="text-lg font-bold text-gray-900">Recently Issued Badges</h2>
                    <button className="text-emerald-600 font-semibold text-sm hover:underline">View All</button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200 text-sm text-gray-500">
                                <th className="p-4 font-medium">Earner Name</th>
                                <th className="p-4 font-medium">Badge Template</th>
                                <th className="p-4 font-medium">Date Issued</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4"></th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">

                            {/* Row 1 */}
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
                                <td className="p-4 font-semibold text-gray-900">Joko Susanto</td>
                                <td className="p-4 text-gray-600">Advanced Algorithms Honors</td>
                                <td className="p-4 text-gray-500">Oct 24, 2026</td>
                                <td className="p-4">
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Accepted</span>
                                </td>
                                <td className="p-4 text-right">
                                    <button className="text-gray-400 hover:text-gray-700"><MoreVertical className="h-4 w-4" /></button>
                                </td>
                            </tr>

                            {/* Row 2 */}
                            <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
                                <td className="p-4 font-semibold text-gray-900">Siti Aminah</td>
                                <td className="p-4 text-gray-600">Full Stack Development</td>
                                <td className="p-4 text-gray-500">Oct 23, 2026</td>
                                <td className="p-4">
                                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold">Pending</span>
                                </td>
                                <td className="p-4 text-right">
                                    <button className="text-gray-400 hover:text-gray-700"><MoreVertical className="h-4 w-4" /></button>
                                </td>
                            </tr>

                            {/* Row 3 */}
                            <tr className="hover:bg-gray-50 transition">
                                <td className="p-4 font-semibold text-gray-900">Reza Pratama</td>
                                <td className="p-4 text-gray-600">Data Science Fundamentals</td>
                                <td className="p-4 text-gray-500">Oct 22, 2026</td>
                                <td className="p-4">
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Accepted</span>
                                </td>
                                <td className="p-4 text-right">
                                    <button className="text-gray-400 hover:text-gray-700"><MoreVertical className="h-4 w-4" /></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}