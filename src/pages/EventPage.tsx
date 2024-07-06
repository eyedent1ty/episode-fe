import { useParams } from 'react-router';

export default function EventPage() {
  const params = useParams();

  console.log(params);

  return (
    <main className="py-10">
      <p>Hello from Event Page: #{params.id}</p>
    </main>
  )
}