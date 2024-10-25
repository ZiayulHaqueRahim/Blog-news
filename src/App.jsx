
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/blogs'
import Bookmarks from './components/Bookmarks/bookmarks'
import Header from './components/Header/header'

function App() {
  
  const [bookmarks,setBookmarks] = useState([]);

  const handleAddToBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
     <Header></Header>
      <main className='md:flex max-w-7xl mx-auto '>
        <Blogs  handleAddToBookmarks={handleAddToBookmarks}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>


    </>
  )
}

export default App
