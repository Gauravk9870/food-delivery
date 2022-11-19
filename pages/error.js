import styles from "../styles/Error.module.scss"

const Error = () => {
  return (
    <div className={styles.error}>
        <span>Error 404</span>
        <span>Something went wrong</span>
    </div>
  )
}

export default Error