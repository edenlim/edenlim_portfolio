import logo from '../img/bg.jpg'
import eden from '../img/eden.jpg'
import interest from '../img/interests.jpg'
import bptmc1 from '../img/bptmc1.jpeg'
// title for h1
// text for p
// image for img
// ul-list for ul
// dangerous for dangerouslySetInnerHTML
const constants = {
  about: {
    default: 'Click on one of the buttons to find out more!',
    components: {
      'Who am I?': [{
        content: 'Who I am',
        style: 'title'
      },{
        content: eden,
        style: 'image',
        alt: 'Picture of how I look',
        caption: 'My name is Eden.',
        layout: 'vertical'
      },{
        content: 'I am a coder. A writer. A story-teller. A son and a brother. I am someone who stands for equality and has deep concern for the environment and all animals. I am many things.',
        style: 'text',
        align: 'left'
      },{
        content: 'I believe that living without learning is the cruelest form of torture, and my insatiable curiousity is what fuels me. I am a passionate truth-seeker, who lives and thrives on challenges, because I believe that opportunities are seized, and not given.',
        style: 'text',
        align: 'left'
      },{
        content: 'But most importantly, I am an inquisitive dreamer of the world, who is not afraid to chase after his own dreams.',
        style: 'text',
        align: 'left'
      },{
        style: 'break'
      },{
        content: 'My journey began like all others in my country. When the time came for me to persue a tertiary education, I opted for a diploma in Environmental Science and Civil Engineering. It was my passion- I resonated deeply with everything environmentally related.',
        style: 'text'
      },{
        content: 'During my education, I started attending Toastmasters chapters as my co-curricular activity, and I soon found myself deeply involved with the toastmasters activity. It was also during my school life where I had my coding experience: I picked up an online course on python basics, and had a module in excel VBA. I started picking up coding as a hobby and my passion in writing books and playing games led me to try creating games using Game Maker Studio, although I didn\'t go very far with it.',
        style: 'text'
      },{
        content: 'I soon graduated without much difficulties and upon graduation I was enlisted to serve my nation. For a good one year, I was restricted as a servicemen, but as luck had it, I was drafted into the Navy, and my commander had an idea of creating a mobile application.',
        style: 'text'
      },{
        content: 'His idea became my catalyst, and I volunteered as the sole developer of the project. I taught myself how to code, and found it to be an exciting venture. I soon took coding seriously, and upon finishing my service to the nation, I enrolled myself into a Software Engineering bootcamp at General Assembly, and upon graduation, I found work at a Vegan startup company- Abillionveg.',
        style: 'text'
      }],
      'Interest': [{
        content: 'Little things that drives me',
        style: 'title'
      },{
        content: interest,
        style: 'image',
        alt: 'Man looking at stars',
        layout: 'horizontal'
      },{
        content: 'Have you heard ever heard of hobbies? You really should try some of them if you haven\'t.',
        style: 'caption'
      },{
        content: 'Everybody needs interests. It\'s a beautiful little thing that gives flavour to life. Without it, I very much suspect that life would be bland and monotonous.',
        style: 'text'
      },{
        content: 'Much like flavours, it is my humble believe that one should have multiple interests and hobbies to truly explore the wonder and diverse experience of living.',
        style: 'text'
      },{
        content: 'My hobbies and interest reflects my personality very well. I am a man whom is intrigued by experiences, and I have a creative outlet that is constantly overflowing. My interests are often related to creation, or experience.',
        style: 'text'
      },{
        content: [
          'Learning - Now I know that this is a controversial pick, but Socrates spoke wisely: "The unexamined life is not worth living". I believe that the love of wisdom is the purest pursuit in live, and to me, it is my raison d\'être.',
          'Gaming - Allow to dispell your perception that I am a dull person. Gaming has always been and always will be a large part of my life. My favourite games are often ones that are inspired, thought provoking, story-rich, or educational.',
          'Writing - Language has given us the power of creation. It is what separates us from animals, and is the foundation of society. It allows us to convey ideas that continues to persists long after we are gone. This beauty of language is why I enjoy writing stories as a hobby.',
          'Coding - If math is the language of the universe, and language is the power of creation, then to me, coding must be the power of gods. To me, coding is a truly amazing thing. Everything from A.I, automation, data storage... We owe much of our lives to coding. This fascination with the endless possibility with coding is what fascinates me.',
          'Cooking - I hate the dishes, but I love the cooking. What\'s the difference between coding, writing and cooking? It\'s the same: you take a set of ingredients, put in the right order, and out comes something new! Cooking is a good way to destress yourself after a tiring day, with the bonus perk of filling your stomach!'
        ],
        style: 'ul-list'
      }],
      'Organization' : [{
        content: 'Toastmasters',
        style: 'title'
      },{
        content: bptmc1,
        style: 'image',
        alt: 'Giving a speech in a Toastmasters meeting',
        layout: 'horizontal'
      }],
      'Testinga': 'hello',
      'Wahhhha': 'hello',
      'Testings': 'hello',
      'Wahhhhs': 'hello'
    }
  },
  code: {
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
