import React, { useEffect, useState } from 'react'
import {Splide, SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import styled from 'styled-components' 
import {Link , useParams} from "react-router-dom"

function Muscles() {
    const [muscles,setMuscles] = useState([])

    useEffect(()=>{
        getMuscles(params.type)
    },[params.type])

    const getMuscles = async(mtype)=>{

        const check = localStorage.getItem(mtype)

        if(check) {
            setMuscles(JSON.parse(check))
        }
        else {
            const url = 'https://exercisedb.p.rapidapi.com/exercises/target/'+mtype;
            let options = {method: 'GET',
            params: {limit: '9'},
            headers: {
              'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }}

              try {
                const response = await fetch(url, options);
                const data = await response();
                localStorage.setItem(mtype,JSON.stringify(data))
                setMuscles(data)
                console.log(data)
            } catch (error) {
                console.error(error);
            }

        }
   
    };
           
  return (
    <div>
        <Wrapper>
            <h3>Exercises to target a specific group:</h3>
            <Grid options={{
                perPage :5,
                pagination: false,
                arrows:false,
                drag: 'free',
                gap: '3rem',
            }}>
                {muscles.map((exercise,index)=>{
                    return(
                        <Card key={index}>
                            <p>{exercise.name}</p>
                            <img src={exercise.gifUrl} alt="exercise gif from api" />
                        </Card>
                    )
                })}
            </Grid>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`
const Grid = styled.div`
    display: grid;
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


export default Muscles