import React from 'react';
import Timeline from './components/Timeline';
import './App.css'

const eventsData = [
  {
    title: 'Started at University',
    date: 'August 2017',
    description: 'Started my journey at NIU where I began to learn Computer Science',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Enlisted in US Army Illinois National Guard',
    date: 'Feb 2018',
    description: 'Started my journey within the army.',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Internship with Discover Finacial',
    date: 'Summer 2019',
    description: 'Started my journey Discover Financial.',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Code Organge Website',
    date: 'Summer 2019',
    description: 'My first 3 month internship I worked with the Code Orange website and scheduling system. Primary technologies used was React JS / CSS / Java Spring Boot.',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Business Event Dashboard',
    date: 'Fall 2019',
    description: 'My second 3 month internship I was tasked to build a dashboard which will consume kafka events and plot them onto graphs for business analysts and business partners review. Primary technologies used was React JS / CSS / Java Spring Boot / Kafka.',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Business Event Dashboard and Spotify Analyzer',
    date: 'Spring 2020',
    description: 'My third 3 month internship, we were tasked with progressing the Business event dashboard until COVID19 arrived. Since the pandemic prevented us from using the physical labs we resulted to work remotely on independent projects not affiliated with discover such as a Spotify analyzer using their free API plan.',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Joined Discover Financial Services Full time',
    date: 'Summer 2020',
    description: 'Worked remotely with the CPB/ECC team at Discover Financial Services',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Ethereum Mining and Hardware Assembly',
    date: 'Summer 2021',
    description: 'Bought GPU`s and many computer parts where i assembled a rig to mine.',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Unity and Game Development',
    date: 'Summer 2021',
    description: 'C# and Unity tool set. Graphic Design',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: '3d Printing',
    date: 'Fall 2021',
    description: 'Bought a 3d Dremel Printer and learnt about CAD software and how to 3d model and design',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Joined Northern Trust',
    date: 'Feb 2022',
    description: '',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Built new Document managment system',
    date: 'Summer 2022',
    description: 'Using vendor ',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Learned React Native',
    date: 'Summer 2022',
    description: 'Android and Ios development using React Native',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Automated onboarding for account creation on Box System',
    date: 'October 2022',
    description: 'Using vendor ',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Azure 900',
    date: 'Dec 2022',
    description: 'Using vendor ',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'DevOps Lead ',
    date: 'Feb 2023',
    description: 'Using vendor ',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Test Script formatter tool creation',
    date: 'April 2023',
    description: 'Using vendor ',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Test Script formatter tool creation',
    date: 'April 2023',
    description: '',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Replaced a jira --> copado data conversion process with ADO --> copado',
    date: 'July 2023',
    description: '',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'On demand tool to return current team structure on ADO',
    date: 'August 2023',
    description: '',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  {
    title: 'Officially a Veteran and Honorably Discharged',
    date: 'Feb 2024',
    description: 'After serving 6 years, I officiated and completed my term of service in the US army. With the rank as a Sergeant',
    image: 'projectA.jpg',
    link: '/projectA',
  },
  // More events...
];

const App = () => {
  return (
    <div className="app">
      <h1>Michael Burstein Timeline</h1>
      <Timeline events={eventsData} />
    </div>
  );
};

export default App;