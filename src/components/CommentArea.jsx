import { useEffect, useState } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

const CommentArea = ({bookId}) => {

  const [comments, setComments] = useState([])

  useEffect(() => {
    if (bookId) {
      getComments()
    }
  }, [bookId])

  const aggiornaCommenti = () => {
    getComments()
  }

  const getComments = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + bookId,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTljMjljZGUwZGQxZDAwMTgyZDE4YjQiLCJpYXQiOjE3MDQ3MzMxMzMsImV4cCI6MTcwNTk0MjczM30.iQcrWjbTsWpnknSarl5aGt0OIZdVmCV9H_Zgypx-EKE',
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('errore nel recupero dei commenti')
        }
      })
      .then((arrayOfComments) => {
        console.log(arrayOfComments)
        setComments(arrayOfComments)
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  return (
    <div>
      <div>
        <CommentsList reviews={comments} />
      </div>
      <div>
        <AddComment bookId={bookId} aggiornaCommenti={aggiornaCommenti} />
      </div>
    </div>
  )
}

export default CommentArea
