import { Link } from "react-router-dom"

export default function Button({ children, disabled, to,type, onClick }) {
    const base = "bg-yellow-400 uppercase text-sm font-semibold text-stone-800 py-3 px-4 inline-block tracking-widest rounded-full hover:bg-yellow-300 transition-colors duration-500 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed sm:px-6 sm:py-4";
     
    const styles = {
        primary: base + 'px-4 py-3 md:px-6 md:py-4',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        round: base + ' px-4 py-1 md:px-3.5 md:py-2 text-sm ',
        secondary: "border-2 text-sm border-stone-300 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-widest rounded-full hover:bg-stone-300 transition-colors duration-500 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed sm:px-6 sm:py-2.5 px-4 md:px-6 md:py-3.5"

    }

    if (to) return <Link to={to} className={styles[type]}>{children}</Link>
    
    if (onClick)
        return (
            <button disabled={disabled} onClick={onClick} className={styles[type]}>
                {children}
            </button>
        );
    
    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )
}
