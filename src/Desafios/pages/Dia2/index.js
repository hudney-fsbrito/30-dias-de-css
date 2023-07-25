import styleDia2 from './dia2.module.css';

function Loading(props) {

  return (
    <div className={styleDia2.container}>
      <div className={styleDia2.content}></div>
      <h1 className={styleDia2.textLoading}>Loading</h1>
    </div>
  )

}

export default Loading;