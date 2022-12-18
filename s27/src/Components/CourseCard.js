import {useState, useEffect} from 'react';
import {Container, Row, Col, Card, button} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function CourseCard({courseProp}){
    //courseProp - is an object 

    //destructure an object
    const {name, desscription, price} = courseProp
    
    /*
        Syntax: 
        const [getter,setter] = useState(initialGetterValue)
    */

    const [count,setCount] = useState(0); //this is the initial value for the number of seats in the booking system.
    const [seats,setSeats] = useState(0); //this is the inital value on the number of seats left

    const [isDisabled, setIsDisabled] = useState(false);

    function enroll() {
        if (seats > 0) {
            setCount(count + 1);
            console.log('Enrollees: ' + count)

            setSeats(seats)
            console.log('Seats: ' + seats)
        } else {
            alert ("No more seats available")
        }
    }

    // usEffect syntax:
    // useEffect( cb(),[])

    // consequence when no more seats left

    useEffect( () => {
        if (seats === 0) {
            setIsDisabled(true)
        }

    }, [seats])

    return (
        <Container fluid className="mb-4">
            <Row className='justify-content-center'>
                <Col xs={10} md={8}>
                    
                </Col>
            </Row>
    )
}