import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleSelect = () => {
    const rnd = Math.floor(Math.random()*(7-0))
    setSelected((prevSelected) => prevSelected = rnd);
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected]++;
    setVotes(copy);
  }

  const highestVotes = Math.max(...votes);
  const winningAnecdote = anecdotes[votes.indexOf(highestVotes)];

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <p><button onClick={handleVote}>vote</button><button onClick={handleSelect}>next anecdote</button></p>
      {
        highestVotes===0
        ? <p>No anecdote has been voted yet</p>
        : <div>
            <h1>Anecdote with most votes</h1>
            <p>{winningAnecdote}</p>
            <p>has {highestVotes} votes</p>
          </div>
      }
    </div>
  )
}

export default App

/*
import {useState} from 'react';

const WarningNotUsed = () => {
  return (
    <div>
      No se ha hecho todavía ninguna valoración
    </div>
  );
};

const Calculos = ({scores}) => {
  return(
    <div>
      <table>
        <tr>
          <td>good</td>
          <td>{scores.filter(score => score === 'G').length}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{scores.filter(score => score === 'N').length}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{scores.filter(score => score === 'B').length}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{scores.length}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{(scores.filter(score => score === 'G').length - scores.filter(score => score === 'B').length)/scores.length}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{(scores.filter(score => score === 'G').length/scores.length)*100}%</td>
        </tr>
      </table>
    </div>
  );
};

const App = () => {
  const [scores, setScores] = useState([]);

  const handleClickGood = () => {
    setScores((prevScores) => [...prevScores,'G']);
  };

  const handleClickNeutral = () => {
    setScores((prevScores) => [...prevScores,'N']);
  };

  const handleClickBad = () => {
    setScores((prevScores) => [...prevScores,'B']);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <p><button onClick={handleClickGood}>good</button><button onClick={handleClickNeutral}>neutral</button><button onClick={handleClickBad}>bad</button></p>
      <h1>statistics</h1>      
      {
      scores.length===0
      ? <WarningNotUsed />
      : <Calculos scores={scores} />
      }
    </div>
  );
};

export default App;
*/