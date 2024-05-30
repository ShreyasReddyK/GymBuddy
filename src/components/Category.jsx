import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import React from 'react'

function Category() {
  return (
    <Nlist>
        <NavLink to={'muscles/chest'}>
            <img src="src/assets/chest_icon.png" alt="chest icon" />
        </NavLink>
        <NavLink to={'muscles/shoulders'}>
            <img src="src/assets/shoulders_icon.png" alt="shoulders icon" />
        </NavLink>
        <NavLink to={'muscles/triceps'}>
            <img src="src/assets/triceps_icon.png" alt="triceps icon" />
        </NavLink>
        <NavLink to={'muscles/biceps'}>
            <img src="src/assets/biceps_icon.png" alt="biceps icon" />
        </NavLink>
        <NavLink to={'muscles/legs'}>
            <img src="src/assets/legs_icon.png" alt="legs icon" />
        </NavLink>
        <NavLink to={'muscles/back'}>
            <img src="src/assets/back_icon.png" alt="back icon" />
        </NavLink>
        <NavLink to={'muscles/abs'}>
            <img src="src/assets/abs_icon.png" alt="abs icon" />
        </NavLink>

    </Nlist>
  )
}

const Nlist = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    transform: scale(0.5,0.45);
    

`

export default Category

