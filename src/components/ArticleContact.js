import React from 'react';
import constants from '../constants/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import * as iconBrand from "@fortawesome/free-brands-svg-icons"
import styled from 'styled-components';


const ArticleContact = () => {
  return (
    <ArticleContainer>
      <Title>Contact Me!</Title>

      {constants.contact.map(platform => (
        <a href={platform.href} target='_blank' rel="noopener noreferrer">
          <Circle>
          {platform.icon === 'icon' && (
            <FontAwesomeIcon icon={icon[platform.name]} color="white" size='lg' />
          )}
          {platform.icon === 'iconBrand' && (
            <FontAwesomeIcon icon={iconBrand[platform.name]} color="white" size='lg' />
          )}
          </Circle>
        </a>
      ))}
    </ArticleContainer>
  )
}

export default ArticleContact

const ArticleContainer = styled.div`
  width: 40%;
  margin: 25px auto;
  color: white;
  display: flex;
  justify-content: space-around;
`
const Circle = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  padding: 7.5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
transition: background-color 0.3s ease;
  :hover {
    background-color: rgba(255,255,255,0.1)
  }
`

const Title = styled.h1`
  border-bottom: 1px solid white;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  padding: 0 1rem 0.7rem;
  margin: 2rem auto;
  letter-spacing: 0.2rem;
`
