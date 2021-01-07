import React, { useState } from 'react';
import BlueBox from './LeftL2-BlueBox';
import GreyBox from './RightL2-GreyBox';
import { Row, Col } from 'reactstrap';
import { Input } from 'reactstrap';

export default function SimpleContainment() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Wayne');
  const [color, setColor] = useState('blue');

  const displayData = <h1 style={{ color: color }}>The name is {firstName} {lastName}</h1>;

  const modifyData = (
    <>
      <Input
        value={firstName}
        name='firstName'
        placeholder='First Name'
        onChange={(evt) => setFirstName(evt.target.value)}
        className='mb-4'
      />
      <Input
        value={lastName}
        name='lastName'
        placeholder='Last Name'
        onChange={(evt) => setLastName(evt.target.value)}
        className='mb-4'
      />
      <Input
        value={color}
        name='color'
        placeholder='Color'
        onChange={(evt) => setColor(evt.target.value)}
      />
    </>
  );

  return (
    <Row>
      <Col md='6'>
        <BlueBox>{displayData}</BlueBox>
      </Col>
      <Col md='6'>
        <GreyBox>{modifyData}</GreyBox>
      </Col>
    </Row>
  );
}
