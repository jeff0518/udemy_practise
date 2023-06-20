import Link from "next/link";

function ClientPage() {
  const clients = [
    { id: "jeff", name: "jeff wang" },
    { id: "tom", name: "tom wu" },
  ];
  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((clients) => (
          <li key={clients.id}>
            <Link href={`/clients/${clients.id}`}>{clients.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
