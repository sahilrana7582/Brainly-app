import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const profile = await currentUser();
    const { link, channelType } = await req.json();
    if (!profile) {
      return new NextResponse('Un-Authorized', { status: 401 });
    }

    const newPost = await db.task.create({
      data: {
        channel: channelType,
        userId: profile.id,
        link,
      },
    });

    return NextResponse.json(newPost);
  } catch (e) {
    console.log('Create Server Error', e);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
