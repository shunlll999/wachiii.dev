import styles from './button.module.css';
const Button = ({ children, onClick, type }: any) => {
  return (
    <button type={type || ''} className={styles.button} onClick={onClick && onClick}>{children}</button>
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
