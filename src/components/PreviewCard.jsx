/* eslint-disable react/prop-types */
import { CgCloseR } from "react-icons/cg";

function PreviewCard({ selectedNews, setSelectedNews }) {
  return (
    <div className="md:w-1/2 hidden md:block ml-4 py-7 ease-in-out duration-100">
      <div className="p-4 py-8 border bg-white shadow-md rounded-lg h-full">
        <div className=" flex w-full justify-between items-center mb-4 ">
          <h2 className="inline-block px-4 py-1 text-sm font-semibold text-red-600 border border-red-600 rounded-full bg-red-100">
            Preview
          </h2>

          <CgCloseR
            onClick={() => setSelectedNews(null)}
            className=" text-2xl text-gray-600 cursor-pointer hover:text-black hover:shadow-lg"
          />
        </div>

        <h2 className="text-xl font-bold mb-2">{selectedNews.title}</h2>
        <p className="text-gray-500 mb-2">
          By {selectedNews.author}, published at{' '}
          {new Date(selectedNews.publishedAt).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-4">{selectedNews.content}</p>
        <a
          href={selectedNews.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 inline-block pb-1 mt-2 text-base border-b border-transparent hover:border-blue-600"
        >
          Read full article
        </a>
      </div>
    </div>
  );
}

export default PreviewCard