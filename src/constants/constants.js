import logo from '../img/bg.jpg'
import eden from '../img/eden.jpg'
import interest from '../img/interests.jpg'
import bptmc1 from '../img/bptmc1.jpg'
import startup1 from '../img/startup1.jpg'
import startup2 from '../img/startup2.jpg'
import tmc1 from '../img/tmc1.jpg'
import fyp1 from '../img/fyp1.jpg'
import fyp2 from '../img/fyp2.jpg'
import abv1 from '../img/abv1.jpg'
import te1 from '../img/te1.jpg'
import te2 from '../img/te2.jpg'
import te3 from '../img/te3.jpg'
import hdb1 from '../img/hdb1.jpg'
import hdb2 from '../img/hdb2.jpg'
import navy1 from '../img/navy1.jpg'
import abvfeature1 from '../img/abvfeature1.png'
import abvfeature2 from '../img/abvfeature2.png'
import abvfeature3 from '../img/abvfeature3.jpg'
import abvfeature4 from '../img/abvfeature4.jpg'
import othrwrld from '../img/othrwrld.png'
import othrwrld1 from '../img/othrwrld1.gif'
import othrwrld2 from '../img/othrwrld2.png'
import othrwrld3 from '../img/othrwrld3.png'
import unity1 from '../img/unity1.gif'
import itsmeta from '../img/itsmeta.png'
import itsmeta1 from '../img/itsmeta1.png'
import itsmeta2 from '../img/itsmeta2.png'
import scrollreview from '../img/scrollreview.gif'
import chernobyl from '../img/chernobyl.png'


