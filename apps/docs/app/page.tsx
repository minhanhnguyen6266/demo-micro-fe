import Image from 'next/image'
import styles from './page.module.css'
import { Text, ButtonAction, ContentCard } from '@repo/ui'
import { ROUTE_TO_WEB } from '@repo/constant'

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>TurboRepo</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"
            rel="noopener noreferrer"
            target="_blank"
          >
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
      <ContentCard
        imageCard="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep-5.jpg"
        titleCard="Hình Docs App"
        textCard="Lorem"
        firstAction="WEB"
        firstLink={ROUTE_TO_WEB}
      />
      <Text />
      <div>DOCS APP</div>
    </main>
  )
}
