import { cn } from "../../../utils/cn"

interface InputProps {
    placeholder: string,
    title?: string,
    clasName?: string,
}
function Input({
    placeholder,
    title,
    clasName
}: InputProps) {
    return (
        <div className="flex flex-col w-full gap-2 py-1">
            {title && <label className={cn({
                'text-h6 text-text font-open-sans font-bold': true,
            }, clasName)}>{title}*</label>}
            <input placeholder={placeholder} className={cn({
                'border border-muted rounded-md px-5 py-3 bg-zinc-50 text-second-text placeholder:text-second-text placeholder:font-normal font-montserrat': true,
            })} />
        </div>
    )
}

export default Input