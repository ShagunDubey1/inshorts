/* eslint-disable react/prop-types */

function NewsCard({ news }) {
  return (
    <div className=" relative mx-auto max-w-4xl mb-4 rounded-lg bg-gradient-to-tr from-pink-300 to-red-300 p-0.5 shadow-md">
    <div className="bg-white p-2 rounded-md flex ">
      <div className="h-[15rem] w-[40%] rounded-md">
        <img src={news.urlToImage} alt="News" className="w-full h-full object-cover rounded-md" />
      </div>

      <div className="p-4  w-[60%] ">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">{news.title}</h2>
        <p className="text-sm text-gray-500 mb-4">short by {news.author} / {new Date(news.publishedAt).toLocaleTimeString()}</p>
        <p className="text-gray-700 mb-4">{news.description}</p>
        <a href={news.url} className="text-blue-500 hover:underline">read more at {news.source.name}</a>
      </div>

    </div>
    </div>
  );
}

export default NewsCard;
