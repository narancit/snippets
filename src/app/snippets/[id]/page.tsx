import { db } from "@/db"
import { notFound } from "next/navigation"
import Link from "next/link"
import PageTitle from "@/components/pageTitle"
import Button from "@/components/Button"
import * as actions from "@/actions"

interface SnippetShowPageProps {
    params: {
        id: string
    }
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
    // fetch snippet based on id
    const id = props.params.id
    const snippet = await db.snippet.findFirst({
        where: { id }
    })

    // check snippet if exist
    if(!snippet) return notFound()

    //
    const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id)

    //
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-4">
                <PageTitle>{snippet.title}</PageTitle>
                <Link 
                href={`${snippet.id}/edit`}
                className="px-4 border rounded text-white bg-slate-800 hover:bg-white hover:text-slate-800 border-slate-800 ml-auto flex items-center"
                >edit</Link>
                <form action={deleteSnippetAction}>
                    <Button>delete</Button>
                </form>
            </div>
            <pre className="bg-slate-300 p-2 px-4 rounded">
                <code>{snippet.code}</code>
            </pre>
        </div>
    )
}