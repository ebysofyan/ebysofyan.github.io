import React from 'react'
import profile from '../../assets/profile.jpg'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Card from '../components/Card'

const HomePage = () => {
    const buttonSyle = {
        position: "absolute",
        zIndex: 999,
        textDecoration: "none",
        top: "4%",
        right: "4%"
    }
    return (
            <div className="m-container">
            <Link to="" title="Blog" className="button bg-primary button-shadow right" style={buttonSyle}>My Blog</Link>
                <Row style={{ marginTop: "4rem" }}>
                    <Col md={3} sm={12}>
                        <Card line={false}>
                            <div className="d-flex pr-container">
                                <img src={profile} className="pr-photo" alt="My profile" width="199px" height="199px" style={{ marginTop: "-7rem" }} />
                                <div className="pr-caption-container">
                                    <p className="pr-name mb-1"><b>Eby Sofyan Fadly</b></p>
                                    <p className="pr-caption" style={{ textAlign: "center" }}>Freelance Fullstack Software Engineer</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={9} sm={12} style={{textAlign: "justify"}} >
                        <Card line={false}>
                            <h4 className="text-primary">Summary</h4>
                            <p className="text-secondary">
                                Software engineer with almost 3 years experience in software
                                development including coding, integration, and deployment. Already
                                working as freelance software engineer with expertise in Backend and
                                Android Software Development. Currently, active as python and android
                                trainer in one of the course institute at Mataram, West Nusa Tenggara.
                            </p>
                        </Card>
                    </Col>
                </Row>
            </div>
    )
}

export default HomePage