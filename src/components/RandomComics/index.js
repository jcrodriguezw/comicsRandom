import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './style.scss'
import Rating from 'react-rating'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home(props) {    
  const {comic, handleChangeComic, level, setLevel, comments, setComments} = props

  const [comment, setComment] = useState('')

  const notify = () => toast("comentario enviado !", { type: 'success'});

  const ratingChanged = (newRating) => {
    setLevel(newRating * 2);
  };

  const handleSave = () => {
    setLevel(null)
    const newComments = comments.slice()
    newComments.push({comment, level})
    setComments(newComments)
    setComment('')
    notify()
  }

  return (
    <div className='homeWrapp'>
      <div className='home'>
        <h2>{comic.title}</h2>

        <div className='homeButtons'>
          <Button 
            variant='contained' 
            color='primary'
            onClick={() => handleChangeComic('prev')}
          >
            <ArrowBackIosIcon/>
          </Button>

          <Button 
            variant='contained' 
            color='primary'
            onClick={() => handleChangeComic()}
          >
            aleatorio
          </Button>

          <Button 
            variant='contained' 
            color='primary'
            onClick={() => handleChangeComic('next')}
          >
            <ArrowForwardIosIcon/>
          </Button>
        </div>
        
        <div className='comicImg'>
          <img src={comic.img} alt={comic.alt}/>        
        </div>

        <div className='comicRating'>

          <Rating
            start = {0}
            stop = {5}
            onChange = {(newLevel) => ratingChanged(newLevel)}
            fractions = {2}
            initialRating = {level/2}
            emptySymbol={<img src='/emptyStar.svg'  width="30.64px" height="30.64px"/>}
            fullSymbol={<img src='/FilledStar.svg'  width="30.64px" height="30.64px"/>}
          />

        </div>

        <div>
          <TextField
            id="outlined-multiline-static"
            className='commentComic'
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="outlined"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <div>
          <Button variant='contained' color='primary' onClick={handleSave}>Guardar</Button>
        </div>
        <ToastContainer variant='success' />
      </div>

      <div>
        <h3>Comments:</h3>
        {comments.map(c => <div className='comment'>
          
          <p><strong>Juan</strong></p>
          <p>{c.comment} </p> 
          
          <div className='ratingStyle'>
            <Rating
              start = {0}
              stop = {5}
              fractions = {2}
              initialRating = {c.level/2}
              emptySymbol={<img src='/emptyStar.svg'  width="15.64px" height="15.64px"/>}
              fullSymbol={<img src='/FilledStar.svg'  width="15.64px" height="15.64px"/>}
            />
          </div>
        </div>)}
      </div>
    </div>
    
  )
}

export default Home
