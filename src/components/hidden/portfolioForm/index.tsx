import Button from "@/components/ui/button"
import styles from './portform.module.css'

const PortfolioForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={styles.panel}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="describe">describe</label>
        <textarea id="describe" />
      </div>
      <div>
        <label htmlFor="photo_url">Local photo</label>
        <input type="text" id="photo_url" />
      </div>
      <div>
        <label htmlFor="product_year">product year</label>
        <input type="text" id="product_year" />
      </div>
      <div className={styles['button-create-container']}><Button>Create</Button></div>
      </div>
    </form>
  )
}

export default PortfolioForm
