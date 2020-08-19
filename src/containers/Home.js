import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal.js'
import Article from '../components/Article.js'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'modal',
      topic: false
    }
    this.modalClicked = this.modalClicked.bind(this)
    this.exitArticle = this.exitArticle.bind(this)
  }

  modalClicked(topic) {
    this.setState({
      view: 'article',
      topic
    })
  }

  exitArticle() {
    this.setState({
      view: 'modal',
      topic: false
    })
  }

  render() {
    const { view, topic } = this.state
    console.log(this.state.view)
    return (
      <div>
        {view==='modal' && <Modal
          modalClicked={this.modalClicked}
        />}
        {view==='article' && <Article
          exitArticle={this.exitArticle}
          topic={topic}
        />}
      </div>
    )
  }
}

export default Home

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
