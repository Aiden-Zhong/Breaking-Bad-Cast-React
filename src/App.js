import { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import axios from 'axios';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async() => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setCharacters(result.data)
      setIsloading(false)
    }
    fetchItems();
  },[query])


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} characters={characters}/>
    </div>
  );
}

export default App;
