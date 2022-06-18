import React from 'react'
import Link from 'next/link'
import styles from '../styles/Blog.module.css'

const Blogs = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <div className="blogItems">
            <Link href={`/blogposts/learn-javascript`}>
            <h3 className={styles.blogh3}>How to Learn Javascript in 2022?</h3></Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="blogItems">
            <h3>How to Learn Javascript in 2022?</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="blogItems">
            <h3>How to Learn Javascript in 2022?</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="blogItems">
            <h3>How to Learn Javascript in 2022?</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
      </main>
    </div>
  )
}

export default Blogs