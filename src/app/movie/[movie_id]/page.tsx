import ContentDetails from "@/screens/contentDetails/ContentDetails";
import { GET_MOVIE_FROM_ID } from "@/utils/const";
import getFetcher from "@/utils/getFetcher";

type Params = {
  params: {
    movie_id: string
  }
}

export default async function Movie({ params: { movie_id } }: Params) {

  const res = await getFetcher(`${GET_MOVIE_FROM_ID}${movie_id}`);
  const movieData = res;

  console.log('--------------------------')
  console.log(movieData)
  console.log('--------------------------')

  return (
    <>
      <ContentDetails movieData={movieData} />
    </>
  );
}
