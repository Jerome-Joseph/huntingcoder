import React from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>Title of the page - {slug}</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dolore aperiam fugiat odit officia ullam dignissimos rerum nesciunt deserunt molestias eos, alias asperiores nam qui quam accusamus nostrum laboriosam eaque repellendus ipsum, cumque autem maxime accusantium! Fugiat architecto eligendi earum eius. Assumenda quibusdam ipsum doloribus minima excepturi nihil, earum alias!
      </div>
      </main>
    </div>
  )
}

export default slug