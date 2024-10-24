
import './App.css'
import Blogs from './components/Blogs/blogs'
import Bookmarks from './components/Bookmarks/bookmarks'
import Header from './components/Header/header'

function App() {
  

  return (
    <>
     <Header></Header>
      <main className='md:flex md:container justify-between items-center mx-4 px-5'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>


    </>
  )
}

export default App
