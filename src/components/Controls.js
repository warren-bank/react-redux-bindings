const Controls = ({clickA, clickB}) => (
  <div>
    <button onClick={() => clickA()}>dispatch action A</button> | <button onClick={() => clickB()}>dispatch action B</button>
  </div>
)

export default Controls
