import React from "react";

const History = () => {
  return (
    <div className="container-fluid">
      <div className="video-block section-padding">
        <div className="row">
          <div className="col-md-12">
            <div className="main-title">
              <div className="btn-group float-right right-action">
                <a
                  href="#"
                  className="right-action-link text-gray"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort by <i className="fa fa-caret-down" aria-hidden="true"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-fw fa-star"></i> &nbsp; Top Rated
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-fw fa-signal"></i> &nbsp; Viewed
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-fw fa-times-circle"></i> &nbsp; Close
                  </a>
                </div>
              </div>
              <h6>Watch History</h6>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="video-card history-video">
              <div className="video-card-image">
                <a className="video-close" href="#">
                  <i className="fas fa-times-circle"></i>
                </a>
                <a className="play-icon" href="#">
                  <i className="fas fa-play-circle"></i>
                </a>
                <a href="#">
                  <img className="img-fluid" src="img/v1.png" alt="" />
                </a>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  1:40
                </div>
              </div>
              <div className="video-card-body">
                <div className="video-title">
                  <a href="#">There are many variations of passages of Lorem</a>
                </div>
                <div className="video-page text-success">
                  Education{" "}
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    href="#"
                    data-original-title="Verified"
                  >
                    <i className="fas fa-check-circle text-success"></i>
                  </a>
                </div>
                <div className="video-view">
                  1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months
                  ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="video-card history-video">
              <div className="video-card-image">
                <a className="video-close" href="#">
                  <i className="fas fa-times-circle"></i>
                </a>
                <a className="play-icon" href="#">
                  <i className="fas fa-play-circle"></i>
                </a>
                <a href="#">
                  <img className="img-fluid" src="img/v2.png" alt="" />
                </a>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                    style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  1:40
                </div>
              </div>
              <div className="video-card-body">
                <div className="video-title">
                  <a href="#">There are many variations of passages of Lorem</a>
                </div>
                <div className="video-page text-success">
                  Education{" "}
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    href="#"
                    data-original-title="Verified"
                  >
                    <i className="fas fa-check-circle text-success"></i>
                  </a>
                </div>
                <div className="video-view">
                  1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months
                  ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="video-card history-video">
              <div className="video-card-image">
                <a className="video-close" href="#">
                  <i className="fas fa-times-circle"></i>
                </a>
                <a className="play-icon" href="#">
                  <i className="fas fa-play-circle"></i>
                </a>
                <a href="#">
                  <img className="img-fluid" src="img/v3.png" alt="" />
                </a>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                    style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  1:40
                </div>
              </div>
              <div className="video-card-body">
                <div className="video-title">
                  <a href="#">There are many variations of passages of Lorem</a>
                </div>
                <div className="video-page text-danger">
                  Education{" "}
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    href="#"
                    data-original-title="Unverified"
                  >
                    <i className="fas fa-frown text-danger"></i>
                  </a>
                </div>
                <div className="video-view">
                  1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months
                  ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="video-card history-video">
              <div className="video-card-image">
                <a className="video-close" href="#">
                  <i className="fas fa-times-circle"></i>
                </a>
                <a className="play-icon" href="#">
                  <i className="fas fa-play-circle"></i>
                </a>
                <a href="#">
                  <img className="img-fluid" src="img/v4.png" alt="" />
                </a>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                    style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  1:40
                </div>
              </div>
              <div className="video-card-body">
                <div className="video-title">
                  <a href="#">There are many variations of passages of Lorem</a>
                </div>
                <div className="video-page text-success">
                  Education{" "}
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    href="#"
                    data-original-title="Verified"
                  >
                    <i className="fas fa-check-circle text-success"></i>
                  </a>
                </div>
                <div className="video-view">
                  1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months
                  ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="video-card history-video">
              <div className="video-card-image">
                <a className="video-close" href="#">
                  <i className="fas fa-times-circle"></i>
                </a>
                <a className="play-icon" href="#">
                  <i className="fas fa-play-circle"></i>
                </a>
                <a href="#">
                  <img className="img-fluid" src="img/v5.png" alt="" />
                </a>
                <div className="time">3:50</div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                    style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  1:40
                </div>
              </div>
              <div className="video-card-body">
                <div className="video-title">
                  <a href="#">There are many variations of passages of Lorem</a>
                </div>
                <div className="video-page text-success">
                  Education{" "}
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    href="#"
                    data-original-title="Verified"
                  >
                    <i className="fas fa-check-circle text-success"></i>
                  </a>
                </div>
                <div className="video-view">
                  1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months
                  ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center pagination-sm mb-0">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default History;
