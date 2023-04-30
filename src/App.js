import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form'

function App() {

  const [ collaborators, setCollaborators ] = useState([])

  const updateCollaborators = (collaborator) => {
    console.log(collaborator)

    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form onSubmit={colaborator => updateCollaborators(colaborator)}/>
    </div>
  );
}

export default App;
