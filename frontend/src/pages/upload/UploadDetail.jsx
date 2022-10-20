import React from 'react'

const UploadDetail = () => {
  return (
    <div class="container-fluid upload-details">
    <div class="row">
       <div class="col-lg-12">
          <div class="main-title">
             <h6>Upload Details</h6>
          </div>
       </div>
       <div class="col-lg-2">
          <div class="imgplace"></div>
       </div>
       <div class="col-lg-10">
          <div class="osahan-title">Contrary to popular belief, Lorem Ipsum (2019) is not.</div>
          <div class="osahan-size">102.6 MB . 2:13 MIN Remaining</div>
          <div class="osahan-progress">
             <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"   aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
             </div>
             <div class="osahan-close">
                <a href="#"><i class="fas fa-times-circle"></i></a>
             </div>
          </div>
          <div class="osahan-desc">Your Video is still uploading, please keep this page open until it's done.</div>
       </div>
    </div>
    <hr />
    <div class="row">
       <div class="col-lg-12">
          <div class="osahan-form">
             <div class="row">
                <div class="col-lg-12">
                   <div class="form-group">
                      <label for="e1">Video Title</label>
                      <input type="text" placeholder="Contrary to popular belief, Lorem Ipsum (2019) is not." id="e1" class="form-control" />
                   </div>
                </div>
                <div class="col-lg-12">
                   <div class="form-group">
                      <label for="e2">About</label>
                      <textarea rows="3" id="e2" name="e2" class="form-control">Description</textarea>
                   </div>
                </div>
             </div>
             <div class="row">
                <div class="col-lg-3">
                   <div class="form-group">
                      <label for="e3">Orientation</label>
                      <select id="e3" class="custom-select">
                         <option>Straight</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                      </select>
                   </div>
                </div>
                <div class="col-lg-3">
                   <div class="form-group">
                      <label for="e4">Privacy Settings</label>
                      <select id="e4" class="custom-select">
                         <option>Public</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                      </select>
                   </div>
                </div>
                <div class="col-lg-3">
                   <div class="form-group">
                      <label for="e5">Monetize</label>
                      <select id="e5" class="custom-select">
                         <option>Yes</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                      </select>
                   </div>
                </div>
                <div class="col-lg-3">
                   <div class="form-group">
                      <label for="e6">License</label>
                      <select id="e6" class="custom-select">
                         <option>Standard</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                      </select>
                   </div>
                </div>
             </div>
             <div class="row">
                <div class="col-lg-5">
                   <div class="form-group">
                      <label for="e7">Tags (13 Tags Remaining)</label>
                      <input type="text" placeholder="Gaming, PS4" id="e7" class="form-control" />
                   </div>
                </div>
                <div class="col-lg-4">
                   <div class="form-group">
                      <label for="e8">Cast (Optional)</label>
                      <input type="text" placeholder="Nathan Drake," id="e8" class="form-control" />
                   </div>
                </div>
                <div class="col-lg-3">
                   <div class="form-group">
                      <label for="e9">Language in Video (Optional)</label>
                      <select id="e9" class="custom-select">
                         <option>English</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
                      </select>
                   </div>
                </div>
             </div>
             <div class="row ">
                <div class="col-lg-12">
                   <div class="main-title">
                      <h6>Category ( you can select upto 6 categories )</h6>
                   </div>
                </div>
             </div>
             <div class="row category-checkbox">
                {/* <!-- checkbox 1col --> */}
                <div class="col-lg-2 col-xs-6 col-4">
                   <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="customCheck1" />
                      <label class="custom-control-label" for="customCheck1">Abaft</label>
                   </div>
                   <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="customCheck2" />
                      <label class="custom-control-label" for="customCheck2">Brick</label>
                   </div>
                   <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="customCheck3" />
                      <label class="custom-control-label" for="customCheck3">Purpose</label>
                   </div>
                   <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="customCheck4" />
                      <label class="custom-control-label" for="customCheck4">Shallow</label>
                   </div>
                
                </div>
                {/* <!-- checkbox 2col --> */}
                <div class="col-lg-2 col-xs-6 col-4">
                   <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="zcustomCheck1" />
                      <label class="custom-control-label" for="zcustomCheck1">Cemetery</label>
                   </div>
                   <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="zcustomCheck2" />
                      <label class="custom-control-label" for="zcustomCheck2">Trouble</label>
                   </div>
                   <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="zcustomCheck3" />
                      <label class="custom-control-label" for="zcustomCheck3">Pin</label>
                   </div>
                   
                </div>
             
             </div>
          </div>
          <div class="osahan-area text-center mt-3">
             <button class="btn btn-outline-primary">Save Changes</button>
          </div>
          <hr />
          <div class="terms text-center">
             <p class="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority <a href="#">Terms of Service</a> and <a href="#">Community Guidelines</a>.</p>
             <p class="hidden-xs mb-0">Ipsum is therefore always free from repetition, injected humour, or non</p>
          </div>
       </div>
    </div>
 </div>
  )
}

export default UploadDetail