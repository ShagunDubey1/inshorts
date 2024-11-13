/* eslint-disable react/prop-types */

function NewsCard({ news }) {
  return (
    <div className="h-full  relative mx-auto max-w-4xl mb-4 rounded-lg bg-gradient-to-tr from-blue-300 to-red-300 p-0.5 shadow-md">
      <div className="bg-white h-full p-2 rounded-md flex flex-col md:flex-row">
        {/* Image Section */}
        <div className=" w-full md:w-[40%] rounded-md mb-4 md:mb-0 flex justify-center items-center">
          <img
            src={news.urlToImage}
            alt="News"
            className="w-full h-[15rem] object-cover rounded-md"
          />
        </div>

        {/* Text Section */}
        <div className="p-4 w-full md:w-[60%]">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            {news.title}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            short by {news.author} /{' '}
            {new Date(news.publishedAt).toLocaleTimeString()}
          </p>
          <p className="text-gray-700 mb-4">{news.description}</p>
          <a
            href={news.url}
            className="text-blue-500 inline-block pb-1 mt-2 text-base border-b border-transparent hover:border-blue-600"
          >
            read more at {news.source.name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
