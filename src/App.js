import Layout from "./components/Layout.jsx";
import {Routes, Route} from 'react-router-dom';



import MainPage from './pages/MainPage'
import PostPage from "./pages/PostPage";
import PostsPage from './pages/PostsPage'
import AddPostPage from "./pages/AddPostPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import EditPostPage from "./pages/EditPostPage";
import { ToastContainer } from 'react-toastify';

//TODO вернуть Layout

function App() {

    return (
        <Layout>
            <Routes>
                {/*Убрать (/) со всех роутов*/}
                <Route path='/' element={<MainPage/>}/>
                <Route path='/posts' element={<PostsPage/>}/>
                <Route path='/:id' element={<PostPage/>}/>
                <Route path='/:id/edit' element={<EditPostPage/>}/>
                <Route path='/new' element={<AddPostPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
            </Routes>
            <ToastContainer position='bottom-center' />
        </Layout>
    )


}


export default App;
