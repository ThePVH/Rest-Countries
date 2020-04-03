import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { AppBarComponent } from './AppBarComponent';
import { SearchField } from './SearchField';
import { FilterField } from './FilterField';
import { Cards } from './Cards';

import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from './Card';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import storage from 'local-storage-fallback';
import style from 'styled-theming';

const useStyle = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px',
    padding: '0 60px'
  }
})

const getBackground = style('mode', {
  light: 'hsl(0, 0%, 98%)',
  dark: 'hsl(207, 26%, 17%)'
})

const getElements = style('mode', {
  light: 'hsl(0, 0%, 100%)',
  dark: 'hsl(209, 23%, 22%)'
})

const getText = style('mode', {
  light: 'hsl(200, 15%, 8%)',
  dark: 'hsl(0, 0%, 100%)'
})

const getShadow = style('mode', {
  light: 'hsl(0, 0%, 52%)',
  dark: 'hsl(209, 23%, 22%)'
})

const GlobalStyles = createGlobalStyle`
body {
  background-color: ${getBackground};
  color: ${getText};
}

.cards, .makeStyles-root-2, .MuiAutocomplete-inputRoot {
  background-color: ${getElements};
  color: ${getText};
}

a, .MuiInputLabel-outlined, .MuiFormLabel-root.Mui-focused, .MuiInputLabel-outlined {
  color: ${getText};
}

.cardList button {
  background: ${getElements};
  color: ${getText};
  box-shadow: 0 0 10px 0 ${getShadow};
}

.inputBase {
  color: ${getText};
}

.search {
  background-color: ${getElements};
  box-shadow: 0 0 10px 0 ${getShadow};
}
`

function getInitialTheme() {
  const savedTheme = storage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' };
}

function App() {

  const styles = useStyle();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  const [theme, setTheme] = useState(getInitialTheme);
  const BASE_URL = 'https://restcountries.eu/rest/v2/all';

  async function fetchData() {
    const res = await fetch(BASE_URL);
    res
      .json()
      .then(res => setData(res));
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  const handleInput = (event) => {
    setQuery(event.target.value.toLowerCase());
  }

  const handleInputChange = (e) => {
    setFilterRegion(e.target.innerText);
  }

  const handleMode = () => {
    setTheme(theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' });
  }

  const filterFinal = () => {
    if (filterRegion && query) {
      return data.filter(country => country.region === filterRegion).filter(country => country.name.toLowerCase().includes(query));
    }
    if (filterRegion) {
      return data.filter(country => country.region === filterRegion);
    }
    if (query) {
      return data.filter(country => country.name.toLowerCase().includes(query));
    } else {
      return data;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <div className="App">
            <AppBarComponent handleMode={handleMode} />
            <Switch>
              <Route exact path="/">
                <Toolbar classes={{ root: styles.root }}>
                  <SearchField handleInput={handleInput} />
                  <FilterField handleInputChange={handleInputChange} />
                </Toolbar>
                <div className="cardsApp">
                  {filterFinal(data).map((info) => (
                    <Cards
                      key={info.name}
                      name={info.name}
                      img={info.flag}
                      population={info.population}
                      region={info.region}
                      capital={info.capital}
                      alpha3Code={info.alpha3Code}
                    />
                  ))
                  }
                </div>
              </Route>
              {data && (
                <Route path="/:infoName" render={({ match }) => (
                  <Card {...data.find(info => info.alpha3Code === match.params.infoName)} />
                )} />
              )}
            </Switch>
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
