export default async function getFetcher(requestUrl: string) {
  const res = await fetch(`${requestUrl}`, { next: { revalidate: 60 } })
  // This will activate the closest `error.js` Error Boundary
  if (!res.ok) return undefined

  return res.json()
}
