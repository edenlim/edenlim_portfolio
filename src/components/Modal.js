import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import '../styles/modal.css'

class Modal extends Component {

  render(){
    const { modalClicked } = this.props
    console.log(this.props)
    return(
      <ModalContainer>
        <header id="header">
          <LogoDiv className="logo">
            <FontAwesomeIcon icon={icon.faCircleNotch} color="white" size='2x'/>
          </LogoDiv>
          <div className="content">
            <div className="inner">
              <p>Part-time coder</p><p> Full-time dreamer</p>
            </div>
          </div>
          <nav>
            <ul>
              <li><p onClick={() => modalClicked('about')}><LinkText> About</LinkText></p></li>
              <li><p><LinkText>Work</LinkText></p></li>
              <li><p><LinkText>Goals</LinkText></p></li>
              <li><p><LinkText>interests</LinkText></p></li>
              <li><p><LinkText>Contact</LinkText></p></li>
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
  cursor: pointer;
  text-decoration: none;
`

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
