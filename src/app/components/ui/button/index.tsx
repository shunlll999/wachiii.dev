import styles from './button.module.css';
const Button = ({ children }: any) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}

export default Button
