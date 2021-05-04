import React from 'react'

export default function PersonalInformation() {
    return (
      <div style={{borderTop:'2px solid black'}}>
        <div className="title "><i className="text-white main">1. Personal Information</i></div>
        <div className="box row m-0 p-0">
            <div className="col-md-3 sub-title m-0 p-0">
                <p  className="mt-1">&nbsp; 2. SURNAME</p>
                <p  className="mt-1">&nbsp; &nbsp; FIRST NAME</p>
                <p  className="mt-1">&nbsp; &nbsp; MIDDLE NAME</p>
            </div>
              <div className="col-md-9  m-0 p-0 box">
                <p className="w-100 box p-2 m-0">p</p>
                <p className="w-100 box m-0 p-0 row">
                   <div className="col-md-8  p-2 m-0">ppp</div>
                   <div className="col-md-4   m-0  sub-title">
                        <p className="m-0">NAME EXTENSION (JR., SR)</p>
                        <div className="m-0">ppp</div>
                   </div>
                </p>
                <p className="w-100 box p-2 m-0">p</p>
              </div>
        </div>
      </div>
    )
}
