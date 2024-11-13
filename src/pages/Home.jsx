import { useQuery } from "@tanstack/react-query";
import Header from "../components/Header"
import NewsCard from "../components/NewsCard"
import QueryKeys from "../constants/querykeys";
import getNews from "../services/getNews";

const newsData = [
  {
    title: '4-0 win against Aus in BGT is a distant dream for India: Manjrekar',
    author: 'Saurav Joshi',
    time: '06:24 pm on Wednesday 13 November, 2024',
    description:
      'Ex-India cricketer Sanjay Manjrekar opined defeating Australia 4-0 in the upcoming Border-Gavaskar Trophy is a distant dream for Team India...',
    source: 'Sportskeeda',
    link: 'https://www.sportskeeda.com',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'MS Dhoni, wife Sakshi cast vote in Ranchi for J\'khand Assembly polls',
    author: 'Saurav Joshi',
    time: '06:23 pm on Wednesday 13 November, 2024',
    description:
      'Former Team India captain MS Dhoni and his wife Sakshi Dhoni arrived at a polling station in Ranchi to cast their votes...',
    source: 'LatestLY',
    link: 'https://www.latestly.com',
    image: 'https://via.placeholder.com/150',
  },
];

function Home() {

  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: [QueryKeys.GET_NEWS],
    queryFn: () => getNews(),
  })

  console.log(data?.data?.articles);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto py-8">
        {data?.data?.articles.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </div>
  )
}

export default Home