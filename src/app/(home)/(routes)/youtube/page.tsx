import Card from '@/components/Cards/Card';
import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import { channel } from 'diagnostics_channel';

const Youtube = async () => {
  const profile = await currentUser();

  const allContent = await db.task.findMany({
    where: {
      userId: profile?.id,
      channel: 'Youtube',
    },
  });
  console.log(allContent);
  return (
    <div className="grid grid-cols-3 px-6 py-6 gap-y-6">
      {allContent.map((content) => (
        <Card channel={content.channel} link={content.link}></Card>
      ))}
    </div>
  );
};

export default Youtube;
