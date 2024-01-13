export default function Button({ children } : { children: React.ReactNode }){
    return (
        <button type="submit" className="px-4 py-2 border rounded text-white bg-slate-800 hover:bg-white hover:text-slate-800 border-slate-800">{children}</button>
    )
}