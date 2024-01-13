'use client'

import type { Snippet } from "@prisma/client"
import { Editor } from "@monaco-editor/react"
import { useState } from "react"
import * as actions from "@/actions"
import Button from "@/components/Button"
import Link from "next/link"

interface SnippetEditFormProps {
    snippet: Snippet
}

export default function SnippetEditForm ({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code)
    const handleEditChange = (value: string = "") => {
        setCode(value)
    }
    //
    const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code)

    return (
        <div className="flex flex-col gap-4">
            Snippet title: {snippet.title}
            <Editor 
                height="40vh"
                theme="vs-dark"
                language="javascript"
                defaultValue={snippet.code}
                options={{ minimap: { enabled: false } }}
                onChange={handleEditChange}
            />
            <form action={editSnippetAction} className="flex gap-4">
                <Button>Save Changes</Button>
                <Link 
                    href={`/snippets/${snippet.id}`}
                    className="px-4 border rounded text-white bg-slate-800 hover:bg-white hover:text-slate-800 border-slate-800 flex items-center"
                >Cancel</Link>
            </form>
        </div>
    )
}