import React from 'react'

function Navbar({category, setCategory}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>ReactNews</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className={"nav-link " + (category === "general" ? "active" : "")} onClick={()=>setCategory("general")}>General</a>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link " + (category === "technology" ? "active" : "")} onClick={()=>setCategory("technology")}>Technology</a>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link " + (category === "business" ? "active" : "")} onClick={()=>setCategory("business")}>Business</a>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link " + (category === "health" ? "active" : "")} onClick={()=>setCategory("health")}>Health</a>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link " + (category === "sports" ? "active" : "")} onClick={()=>setCategory("sports")}>Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className={"nav-link " + (category === "entertainment" ? "active" : "")} onClick={()=>setCategory("entertainment")}>Entertainment</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar