export default async function getFetcher(requestUrl: string) {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTgwNzA5NjQ5MDliY2MwOWFlYzIxNTQ5YjkwMjM3MyIsInN1YiI6IjVkMjU5OTllNjlkMjgwNTRiNzAwZjNjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ehdA3yobt17DIa-o7eNKH-gc4gZ-Y-fmyGVaI3rdgTo'
    }
  };


  const res = await fetch(`${requestUrl}`, options)
  // This will activate the closest `error.js` Error Boundary
  if (!res.ok) return undefined

  return res.json()
}
