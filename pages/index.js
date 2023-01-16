import Link from "next/link";
import Layout from "../components/Layout";
import { skills, porjects, webs } from "../profile"

const Index = () => {

    return (
        <Layout>
            {/* Header */}
            <header className="row">
                <div className="col-md-12">
                    <div className="card card-body ">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="alvaroZ.jpeg" className="img-fluid"></img>
                            </div>
                            <div className="col-md-8">
                                <h1>Alvaro Zalbaveascoba</h1>
                                <h3>FullStack Developer</h3>
                                <p>Soy un desarrollador Full Stack con experiencia en el uso del stack PERN (PostgreSQL, Express, React y Node.js) para el desarrollo de aplicaciones web y móviles escalables y de alta disponibilidad. Me especializo en JavaScript y tengo habilidades avanzadas en el uso de React para el desarrollo de interfaces de usuario y en el uso de Node.js y Express para el desarrollo del lado del servidor. También tengo experiencia en el uso de PostgreSQL para el manejo de bases de datos y en el diseño de esquemas de bases de datos. Me gusta trabajar en proyectos desafiantes y estoy constantemente buscando aprender nuevas habilidades y tecnologías relacionadas con PERN.</p>
                                <Link href="../Alvaro_Zalbaveascoba_CV.pdf">
                                    <a id="cv">Ver CV</a>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </header> {/* Portfolio */}
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body ">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="text-center text-light">Portfolio</h2>
                            </div>
                            {
                                webs.map(({ name, description, image, repo }, i) => (
                                    <div className="col-md-4 p-2" key={i}>
                                        <div className="card">
                                            <Link href={repo}>
                                                <div className="overflow">
                                                    <img src={`/${image}`} className="card-img-top " />
                                                </div>
                                            </Link>

                                            <h3>{name}</h3>
                                            <p>{description}</p>

                                            <Link href={repo}>
                                                <a>Ver mas</a>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {/*  <div className="text-center mt-4">
                            <Link href="/">
                                <a className="btn btn-outline-light">Mas</a>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Second Section */}
            <div className="row py-2">
                <div className="col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2>Skills</h2>
                            {
                                skills.map(({ skill }, i) => (
                                    <div key={i}>
                                        <h6>{skill}</h6>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card ">
                        <div className="card-body">
                            <h2>Proyectos</h2>
                            <ul>
                                {
                                    porjects.map(({ title, description, from, to }, i) => (
                                        <li key={i}>
                                            <h3>{title}</h3>
                                            <h5>{from}-{to}</h5>
                                            <p>{description}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </Layout>
    )
}

export default Index;