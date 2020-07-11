import React from 'react';
import './App.css';
import List from './List';

function App(props) {
  const { store } = props;

  const listHeader = store.lists.map(list => {
    return <List key={list.cardIds} header={list.header} cardIds={list.cardIds} allCards={store.allCards}/>
  })
  
  console.log(listHeader);


  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
        <div className="App-list">
          {listHeader}
        </div>
      </header>
    </main>
  );
}

export default App;