import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import '../styles/articleBody.css'
import constants from '../constants/constants'


class ArticleBody extends Component {
  constructor(props) {
    super(props)
    this.createMarkup = this.createMarkup.bind(this)
  }

  createMarkup(content){
    return {__html: content}
  }

  render() {
    // Topic: article: [{}]
    const { article, topic, renderDefault } = this.props
    console.log('hello: ',constants[topic][article])
    return (
      <ArticleContainer>
        {!article && renderDefault && <div>Yolo</div>}
        {article && constants[topic][article].map((constant) => {
          switch(constant.style){
            case 'title':
              return (<Title>{constant.content}</Title>)
            case 'text':
              return (<Text align={constant.align}>{constant.content}</Text>)
            case 'image':
              return (
                <div>
                  <Image src={constant.content} alt={constant.alt} />
                  {constant.caption && <ImageCaption>{constant.caption}</ImageCaption>}
                </div>
              )
            case 'ul-list':
              return (
                <UnorderedList>
                  {constant.content.map(li => {
                    return <li>{li}</li>
                  })}
                </UnorderedList>
              )
            case 'dangerous':
              return (<div className='danger' dangerouslySetInnerHTML={this.createMarkup(constant.content)}/>)
            default:
              return (<div className='danger' dangerouslySetInnerHTML={this.createMarkup(constant.content)}/>)
          }
        })}
      </ArticleContainer>
    )
  }
}

export default ArticleBody

const ArticleContainer = styled.div`
  margin: 25px 0;
  color: white;
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

const Text = styled.p`
  margin: 1rem;
  letter-spacing: -1px;
  font-weight: lighter;
  text-align: ${ props => props.align ? props.align : 'left'};
  font-size: 1.15rem;
`

const Image = styled.img`
  width: 65%;
`

const ImageCaption = styled.p`
  border-bottom: 1px dotted white;
  width: fit-content;
  margin: 0.2rem auto;
  padding: 0 0.3rem;
  font-size: 0.85rem;
`

const UnorderedList = styled.ul`
  margin: 1rem;
  text-align: left;
  list-style: inside;
  letter-spacing: 0.3px;
  font-weight: lighter;
`
