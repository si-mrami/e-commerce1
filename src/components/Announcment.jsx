import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 50px;
    background-color: #33CC99;
    color: white;
    display: flex;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    position: fixed;
    width: 100%;
    z-index: 99;
`

const Announcment = () => {
  return (
    <Container>
        Super Deal! Free Shopping On Orders Over $50
    </Container>
  )
}

export default Announcment