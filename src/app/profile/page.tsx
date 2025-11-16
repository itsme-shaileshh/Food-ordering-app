// File: src/app/profile/page.tsx

'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

 // This will run when the page loads
  useEffect(() => {
    if (status === 'authenticated') {
      setIsLoading(true);
      fetch('/api/profile')
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch profile');
          }
          return res.json();
        })
        .then((data) => {
          setName(data.name || '');
          setPhone(data.phone || '');
          setAddress(data.address || '');
        })
        .catch((err) => {
          console.error(err);
          toast.error('Could not load your profile.');
        })
        .finally(() => {
          // This runs no matter what, un-sticking the form
          setIsLoading(false);
        });
    }
  }, [status]);

  // This will run when the "Save" button is clicked
  async function handleProfileUpdate(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    
    const response = await fetch('/api/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, address }),
    });

    setIsLoading(false);
    if (response.ok) {
      toast.success('Profile saved!');
    } else {
      toast.error('Failed to save profile.');
    }
  }

  // --- Page Protection ---
  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-12 h-12 animate-spin text-orange-500" />
      </div>
    );
  }

  if (status === 'unauthenticated') {
    // If not logged in, kick them back to the homepage
    router.push('/');
    return null;
  }
  
  // --- The Actual Page ---
  return (
    <div className="max-w-2xl mx-auto my-12 p-8">
      <h1 className="text-4xl font-bold font-display mb-8">My Profile</h1>
      
      <form onSubmit={handleProfileUpdate} className="space-y-6">
        {/* Email (Read-only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={session?.user?.email || ''}
            disabled
            className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border-gray-300 shadow-sm text-gray-400"
          />
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
            className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-white bg-gray-700"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={isLoading}
            placeholder="+91 999 999 999"
            className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-white bg-gray-700"
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Delivery Address
          </label>
          <textarea
            id="address"
            rows={4}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            disabled={isLoading}
            placeholder="123 Main St, New Delhi, IN 110044"
            className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-white bg-gray-700"
          />
        </div>

        {/* Save Button */}
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary flex items-center justify-center gap-2 py-3 text-lg"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
            {isLoading ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </form>
    </div>
  );
}