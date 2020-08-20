import logo from '../img/bg.jpg'

// title for h1
// text for p
// image for img
// ul-list for ul
// dangerous for dangerouslySetInnerHTML
const constants = {
  about: {
    'Who am I?': [{
      content: 'My name is',
      style: 'title'
    },{
      content: 'I code because its cool',
      style: 'text'
    },{
      content: logo,
      style: 'image',
      alt: 'test pic',
      caption: 'test caption'
    },{
      content: 'I code because its cool',
      style: 'text',
      align: 'center'
    },{
      content: ['list 1', 'list 2', 'list 3'],
      style: 'ul-list'
      }, {
        content: 'I code because its cool',
        style: 'text',
        align: 'right'
      },{
      content: '<a>Test</a>',
      style: 'dangerous'
    }],
    'Testing': 'hello',
    'Wahhhh' : 'hello',
    'Testinga': 'hello',
    'Wahhhha': 'hello',
    'Testings': 'hello',
    'Wahhhhs': 'hello'
  },
  work: {
    'Work': 'hi'
  },
  goals: {
    'Work': 'hi'
  },
  interests: {
    'Work': 'hi'
  },
  contact: {
    'Work': 'hi'
  }
}

export default constants
