import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import '../styles/modal.css'
import constants from '../constants/constants'
import ArticleBody from './ArticleBody'


class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: null
    }
    this.selectArticle = this.selectArticle.bind(this)
  }

  selectArticle(article){
    this.setState({article})
  }

  render(){
    const { article } = this.state
    const { exitArticle, topic } = this.props
    const articleKeys = Object.keys(constants[topic].components)
    const renderDefault = articleKeys.length !== 1
    const scrollMore = articleKeys.length > 3
    console.log(articleKeys)
    return(
      <ArticleDiv id='ArticleDiv'>
        <div>
          <CloseArticleCircle onClick={exitArticle}>
            <FontAwesomeIcon icon={icon.faTimes} color="white" size='lg'/>
          </CloseArticleCircle>
        </div>
        <Body>
          <Title>{topic}</Title>
          {renderDefault && <ArticleNav>
            <ArticleUl>
              {articleKeys.length > 1 && articleKeys.map(articleKey => {
                return (<ArticleLi onClick={() => this.selectArticle(articleKey)} key={articleKey}>{articleKey}</ArticleLi>)
              })}
            </ArticleUl>
          </ArticleNav>}
          <ArticleBody
            article={article}
            topic={topic}
            renderDefault={renderDefault}
            scrollMore={scrollMore}
          />
        </Body>
      </ArticleDiv>
    )
  }
}

export default Article

const ArticleDiv = styled.div`
  width: 80vw;
  max-width: 640px;
  padding: 5vh 5vw;
  background-color: rgba(0,0,0,0.5);
  border-radius: 5px;
  margin: 10vh auto;
`

const CloseArticleCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7.5px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  margin-left:auto;

  :hover {
    background-color: rgba(255,255,255,0.1);
  }
`

const Body = styled.div`
  margin-top: 2vh;
`

const Title = styled.h1`
  font-size: 1.3rem;
  color: #ffffff;
  font-weight: 500;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  border-bottom: solid 1px #ffffff;
  width: -moz-max-content;
  width: -webkit-max-content;
  width: -ms-max-content;
  width: max-content;
  padding-bottom: 0.5rem;
  margin: 0 auto 2rem;
`

const ArticleNav = styled.nav`
  margin: 0 auto;
  color: #ffffff;
  border: 1px solid white;
  display: inline-flex;
  border-radius: 4px;
  max-width: 80%;
  overflow: hidden;

`
const ArticleUl = styled.ul`
  display: flex;
  flex-direction: row;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
       display: none;
    }
 `

const ArticleLi = styled.li`
  cursor: pointer;
  display: block;
  min-width: 8rem;
  height: 2.75rem;
  line-height: 2.75rem;
  padding: 0 1.25rem 0 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 0.8rem;
  border-bottom: 0;
  border-right: 0;
  border-left: solid 1px white;


  :hover {
    background-color: rgba(255, 255, 255, 0.411);
  }

  :first-child {
    border-left: 0;
  }
`
