import { cn } from "../../../utils/cn"

interface InputProps {
    clasName?: string,
    id: string,
    name: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
    title?: string,
    value: string,
    error?: string,
}
function Input({
    clasName,
    id,
    name,
    onChange,
    placeholder,
    title,
    value,
    error
}: InputProps) {
    return (
        <div className="flex flex-col w-full gap-2 py-1">
            {title && <label className={cn({
                'text-h6 text-text font-open-sans font-bold': true,
            }, clasName)}>{title}*</label>}
            <input placeholder={placeholder} className={cn({
                'border border-muted rounded-md px-5 py-3 bg-zinc-50 text-second-text placeholder:text-second-text placeholder:font-normal font-montserrat focus:outline-secondary-4 ': true,
            })}
                id={id}
                name={name}
                onChange={onChange}
                value={value}
            />
            {error && <p className="py-0 -mt-1 text-xs font-normal text-red-600 font-open-sans">{error}</p>}
        </div>
    )
}

export default Input