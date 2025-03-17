import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Dashboard from "./views/Dashboard"; 
import NewsService from './components/NewsService'; 

const RoutesDaily = () => ( 
  <BrowserRouter>
  <header className="app-header">
    <div className="header-content">
      <NavLink
        to="/"
        className="nav-link"
        style={({ isActive }) => ({ color: isActive ? '#aaa' : '#bbb' })}
      >
        Write!
      </NavLink>
      <NavLink
        to="/posts"
        className="nav-link"
        style={({ isActive }) => ({ color: isActive ? '#aaa' : '#bbb' })}
      >
        Posts
      </NavLink>
      <NavLink
        to="/news"
        className="nav-link"
        style={({ isActive }) => ({ color: isActive ? '#aaa' : '#bbb' })}
      >
        News by Category
      </NavLink>
    </div> 
  </header>

  <main className="app-main">
    <Routes>
      <Route path="/posts/:id" element={<PostItem />} />
      <Route path="/posts" element={<PostList />} />
      {/* <Route path="/news/:id" element={<NewsList />} /> */}
      <Route path="/news" element={<NewsService/>} />
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<h3>Oops, page not found</h3>} />
    </Routes>
  </main>
</BrowserRouter>
)



export default RoutesDaily;
// = [
//   {
//     path: "/",
//     name: "Dashboard",
//     icon: "tim-icons icon-chart-pie-36",
//     component: Dashboard,
//     layout: "/admin"
//   },
//   {
//     collapse: true,
//     name: "Pages",
//     icon: "tim-icons icon-image-02",
//     state: "pagesCollapse",
//     views: [
//       {
//         path: "/posts",
//         name: "Posts",
//         mini: "P",
//         component: PostList, // Changed to PostList
//         layout: "/admin"
//       },
//     ]
//   }
// ];

