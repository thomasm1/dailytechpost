import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList"; 
import PublicBlogItem from "./components/PublicBlogItem";
import PublicBlogsList from "./components/PublicBlogsList"; 
import NewsParent from './components/NewsParent'; 
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Article from './components/Article';
import Write from "./layout/Write";
import  {styles}   from './config';

 
const RoutesDaily = () => (
  <BrowserRouter>
  
  <Header /> 
     
    <main className="app-main">
      <Routes>
        <Route path="/" element={<PublicBlogsList />} />
        <Route path="/:id" element={<PublicBlogItem />} />

        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostItem />} />
        
      <Route path="/article/:id" element={Article}/>
        <Route path="/write" element={<Write />} />
        {/* <Route path="/news/:id" element={<NewsList />} /> */}
        <Route path="/news" element={<NewsParent/>} />
        <Route path="*" element={<h3>Ooops, page not found</h3>} />
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

