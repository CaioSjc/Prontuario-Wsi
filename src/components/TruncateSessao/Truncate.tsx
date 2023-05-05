import {useState} from 'react'
import S  from '../../Styles/StyleSessãoCard'

type Props = {
  size?: number
  children: string
}

const Truncate = ({size = 220, children}: Props) => {
  const currentTextSize = children.length
  const showTrunc = size >= currentTextSize
  const [show, setShow] = useState(showTrunc)
  const currentSize = show ? currentTextSize : size

  const toogle = () => {
    setShow(!show)
  }

  return (
    <>
      {showTrunc ? children : (
        <>
          {children.slice(0, currentSize).padEnd(show ? currentSize : currentSize + 3, '.')}
          {' '}<S.Span onClick={toogle}>{show ? 'Ver menos' : 'Ver mais'}</S.Span>
        </>
      )}
    </>
  )
}

export default Truncate
