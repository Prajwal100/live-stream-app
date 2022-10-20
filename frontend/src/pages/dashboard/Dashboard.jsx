import React from 'react'

const Dashboard = () => {
  return (
    <div className="container-fluid pb-0">
       <div className="top-mobile-search">
          <div className="row">
             <div className="col-md-12">   
                <form className="mobile-search">
                   <div className="input-group">
                     <input type="text" placeholder="Search for..." className="form-control" />
                       <div className="input-group-append">
                         <button type="button" className="btn btn-dark"><i className="fas fa-search"></i></button>
                       </div>
                   </div>
                </form>   
             </div>
          </div>
       </div>
      
       <div className="video-block section-padding">
          <div className="row">
             <div className="col-md-12">
                <div className="main-title">
                   <div className="btn-group float-right right-action">
                      <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sort by <i className="fa fa-caret-down" aria-hidden="true"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                         <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                         <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                         <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                      </div>
                   </div>
                   <h6>Featured Videos</h6>
                </div>
             </div>
             <div className="col-xl-3 col-sm-6 mb-3">
                <div className="video-card">
                   <div className="video-card-image">
                      <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                      <a href="#"><img className="img-fluid" src="./assets/img/v1.png" alt="" /></a>
                      <div className="time">3:50</div>
                   </div>
                   <div className="video-card-body">
                      <div className="video-title">
                         <a href="#">There are many variations of passages of Lorem</a>
                      </div>
                      <div className="video-page text-success">
                         Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                      </div>
                      <div className="video-view">
                         1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-xl-3 col-sm-6 mb-3">
                <div className="video-card">
                   <div className="video-card-image">
                      <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                      <a href="#"><img className="img-fluid" src="./assets/img/v2.png" alt="" /></a>
                      <div className="time">3:50</div>
                   </div>
                   <div className="video-card-body">
                      <div className="video-title">
                         <a href="#">There are many variations of passages of Lorem</a>
                      </div>
                      <div className="video-page text-success">
                         Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                      </div>
                      <div className="video-view">
                         1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-xl-3 col-sm-6 mb-3">
                <div className="video-card">
                   <div className="video-card-image">
                      <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                      <a href="#"><img className="img-fluid" src="./assets/img/v3.png" alt="" /></a>
                      <div className="time">3:50</div>
                   </div>
                   <div className="video-card-body">
                      <div className="video-title">
                         <a href="#">There are many variations of passages of Lorem</a>
                      </div>
                      <div className="video-page text-danger">
                         Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger"></i></a>
                      </div>
                      <div className="video-view">
                         1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-xl-3 col-sm-6 mb-3">
                <div className="video-card">
                   <div className="video-card-image">
                      <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                      <a href="#"><img className="img-fluid" src="./assets/img/v4.png" alt="" /></a>
                      <div className="time">3:50</div>
                   </div>
                   <div className="video-card-body">
                      <div className="video-title">
                         <a href="#">There are many variations of passages of Lorem</a>
                      </div>
                      <div className="video-page text-success">
                         Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                      </div>
                      <div className="video-view">
                         1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-xl-3 col-sm-6 mb-3">
                <div className="video-card">
                   <div className="video-card-image">
                      <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                      <a href="#"><img className="img-fluid" src="./assets/img/v5.png" alt="" /></a>
                      <div className="time">3:50</div>
                   </div>
                   <div className="video-card-body">
                      <div className="video-title">
                         <a href="#">There are many variations of passages of Lorem</a>
                      </div>
                      <div className="video-page text-success">
                         Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                      </div>
                      <div className="video-view">
                         1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-xl-3 col-sm-6 mb-3">
                <div className="video-card">
                   <div className="video-card-image">
                      <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                      <a href="#"><img className="img-fluid" src="./assets/img/v6.png" alt="" /></a>
                      <div className="time">3:50</div>
                   </div>
                   <div className="video-card-body">
                      <div className="video-title">
                         <a href="#">There are many variations of passages of Lorem</a>
                      </div>
                      <div className="video-page text-danger">
                         Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger"></i></a>
                      </div>
                      <div className="video-view">
                         1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-xl-3 col-sm-6 mb-3">
                <div className="video-card">
                   <div className="video-card-image">
                      <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                      <a href="#"><img className="img-fluid" src="./assets/img/v7.png" alt="" /></a>
                      <div className="time">3:50</div>
                   </div>
                   <div className="video-card-body">
                      <div className="video-title">
                         <a href="#">There are many variations of passages of Lorem</a>
                      </div>
                      <div className="video-page text-success">
                         Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                      </div>
                      <div className="video-view">
                         1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-xl-3 col-sm-6 mb-3">
                <div className="video-card">
                   <div className="video-card-image">
                      <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                      <a href="#"><img className="img-fluid" src="./assets/img/v8.png" alt="" /></a>
                      <div className="time">3:50</div>
                   </div>
                   <div className="video-card-body">
                      <div className="video-title">
                         <a href="#">There are many variations of passages of Lorem</a>
                      </div>
                      <div className="video-page text-success">
                         Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                      </div>
                      <div className="video-view">
                         1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <hr className="mt-0" />
       <div className="video-block section-padding">
          <div className="row">
             <div className="col-md-12">
                <div className="main-title">
                   <div className="btn-group float-right right-action">
                      <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sort by <i className="fa fa-caret-down" aria-hidden="true"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                         <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                         <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                         <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                      </div>
                   </div>
                   <h6>Popular Channels</h6>
                </div>
             </div>
             <div className="col-xl-3 col-sm-6 mb-3">
                <div className="channels-card">
                   <div className="channels-card-image">
                      <a href="#"><img className="img-fluid" src="./assets/img/s1.png" alt="" /></a>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                   </div>
                   <div className="channels-card-body">
                      <div className="channels-title">
                         <a href="#">Channels Name</a>
                      </div>
                      <div className="channels-view">
                         382,323 subscribers
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-xl-3 col-sm-6 mb-3">
                <div className="channels-card">
                   <div className="channels-card-image">
                      <a href="#"><img className="img-fluid" src="./assets/img/s2.png" alt="" /></a>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                   </div>
                   <div className="channels-card-body">
                      <div className="channels-title">
                         <a href="#">Channels Name</a>
                      </div>
                      <div className="channels-view">
                         382,323 subscribers
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-xl-3 col-sm-6 mb-3">
                <div className="channels-card">
                   <div className="channels-card-image">
                      <a href="#"><img className="img-fluid" src="./assets/img/s3.png" alt="" /></a>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-secondary btn-sm">Subscribed <strong>1.4M</strong></button></div>
                   </div>
                   <div className="channels-card-body">
                      <div className="channels-title">
                         <a href="#">Channels Name <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle"></i></span></a>
                      </div>
                      <div className="channels-view">
                         382,323 subscribers
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-xl-3 col-sm-6 mb-3">
                <div className="channels-card">
                   <div className="channels-card-image">
                      <a href="#"><img className="img-fluid" src="./assets/img/s4.png" alt="" /></a>
                      <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                   </div>
                   <div className="channels-card-body">
                      <div className="channels-title">
                         <a href="#">Channels Name</a>
                      </div>
                      <div className="channels-view">
                         382,323 subscribers
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Dashboard