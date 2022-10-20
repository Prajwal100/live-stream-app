import React from "react";

const singleChannel = () => {
  return (
    <>
      
      <div class="container-fluid">
      <div class="single-channel-image">
        <img class="img-fluid" alt="" src="./assets/img/channel-banner.png" />
        <div class="channel-profile">
          <img class="channel-profile-img" alt="" src="./assets/img/s2.png" />
          <div class="social hidden-xs">
            Social &nbsp;
            <a class="fb" href="#">
              Facebook
            </a>
            <a class="tw" href="#">
              Twitter
            </a>
            <a class="gp" href="#">
              Google
            </a>
          </div>
        </div>
      </div>
      <div class="single-channel-nav">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="channel-brand" href="#">
            Osahan Channel{" "}
            <span
              title=""
              data-placement="top"
              data-toggle="tooltip"
              data-original-title="Verified"
            >
              <i class="fas fa-check-circle text-success"></i>
            </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Videos <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Playlist
                </a>
              </li>
             
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Donate
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control form-control-sm mr-sm-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success btn-sm my-2 my-sm-0"
                type="submit"
              >
                <i class="fas fa-search"></i>
              </button>{" "}
              &nbsp;&nbsp;&nbsp;{" "}
              <button class="btn btn-outline-danger btn-sm" type="button">
                Subscribe <strong>1.4M</strong>
              </button>
            </form>
          </div>
        </nav>
      </div>
        <div class="video-block section-padding pt-4">
          <div class="row">
            <div class="col-md-12">
              <div class="main-title">
                <div class="btn-group float-right right-action">
                  <a
                    href="#"
                    class="right-action-link text-gray"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort by <i class="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-fw fa-star"></i> &nbsp; Top Rated
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-fw fa-signal"></i> &nbsp; Viewed
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-fw fa-times-circle"></i> &nbsp; Close
                    </a>
                  </div>
                </div>
                <h6>Videos</h6>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="video-card">
                <div class="video-card-image">
                  <a class="play-icon" href="#">
                    <i class="fas fa-play-circle"></i>
                  </a>
                  <a href="#">
                    <img class="img-fluid" src="./assets/img/v1.png" alt="" />
                  </a>
                  <div class="time">3:50</div>
                </div>
                <div class="video-card-body">
                  <div class="video-title">
                    <a href="#">
                      There are many variations of passages of Lorem
                    </a>
                  </div>
                  <div class="video-page text-success">
                    Education{" "}
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      href="#"
                      data-original-title="Verified"
                    >
                      <i class="fas fa-check-circle text-success"></i>
                    </a>
                  </div>
                  <div class="video-view">
                    1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11
                    Months ago
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="video-card">
                <div class="video-card-image">
                  <a class="play-icon" href="#">
                    <i class="fas fa-play-circle"></i>
                  </a>
                  <a href="#">
                    <img class="img-fluid" src="./assets/img/v2.png" alt="" />
                  </a>
                  <div class="time">3:50</div>
                </div>
                <div class="video-card-body">
                  <div class="video-title">
                    <a href="#">
                      There are many variations of passages of Lorem
                    </a>
                  </div>
                  <div class="video-page text-success">
                    Education{" "}
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      href="#"
                      data-original-title="Verified"
                    >
                      <i class="fas fa-check-circle text-success"></i>
                    </a>
                  </div>
                  <div class="video-view">
                    1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11
                    Months ago
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="video-card">
                <div class="video-card-image">
                  <a class="play-icon" href="#">
                    <i class="fas fa-play-circle"></i>
                  </a>
                  <a href="#">
                    <img class="img-fluid" src="./assets/img/v3.png" alt="" />
                  </a>
                  <div class="time">3:50</div>
                </div>
                <div class="video-card-body">
                  <div class="video-title">
                    <a href="#">
                      There are many variations of passages of Lorem
                    </a>
                  </div>
                  <div class="video-page text-danger">
                    Education{" "}
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      href="#"
                      data-original-title="Unverified"
                    >
                      <i class="fas fa-frown text-danger"></i>
                    </a>
                  </div>
                  <div class="video-view">
                    1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11
                    Months ago
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="video-card">
                <div class="video-card-image">
                  <a class="play-icon" href="#">
                    <i class="fas fa-play-circle"></i>
                  </a>
                  <a href="#">
                    <img class="img-fluid" src="./assets/img/v4.png" alt="" />
                  </a>
                  <div class="time">3:50</div>
                </div>
                <div class="video-card-body">
                  <div class="video-title">
                    <a href="#">
                      There are many variations of passages of Lorem
                    </a>
                  </div>
                  <div class="video-page text-success">
                    Education{" "}
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      href="#"
                      data-original-title="Verified"
                    >
                      <i class="fas fa-check-circle text-success"></i>
                    </a>
                  </div>
                  <div class="video-view">
                    1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11
                    Months ago
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="video-card">
                <div class="video-card-image">
                  <a class="play-icon" href="#">
                    <i class="fas fa-play-circle"></i>
                  </a>
                  <a href="#">
                    <img class="img-fluid" src="./assets/img/v5.png" alt="" />
                  </a>
                  <div class="time">3:50</div>
                </div>
                <div class="video-card-body">
                  <div class="video-title">
                    <a href="#">
                      There are many variations of passages of Lorem
                    </a>
                  </div>
                  <div class="video-page text-success">
                    Education{" "}
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      href="#"
                      data-original-title="Verified"
                    >
                      <i class="fas fa-check-circle text-success"></i>
                    </a>
                  </div>
                  <div class="video-view">
                    1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11
                    Months ago
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="video-card">
                <div class="video-card-image">
                  <a class="play-icon" href="#">
                    <i class="fas fa-play-circle"></i>
                  </a>
                  <a href="#">
                    <img class="img-fluid" src="./assets/img/v6.png" alt="" />
                  </a>
                  <div class="time">3:50</div>
                </div>
                <div class="video-card-body">
                  <div class="video-title">
                    <a href="#">
                      There are many variations of passages of Lorem
                    </a>
                  </div>
                  <div class="video-page text-danger">
                    Education{" "}
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      href="#"
                      data-original-title="Unverified"
                    >
                      <i class="fas fa-frown text-danger"></i>
                    </a>
                  </div>
                  <div class="video-view">
                    1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11
                    Months ago
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="video-card">
                <div class="video-card-image">
                  <a class="play-icon" href="#">
                    <i class="fas fa-play-circle"></i>
                  </a>
                  <a href="#">
                    <img class="img-fluid" src="./assets/img/v7.png" alt="" />
                  </a>
                  <div class="time">3:50</div>
                </div>
                <div class="video-card-body">
                  <div class="video-title">
                    <a href="#">
                      There are many variations of passages of Lorem
                    </a>
                  </div>
                  <div class="video-page text-success">
                    Education{" "}
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      href="#"
                      data-original-title="Verified"
                    >
                      <i class="fas fa-check-circle text-success"></i>
                    </a>
                  </div>
                  <div class="video-view">
                    1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11
                    Months ago
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="video-card">
                <div class="video-card-image">
                  <a class="play-icon" href="#">
                    <i class="fas fa-play-circle"></i>
                  </a>
                  <a href="#">
                    <img class="img-fluid" src="./assets/img/v8.png" alt="" />
                  </a>
                  <div class="time">3:50</div>
                </div>
                <div class="video-card-body">
                  <div class="video-title">
                    <a href="#">
                      There are many variations of passages of Lorem
                    </a>
                  </div>
                  <div class="video-page text-success">
                    Education{" "}
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      href="#"
                      data-original-title="Verified"
                    >
                      <i class="fas fa-check-circle text-success"></i>
                    </a>
                  </div>
                  <div class="video-view">
                    1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11
                    Months ago
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="video-card">
                <div class="video-card-image">
                  <a class="play-icon" href="#">
                    <i class="fas fa-play-circle"></i>
                  </a>
                  <a href="#">
                    <img class="img-fluid" src="./assets/img/v1.png" alt="" />
                  </a>
                  <div class="time">3:50</div>
                </div>
                <div class="video-card-body">
                  <div class="video-title">
                    <a href="#">
                      There are many variations of passages of Lorem
                    </a>
                  </div>
                  <div class="video-page text-success">
                    Education{" "}
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      href="#"
                      data-original-title="Verified"
                    >
                      <i class="fas fa-check-circle text-success"></i>
                    </a>
                  </div>
                  <div class="video-view">
                    1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11
                    Months ago
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="video-card">
                <div class="video-card-image">
                  <a class="play-icon" href="#">
                    <i class="fas fa-play-circle"></i>
                  </a>
                  <a href="#">
                    <img class="img-fluid" src="./assets/img/v2.png" alt="" />
                  </a>
                  <div class="time">3:50</div>
                </div>
                <div class="video-card-body">
                  <div class="video-title">
                    <a href="#">
                      There are many variations of passages of Lorem
                    </a>
                  </div>
                  <div class="video-page text-success">
                    Education{" "}
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      href="#"
                      data-original-title="Verified"
                    >
                      <i class="fas fa-check-circle text-success"></i>
                    </a>
                  </div>
                  <div class="video-view">
                    1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11
                    Months ago
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="video-card">
                <div class="video-card-image">
                  <a class="play-icon" href="#">
                    <i class="fas fa-play-circle"></i>
                  </a>
                  <a href="#">
                    <img class="img-fluid" src="./assets/img/v3.png" alt="" />
                  </a>
                  <div class="time">3:50</div>
                </div>
                <div class="video-card-body">
                  <div class="video-title">
                    <a href="#">
                      There are many variations of passages of Lorem
                    </a>
                  </div>
                  <div class="video-page text-danger">
                    Education{" "}
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      href="#"
                      data-original-title="Unverified"
                    >
                      <i class="fas fa-frown text-danger"></i>
                    </a>
                  </div>
                  <div class="video-view">
                    1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11
                    Months ago
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
              <div class="video-card">
                <div class="video-card-image">
                  <a class="play-icon" href="#">
                    <i class="fas fa-play-circle"></i>
                  </a>
                  <a href="#">
                    <img class="img-fluid" src="./assets/img/v4.png" alt="" />
                  </a>
                  <div class="time">3:50</div>
                </div>
                <div class="video-card-body">
                  <div class="video-title">
                    <a href="#">
                      There are many variations of passages of Lorem
                    </a>
                  </div>
                  <div class="video-page text-success">
                    Education{" "}
                    <a
                      title=""
                      data-placement="top"
                      data-toggle="tooltip"
                      href="#"
                      data-original-title="Verified"
                    >
                      <i class="fas fa-check-circle text-success"></i>
                    </a>
                  </div>
                  <div class="video-view">
                    1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11
                    Months ago
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center pagination-sm mb-0">
              <li class="page-item disabled">
                <a tabindex="-1" href="#" class="page-link">
                  Previous
                </a>
              </li>
              <li class="page-item active">
                <a href="#" class="page-link">
                  1
                </a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">
                  2
                </a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">
                  3
                </a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default singleChannel;
