import style from './timeline.module.css'
const Timeline = ({ data }: any) => {
  return (
    <ul className={style['timeline-list']}>
      {data.map((item: any) => (
        <li key={item[0]} className={style['timeline-item']}>
          <div className={`${style['timeline-item-value']} ${style['align-right']}`}>{item[0]}</div>
          <div className={style['timeline-item-partition']}>
            <span className={style['bullet']} />
            <span className={style['vertical-line']} />
          </div>
          <div className={style['timeline-item-value']}>{item[1]}</div>
        </li>
      ))}
    </ul>
  )
}

export default Timeline
