import { useQuery } from "@tanstack/react-query";
import Header from "../components/Header"
import NewsCard from "../components/NewsCard"
import QueryKeys from "../constants/querykeys";
import getNews from "../services/getNews";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");

  const { isLoading, isError, data, refetch, error } = useQuery({
    queryKey: [QueryKeys.GET_NEWS],
    queryFn: () => getNews({category}),
  })

  console.log(category)

  useEffect(() => {
    refetch()
  }, [category, refetch])

  if(isLoading) return <p>Loading..</p>

  if(isError) return <p>Error</p>

  return (
    <div className=" flex min-h-screen bg-gray-100">
      {/* <Header /> */}
      <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} setCategory={setCategory}/>
      <div className="container mx-auto py-8">
        {data?.data?.articles.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home