import { cn } from "../../../utils/cn"

interface TextAreaProps {
    placeholder: string,
    title?: string,
    className?: string,
}
function TextArea({
    placeholder,
    title,
    className
}: TextAreaProps) {
    return (
        <div className={cn("flex flex-col w-full gap-2 py-1", className)}>
            {title && <label className={cn({
                'text-h6 text-text font-open-sans font-bold': true,
            })}>{title}*</label>}
            <textarea rows={4} placeholder={placeholder} className={cn({
                'border border-muted rounded-md px-5 py-3 bg-zinc-50 text-second-text placeholder:text-second-text placeholder:font-normal font-montserrat resize-none focus:outline-secondary-4': true,
            })} />
        </div>
    )
}

export default TextArea