import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts'
import CreatePost from './pages/CreatePost'
import PostDetail from './pages/PostDetail'
import './App.scss'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Posts/>}/>
          <Route path='/details/:id'element={<PostDetail/>}/> 
          <Route path='/create'element={<CreatePost/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
