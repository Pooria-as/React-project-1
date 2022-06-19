import React from 'react'
import styled from 'styled-components'
import CountDown from './CountDown'
import Slides from './Slides'

const MainSlider = () => {
    return (
        <Container>
            <Slides />
            <div className='artist_name'>
                <div className='wrapper'>
                    Ariana
                    Grande
                </div>
            </div>
            <CountDown />
        </Container>
    )
}



const Container = styled.div`
position:'relative';

`
export default MainSlider