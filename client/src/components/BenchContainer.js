import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Accordion from './Accordion';
// import Model from './Modal';
import { Row, Col } from "react-bootstrap";

function BenchContainer(props) {
    const [plants, setPlants] = useState(false)
    const [gardeners, setGardeners] = useState(false)
    const [profile, setProfile] = useState(false)
    const [trellis, setTrellis] = useState(false)
    const [plantData, setPlantData] = useState([])
    const [userData, setUserData] = useState([])
    const [ownedPlantData, setOwnedPlantData] = useState([])
<<<<<<< HEAD
=======


>>>>>>> 7efca839e8d9196e84c2007ce3880e418223a6ca


    useEffect(() => {
        var location = document.location.pathname;

        if (location === '/plants') {
            setPlants(true)

            API.getPlants()
                .then(res => {
                    setPlantData(res.data)
                    setUserData([])
                    setOwnedPlantData([])
                })
                .catch(err => console.log(err));

            // API call depending on the page, set results into hook, then pass hook into {Accordion}
        }
        if (location === '/gardeners') {
            setGardeners(true)

            API.getUsers()
                .then(res => {
                    setPlantData([])
                    setUserData(res.data)
                    setOwnedPlantData([])
                })
                .catch(err => console.log(err));
        }
        if (location === '/profile') {
            setProfile(true)

            API.getOwnedPlants()
                .then(res => {

                    setOwnedPlantData(res.data)
                    setUserData([])
                    setPlantData([])
                })
                .catch(err => console.log(err));

        }
        if (location === '/trellis') {
            setTrellis(true)

        }

    }, [])
console.log(gardenerData)
    return (
        <>
            <main className="container-fluid p-0">
                <div className="potting navbar justify-content-around">
                    <span className="bench">{plants ? `The Nursery` : ``}
                        {gardeners ? `The Potting Bench` : ``}
                        {profile ? `${props.user.name}'s Potting Bench` : ``}
                        {trellis ? `The Trellis` : ``}</span>
                </div>
                <Row>
                    <Col xs={12} md={4}>
                        <Accordion
                            plants={plantData}
                            users={userData}
                            gardeners={ownedPlantData}
                        />
                    </Col>
                    <Col xs={12} md={8} className="trelis">

                    </Col>
                </Row>


            </main>
        </>
    )
}

export default BenchContainer;