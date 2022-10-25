
import React from 'react'
import { Link } from 'react-router-dom'

const AppSidebar = () => {
  return (
    <ul className="sidebar navbar-nav">
    <li className="nav-item active">
       <Link to="/" className="nav-link">
       <i className="fas fa-fw fa-home"></i>
       <span>Home</span>
       </Link>
    </li>
    <li className="nav-item">
       <Link to="/channels" className="nav-link" >
       <i className="fas fa-fw fa-users"></i>
       <span>Channels</span>
       </Link>
    </li>
    <li className="nav-item">
       <Link to="/single-channel" className="nav-link">
       <i className="fas fa-fw fa-user-alt"></i>
       <span>Single Channel</span>
       </Link>
    </li>
    <li className="nav-item">
       <a className="nav-link" href="video-page.html">
       <i className="fas fa-fw fa-video"></i>
       <span>Video Page</span>
       </a>
    </li>
    <li className="nav-item">
       <a className="nav-link" href="upload-video.html">
       <i className="fas fa-fw fa-cloud-upload-alt"></i>
       <span>Upload Video</span>
       </a>
    </li>
   
    <li className="nav-item">
       <Link to="/history" className="nav-link">
       <i className="fas fa-fw fa-history"></i>
       <span>History Page</span>
       </Link>
    </li>
    <li className="nav-item dropdown">
       <a className="nav-link dropdown-toggle" href="categories.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       <i className="fas fa-fw fa-list-alt"></i>
       <span>Categories</span>
       </a>
       <div className="dropdown-menu">
          <a className="dropdown-item" href="categories.html">Movie</a>
          <a className="dropdown-item" href="categories.html">Music</a>
          <a className="dropdown-item" href="categories.html">Television</a>
       </div>
    </li>
    <li className="nav-item channel-sidebar-list">
       <h6>SUBSCRIPTIONS</h6>
       <ul>
          <li>
             <a href="subscriptions.html">
             <img className="img-fluid" alt="" src="./assets/img/s1.png" /> Your Life 
             </a>
          </li>
          <li>
             <a href="subscriptions.html">
             <img className="img-fluid" alt="" src="./assets/img/s2.png" /> Unboxing  <span className="badge badge-warning">2</span>
             </a>
          </li>
          <li>
             <a href="subscriptions.html">
             <img className="img-fluid" alt="" src="./assets/img/s3.png" /> Product / Service  
             </a>
          </li>
          <li>
             <a href="subscriptions.html">
             <img className="img-fluid" alt="" src="./assets/img/s4.png" />  Gaming 
             </a>
          </li>
       </ul>
    </li>
 </ul>
  )
}

export default AppSidebar