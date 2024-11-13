/* eslint-disable react/prop-types */

function PreviewPopup({ selectedNews, setSelectedNews }) {
  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center md:hidden"
      onClick={() => setSelectedNews(null)}
    >
      <div className="bg-white p-4 rounded-lg w-[90%] max-h-[90%] overflow-y-auto">
        <h2 className="text-xl font-bold mb-2">{selectedNews.title}</h2>
        <p className="text-gray-500 mb-2">
          By {selectedNews.author}, published at{' '}
          {new Date(selectedNews.publishedAt).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-4">{selectedNews.content}</p>
        <div className=" w-full flex items-center justify-between">
          <a
            href={selectedNews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 inline-block pb-1 mt-2 text-base border-b border-transparent hover:border-blue-600"
          >
            Read full article
          </a>
          <button
            className="mt-4 bg-red-500 text-white py-1 px-4 rounded"
            onClick={() => setSelectedNews(null)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewPopup;
