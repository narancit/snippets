import { db } from "@/db"
import { notFound } from "next/navigation"
import SnippetEditForm from "@/components/snippetEditForm"
import PageTitle from "@/components/pageTitle"

interface SnippetEditPageProps {
    params : {
        id: string
    }
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
    const id = props.params.id

    // fetch data
    const snippet = await db.snippet.findFirst({
        where : { id }
    })

    // data not found
    if(!snippet) return notFound()

    // update data


    // show code editor

    return (
        <div className="flex flex-col gap-4">
            <PageTitle>Edit Snippet!</PageTitle>
            <SnippetEditForm snippet={snippet} />
        </div>
    )
}