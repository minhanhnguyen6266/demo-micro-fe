import Image from 'next/image'
import styles from './page.module.css'
import { Text, ButtonAction, ContentCard } from '@repo/ui'

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>examples/basic&nbsp;</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"
            rel="noopener noreferrer"
            target="_blank"
          >
            By{' '}
            <Image
              alt="Vercel Logo"
              className={styles.vercelLogo}
              height={24}
              priority
              src="/vercel.svg"
              width={100}
            />
          </a>
        </div>
      </div>

      <ButtonAction webName='https://turbo.build/repo/docs' buttonName='Link to TurboRepo'/>
      <ContentCard />
      <Text />
      <div>DOCS APP</div>
    </main>
  )
}
