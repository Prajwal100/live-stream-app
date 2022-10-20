
import React from 'react'
import { Link } from 'react-router-dom'

const AppFooter = () => {
  return (
    <footer className="sticky-footer">
    <div className="container">
       <div className="row no-gutters">
          <div className="col-lg-6 col-sm-6">
             <p className="mt-1 mb-0"><strong className="text-dark">LiveSream</strong>. 
                <small className="mt-0 mb-0">By <a className="text-primary" target="_blank" href="https://github.com/Prajwal100">Prajwal R.</a>
                </small>
             </p>
          </div>
          <div className="col-lg-6 col-sm-6 text-right">
             <div className="app">
                <Link to="#" className="mr-1"><img alt="" src="./assets/img/google.png" /></Link>
                <Link to="#"><img alt="" src="./assets/img/apple.png" /></Link>
             </div>
          </div>
       </div>
    </div>
 </footer>
  )
}

export default AppFooter