import BackDoorForm from '@/components/hidden/form';
import Button from '../ui/button';
const HiddenAddContent = ({response, killedBackdoor }: {response: any, killedBackdoor: () => void}) => {

  const onKilled = () => {
    localStorage.removeItem('!1::user-cache')
    killedBackdoor && killedBackdoor()
  }

  return (
    <div style={{ position: 'fixed', width:'100%', height: '100%', top: 0, left: 0, backdropFilter: 'blur(5px)', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 99999 }}>
      <div>Back door partal</div>
      <div>{response.email}</div>
      <div>{response.role}</div>
      <div>{response.emailVerified}</div>
      <div style={{ position: 'absolute', bottom: 10, right: 10, width: 100 }}>
        <Button onClick={onKilled}>Kill BACK DOOR</Button>
      </div>
    </div>
  )
}

export default HiddenAddContent
