import { cn } from "../../../utils/cn"

interface NavLinkProps {
    href: string
    name: string
    className?: string
}

function NavLink({
    href,
    name,
    className
}: NavLinkProps) {
    return (
        <a href={href} className={
            cn("p-2 rounded-md hover:bg-second-text/10 font-open-sans text-second-text text-sm flex items-center", className)
        }>
            {name}
        </a>
    )
}

export default NavLink