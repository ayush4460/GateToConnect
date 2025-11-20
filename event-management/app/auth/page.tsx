// app/auth/page.tsx
'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

export default function AuthPage() {
  const router = useRouter();

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/volunteer-dashboard' });
  };

  const handleFacebookSignIn = () => {
    signIn('facebook', { callbackUrl: '/volunteer-dashboard' });
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">GateToConnect</h1>
            <p className="mt-4 text-xl text-gray-600">Welcome back, Event Organizer</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            {/* Google */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-4 px-6 py-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              <Image src="https://www.google.com/favicon.ico" alt="Google" width={24} height={24} />
              <span className="font-medium text-gray-700">Continue with Google</span>
            </button>

            {/* Facebook */}
            {/* <button
              onClick={handleFacebookSignIn}
              className="w-full flex items-center justify-center gap-4 px-6 py-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition"
            >
              <Image src="https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico" alt="Facebook" width={24} height={24} />
              <span className="font-medium text-gray-700">Continue with Facebook</span>
            </button> */}

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* Email Login Form */}
            <form onSubmit={(e) => { e.preventDefault(); toast.error("Coming soon!"); }} className="space-y-5">
              <input type="text" placeholder="Email or Username" className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600" />
              <input type="password" placeholder="Password" className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600" />

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 text-purple-600 rounded" />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-purple-600 hover:underline text-sm">Forgot Password?</a>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-5 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg">
                Log In
              </button>
            </form>

            <p className="text-center text-gray-600">
              Don&apos;t have an account?{" "}
              <button onClick={() => router.push('/create-volunteer-profile')} className="text-purple-600 font-semibold hover:underline">
                Sign up
              </button>
            </p>

            <p className="text-center text-xs text-gray-500 mt-8">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="#" className="text-purple-600 underline">Privacy Policy</a> and{" "}
              <a href="#" className="text-purple-600 underline">Terms of Service</a> apply.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}