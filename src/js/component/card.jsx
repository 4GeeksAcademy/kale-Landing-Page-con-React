import React from "react";

const Card = () => {

    return (
            <div className="container mt-5 px-0" style={{ marginBottom: '40px' }}>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
                    <div className="col">
                        <div className="card h-100 text-center">
                            <img src="https://picsum.photos/seed/image101/500/325" className="card-img-top" alt="..." />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="mt-auto">
                                    <hr />  
                                    <button type="button" className="btn btn-primary">Find Out More!</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 text-center">
                            <img src="https://picsum.photos/seed/image7/500/325" className="card-img-top" alt="..." />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="mt-auto">
                                    <hr />  
                                    <button type="button" className="btn btn-primary">Find Out More!</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 text-center">
                            <img src="https://picsum.photos/seed/image15/500/325" className="card-img-top" alt="..." />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <div className="mt-auto">
                                    <hr /> 
                                    <button type="button" className="btn btn-primary">Find Out More!</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100 text-center">
                            <img src="https://picsum.photos/seed/image10/500/325" className="card-img-top" alt="..." />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="mt-auto">
                                    <hr /> 
                                    <button type="button" className="btn btn-primary">Find Out More!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card;