import React from 'react';
import './Nav.scss'
import { BrowserRouter as Router , NavLink, Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import News from './News.js';
import About from './About.js';
import Contact from './Contact.js';
import NewsDetail from './NewsDetail.js';
import ListUsers from '../Users/ListUser.js';
const Navigation = () => {
    const news = [
        { id: '1', fullName: 'Robin Wieruch' },
        { id: '2', fullName: 'Sarah Finnley' },
    ]
    return(
        <Router>
            <>
                <div className='topNav'>
                    <NavLink exact to="/" className='a' activeClassName='active'>Home</NavLink>
                    <NavLink to="/news" className='a' activeClassName='active'>News</NavLink>
                    <NavLink to="/contact" className='a' activeClassName='active'>Contact</NavLink>
                    <NavLink to="/about" className='a' activeClassName='active'>About</NavLink>
                    <NavLink to="/users" className='a' activeClassName='active'>Users</NavLink>
                </div>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/news' element={<News news={news}/>}/>
                    <Route path="/news/:id" element={<NewsDetail />} /> {/* Tuyến đường chi tiết tin tức */}
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/users' element={<ListUsers />}/>
                </Routes>
            </>
        </Router>
    )
}

export default Navigation;