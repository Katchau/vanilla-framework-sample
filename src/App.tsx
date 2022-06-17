import './App.scss';
import BlogCard from './components/BlogCard';
import { useEffect, useState } from 'react';

const API_REQUEST = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

function App () {
  let [loading, setLoading] = useState(true);
  let [blogData, setBlogData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_REQUEST);
      const data = await response.json();
      setBlogData(data);
      setLoading(false);
    }
    fetchData();
  }, []);


  function BodyData() {
    if (loading) {
      return (
        <div className='row'>
          <div className='col-12'>
            Loading assets...
            <i className="p-icon--spinner u-animation--spin"></i> 
          </div>
        </div>
      );
    } else {
      return (
        <div className='row'>
          {blogData.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </div>
      );
    }
  }


  return (
    <main className="app">
      <header className="app-header p-strip--suru-topped">
        <div className="row u-vertically-center">
          <div className="col-8">
            <h2>Canonical Vanilla Framework Challenge</h2>
          </div>
        </div>
      </header>
      <section className='p-strip is-shallow'>
        {/* aqui tinha u-equal-height e u-clearfix */}
        <BodyData />
      </section>
    </main>
  );
  
}

export default App;
