import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team';
import Footer from './components/Footer'
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
//http://github.com/ryanoliveir.png
function App() {

  
  
  const [teams, setTeams] = useState([
    {
      id: uuid(),
      teamName: 'Programação',
      color:'#57C278',
    },
    {
      id: uuid(),
      teamName: 'Front-End',
      color:'#82CFFA',
    },
    {
      id: uuid(),
      teamName: 'Data Science',
      color:'#A6D157',
    },
    {
      id: uuid(),
      teamName: 'Devops',
      color:'#E06B69',
    },
    {
      id: uuid(),
      teamName: 'UX e Design',
      color:'#DB6EBF',
    },
    {
      id: uuid(),
      teamName: 'Mobile',
      color:'#FFBA05',
    },
    {
      id: uuid(),
      teamName: 'Inovação e Gestão',
      color:'#FF8A29',
    },
    
  ]);
  
  
  const initial = [
    {
      id: uuid(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].teamName
    },
    {
      id: uuid(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].teamName
    },
    {
      id: uuid(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      imageUrl: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].teamName
    },
    {
      id: uuid(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].teamName
    },
    {
      id: uuid(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].teamName
    },
    {
      id: uuid(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].teamName
    },
    {
      id: uuid(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      imageUrl: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].teamName
    },
    {
      id: uuid(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].teamName
    },
    {
      id: uuid(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].teamName
    },
    {
      id: uuid(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].teamName
    },
    {
      id: uuid(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      imageUrl: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].teamName
    },
    {
      id: uuid(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].teamName
    },
    {
      id: uuid(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].teamName
    },
    {
      id: uuid(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].teamName
    },
    {
      id: uuid(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      imageUrl: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].teamName
    },
    {
      id: uuid(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].teamName
    },
    {
      id: uuid(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].teamName
    },
    {
      id: uuid(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].teamName
    },
    {
      id: uuid(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      imageUrl: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].teamName
    },
    {
      id: uuid(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].teamName
    },
    {
      id: uuid(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].teamName
    },
    {
      id: uuid(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].teamName
    },
    {
      id: uuid(),
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      imageUrl: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].teamName
    },
    {
      id: uuid(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      imageUrl: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].teamName
    },
  ]

  const [collaborators, setCollaborators] = useState(initial);

  const updateCollaborators = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  const changeColor = (color, id) => {
    setTeams(teams.map(team => {
      if(team.id === id) {
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
        teams.map((team, index) => {
          return (
            <Team 
            key={index} 
            team={team}
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
