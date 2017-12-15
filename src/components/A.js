import B from '../containers/B'

const A = ({val}) => {
  console.log('updating component A')

  return (
    <div>
      <span>{val}</span> | <B />
    </div>
  )
}

export default A
