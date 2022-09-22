import React from 'react';

function About ({
    image="https://via.placeholder.com/215",alt,about}){
    return(
        <aside>
            <img src={image} alt="blog logo"/>
            <>
            <p>{about}</p>
            {/* <p>{about}</p> */}
            </>
        </aside>
    )
}

export default About