//Rotas Dinâmicas

import { useRouter } from "next/router";

export default function SlugPage() {
    const router = useRouter();
    
    return (
        <div>
            <h2>Blog {router.query.slug}</h2>
        </div>
    )
}