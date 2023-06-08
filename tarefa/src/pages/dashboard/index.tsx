import { GetServerSideProps } from 'next';
import styles from './styles.module.css';
import Head from 'next/head';
import { getSession } from 'next-auth/react';
import { Textarea } from '@/components/textarea';
export default function DashBoard() {
   return (
      <div className={styles.container}>
         <Head>
            <title>Painel de Tarefas</title>
         </Head>
         <main className={styles.main}>
            <section className={styles.content}>
               <div className={styles.contentForm}>
                  <h1 className={styles.title}>Qual sua Tarefa</h1>
                  <form>
                     <Textarea
                        placeholder='Digite sua Tarefa...'
                     />
                     <div className={styles.checkboxArea}>
                        <input type="checkbox" className={styles.checkbox} />
                        <label>Deixar tarefa publica?</label>
                     </div>
                     <button className={styles.button} type='submit'>Registrar</button>
                  </form>
               </div>

            </section>
         </main>
      </div>
   )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

   const session = await getSession({ req })

   if (!session?.user) {
      return {
         redirect: {
            destination: "/",
            permanent: false
         }
      }
   }
   return {
      props: {}
   }
}