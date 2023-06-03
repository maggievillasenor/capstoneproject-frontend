import { useRouter } from "next/router";
import { Button } from "@mui/material";
import styles from "../styles/Home.module.css";

export default function Home({title, summary}) {
  const router = useRouter();

  return  (
    <section className={styles.Home}>
      <h1 className={styles.Name}>{title}</h1>
      <div className={styles.Summary}>{summary}</div>
      <div>
        <Button variant="outlined" color="secondary" size="large" onClick={() => router.push("/catalog")}>Shop Now</Button>
      </div>
    </section>
  );
}

export async function getStaticProps () {
  //Get your data from an API
  return {
    props: {
      title: "Welcome to Ma Chérie",
      summary: "Elevate your style with Ma Chérie's timeless elegance and refined fashion. Experience high couture designs that embody grace and glamour"
    }
  }
}
