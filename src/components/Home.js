import React, { useState, useEffect } from 'react'
import Header from './Header'
import RandomComics from './RandomComics'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';

function Home() {
  let numberR = Math.floor(Math.random() * (2000 - 1 + 1) ) + 1;  

  const [comic, setComic] = useState(null)
  const [loading, setLoading] = useState(false)
  const [comicNumber, setComicNumber] = useState(numberR)
  const [level, setLevel] = useState(null)
  const [comments, setComments] = useState([])

  useEffect(
    () => {
      setLoading(true)
      const getComic = () => {

        axios.get(`/${comicNumber}/info.0.json`)
          .then(res => setComic(res.data))
          .catch(err => console.log('err', err))

      }

      getComic()
      setLoading(false)
      setLevel(null)
      setComments([])
    }, [comicNumber]
  )

  const randomComic = () => {
    let numberR = Math.floor(Math.random() * (2000 - 1 + 1) ) + 1

    setComicNumber(numberR)
  }
  

  const handleChangeComic = (action) => {
    switch (action) {
      case 'next':
        setComicNumber(comicNumber + 1)
        break;
      case 'prev':
        setComicNumber(comicNumber - 1)
        break;
  
      default:
        randomComic()
        break;
    }
  }

  return (
    <div>
      <Header />
      {comic && !loading ? <RandomComics
        comic= {comic}
        loading= {loading}
        handleChangeComic={handleChangeComic}
        level={level}
        setLevel={setLevel}
        comments={comments}
        setComments={setComments}
      />: <div className='circularProg'>
        <CircularProgress />
      </div>}
    </div>
  )
}

export default Home
