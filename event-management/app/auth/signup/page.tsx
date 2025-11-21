// app/auth/signup/page.tsx
'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

export default function SignupPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">GateToConnect</h1>
            <p className="text-xl text-gray-800">Sign up as an Event Organizer</p>
            <p className="text-gray-600 mt-2">Join thousands connecting through events</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8">
            <button
              onClick={() => signIn('google', { callbackUrl: '/create-volunteer-profile' })}
              className="w-full flex items-center justify-center gap-4 py-4 border border-gray-300 rounded-2xl hover:bg-gray-50 transition font-medium"
            >
              <Image src="https://www.google.com/favicon.ico" alt="G" width={28} height={28} />
              Continue with Google
            </button>

            {/* <button
              onClick={() => signIn('facebook', { callbackUrl: '/create-volunteer-profile' })}
              className="w-full flex items-center justify-center gap-4 py-4 border border-gray-300 rounded-2xl hover:bg-gray-50 transition font-medium"
            >
              <Image src="https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico" alt="F" width={28} height={28} />
              Continue with Facebook
            </button> */}

            <div className="relative text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <span className="relative bg-white px-4 text-gray-500">OR</span>
            </div>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-600 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-600 focus:outline-none"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-600 focus:outline-none"
                required
              />

             <label className="flex items-center gap-3 cursor-pointer">
  <input
    type="checkbox"
    checked={agreed}
    onChange={(e) => setAgreed(e.target.checked)}
    className="w-5 h-5 text-purple-600 rounded"
  />
  <span className="text-sm text-gray-700">
    I agree to the{" "}
    <Link href="/terms" className="text-purple-600 underline hover:text-purple-700">
      Terms of Service
    </Link>{" "}
    and{" "}
    <Link href="/privacy" className="text-purple-600 underline hover:text-purple-700">
      Privacy Policy
    </Link>
  </span>
</label>

              <button
                disabled={!agreed}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition shadow-xl disabled:opacity-50"
              >
                Sign up
              </button>
            </form>

            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => router.push('/auth/login')}
                className="text-purple-600 font-bold hover:underline"
              >
                Log in
              </button>
            </p>

            <p className="text-center text-xs text-gray-500 mt-8">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}