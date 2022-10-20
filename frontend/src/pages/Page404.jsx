import React from 'react'

const Page404 = () => {
  return (
    <div className="container-fluid">
               <div className="row">
                  <div className="col-md-8 mx-auto text-center  pt-4 pb-5">
                     <h1><img alt="404" src="./assets/img/404.png" className="img-fluid" /></h1>
                     <h1>Sorry! Page not found.</h1>
                     <p className="land">Unfortunately the page you are looking for has been moved or deleted.</p>
                     <div className="mt-5">
                        <a className="btn btn-outline-primary" href="index.html"><i className="mdi mdi-home"></i> GO TO HOME PAGE</a>
                     </div>
                  </div>
               </div>
            </div>
  )
}

export default Page404