// title for h1
// text for p
// image for img
// ul-list for ul
// dangerous for dangerouslySetInnerHTML
const constants = {
  about: {
    default: 'Click on one of the buttons to find out more!',
    defaultMore: 'My name is Eden. I am a MERN Stack Software Engineer from Singapore. This section details my personal growth and educational journey. Clicking here means you must be interested in my story. Here are some keywords you can expect from this section:',
    defaultList: [
      'Public Speaking',
      'Fast Learner',
      'Passionate',
      'Dreamer',
      'Environment'
    ],
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
        content: 'I believe that living without learning is the cruelest form of torture, and my insatiable curiousity is what fuels me. I am a passionate truth-seeker, who lives and thrives on challenges, because I believe that opportunities are seized, and not given. I am a fast learner who understands concepts quickly and is fast to utilize them in my next project.',
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
        content: 'His idea became my catalyst, and I volunteered as the sole developer of the project. I taught myself how to code, and found it to be an exciting venture. I soon took coding seriously, and upon finishing my service to the nation, I enrolled myself into a Software Engineering bootcamp at General Assembly, and upon graduation, I found work at a Vegan startup company.',
        style: 'text'
      },{
        content: 'Having experience both in Private and Public sector, and two years of service in a military organization, I daresay I am a very flexible and adapatble person. My strongest characteristics are my passion and willingness to learn, and my experience proves that I am a quick study.',
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
          'Cooking - I hate the dishes, but I love the cooking. What\'s the difference between coding, writing and cooking? It\'s the same: you take a set of ingredients, put in the right order, and out comes something new! Cooking is a good way to de-stress yourself after a tiring day, with the bonus perk of filling your stomach!'
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
        content: 'And in English there is: "The pen is mightier than the sword."',
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
        style: 'text'
      },{
        content: 'This was a long project, but I thoroughly enjoyed every bit of it as it gave me the opportunity to contribute to my country. The waterway served as an important water route between two reservoirs in my country and is essential to the country\'s growth. We were also taksed to keep an eye out on the flora and the fauna and catalogue them, as a healthy ecosystem is a good indicator of good water quality. As an avid animal lover, there was no better task suited for me.',
        style: 'text'
      }]
    }
  },
  work: {
    default: 'Click on one of the buttons to find out more!',
    defaultMore: 'In this section, you can find out more about all my past working experiences! Despite being a coder, I strongly believe that soft skills are neccessary as an individual. Through my working experiences, I have learnt the following:',
    defaultList: [
      'Independence',
      'Responsibility',
      'Team-player',
      'Willingness to admit mistakes'
    ],
    components: {
      'career': [{
        content: 'Abillionveg',
        style: 'title'
      },{
        content: abv1,
        style: 'image',
        alt: 'abillionveg',
        layout: 'horizontal'
      },{
        content: 'abillionveg is a social platform for vegans to voice their opinions on dishes and product.',
        style: 'caption'
      },{
        content: 'My first career is in abillionveg. This company is a goal oriented startup with a mission to spread awareness for veganism and making veganism easily accessible to people who wanted to go vegan.',
        style: 'text'
      },{
        content: 'I started working at abillionveg on February 2020. Even though I had multiple job offers, I chose abillionveg as I found myself drawn to the company\'s mission in promoting ethical treatment and welfare for animal (I\'m a sucker for animals.). What inspired me the most is that the company was willing to donate a dollar to their user\'s choice for every vegan review they make.',
        style: 'text'
      },{
        content: 'Coding Journey',
        style: 'title'
      },{
        content: 'Working at a startup allowed me to flourish in a way that I otherwise could never. The most striking thing to me is the culture of the company. It fosters and encourage growth amongst our small team, and as a startup, everyone could freely contribute their ideas to the team. We believe that no one is too junior to share their opinion, and I was given the freedom to tackle my problems.',
        style: 'text'
      },{
        content: 'As a junior full-stack software engineer, my duty is to explore the code base, and help implement new feature, and fix bugs. I had to learn new technologies quickly while keeping up with my work. In my journey with the company, I had worked on both the front-end of the websites and the mobile app, as well as writing API-endpoints for the backend.',
        style: 'text'
      },{
        content: 'Due to the freedom that I was granted, I found myself being independent and responsible for my own work. Thinking of the metadatas, entity-relationship and the code I have to write were task that I had to perform. I also have to coordinate with the design team, as well as other coders, and through this experience, I learnt the useful abilitiy of communication. There were times where I was expected to think of non-engineering aspects, such as draw up wiring frames and thinking of the UI/UX of the feature I will be involved in.',
        style: 'text'
      },{
        content: 'The most common technologies I work with:',
        style: 'caption'
      },{
        content: [
          'Javascript/HTML/CSS',
          'Express',
          'NodeJS',
          'React',
          'React-Native',
          'Styled-components',
          'MongoDB',
          'Redux',
          'Axios'
        ],
        style: 'ul-list',
        align: 'center'
      },{
        content: 'The most common tools I have used:',
        style: 'caption'
      },{
        content: [
          'Postman',
          'Robo 3T',
          'Slack',
          'Github',
          'Android Studio'
        ],
        style: 'ul-list',
        align: 'center'
      }],
      'internship': [{
        content: 'Thoughts Expression',
        style: 'Title'
      },{
        content: te1,
        style: 'image',
        layout: 'horizontal',
        alt: 'Public speaking workshop'
      },{
        content: 'Thoughts Expression is a public speaking coach firm run by the 2017 World Champion of Public Speaking.',
        style: 'caption'
      },{
        content: 'My internship with Thoughts Expressions started on November 2016 till February 2017. During these months, I was a general intern helping to facilitate workshops as well as creating new content for the workshops.',
        style: 'text'
      },{
        content: 'Thoughts Expressions promotes a growth mindset, instilling confidence and teaching essential public speaking skills to children and adults alike.',
        style: 'text'
      },{
        content: te2,
        style: 'image',
        layout: 'horizontal',
        alt: 'Children public speaking workshop'
      },{
        content: 'During my internship, I had learn plenty of public speaking skills, and I had to research skills to teach our client. Keeping a positive energy, answering questions that my clients have, and encouraging them to participate in the workshop, were my daily job',
        style: 'text'
      },{
        content: te3,
        style: 'image',
        layout: 'horizontal',
        alt: 'Children public speaking workshop'
      },{
        content: 'As part of my internship, I had opportunites to share my ideas. My contribution to the company was researching the strategy of memory enhancement called \'The Loci Method\'. I created a card game to go along with some of the topics we shared with our clients, and it was well-recieved, and we were invited to a public school to conduct a workshop for the students and their parents. A lot of my work also involved simple film/photo editing for marketing purposes.',
        style: 'text'
      },{
        content: 'Tools that I used in work: ',
        style: 'caption'
      },{
        content: [
          'Microsoft Excel',
          'Microsoft Powerpoint',
          'Windows Movie Maker'
        ],
        style: 'ul-list',
        align: 'center'
      },{
        style: 'break'
      },{
        content: 'Housing and Development Board',
        style: 'title'
      },{
        content: hdb2,
        style: 'image',
        layout: 'horizontal',
        alt: 'Land filling'
      },{
        content: 'HDB is the statutory board of the Ministry of National Development responsible for public housing in Singapore',
        style: 'caption'
      },{
        content: 'During my final year of education, I picekd up an internship with HDB. I was assigned to the Building and Infrastructure Group, and the project I helped out with was land reclamation of the military training island- Pulau Tekong',
        style: 'text'
      },{
        content: 'Due to how big and the general secrecy of the project is, I was really surprised that it was the project I was assigned. As the have a lack of natural resources, and imported sand is expensive, in an effort to reduce cost for the project, reused excavated soil was imported from the mainland as bulk of the foundation.',
        style: 'text'
      },{
        content: hdb1,
        style: 'image',
        layout: 'vertical',
        alt: 'Water testing'
      },{
        content: 'Similar to my Final Year Project in my school, which was also with HDB, my work in the team was to help compile data of soil and water sample while capturing any hazardous action taken by subcontractors, such as leaving open pool of water for mosquito breeding, or not following safety protocols.',
        style: 'text'
      },{
        content: 'Tools that I used for work:',
        style: 'caption'
      },{
        content: [
          'Microsoft Excel',
          'Microsoft Powerpoint',
          'Microsoft Word'
        ],
        style: 'ul-list',
        align: 'center'
      }],
      'service': [{
        content: 'National Service',
        style: 'Title'
      },{
        content: navy1,
        style: 'image',
        layout: 'horizontal',
        alt: 'Naval Military Institute',
        caption: 'Me graduating from Naval Logistic course'
      },{
        content: 'My service to the nationw as a logistician in the 191 squadron HQ. The squadron operates the country\'s largest war vessel, the LST (Landing Ship Tank).',
        style: 'text'
      },{
        content: 'During my training phase, I was taught a module on Supply chain management and Product life cycle.',
        style: 'text'
      },{
        content: 'As a logisitician, it is my duty to account for inventory and oversea procurement of goods and items. My daily responsibilities include liasing with supplier, and ensuring items purchased are delivered on time and of correct quantity and are high quality.',
        style: 'text'
      },{
        content: 'Due to my performance in my service, I was chosen to follow my unit to an oversea exercise in Australia. Following the exercise, my unit commander had an idea to implement a mobile app that helps the manpower department to keep track of the attendance and location of the fleet during oversea exercises.',
        style: 'text'
      },{
        content: 'My project eventually was used in an exercise involving and tracking over 700 personnel. Due to my excellent contribution to the unit, I was award the best sailor award, and was promoted in rank.',
        style: 'text'
      },{
        content: 'Tools that I used for work:',
        style: 'caption'
      }, {
        content: [
          'Gmail',
          'Microsoft Powerpoint',
          'Microsoft Excel',
          'Electronic Procurement System',
        ],
        style: 'ul-list',
        align: 'center'
      }]
    }
  },
  code: {
    default: 'Click on one of the buttons to find out more!',
    defaultMore: 'In this section, you will see a list of projects I am most proud of. Here are a list of technologies and tools I had worked with in the past:',
    defaultList: [
      'Javascript ES6/',
      'HTML/CSS',
      'Express',
      'NodeJS',
      'Ruby',
      'Ruby on Rails',
      'React/React Native',
      'Redux',
      'MongoDB',
      'Postgres',
      'Github',
      'Postman',
      'Robo 3T',
      'Slack',
      'Android Studio'
    ],
    components: {
      career: [{
        content: 'Due to our startup nature, I dive into most projects with only some understanding of the technologies used. Working on the project shows my commitment to the company and my ability to grasp concepts quickly.',
        style: 'text'
      },{
        content: 'Like Comments',
        style: 'title'
      },{
        content: abvfeature1,
        style: 'image',
        alt: 'Website version',
        caption: 'Website Function',
        layout: 'horizontal'
      },{
        content: abvfeature2,
        style: 'image',
        alt: 'Mobile version',
        caption: 'Mobile Function',
        layout: 'vertical'
      },{
        content: 'Abillionveg is a social platform similar to facebook or instagram. Users are able to share photos of vegan dishes and products, and are able to interact with different post by commenting, sharing, and liking it. There has been a growing request from our users to be able to like comments similar to other social media platform, and I was tasked to code the feature.',
        style: 'text'
      },{
        content: 'In this feature, I was the lead engineer for the mobile version, and I worked with an intern who was working on the web version. Eventually I took over both platform when the intern left.',
        style: 'text'
      },{
        content: 'The feature has recently been release in mid-August 2020 for testing, and by the end of the month has been used over 20,000 times by our users. Due to how heavily anticiapted this feature is, it was well received by our users.',
        style: 'text'
      },{
        content: 'This feature has solidified my understanding of making mongo queries, something that I did not work with prior to the project. On the desgin aspect, I worked closely with the design team to meet their requirement.',
        style: 'text'
      },{
        content: 'This is a fullstack project. The techonologies used in this feature is:',
        style: 'text'
      },{
        content: [
          'MongoDB',
          'React Native',
          'Styled-Components',
          'Redux'
        ],
        style: 'ul-list',
        align: 'center'
      }, {
        content: 'With every project, there will be a challenge. The issues I faced in this project is:',
        style: 'text'
      }, {
        content: [
          'Testing edge cases and updating metadata for older comments.',
          'Taking over code from intern after he had left the company.',
          'Meeting designer\'s requirement perfectly.'
        ],
        style: 'ul-list',
        align: 'center'
      },{
      style: 'break'
      },{
        content: 'Collections',
        style: 'title'
      },{
        content: abvfeature3,
        style: 'image',
        layout: 'vertical',
        alt: 'Editing collections',
        caption: 'Editing collections'
      },{
        content: 'Another feature that was highly requested was the ability to save reviews to collections. This feature was a massive undertaking as a new screen, a new collection and many new features. In this project, I worked predominently on the front-end side of things, while writting my own custom endpoint and queries.',
        style: 'text'
      },{
        content: 'The features I worked with are: Liking and following collections- where users can be notified if the collections they are following had been updated, and re-ordering the position of saved items. I also helped fixed UI issues after the app was rolled out to the internal testing phase. In this project, I worked with an Intern, and used the feature to help onboard and train him.',
        style: 'text'
      },{
        content: 'Initially I tested out a new package to practice dragging and dropping of div elements, but due to a change in requirement, we changed it to simply reordering by button press.',
        style: 'text'
      },{
        content: abvfeature4,
        style: 'image',
        layout: 'vertical',
        alt: 'Liking collections',
        caption: 'Liking collections'
      },{
        content: 'This is a fullstack project. The techonologies used in this feature is:',
        style: 'text'
      }, {
        content: [
          'MongoDB',
          'React Native',
          'Styled-Components',
          'Redux'
        ],
        style: 'ul-list',
        align: 'center'
      }, {
        content: 'With every project, there will be a challenge. The issues I faced in this project is:',
        style: 'text'
      }, {
        content: [
          'Working concurrently with other developers in other features.',
          'Testing out and selecting new packages, weighing the pros and cons of each package by myself.',
          'Dealing with last minute changes in requirements that made quite a lot of my work go down the drain.'
        ],
        style: 'ul-list',
        align: 'center'
      },{
        style: 'break'
      },{
        content: 'Internal Tools',
        style: 'title'
      },{
        content: 'As the title mentioned, I\'ve also helped contributed to the internal platform that our company uses. The internal platform is a restricted website which interns and moderators can use to edit database without require engineering assistance.',
        style: 'text'
      },{
        content: ' The platform is a simple CRUD app and my first fullstack project in the company was to build an interface where the moderating team can edit the information of our partner\'s information.',
        style: 'text'
      },{
        content: 'This is a fullstack project. The techonologies used in this feature is:',
        style: 'text'
      },{
        content: [
          'MongoDB',
          'React',
          'Styled-Components',
          'Redux',
          'React google maps',
          'React infinite scroller'
        ],
        style: 'ul-list',
        align: 'center'
      },{
        content: 'As this was my first project in the company, my challenge was to understand the code base and technologies used and adapt to a working environment.',
        style: 'text'
      }],
      bootcamp: [{
        content: 'General Assembly',
        style: 'title'
      },{
        content: 'Prior to this bootcamp, I have minimal experience with Javascript, Python, and Swift from my own reading. Over the course of three months, I was taught the basics of Software engineering. We went through HTML, CSS, Javascript, Ruby on Rails, React and Postgres',
        style: 'text'
      },{
        content: 'During the three months, I had 4 major project to mark my growth and understanding as an engineer.',
        style: 'text'
      },{
        content: 'Othrwrld',
        style: 'title'
      },{
        content: othrwrld,
        style: 'image',
        caption: 'Final project',
        layout: 'horizontal',
        alt: 'othrwrld.herokuapp.com'
      },{
        content: 'Othrwrld is the Magnum Opus of my 3 month coding journey in the Software Immerssive Bootcamp. This brainchild of mine is build with Rails and love. The idea behind Othrwrld comes from my passion towards writing and fantasy. It is a fullstack CRUD web application that serves as a story planner.',
        style: 'text'
      },{
        content: othrwrld1,
        style: 'image',
        layout: 'horizontal',
        alt: 'othrwrld.herokuapp.com'
      },{
        content: 'As a writer, a lot of my complains was that I could not visualise what I want to write. Which is why a large portion of my effort went into making the CSS of the application look good.',
        style: 'text'
      },{
        content: othrwrld3,
        style: 'image',
        layout: 'horizontal',
        alt: 'othrwrld.herokuapp.com'
      },{
        content: 'Each genre contains painstakingly coded features using CSS and JS DOM! To help further visualize my ideas, I imported d3.js library to help me draw relationship graph between my ficitonal characters',
        style: 'text'
      },{
        content: othrwrld2,
        style: 'image',
        layout: 'horizontal',
        alt: 'othrwrld.herokuapp.com'
      },{
        content: 'Overall, this project was the most challenging experience as I was working with a new library, and pushing myself to the limits with designs.',
        style: 'text'
      },{
        content: 'Feeling amazed? Check out the project here!',
          href: 'https://othrwrld.herokuapp.com',
        style: 'a',
        align: 'center'
      },{
        style: 'break'
      },{
        style: 'title',
        content: 'Unity'
      },{
        style: 'image',
        content: unity1,
        layout: 'horizontal',
        alt: 'jedi-unity.herokuapp.com'
      },{
        content: 'Unity is a fullstack webapp that is made purely using Ruby on Rails. This project was main with 2 other partner as a part of our mandatory group project. The purpose of this app is to schedule games with friends.',
        style: 'text'
      },{
        content: 'This app taught us the importance of proper git branching to ensure that conflicts does not occur. Due to the amazing and fun idea behind this project, we decided not to persue a standard boring CRUD app (even though it essentially is), but focus more on the look as well!',
        style: 'text'
      },{
        content: 'Intrigued? Check out my team\'s project here!',
        href: 'https://jedi-unity.herokuapp.com/',
        style: 'a',
        align: 'center'
      },{
        style: 'break'
      },{
        style: 'title',
        content: 'ITS-META!'
      },{
        style: 'image',
        content: itsmeta,
        layout: 'horizontal',
        alt: 'its-meta.herokuapp.com'
      },{
        content: 'Its-meta is a web application built with my brother to tackle the problem of education. Its-Meta was design both as a project for my Bootcamp, and a hackathon that I attended.',
        style: 'text'
      },{
        style: 'image',
        content: itsmeta1,
        layout: 'horizontal',
        alt: 'its-meta.herokuapp.com'
      },{
        content: 'During our education phase, we found ourselves often blindly studying without actually understand the purpose behind our actions. Its-meta was designed to help train children to be aware of their own thought process.',
        style: 'text'
      },{
        style: 'image',
        content: itsmeta2,
        layout: 'horizontal',
        alt: 'its-meta.herokuapp.com'
      },{
        content: 'The other aspects of Its-meta was the ability to track progress of children. Parents are able to log in to their account and check their children progress. We designed Its-meta to be free as we come from a poor and low-education family. Tution was hard to come by, and our parents were not able to guide us academically. As an environmentalist, its-meta could be expanded upon for education purposes and be used to reduce paper wastage.',
        style: 'text'
      },{
        content: 'Interested? Check out my brother and my project here!',
        href: 'https://its-meta.herokuapp.com/',
        style: 'a',
        align: 'center'
      }],
      others: [{
        content: 'In this section, you can find various projects that I have done.',
        style: 'text',
        align: 'center'
      },{
        style: 'break'
      },{
        content: 'Manpower Tracking App',
        style: 'title'
      },{
        content: 'Due to the nature of the work, I am unable to show any picutre',
        style: 'caption'
      },{
        content: 'During my service in the Navy, I volunteered myself to code a program to keep track of the movement of personnels between outposts. As it is illegal to download any software on military computer, I had to make use of online resources to code.',
        style: 'text'
      },{
        content: 'The requirement of the app is to be able to scan QR code to update movement, and being able to retreive information of the personnel with a press of button',
        style: 'text'
      },{
        content: 'The code was written in Google Script, the database was stored in Google Sheets. The app was build using MIT App Inventor.',
        style: 'text'
      },{
        style: 'break'
      },{
        content: scrollreview,
        style: 'image',
        layout: 'vertical',
        alt: 'Scrolling Div'
      },{
        content: 'This is a simple scrolling review that I built for my company for their main Website\'s landing page using CSS, styled-components and React.',
        style: 'text'
      },{
        style: 'break'
      },{
        content: 'Chernobyl',
        style: 'title'
      },{
        content: chernobyl,
        style: 'image',
        layout: 'horizontal',
        alt: 'Text based game'
      },{
        content: 'This is a text-based dungeon game created using html, css, and javascript. The amazing thing about this game is that it is built over 2 days, on my 5th day of learning Javascript!',
        style: 'text'
      },{
        content: 'Check out the game here!',
        href: '/ChernobylTxtGame1/',
        style: 'a',
        align: 'center'
      }]
    }
  },
  contact: [
    {
      icon: 'icon',
      name: 'faEnvelope',
      href: 'mailto:lim.xin.en.eden@gmail.com'
    },
    {
      icon: 'iconBrand',
      name: 'faLinkedin',
      href: 'https://www.linkedin.com/in/eden-lim/'
    },
    {
      icon: 'iconBrand',
      name: 'faGithub',
      href: 'https://github.com/edenlim'
    }
  ]
}

export default constants
