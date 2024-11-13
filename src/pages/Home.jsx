import { useQuery } from '@tanstack/react-query';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import QueryKeys from '../constants/querykeys';
import getNews from '../services/getNews';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { CgCloseR } from 'react-icons/cg';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [selectedNews, setSelectedNews] = useState(null);

  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: [QueryKeys.GET_NEWS],
    queryFn: () => getNews({ category }),
  });

  useEffect(() => {
    refetch();
  }, [category, refetch]);

  const handleNewsClick = (news) => {
    console.log('clicked');
    setSelectedNews(news);
  };

  const handleNewsClosed = () => {
    setSelectedNews(null);
  };

  if (isLoading) return <p>Loading..</p>;

  if (isError) return <p>Error</p>;

  return (
    <>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className=" flex min-h-screen bg-gray-100">
        <Sidebar
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          setCategory={setCategory}
        />
        <div className="container mx-auto ">
          <div className="flex flex-col md:flex-row px-6">
            {/* News list */}
            <div className={` w-full py-7 ${selectedNews ? 'md:w-[60%]' : ''}`}>
              {data?.data?.articles.map((news, index) => (
                <div key={index} onClick={() => handleNewsClick(news)}>
                  <NewsCard news={news} />
                </div>
              ))}
            </div>

            {/* Article preview on the right for larger screens */}
            {selectedNews && (
              <div className="md:w-1/2 hidden md:block ml-4 py-7">
                <div className="p-4 py-8 border bg-white shadow-md rounded-lg h-full">
                  <div className=" flex w-full justify-between items-center mb-4 ">
                    <h2 className="inline-block px-4 py-1 text-sm font-semibold text-red-600 border border-red-600 rounded-full bg-red-100">
                      Preview
                    </h2>

                    <CgCloseR
                      onClick={handleNewsClosed}
                      className=" text-2xl text-gray-600 cursor-pointer hover:text-black hover:shadow-lg"
                    />
                  </div>

                  <h2 className="text-xl font-bold mb-2">
                    {selectedNews.title}
                  </h2>
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
            )}

            {/* Popup for mobile */}
            {selectedNews && (
              <div
                className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center md:hidden"
                onClick={() => setSelectedNews(null)} // Close on click
              >
                <div className="bg-white p-4 rounded-lg w-[90%] max-h-[90%] overflow-y-auto">
                  <h2 className="text-xl font-bold mb-2">
                    {selectedNews.title}
                  </h2>
                  <p className="text-gray-500 mb-2">
                    By {selectedNews.author}, published at{' '}
                    {new Date(selectedNews.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mb-4">{selectedNews.content}</p>
                  <a
                    href={selectedNews.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
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
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
