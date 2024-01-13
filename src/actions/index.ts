'use server'

import { db } from "@/db"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function createSnippet(
    formState: { message:string }, 
    formData: FormData
) {
    try {
        const title = formData.get("title")
        const code = formData.get("code")
        // check title
        if(typeof title !== "string" || title.length < 3) return { message:"title must be longer" }
        // check code
        if(typeof code !== "string" || code.length < 10) return { message:"code must be longer" }
        // create snippet record in db
        await db.snippet.create({
            data: {
                title,
                code
            }
        })
    } catch (err: unknown) {
        if(err instanceof Error) {
            return { message:err.message }
        } else {
            return { message:"something went wrong.." }
        }
    }
    revalidatePath("/")
    // redirect page
    redirect("/")
}

export async function editSnippet(id: string, code: string) {
    await db.snippet.update({
        where: { id },
        data: { code }
    })
    revalidatePath(`/snippets/${id}`)
    // redirect page
    redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: string) {
    await db.snippet.delete({
        where: { id }
    })
    revalidatePath("/")
    // redirect page
    redirect("/")
}