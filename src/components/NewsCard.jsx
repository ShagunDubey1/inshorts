/* eslint-disable react/prop-types */

function NewsCard({ news }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6 max-w-2xl mx-auto">
      <img src={news.image} alt="News" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">{news.title}</h2>
        <p className="text-sm text-gray-500 mb-4">short by {news.author} / {news.time}</p>
        <p className="text-gray-700 mb-4">{news.description}</p>
        <a href={news.link} className="text-blue-500 hover:underline">read more at {news.source}</a>
      </div>
    </div>
  );
}

export default NewsCard;
