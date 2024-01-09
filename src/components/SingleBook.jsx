import { useState } from 'react'
import { Card } from 'react-bootstrap'

const SingleBook = ({changeAsin, book, selectedAsin}) => {

  const [selected, setSelected] = useState(false)

  return (
    <>
      <Card
        onClick={() => {
          setSelected(!selected)
          changeAsin(book.asin)
        }}
        style={{
          border:
            book.asin === selectedAsin
              ? '3px solid red'
              : 'none',
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {book.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook