import Navbar from "../../ui/organisms/navbar"

function MainTemplate({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full h-dvh bg-light-background">
            <Navbar />
            <main className="w-full">
                {children}
            </main>
        </div>
    )
}

export default MainTemplate