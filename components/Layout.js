import Navbar from "./Navbar"
import { useEffect } from "react";
import { useRouter } from "next/router";
import nprogress from "nprogress";

const Layout = ({ children, footer = true }) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            nprogress.start()
        }
        const handleRouteChangeComplete = () => {
            nprogress.done();
        };
        const handleRouteChangeError = () => {
            nprogress.done();
        };
        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on("routeChangeComplete", handleRouteChangeComplete)
        router.events.on("routeChangeError", handleRouteChangeError)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
            router.events.off('routeChangeComplete', handleRouteChangeComplete)
            router.events.off('routeChangeError', handleRouteChangeError)
        }
    }, [])
    return (
        <>
            <Navbar />
            <main className="container py-4">
                {children}
            </main>
            {
                footer && (
                    <footer className="bg-dark text-light text-center">
                        <div className="container p-4">
                            <h3>&copy; Alvaro Zalbaveascoba</h3>
                            <p>2018-{new Date().getFullYear()}</p>
                        </div>

                    </footer>
                )
            }
        </>
    )
}

export default Layout;