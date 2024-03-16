import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks,setBookmarks] =useState([])
  const [readingTime,setReadingTime] =useState(0)

  const handleAddToBookmark =blog =>{
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = time=>{
    const newReadingTime=readingTime+time;
    setReadingTime(newReadingTime);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex gap-6 mt-4'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
