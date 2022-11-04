import Link from "next/link";
import Layout from "../components/Layout";

const portfolio404 = () => {
    return (
        <Layout>
            <div className="text-center">
                <h2>404</h2>
                <p>Esta pagina no existe!Por favor vuelve al <Link href="/"><a>inicio</a></Link></p>
            </div>
        </Layout>
    )
}

export default portfolio404;