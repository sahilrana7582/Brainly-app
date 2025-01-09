import React from 'react';

interface CardProps {
  link: string;
  channel: 'Youtube' | 'Twitter';
}

const Card: React.FC<CardProps> = ({ link, channel }) => {
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.includes('youtu.be')
      ? url.split('youtu.be/')[1]
      : new URL(url).searchParams.get('v');

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  // Handle Twitter embed URL
  const getTwitterEmbedUrl = (url: string) => {
    const tweetId = url.split('/').pop(); // Extracts the tweet ID from URL
    return tweetId
      ? `https://platform.twitter.com/widgets/tweet.html?id=${tweetId}`
      : null;
  };

  const renderEmbed = () => {
    if (channel === 'Youtube') {
      const embedUrl = getYouTubeEmbedUrl(link);
      if (!embedUrl) {
        return <div className="text-red-600">Invalid YouTube URL</div>;
      }
      return (
        <iframe
          className="w-full aspect-video rounded-lg"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        />
      );
    }

    if (channel === 'Twitter') {
      const embedUrl = getTwitterEmbedUrl(link);
      if (!embedUrl) {
        return <div className="text-red-600">Invalid Twitter URL</div>;
      }
      return (
        <blockquote className="twitter-tweet">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View on Twitter
          </a>
        </blockquote>
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl ">
      <div className="relative pb-9/16 bg-gray-50">{renderEmbed()}</div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Watch or View this Content
        </h3>
        <p className="text-gray-600 text-base">
          {channel === 'Youtube' ? 'YouTube Video Embed' : 'Twitter Post Embed'}
        </p>
      </div>
    </div>
  );
};

export default Card;
