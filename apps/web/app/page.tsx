import Image from "next/image";
import styles from "./page.module.css";
import { add, subtract } from "@repo/math-helpers";
import { ButtonAction, ContentCard, Text } from "@repo/ui";
import { Typography } from "@mui/material";
import { ROUTE_TO_DOCS } from "@repo/constant";

export default function Page(): JSX.Element {
  const addTwoNumber = add(1, 9);
  const subtractTwoNumber = subtract(11, 1);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>NextJS</p>
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

      <ButtonAction
        webName="https://nextjs.org/docs"
        buttonName="Link to NextJS"
      />
      <ContentCard
        imageCard="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep.jpg"
        titleCard="Hình Web App"
        textCard="Lorem"
        firstAction="DOCS"
        firstLink={ROUTE_TO_DOCS}
      />
      <Text />
      <div>WEB APP</div>
      <Typography>Add: {addTwoNumber}</Typography>
      <Typography>Subtract: {subtractTwoNumber}</Typography>
    </main>
  );
}
