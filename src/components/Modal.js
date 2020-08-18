import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import '../styles/modal.css'

class Modal extends Component {
  render(){
    return(
      <ModalContainer>
        <header id="header">
          <LogoDiv className="logo">
            <FontAwesomeIcon icon={icon.faCircleNotch} color="white" size='2x'/>
          </LogoDiv>
          <div className="content">
            <div className="inner">
              <p>Part-time coder, Full-time dreamer</p>
            </div>
          </div>
          <nav>
            <ul>
              <li><LinkText href="about">About</LinkText></li>
              <li><LinkText href="work">Work</LinkText></li>
              <li><LinkText href="goals">Goals</LinkText></li>
              <li><LinkText href="interests">interests</LinkText></li>
              <li><LinkText href="contact">Contact</LinkText></li>
							</ul>
          </nav>
        </header>
      </ModalContainer>
    )
  }
}

export default Modal

const ModalContainer = styled.div`
  color: white;
  text-decoration: none;
`

const LinkText = styled.a`
  color: white;
  text-decoration: none;
`

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
