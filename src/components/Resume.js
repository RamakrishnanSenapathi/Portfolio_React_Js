import React, { Fragment } from 'react'
import { AiOutlineDownload } from 'react-icons/ai';
import {  SiHackerrank, SiKaggle } from 'react-icons/si';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import pdf from './Rama_cv.pdf';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Experience & Eduction</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">INTERNSHIP EXPERIENCE</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">XEBIA</h4>
                                <h6 className="blue-label px-2 py-1">Jul 2021 - Apr 2022</h6>
                                <p className="m-0">machine Learning</p>
                                <p>India</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">B.Thech - Artificial Intelligence And Data Science</h4>
                                <h6 className="blue-label px-2 py-1">2020 - 2024</h6>
                                <p className="m-0">KPR Institute Of Engineering And Technology</p>
                                <p>CGPA: 8.00</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                                <h6 className="blue-label px-2 py-1">2020</h6>
                                <p className="m-0">Jai Saradha </p>
                                <p>Grade: 70 %</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href="https://www.kaggle.com/rocky005" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiKaggle className="zoom-on-hover"/>
                            </a> 
                            <a href="https://www.hackerrank.com/20ad036" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiHackerrank className="zoom-on-hover"/>
                            </a> 
                        </h1>
                    </div>
                </div>
                
            </div>
           <Row style={{ justifycontent: "center", position : "relatives"}}>
            <Button
            varient="primary"
            href={pdf}
            terget="_blank"
            style={{ maxwidth: "250px"}}
            >
                <AiOutlineDownload />
                &nbsp;Download CV
            </Button>
            </Row> 
        </div>
    </Fragment>
  )
}

export default Resume