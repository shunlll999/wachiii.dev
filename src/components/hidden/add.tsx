import { useEffect, useState } from 'react';
import Button from '../ui/button';
import styles from './hidden.module.css'
import { useAuthContext } from '@/app/context/auth'; // Import the UserContextType
import PortfolioForm from './portfolioForm';
import { getPorts } from '@/connections/createPort';

const programList = [
  { name: 'Select program:', value: 0 },
  { name: 'Create my portfolio', value: 1 },
  { name: 'Update my profile', value: 2 }
]

const HiddenAddContent = ({response, killedBackdoor }: {response: any, killedBackdoor: () => void}) => {
  const { user }: any = useAuthContext();
  const [ports, setPorts] = useState<any>([])
  const [itemSelected, setItemSelected] = useState<any>(null)

  const onKilled = () => {
    localStorage.removeItem('!1::user-cache')
    killedBackdoor && killedBackdoor()
  }

  const onSelectItem = (e: any) => {
    console.log(e.target.value)
    setItemSelected(e.target.value)
  }

  const getPortfolio = async () => {
    const ports = await getPorts()
    setPorts(ports)
  }

  useEffect(() => {
    getPortfolio()
  }, [])

  const programSelect: { [key: number]: JSX.Element | null } = {
    1: <PortfolioForm />,
    2: <div>Profile data</div>,
    0: null
  }

  return (
    <div className={styles['hidden-container']}>
      <h1 className={styles.title}>Back door partal</h1>
      <div className={styles['desktop-wrapper']}>
        <div>{response.role}<span className={styles['caption-smaill']}>{response.emailVerified ? ' Verified' : ' Not Verified'}</span></div>
        <div className={styles['custom-select']}>
          <select onChange={onSelectItem}>
            {programList.map((item, key) => {
              return <option key={key} value={item.value}>{item.name}</option>
            })}
          </select>
        </div>
        {programSelect[itemSelected]}
      </div>
      {ports.map((port: any, key: number) => {
        return <div key={key}>{port.name}</div>
      })}
      <div className={styles['mobile-wrapper']}>
        The program is not support on Mobile view
      </div>
      <div style={{ position: 'absolute', bottom: 10, right: 10, width: 100 }}>
        <Button onClick={onKilled}>Kill BACK DOOR</Button>
      </div>
    </div>
  )
}

export default HiddenAddContent
