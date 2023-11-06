import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import group from './assets/images/group.svg';
import Avatar from './components/Avatar';
import FloatingLabelInput from './components/FloatingLabelInput';
import KnowledgeCard from './components/KnowledgeCard';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';


function App() {

  const knowledgeCardsInfo = [
    
    {
      cardInfo : {
        'fontSize': 12,
        'text': "Competetor Analysis"
      },
      avatarInfo : {
        'src': group,
        'altName': "Competetor Analysis",
        'imageSize': 48,
        'size': 80,
        'borderRadius': 80
      },
      id : 1
    },
    {
      cardInfo : {
        'fontSize': 12,
        'text': "Company Performance"
      },
      avatarInfo : {
        'src': group,
        'altName': "Company Performance",
        'imageSize': 48,
        'size': 80,
        'borderRadius': 80
      },
      id : 2
    },
    {
      cardInfo : {
        'fontSize': 12,
        'text': "Customer Insights"
      },
      avatarInfo : {
        'src': group,
        'altName': "Customer Insights",
        'imageSize': 48,
        'size': 80,
        'borderRadius': 80
      },
      id : 3
    },
    {
      cardInfo : {
        'fontSize': 12,
        'text': "Omnichannel Performance"
      },
      avatarInfo : {
        'src': group,
        'altName': "Omnichannel Performance",
        'imageSize': 48,
        'size': 80,
        'borderRadius': 80
      },
      id : 4
    },
    {
      cardInfo : {
        'fontSize': 12,
        'text': "Employee Management"
      },
      avatarInfo : {
        'src': group,
        'altName': "Employee Management",
        'imageSize': 48,
        'size': 80,
        'borderRadius': 80
      },
      id : 5
    },
    {
      cardInfo : {
        'fontSize': 12,
        'text': "External Forces"
      },
      avatarInfo : {
        'src': group,
        'altName': "External Forces",
        'imageSize': 48,
        'size': 80,
        'borderRadius': 80
      },
      id : 6
    },
  ];

  const [brandName, setBrandName] = useState('');

  const handleBrandNameChange = (e) => {
    setBrandName(e.target.value);
  };

  return (
    
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid text-bg-dark">
          <a className="navbar-brand text-bg-dark" href="#">
            
            Nav1 | Nav2 | Nav3
          </a>
        </div>
      </nav>
      <div className="card">
        <h2>Welcome, User</h2>
      </div>
      <body className="App-body">
        <div className="container  App-body-container">
          <h6>I want to know</h6>
            <div className="container">
              <div className="row gap-1">
                
                {
                  knowledgeCardsInfo.map(card =>
                    <KnowledgeCard 
                      key={card.id}
                      cardInfo={card.cardInfo} 
                      avatarInfo={card.avatarInfo} 
                    />
                    )
                }

                
              </div>

            </div>
          <h6>Focused on this brand</h6>
          <FloatingLabelInput
            label="Select Brand"
            value={brandName}
            onChange={handleBrandNameChange}
          />
        </div>
      </body>

      <footer className="App-footer ">
        Copyright © Deloitte Development LLC 2023. All Rights Reserved.
      </footer>
    </>
  );
}

export default App;
