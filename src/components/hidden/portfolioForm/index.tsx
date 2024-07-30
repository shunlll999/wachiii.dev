import Button from "@/components/ui/button"
import styles from './portform.module.css'
import { FormEventHandler, useState } from "react"
import { createPort } from "@/connections/createPort"

const PortfolioForm = () => {
  const [posrtData, setPortData] = useState<any>({
    type: '',
    name: '',
    describe: '',
    photo_url: '',
    product_year: '',
  })

  const updateState = (e: any) => {
    console.log(e.target.value)
    setPortData({
      ...posrtData,
      [e.target.id]: e.target.value
    })
  }

  const addContent = async (e:any) => {
    e.preventDefault()
    await createPort(posrtData)

  }

  console.log(posrtData)

  return (
    <form onSubmit={addContent}>
      <div className={styles.panel}>
      <div className={styles['form-container']}>
        <label htmlFor="type">type</label>
        <select id="type" onChange={updateState}>
          <option value="web">Web</option>
          <option value="games">Games</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>
      <div className={styles['form-container']}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={updateState} />
      </div>
      <div className={styles['form-container']}>
        <label htmlFor="describe">describe</label>
        <textarea id="describe" onChange={updateState} />
      </div>
      <div className={styles['form-container']}>
        <label htmlFor="photo_url">Local photo</label>
        <input type="text" id="photo_url" onChange={updateState} />
      </div>
      <div className={styles['form-container']}>
        <label htmlFor="product_year">product year</label>
        <input type="number" id="product_year" onChange={updateState} />
      </div>
      <div className={styles['button-create-container']}><Button>Create</Button></div>
      </div>
    </form>
  )
}

export default PortfolioForm
