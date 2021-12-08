import React, { useState } from 'react';
import './Style.css';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar'
import { config } from './config'



export default function App() {

  const [state, setState] = useState(
    {
      baseURL: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?',
      APIkey: config.API_KEY,
      input: '',
      results: []
    }
  )
  console.log('state',state)

  const handleChange = (e) => {
    setState({...state,
      input: e.target.value
    })
    // console.log(e.target.value)
  }

  const handleSubmit = () => {
    console.log(state.input)
    query()
    setState({
      ...state,
      input: ''
    })
  }

  const query = () => {
    let url = state.baseURL + "q=" + state.input + "&api-key=" + state.APIkey
    console.log('url', url)

    fetch(url).then(response => {
      console.log(response)
      if (!response.ok) {
        console.log(response.statusText)
        return
      }
      return response.json()
    }).then(data => {
      console.log('data', data)

      let docs = data.response.docs
      let results = docs.map(doc => {
        let url = doc.web_url
        let headline = doc.headline
        let main = headline.main
        let date = doc.pub_date
        let byline = doc.byline
        let author = byline.original
        let id = doc._id
        return { id: id, title: main, date: date, url: url, author: author }
      })
      setState({ results: results })
      console.log(state.results)
    })
  }

 

  return (
    <div className="App">
      <SearchBar
        change={handleChange}
        submit={handleSubmit}
        text={state.input}
      />
      <NewsList results={state.results} />
    </div>
  )
}


