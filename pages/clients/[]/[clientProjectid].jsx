import { useRouter } from "next/router";

function SelectedClientProjectsPage() {
  const router = useRouter()
  return (
    <div>
      <h1>The Project Page for a Specific Project of a Selected Client</h1>
    </div>
  );
}

export default SelectedClientProjectsPage;
