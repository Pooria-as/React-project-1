import React from 'react'
import styled from 'styled-components'
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
        </Container>
    )
}



const Container = styled.div`
position:'relative';

`
export default MainSlider