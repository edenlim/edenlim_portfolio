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
    const { article, topic, renderDefault, scrollMore } = this.props
    const articleComponent = constants[topic].components[article]
    console.log('hello: ',constants[topic][article])
    return (
      <ArticleContainer>
        {scrollMore && <Default style={{fontStyle: 'italic', fontSize: '0.9rem'}}>The navigation bar on this page can be scrolled!</Default>}
        {!article && renderDefault && (
          <Default>{constants[topic].default}</Default>
        )}
        {article && articleComponent.map((constant) => {
          switch(constant.style.toLowerCase()){
            case 'title':
              return (<Title>{constant.content}</Title>)
            case 'text':
              return (<Text align={constant.align}>{constant.content}</Text>)
            case 'caption':
              return (<ImageCaption style={{borderBottom: 'none', fontStyle: 'italic'}}>{constant.content}</ImageCaption>)
            case 'image':
              return (
                <div>
                  <Image src={constant.content} alt={constant.alt} layout={constant.layout} />
                  {constant.caption && <ImageCaption>{constant.caption}</ImageCaption>}
                </div>
              )
            case 'ul-list':
              return (
                <UnorderedList>
                  {constant.content.map(li => {
                    return <li style={{margin: '10px 0'}}>{li}</li>
                  })}
                </UnorderedList>
              )
            case 'dangerous':
              return (<div className='danger' dangerouslySetInnerHTML={this.createMarkup(constant.content)}/>)
            case 'break':
              return (<Break/>)
            default:
              return (<div className='danger' dangerouslySetInnerHTML={this.createMarkup(constant.content)}/>)
          }
        })}
        {article && <BackUp onClick={() => {
          document.getElementById('Home').scrollIntoView({behavior: 'smooth'})
        }}>
          Back up
        </BackUp>}
      </ArticleContainer>
    )
  }
}

export default ArticleBody

const ArticleContainer = styled.div`
  margin: 25px 0;
  color: white;
`

const Break = styled.div`
  width: 100%;
  margin: 2rem 0;
  border-top: 1px dotted white;
`

const Default = styled.p`
  margin: 1rem;
  letter-spacing: -1px;
  font-weight: lighter;
  font-size: 1.15rem;
`

const BackUp = styled(Default)`
  font-size: 0.9rem;
  font-style: italic;
  :hover{
    cursor: pointer;
    color: #0645AD;
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

const Text = styled(Default)`
  text-align: ${ props => props.align ? props.align : 'left'};
`

const Image = styled.img`
  width: ${ props => props.layout === 'vertical' ? '40%' : '65%'};
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
