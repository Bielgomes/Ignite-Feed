import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/bielgomes.png',
      name: 'Gabriel Gomes',
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Eai Pessoal 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, o nome é ignite Feed 🚀' },
      { type: 'link', content: 'bielgomes.tk/igniteFeed' }
    ],
    publishedAt: new Date('2022-07-01 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jvadebossan.png',
      name: 'João Vitor',
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Eai Pessoal 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, o nome é ignite Feed 🚀' },
      { type: 'link', content: 'jvadebossan.tk/igniteFeed' }
    ],
    publishedAt: new Date('2022-07-06 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}