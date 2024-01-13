"use client"

import PageTitle from "@/components/pageTitle"
import * as actions from "@/actions"
import { useFormState } from "react-dom"

export default function SnippetCreatePage() {
    const [formState, action] = useFormState(actions.createSnippet, { message:"" });

    return (
        <form action={action} className="flex flex-col gap-4">
            <PageTitle>Create a Snippet!</PageTitle>
            {/* an error message */}
            {formState.message ? (
                <div className="px-4 py-1 bg-red-200 border border-red-400 w-fit rounded">Error: {formState.message}</div>
            ):null}

            <label htmlFor="title">Title</label>
            <input 
                type="text" 
                name="title" 
                id="title"
                className="border rounded p-2" 
            />

            <label htmlFor="code">Code</label>
            <textarea  
                name="code" 
                id="code"
                className="border rounded p-2 h-28" 
            />

            <div>
                <button type="submit" className="px-4 py-2 border rounded text-white bg-slate-800 hover:bg-white hover:text-slate-800 border-slate-800">Create Snippet</button>
            </div>
        </form>
    )
}