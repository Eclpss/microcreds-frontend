'use client'; // This tells Next.js we are using interactive React features

import { GraduationCap, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  
  // State to hold what the user types
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // The function that runs when they click "Sign In"
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Stops the page from refreshing
    setError(false);

    // The Fake Database Logic!
    if (username === 'admin' && password === 'admin') {
      router.push('/dashboard');
    } else if (username === 'joko' && password === 'joksusanto111') {
      router.push('/profile');
    } else {
      setError(true); // Triggers the red error message
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center text-emerald-600 font-black text-4xl tracking-tighter mb-6">
          <GraduationCap className="h-10 w-10 mr-2" />
          MicroCreds.
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="text-center text-sm text-gray-500 mt-2">
          Demo Accounts: <br/> 
          Admin: <b>admin / admin</b> <br/> 
          User: <b>joko / joksusanto111</b>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl border border-gray-100 sm:rounded-lg sm:px-10">
          
          {/* Changed form to use onSubmit */}
          <form className="space-y-6" onSubmit={handleLogin}>
            
            {/* Error Message UI */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-center gap-2 text-sm">
                <AlertCircle className="h-4 w-4 shrink-0" />
                Invalid credentials. Please try again.
              </div>
            )}

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Email or Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              {/* Changed from a <Link> to a <button type="submit"> */}
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition text-center"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
          Not an issuer yet?{' '}
          <Link href="/sales" className="font-medium text-emerald-600 hover:text-emerald-500">
            Talk to sales to get started.
          </Link>
        </p>
      </div>
    </div>
  );
}