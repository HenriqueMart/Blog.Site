import Image from "next/image";
import Link from "next/link";

export function Footer(){
    return(
        <footer className="bg-black border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
                <div className="flex justify-between md:flex-row gap-8 py-8">
                    <Link href="/">
                        <Image 
                            src="/Brand-Logo.svg"
                            alt="Logo do site"
                            width={116}
                            height={32}
                        />
                    </Link>

                    <nav className="flex flex-col md:flex-row item-center justify-center gap-4 text-sm text-white">
                        <Link href="/termo-de-uso" className="hover:text-primary">Termo de uso</Link>
                        <Link href="/politica-de-privacidade" className="hover:text-primary">Política de privacidade</Link>
                        <Link href="/contato" className="hover:text-primary">Contato</Link>
                    </nav>
                </div>

            </div>
        </footer>
    )
}