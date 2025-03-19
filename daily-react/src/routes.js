import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Dashboard from "./views/Dashboard"; 
import NewsParent from './components/NewsParent'; 
import Header from "./views/Header";
import Footer from "./views/Footer";
import Article from './components/Article';
import  {styles}   from './config';

class CounterState {
  count = 0;
}
class UserState {
  user = null;
  isSignedIn = false;
}
const RoutesDaily = () => (
  <BrowserRouter>
  
  <Header /> 
     
    <main className="app-main">
      <Routes>
      <Route path="/article/:id" element={Article}/>
        <Route path="/posts/:id" element={<PostItem />} />
        <Route path="/posts" element={<PostList />} />
        {/* <Route path="/news/:id" element={<NewsList />} /> */}
        <Route path="/news" element={<NewsParent/>} />
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<h3>Oops, page not found</h3>} />
      </Routes>
    </main>
    <Footer />
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

