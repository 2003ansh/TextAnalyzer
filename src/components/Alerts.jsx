import React from 'react'

function Alerts(props) {
  return (
    <div style={{height:'10px'}}>
      { props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alert.type}</strong> {props.alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>}
    </div>
  )
}
// this function will render only when props.alert is true and the no.of times it will render depends upon the no.of times we update the alert props using setalert function.
export default Alerts
