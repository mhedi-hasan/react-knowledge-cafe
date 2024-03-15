import './App.css'
import Blogs from './components/Blogs/Blogs'
import BooksMarks from './components/BooksMarks/BooksMarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex mt-4'>
        <Blogs></Blogs>
        <BooksMarks></BooksMarks>
      </div>
    </>
  )
}

export default App
