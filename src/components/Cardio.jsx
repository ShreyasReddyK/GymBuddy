import React, { useEffect, useState } from 'react'
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import styled from 'styled-components'

function Cardio() {
    const [cardio,setCardio] = useState([])

    useEffect(()=>{
        getCardio()
    },[])

    const getCardio = async()=>{

        const check = localStorage.getItem("cardio")

        if(check) {
            setCardio(JSON.parse(check))
        }
        else {
            const url = 'https://exercisedb.p.rapidapi.com/exercises/target/cardiovascular%20system?limit=10';
            let options = {method: 'GET',
            params: {limit: '10'},
            headers: {
              'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }}

              try {
                const response = await fetch(url, options);
                const data = await response();
                localStorage.setItem("cardio",JSON.stringify(data))
                setCardio(data)
                console.log(data)
            } catch (error) {
                console.error(error);
            }

        }
   
    };
           
  return (
    <div>
        <Wrapper>
            <h3>Get warmed up with some cardio</h3>
            <Splide options={{
                perPage :5,
                pagination: false,
                arrows:false,
                drag: 'free',
                gap: '3rem',
            }}>
                {cardio.map((exercise,index)=>{
                    return(
                        <SplideSlide key={index}>
                        <Card key={index}>
                            <p>{exercise.name}</p>
                            <img src={exercise.gifUrl} alt="cardio image from api" />
                        </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`
const Card = styled.div`
    position: relative;
    border-radius: 2rem;
    overflow: hidden;

    img{
        border-radius: 2rem;
        top: 0px;
        position: relative;
        width: 100%;
        height:100%;
    }

    p{  
        position: absolute;
        z-index: 10;
        left: 0%;
        bottom: 58%;
        transfrom: translate(-50%,0%);
        color: black;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        dipslay: flex;
        justify-content: center;
        allign-items:center;
    }
`


export default Cardio