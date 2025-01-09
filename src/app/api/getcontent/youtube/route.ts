import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const profile = await currentUser();
    if (!profile) {
      return new NextResponse('Un-Authorized', { status: 401 });
    }

    const allPost = await db.task.findMany({
      where: {
        userId: profile.id,
      },
    });

    return NextResponse.json(allPost);
  } catch (e) {
    console.log('Create Server Error', e);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
