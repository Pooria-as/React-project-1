import React from 'react'
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';
const Highlight = () => {
    return (<div className="center_wrapper">
        <h2 style={{
            "textAlign":"center",
            "font-size":"4rem"
            

        }}>Highlights</h2>
        <div className="highlight_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="discount_wrapper">

            <Roll left
            >
                <div className="discount_porcentage">
                    <span> 30%</span>
                    <span>OFF</span>
                </div>
            </Roll>

            <Slide right>
                <div className="discount_description">
                    <h3>Purchase tickets before 20th JUNE</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                    {/* <MyButton
                        text="Purchase tickets"
                        bck="#ffa800"
                        color="#ffffff"
                        link="http://google.com"
                    /> */}

                </div>
            </Slide>



        </div>
    </div>

    )
}


export default Highlight