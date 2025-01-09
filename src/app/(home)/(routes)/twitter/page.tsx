import Card from '@/components/Cards/Card';
import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import { channel } from 'diagnostics_channel';

const Twitter = async () => {
  const profile = await currentUser();

  const allContent = await db.task.findMany({
    where: {
      userId: profile?.id,
      channel: 'Twitter',
    },
  });
  return (
    <div className="px-6 py-6">
      {allContent.length === 0 ? (
        <div className="flex justify-center items-center flex-col text-center p-12 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            No Content Available
          </h2>
          <p className="text-gray-600 text-xl">
            It looks like there is no content to display right now. Please check
            back later!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allContent.map((content, index) => (
            <Card key={index} channel={content.channel} link={content.link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Twitter;
