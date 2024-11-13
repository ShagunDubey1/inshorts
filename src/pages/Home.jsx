import { useQuery } from '@tanstack/react-query';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import QueryKeys from '../constants/querykeys';
import getNews from '../services/getNews';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import PreviewCard from '../components/PreviewCard';
import PreviewPopup from '../components/PreviewPopup';

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
                <div className=' cursor-pointer' key={index} onClick={() => handleNewsClick(news)}>
                  <NewsCard news={news} />
                </div>
              ))}
            </div>

            {/* Article preview on the right for larger screens */}
            {selectedNews && (
              <PreviewCard
                selectedNews={selectedNews}
                setSelectedNews={setSelectedNews}
              />
            )}

            {/* Popup for mobile */}
            {selectedNews && (
              <PreviewPopup
                selectedNews={selectedNews}
                setSelectedNews={setSelectedNews}
              />
            )}
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
