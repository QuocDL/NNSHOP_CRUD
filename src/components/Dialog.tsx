/* eslint-disable @typescript-eslint/no-explicit-any */
import '../style/Dialog.scss'
const Dialog = ({message, onDialog}: {message: string, onDialog: any}) => {
  return (
    <div  className='dialog'>
      <div className='dialog_box'>
        <h3>{message}</h3>
        <div className='dialog_action'>
            <button
            onClick ={()=> onDialog(true)} className='btn_yes'>Yes</button>
            <button
            onClick ={()=> onDialog(false)} className='btn_no'>No</button>
        </div>
      </div>
    </div>
  )
}

export default Dialog
