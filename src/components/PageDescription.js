import styles from "./PageDescription.module.css";

export default function PageDescription ({title, description, price}) {
    return (
        <div className={styles.PageDescription}>
            <h1>{title}</h1>
            <div className={styles.Divider}></div>
            <span>{description}</span>
            <span>{price}</span>
        </div>
    );
}