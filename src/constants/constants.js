import logo from '../img/bg.jpg'
import eden from '../img/eden.jpg'
import interest from '../img/interests.jpg'
import bptmc1 from '../img/bptmc1.jpg'
import startup1 from '../img/startup1.jpg'
import startup2 from '../img/startup2.jpg'
import tmc1 from '../img/tmc1.jpg'
import fyp1 from '../img/fyp1.jpg'
import fyp2 from '../img/fyp2.jpg'

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
      'Toastmaster' : [{
        content: 'Toastmasters',
        style: 'title'
      },{
        content: bptmc1,
        style: 'image',
        alt: 'Giving a speech in a Toastmasters meeting',
        layout: 'horizontal'
      },{
        content: 'There\'s a saying in chinese: "You can eat anything you want, but you can\'t say what you want."',
        style: 'text'
      },{
        content: 'And in English there is: "The pen is mightier than the sword"',
        style: 'text'
      },{
        content: 'The most charismatic people in the world are the ones who can sway people with words. Think of politicians like Barack Obama. Martin Luther King. Think of entrepreneurs like Steve Jobs and Jack Ma. Think of comedians and Late night show hosts like Trevor Noah and John Oliver. Speaking is a skill when used properly, could make a big impact.',
        style: 'text'
      },{
        content: 'My toastmasters journey started because of a burning desire to master the elements of speaking, and to over come my stage fright. As an introvert, I often fantasize about being able to captivate my audience with words alone. I could charm my audiences with jokes. I could bring tears to the fair folks with empathetical stories. I could arouse and inspire the hall with strong, powerful speeches.',
        style: 'text'
      },{
        content: tmc1,
        style: 'image',
        alt: 'Winning table topics',
        layout: 'horizontal',
        caption: 'My mentor and a very young me'
      },{
        content: 'Similar to young adults my age, I very soon found myself going around the entire of my country, visiting clubs after clubs. But my clubs are different. They were toastmasters clubs. I was notoriously voted the speaker in many chapter meetings, especially the best table topic speaker. But I wasn\'t stopping there. I also volunteered my services in different roles they had to offer.',
        style: 'text'
      },{
        content: 'It was also during this time where I began to mentor junior speakers and finally, after two years of joining Toastmasters, my final contribution to the organization was to help promote the sales of ticket for the attendance of District 80 Annual Toastmasters Conference. Together with a small organization team, we help sold over a thousand ticket across Singapore',
        style: 'text'
      },{
        content: 'After being a part of the committee member which broke the record of number of tickets sold for the annual conference, I retired my membership as I wanted to focus on my finals for my diploma. After graduation, I was quickly enlisted and since then, I was not involved in anymore toastmasters activity.',
        style: 'text'
      },{
        content: 'Public speaking is an essential skillset',
        style: 'title'
      },{
        content: startup1,
        style: 'image',
        alt: 'Startup Weekend Singapore 1',
        layout: 'horizontal',
        caption: 'The worst speech in my life and I cracked a joke.'
      },{
        content: 'But who would\'ve guessed that even after leaving the Toastmasters Organization, my public speaking skills would come in handy? During my first Hackathon run, my team was pitching our mockup idea to a panel of judges. Unfortunately, when it came to my turn, there was a technical difficulty, causing a minute of very awkward silence. The cameras were pointing at me- all eyes in the room was on me. So I did what came instinctively to me.',
        style: 'text'
      },{
        content: 'I cracked a joke.',
        style: 'text'
      }],
      'Education': [{
        content: 'Environmental Science',
        style: 'title'
      },{
        content: 'I came from the first and oldest Polytechnic in my country, Singapore polytechnic. During my three years in the school, I persued a diploma Environmental Management and Water Technology. While it is a handful to say, it essentially is a diploma in Environmental Science together with Civil Engineering',
        style: 'text'
      },{
        content: 'Notable modules that I\'ve picked up in my education includes:',
        style: 'text'
      },{
        content: [
          'Excel VBA',
          'Civil Engineering',
          'Microbiology',
          'Green Building and Clean Technology'
        ],
        style: 'ul-list'
      },{
        content: fyp1,
        style: 'image',
        alt: 'Floating mangrove',
        layout: 'horizontal',
        caption: 'Floating mangrove at Punggol Waterway'
      },{
        content: 'There are many projects, but the most important one in my education system is FYP (Final Year Project). For my FYP, I undertook a one year project from my nation\'s statutory board of development. The task of the project was to collect water samples around the floating platform and monitor the water quality over a year.',
        style: 'text'
      },{
        content: fyp2,
        style: 'image',
        alt: 'Laboratory equipments',
        layout: 'horizontal'
      },{
        content: 'Using various laboratory equipment, we have to hypothesize the reasoning behind the values (Whether there was a public activity/contruction/a rain before). After one year of monitoring, we had to present to the statutory board our finidings.',
        style: 'title'
      },{
        content: 'This was a long project, but I thoroughly enjoyed every bit of it as it gave me the opportunity to contribute to my country. The waterway served as an important water route between two reservoirs in my country and is essential to the country\'s growth. We were also taksed to keep an eye out on the flora and the fauna and catalogue them, as a healthy ecosystem is a good indicator of good water quality. As an avid animal lover, there was no better task suited for me.',
        style: 'title'
      }],
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
