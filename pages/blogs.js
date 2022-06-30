import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs';

const Blogs = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)

  // useEffect(() => {
  //   console.log("useeffect is running");
  //   fetch("http://localhost:3000/api/blogs").then((a)=>{
  //     return a.json();
  //   }).then((parsed)=>{
  //     console.log(parsed)
  //     setBlogs(parsed);
  //   })
  // },[])
  
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

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const data = await fetch("http://localhost:3000/api/blogs");
//   const allBlogs = await data.json()

//   // Pass data to the page via props
//   return { props: { allBlogs } }
// }

export async function getStaticProps() {
  
  let data = await fs.promises.readdir('blogdata');
  let myfile;
  let allBlogs =[];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item)
    myfile = await fs.promises.readFile(('blogdata/'+ item), 'utf-8');
    allBlogs.push(JSON.parse(myfile))
  }

  return { props: { allBlogs } }
}

export default Blogs