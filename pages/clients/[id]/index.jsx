import { useRouter } from "next/router";
function ClientProjectsPage() {
  const router = useRouter()

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientProjectid]",
      query: { id: "jeff", clientProjectid: "projecta" },
    });
  }
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>A</button>
    </div>
  );
}

export default ClientProjectsPage;
