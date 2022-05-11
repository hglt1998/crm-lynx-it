import React from 'react'

function HomePage() {
  return (
    <div>
      <div className='row'>
        <div className='col-xl-3 col-sm-6 mb-xl-0 mb-4'>
          <div className='carb shadow'>
            <div className='card-body p-3'>
              <div className='row'>
                <div className='col-8'>
                  <div className='numbers'>
                    <p className='text-sm mb-0 text-capitalize font-weight-bold'>Today's Money</p>
                    <h5 className='font-weight-bolder mb-0'>
                      193,86€
                      <span className='text-success text-sm font-weight-bolder'> +55%</span>
                    </h5>
                  </div>
                </div>
                <div className='col-4 text-end'>
                  <div className='icon icon-shape gradient shadow text-center border-radius-md'>
                    <i className='ni ni-money-coins text-lg opacity-10'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage