import { useQuery } from "@tanstack/react-query";
import Header from "../components/Header"
import NewsCard from "../components/NewsCard"
import QueryKeys from "../constants/querykeys";
import getNews from "../services/getNews";
import Footer from "../components/Footer";

function Home() {

  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: [QueryKeys.GET_NEWS],
    queryFn: () => getNews(),
  })

  console.log(data?.data?.articles);

  if(isLoading) return <p>Loading..</p>

  if(isError) return <p>Error</p>

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto py-8">
        {data?.data?.articles.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Home