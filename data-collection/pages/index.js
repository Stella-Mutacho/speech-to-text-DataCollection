import Head from 'next/head'


import styles from '../styles/Home.module.css'
import audioplayer from "../components/audioplayer"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Play Audio file</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <audioplayer />
      </main>
    </div>
  )
}
