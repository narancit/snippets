import PageTitle from "@/components/pageTitle";
import { db } from "@/db"
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const snippetsList = snippets.map(snippet => {
    return <li key={snippet.id} className="flex justify-between border p-4 rounded">
      {snippet.title}
      <Link 
        href={`/snippets/${snippet.id}`}
        className="px-4 border rounded text-white bg-slate-800 hover:bg-white hover:text-slate-800 border-slate-800"
      >view</Link>
    </li>
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <PageTitle>Home page</PageTitle>
        <Link 
          href="/snippets/new"
          className="px-4 border rounded text-white bg-slate-800 hover:bg-white hover:text-slate-800 border-slate-800 flex items-center justify-center"
        >New Snippet!</Link>
      </div>
      <ul className="flex flex-col gap-4">
        {snippetsList}
      </ul>
    </div>
  )
}
