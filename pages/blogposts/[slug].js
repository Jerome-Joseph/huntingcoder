import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs';

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog)
  // const router = useRouter();
  // useEffect(() => {
  //   if(!router.isReady) return;
  //   const {slug} = router.query;
  //   fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a)=>{
  //     return a.json();
  //   }).then((parsed)=>{
  //     console.log(parsed)
  //     setBlog(parsed);
  //   })
  // }, [router.isReady])
  
    
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <div>
        {blog && blog.content}
      </div>
      </main>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   const {slug} = context.query;
//   const data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
//   const myBlog = await data.json()

//   // Pass data to the page via props
//   return { props: { myBlog } }
// }

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug:"how-to-learn-javascript" } },
      { params: { slug:"how-to-learn-nextjs" } },
      { params: { slug:"how-to-learn-react" } }
    ],
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps(context) {

  const {slug} = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf8');

  return { props: { myBlog: JSON.parse(myBlog) } }
}

export default Slug