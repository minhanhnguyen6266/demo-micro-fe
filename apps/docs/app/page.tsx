import Image from 'next/image'
import styles from './page.module.css'
import { Button, Card, Text } from '@repo/ui'

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean
  conic?: boolean
  className?: string
}): JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  )
}

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

      <Text />
      <Button />
      <div>DOCS</div>
      <Card />

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logos}>
            <div className={styles.circles}>
              <Image
                alt=""
                height={614}
                src="circles.svg"
                width={614}
                style={{ pointerEvents: 'none' }}
              />
            </div>
            <div className={styles.logoGradientContainer}>
              <Gradient className={styles.logoGradient} conic small />
            </div>

            <div className={styles.logo}>
              <Image
                alt="Turborepo"
                height={120}
                priority
                src="turborepo.svg"
                width={120}
                style={{ pointerEvents: 'none' }}
              />
            </div>
          </div>
          <Gradient className={styles.backgroundGradient} conic />
        </div>
      </div>
    </main>
  )
}
