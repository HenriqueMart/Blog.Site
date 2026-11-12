import Image from "next/image";
import Link from "next/link";
import Logo from "../../logo/logo";

export function Footer(){
    return(
        <footer className="bg-gray-500">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
                <div className="flex justify-between md:flex-row gap-8 py-8">
                    <Logo/>

                    <nav className="flex flex-col md:flex-row item-center justify-center gap-4 text-sm text-blue-100">
                        <Link href="/termo-de-uso" className="hover:text-blue-200">Termo de uso</Link>
                        <Link href="/politica-de-privacidade" className="hover:text-blue-200">Política de privacidade</Link>
                        <Link href="/contato" className="hover:text-blue-200">Contato</Link>
                    </nav>
                </div>

            </div>
        </footer>
    )
}