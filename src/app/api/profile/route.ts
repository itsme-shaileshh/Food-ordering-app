// File: src/app/api/profile/route.ts

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'; // We need to export this from your auth file

export async function GET(request: Request) {
  // Get the user's session from the server
  const session = await getServerSession(authOptions);

  // Protect the route
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  // Fetch the user's profile from the database
  try {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        name: true,
        phone: true,
        address: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  // Get the user's session from the server
  const session = await getServerSession(authOptions);

  // Protect the route
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  // Get the new data from the request body
  const { name, phone, address } = await request.json();

  // Update the user's profile in the database
  try {
    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        name: name,
        phone: phone,
        address: address,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}