interface PageTitleProps {
    children : React.ReactNode
}

export default function PageTitle({ children } : PageTitleProps) {
    return <h1 className="text-3xl font-bold">{children}</h1>
}