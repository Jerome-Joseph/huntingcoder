import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    console.log("useeffect is running");
    fetch("http://localhost:3000/api/blogs").then((a)=>{
      return a.json();
    }).then((parsed)=>{
      console.log(parsed)
      setBlogs(parsed);
    })
  },[])
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem)=>{
          return <div key={blogItem.slug} className="blogItems">
            <Link href={`/blogposts/${blogItem.slug}`}>
            <h3 className={styles.blogh3}>{blogItem.title}</h3></Link>
            <p className={styles.blogp}>{blogItem.content.substr(0,140)}....</p>
          </div>
        })}
      </main>
    </div>
  )
}

export default Blogs