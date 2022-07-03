import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
        h2{
          font-size: 38px
        }
        h3{
          font-size: 28px
        }
        `}
      </style>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keyword" content="nextjs blogs huntingcoder coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className="dummy">Hunting Coder</span>
        </h1>
      
      <div className={styles.imagewrap}>
        <Image className={styles.myImg} src='/homepage.avif' width={237} height={158}/>
        {/* <img className={styles.myImg} src="/homepage.avif" width={237} height={158} alt="hunting coder" /> */}
      </div>

        <p className={styles.description}>
         A blog for hunting coders by a hunting coder.
        </p>

        <div className="blogs">
          <h2>Popular Blogs</h2>
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
          <div className="blogItems">
            <h3>How to Learn Javascript in 2022?</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        
      </main>

      <footer className={styles.footer}>
    
      </footer>
    </div>
  )
}
