import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team';
import Footer from './components/Footer'
//http://github.com/ryanoliveir.png
function App() {

  
  
  const [ collaborators, setCollaborators ] = useState([])
  const [teams, setTeams] = useState([
    {
      teamName: 'Programação',
      color:'#57C278',
    },
    {
      teamName: 'Front-End',
      color:'#82CFFA',
    },
    {
      teamName: 'Data Science',
      color:'#A6D157',
    },
    {
      teamName: 'Devops',
      color:'#E06B69',
    },
    {
      teamName: 'UX e Design',
      color:'#DB6EBF',
    },
    {
      teamName: 'Mobile',
      color:'#FFBA05',
    },
    {
      teamName: 'Inovação e Gestão',
      color:'#FF8A29',
    },

  ]);

  const updateCollaborators = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  const changeColor = (color, name) => {
    setTeams(teams.map(team => {
      if(team.teamName === name) {
        team.color = color;
      }

      return team;
      
    }));
  }



  function deleteCard(){
    console.log('deleteCard');
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.teamName)} onSubmit={colaborator => updateCollaborators(colaborator)} />
      {
     // teams.map(team => <Team key={team.teamName} name={team.teamName} primaryColor={team.primaryColor} secondColor={team.secondaryColor} />)
        teams.map(team => {
          return (
            <Team 
            key={team.teamName} 
            name={team.teamName} 
            color={team.color}
            collaborators={collaborators.filter(collaborator => collaborator.team === team.teamName)}
            onDelete={deleteCard}
            onColorChange={changeColor}
            />
          )
        })
      }
      <Footer />
    </div>
  );
}

export default App;
