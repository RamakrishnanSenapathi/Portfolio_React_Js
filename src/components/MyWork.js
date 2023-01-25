import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';

function MyWork() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Something I've Built</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/cancer c.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">Breast_Cancer</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/RamakrishnanSenapathi/Breast-cancer.git" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>

                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/heart_img.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div>
                            <h5 className="ff-jose my-1">Heart Disease</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/RamakrishnanSenapathi/Heart-Disease.git" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/frp.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">FRP Bond Strength</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/RamakrishnanSenapathi/FRP-bond-strength.git" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls4" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/salary-pred.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Salary Prediction</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/RamakrishnanSenapathi/salary-pred.git" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/ecom-1.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Shoping Website</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/RamakrishnanSenapathi/shoping-website.git" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls6" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/demo.jpeg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/happy.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/neutral.jpg" className="d-block w-100" height={50} alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="../portfolio-images/suprise.jpg" className="d-block w-100" height={50} alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="prev">
                                <GrPrevious/>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls6" data-bs-slide="next">
                                <GrNext/>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                            <h5 className="ff-jose my-1">Face Expression Detection</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/RamakrishnanSenapathi/Face_Expression_Detection.git" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default MyWork