import Image from 'next/image'
import styles from './page.module.css'
import { add, subtract } from '@repo/math-helpers'
import { ButtonAction, ContentCard, Text } from '@repo/ui'
import { Typography } from '@mui/material'

export default function Page(): JSX.Element {
  const addTwoNumber =  add(1, 2)
  const subtractTwoNumber = subtract(11, 1)
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

      <ButtonAction webName='https://nextjs.org/docs' buttonName='Link to NextJS'/>
      <ContentCard />
      <Text />
      <div>WEB APP</div>
      <Typography>Tổng 2 số: {addTwoNumber}</Typography>
      <Typography>Hiệu 2 số: {subtractTwoNumber}</Typography>

    </main>
  )
}
