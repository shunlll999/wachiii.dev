import styles from './button.module.css';
const Button = ({ children }: any) => {
  return (
    <button className={styles.button}>{children}</button>
  )
}

export const CloseButton = ({ children, className, onClick }: any) => {
  return (
    <div onClick={onClick}>
      <button className={[styles.buttonClose, className].join('')}>{children}</button>
    </div>
  )
}

export default Button
