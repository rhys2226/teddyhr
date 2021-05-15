import React from 'react'
import FamilyBackground from './FamilyBackground'
import { countryList } from './countryList'
export default function PersonalInformation() {
    return (
      <div style={{borderTop:'2px solid black'}}>
        <div className="title nbr nbl"><i className="text-white main">I. Personal Information</i></div>
        <div className=" row m-0 p-0">
            <div className="col-md-3 sub-title m-0 p-0 nbl nbb" style={{flex:'0 0 20.9%'}}>
                <p  className="pt-1 mb-3">&nbsp; 2. SURNAME</p>
                <p  className="pt-0 pb-0 mb-3">&nbsp; &nbsp; FIRST NAME</p>
                <p  style={{marginTop:'-.5rem'}} className="pt-0 pb-0 mb-0 mb-1">&nbsp; &nbsp; MIDDLE NAME</p>
            </div>
            <div className="col-md-9  m-0 p-0 bt " style={{flex:'0 0 79.1%',maxWidth:'100%'}}>
                <p className="w-100 border-bottom p-1 m-0 pl-2  bold underlined">Yassin</p>
                <p className="w-100 border-bottom m-0 p-0 row">
                   <div className="col-md-8  p-1 m-0 pl-2 bold underlined">Jamel Eid </div>
                   <div className="col-md-4 m-0  sub-title nbr nbt nbb">
                        <p className="m-0">NAME EXTENSION (JR., SR)</p>
                        <div className="m-0 bold underlined text-center">Jr.</div>
                   </div>
                </p>
                <p className="w-100  p-1 pl-2  pb-2 m-0 bold underlined">Bayoneta</p>
            </div>
        </div>
        <div className="border-bottom row m-0 p-0">
            {/* left  */}
            <div className="col-md-5 m-0 p-0 row">
                <div className="col-md-6 sub-title m-0 p-0 nbl nbb pt-1 ">
                    <p  className="m-0 mb-3">&nbsp; 3.   DATE OF BIRTH <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(mm/dd/yyyy)  
                    </p>
                </div>
                <div className="col-md-6 m-0 pl-2 pb-2 box nbl nbr d-flex aic  nbb" >
                    <p className="m-0 p-0 bold underlined">November 14, 1994</p>
                </div>
                <div className="col-md-6 sub-title m-0 p-0 nbl nbb d-flex aic bt">
                    <p  className="mt-0 p-0  m-0">&nbsp; 4. PLACE OF BIRTH </p>
                </div>
                <div className="col-md-6 m-0 p-2 border-bottom d-flex aic bt nbb">
                    <p className="m-0 p-0 bold underlined">Pototan</p>
                </div>
                <div className="col-md-6 sub-title m-0 p-0 nbl nbb d-flex aic bt">
                    <p  className="pt-1 m-0">&nbsp; 5. SEX </p>
                </div>
                <div className="col-md-6  m-0 p-2 border-bottom d-flex aic bt  nbb">
                   <div className="d-flex w-100 m-0">
                        <div className="d-flex ml-1 m-0" style={{flex:1}}>
                            <input checked className="m-0 checkbox" type="checkbox"/>
                            <label pt-1 className="m-0 checkbox" style={{transform:'translate(5px,-12px)'}}>&nbsp; Male</label>
                        </div>
                        <div className="d-flex" style={{flex:1}}>
                            <input className="m-0 checkbox" type="checkbox"/>
                            <label className="m-0 checkbox" pt-1 style={{transform:'translate(5px,-12px)'}}>&nbsp; Female</label>
                        </div>
                   </div>
                </div>
                 <div className="col-md-6 sub-title m-0 p-0 nbl nbb">
                    <p  className="pt-1">&nbsp; 6. CIVIL STATUS </p>
                </div>
                <div className="col-md-6  m-0 p-2 border-bottom aic bt  nbb">
                    <div className="d-flex w-100"  style={{transform:'translate(0,-3px)'}}>
                        <div className="d-flex ml-1" style={{flex:1}}>
                            <input className="m-0 checkbox" checked type="checkbox"/>
                            <label className="m-0 " pt-1 style={{marginTop:'2px'}}>&nbsp; Single</label>
                        </div>
                        <div className="d-flex" style={{flex:1}}>
                            <input className="m-0 checkbox" type="checkbox"/>
                            <label className="m-0 " pt-1 style={{marginTop:'2px'}}>&nbsp; Married</label>
                        </div>
                   </div>
                    <div className="d-flex w-100">
                        <div className="d-flex ml-1" style={{flex:1}}>
                            <input className="m-0 checkbox" checked type="checkbox"/>
                            <label className="m-0 " pt-1 style={{marginTop:'2px'}}>&nbsp; Widow</label>
                        </div>
                        <div className="d-flex" style={{flex:1}}>
                            <input className="m-0 checkbox" type="checkbox"/>
                            <label className="m-0 " pt-1 style={{marginTop:'2px'}}>&nbsp; Separated</label>
                        </div>
                   </div>
                    <div className="d-flex w-100" style={{transform:'translate(0,3px)'}}>
                        <div className="d-flex ml-1" style={{flex:1}}>
                            <input className="m-0 checkbox" checked type="checkbox"/>
                            <label className="m-0 " pt-1 style={{marginTop:'2px'}}>&nbsp; Other/s</label>
                        </div>
                   </div>
                </div>
                <div className="col-md-6 sub-title m-0 p-0 nbl nbb d-flex aic bt">
                    <p  className="m-0 p-0 pt-0">&nbsp; 7. HEIGHT (m) </p>
                </div>
                <div className="col-md-6  m-0 p-2 border-bottom d-flex aic bt  nbb">
                    <p className="m-0 p-0 bold underlined">181 meters</p>
                </div>
                <div className="col-md-6 sub-title m-0 p-0 nbl nbb d-flex aic bt">
                    <p className="m-0 p-0 pt-0">&nbsp; 8. WEIGHT (kg) </p>
                </div>
                <div className="col-md-6  m-0 p-1 border-bottom d-flex aic bt  nbb">
                    <p className="m-0 p-0 bold underlined">120 kilograms</p>
                </div>
                <div className="col-md-6 sub-title m-0 p-0 nbl nbb d-flex aic bt">
                    <p className="m-0 p-0 pt-1 pb-1">&nbsp; 9. BLOOD TYPE </p>
                </div>
                <div className="col-md-6  m-0 p-1 border-bottom d-flex aic bt  nbb">
                    <p className="m-0 p-0 bold underlined">Type O</p>
                </div>
                <div className="col-md-6 sub-title m-0 p-0 nbl nbb d-flex aic bt">
                    <p className="m-0 p-0 pt-1 pb-0">&nbsp; 10. GSIS ID NO </p>
                </div>
                <div className="col-md-6  m-0 p-1 border-bottom d-flex aic bt  nbb">
                    <p className="m-0 p-0 pt-1 pb-0 bold underlined ">ID902321</p>
                </div>
                <div className="col-md-6 sub-title m-0 p-0 nbl nbb d-flex aic bt">
                    <p  className="pt-1 m-0">&nbsp; 11. PAG-IBIG ID NO </p>
                </div>
                    <div className="col-md-6  m-0 p-1 border-bottom d-flex aic bt  nbb">
                    <p className="m-0 p-0 bold underlined">PGJSDSN</p>
                </div>
                <div className="col-md-6 sub-title m-0 p-0 nbl nbb d-flex aic bt">
                    <p className="p-0 pt-1  m-0">&nbsp; 12. PHILHEALTH NO </p>
                </div>
                   <div className="col-md-6  m-0 p-1 border-bottom d-flex aic bt  nbb">
                    <p className="p-0   m-0  bold underlined">IDSAJDSAJDKDN</p>
                </div>
                <div className="col-md-6 sub-title m-0 p-0 nbl nbb d-flex aic bt">
                    <p className="pt-1 m-0 p-1"> 13. SSS NO </p>
                </div>
                    <div className="col-md-6  m-0 p-1 border-bottom d-flex aic bt  nbb">
                    <p className="p-0 pt-1  m-0  bold underlined">IDSAJDSAJDKDN</p>
                </div>
               <div className="col-md-6 sub-title m-0 p-0 nbl nbb d-flex aic bt">
                    <p className="pt-1 m-0 p-1"> 14. TIN NO </p>
                </div>
                 <div className="col-md-6  m-0 p-1 border-bottom d-flex aic bt  nbb">
                    <p  className="m-0 p-0 pt-1 bold underlined" >ID902321</p>
                </div>
                 <div className="col-md-6 sub-title m-0 p-0 nbl nbb d-flex aic bt">
                    <p className="pt-1 m-0 p-0 pl-1"> 15. AGENCY EMPLOYEE NO  </p>
                </div>
                <div className="col-md-6  m-0 p-1 border-bottom d-flex aic bt  nbb">
                    <p  className="m-0 p-0 pt-1 bold underlined" >ID902321</p>
                </div>
            </div>
            {/* {right} */}
            <div className="col-md-7 m-0 p-0 row box nbr">
                <div className="col-md-5 sub-title m-0 p-0 nbr box">
                    <p  className="m-0 mb-3">&nbsp; 16.   CITIZENSHIP</p>
                    <p  className="m-0 mb-3 ml-5">&nbsp; if holder of dual citizenship</p>
                    <p  className="m-0 mb-3 ml-5">&nbsp; please indicate details</p>
                </div>
                <div className="col-md-7 m-0 p-2 box nbr">
                   <div className="d-flex w-100 m-0">
                        <div className="d-flex ml-1 m-0" style={{flex:1}}>
                            <input checked className="m-0 checkbox" type="checkbox"/>
                            <label pt-1 className="m-0 " style={{transform:'translate(5px,-2px)'}}>&nbsp; filipino</label>
                        </div>
                       <div style={{flex:2}}>
                            <div className="d-flex" >
                                <input className="m-0 checkbox" type="checkbox"/>
                                <label className="m-0 w-10-"  style={{transform:'translate(5px,-2px)'}}>&nbsp; Dual Citizenship</label>
                            </div>
                             <div className="d-flex mt-1" >
                                <div className="d-flex" >
                                    <input className="m-0 checkbox" type="checkbox"/>
                                    <label className="m-0 w-10-"  style={{transform:'translate(5px,-0px)'}}>by birth</label>
                                </div>
                                <div className="d-flex ml-3" >
                                    <input className="m-0 checkbox" type="checkbox"/>
                                    <label className="m-0 w-10-"  style={{transform:'translate(5px,-0px)'}}>by naturalization</label>
                                </div>
                            </div>
                       </div>
                   </div>
                   <select className="form-control m-0 mt-3" style={{transform:'translateY(17px)scaleX(1.05)'}} >
                        <option selected>Philippines</option>
                        {
                            countryList.map((country)=>(
                                <option >{country}</option>
                            ))
                        }
                    </select>
                </div>  
                 <div className="col-md-4 sub-title m-0 p-0 nbt">
                     <p  className="m-0 mb-2 pt-1   ">&nbsp; 17.  RESIDENTIAL ADDRESS</p>
                     <p  className="m-0 mb-3" style={{transform:'translate(3rem,3.2rem)'}}>&nbsp; ZIP CODE</p>
                 </div>
                  <div className="col-md-8 border-bottom m-0 p-0 row">
                        <div className="col-md-12 border-bottom m-0 p-0">
                            <div className="d-flex m-0 p-0">
                                <div className="text-center  bold underlined" style={{flex:1}}>N/A</div>
                                <div className="text-center  bold underlined" style={{flex:1}}>N/A</div>
                            </div>
                            <div className="d-flex bordertop-light m-0 p-0">
                                <div className="text-center" style={{flex:1}}><i>House/Block/Lot No.</i></div>
                                <div className="text-center" style={{flex:1}}><i>Street</i></div>
                            </div>
                        </div>
                        <div className="col-md-12 border-bottom m-0 p-0">
                             <div className="d-flex m-0 p-0">
                                <div className="text-center  bold underlined" style={{flex:1}}>N/A</div>
                                <div className="text-center  bold underlined" style={{flex:1}}>N/A</div>
                            </div>
                            <div className="d-flex bordertop-light m-0 p-0">
                            <div className="text-center" style={{flex:1}}><i>Subdivision/Village</i></div>
                                <div className="text-center" style={{flex:1}}><i>Barangay</i></div>
                            </div>
                        </div>
                        <div className="col-md-12 border-bottom m-0 p-0">
                            <div className="d-flex m-0 pt-0">
                                <div className="text-center  bold underlined" style={{flex:1}}>N/A</div>
                                <div className="text-center  bold underlined" style={{flex:1}}>N/A</div>
                            </div>
                            <div className="d-flex bordertop-light m-0 p-0">
                            <div className="text-center" style={{flex:1}}><i>City/Municipality</i></div>
                                <div className="text-center" style={{flex:1}}><i>Province</i></div>
                            </div>
                        </div>
                        <div className="col-md-12 border-bottom m-0 p-0  d-flex aic jcc nbb">
                            <span className="bold underlined m-0 p-0">N/A</span>
                        </div>
                    </div>
                    <div className="col-md-4 sub-title m-0  p-0 nbt">
                        <p  className="m-0 mb-3 pt-1">&nbsp; 18.  PERMANENET ADDRESS</p>
                        <p  className="m-0 mb-3" style={{transform:'translate(3rem,3.9rem)'}}>&nbsp; ZIP CODE</p>
                    </div>
                    <div className="col-md-8 border-bottom m-0 p-0 row">
                        <div className="col-md-12 border-bottom m-0 p-0">
                             <div className="d-flex m-0 pt-0">
                                <div className="text-center  bold underlined mb-1" style={{flex:1}}>N/A</div>
                                <div className="text-center  bold underlined mb-1" style={{flex:1}}>N/A</div>
                            </div>
                            <div className="d-flex bordertop-light m-0 p-0">
                            <div className="text-center" style={{flex:1,marginBottom:'2px'}}><i>House/Block/Lot No.</i></div>
                                <div className="text-center" style={{flex:1,marginBottom:'2px'}}><i>Street</i></div>
                            </div>
                        </div>
                        <div className="col-md-12 border-bottom m-0 p-0">
                             <div className="d-flex m-0 pt-0">
                                <div className="text-center bold underlined mb-1" style={{flex:1}}>N/A</div>
                                <div className="text-center bold underlined mb-1" style={{flex:1}}>N/A</div>
                            </div>
                            <div className="d-flex bordertop-light m-0 p-0">
                            <div className="text-center" style={{flex:1,marginBottom:'2px'}}><i>Subdivision/Village</i></div>
                                <div className="text-center" style={{flex:1,marginBottom:'2px'}}><i>Barangay</i></div>
                            </div>
                        </div>
                        <div className="col-md-12 border-bottom m-0 p-0">
                             <div className="d-flex m-0 pt-0">
                                <div className="text-center  bold underlined mb-1" style={{flex:1}}>N/A</div>
                                <div className="text-center  bold underlined mb-1" style={{flex:1}}>N/A</div>
                            </div>
                            <div className="d-flex bordertop-light m-0 p-0">
                            <div className="text-center" style={{flex:1,marginBottom:'2px'}}><i>City/Municipality</i></div>
                                <div className="text-center" style={{flex:1,marginBottom:'2px'}}><i>Province</i></div>
                            </div>
                        </div>
                        <div className="col-md-12 border-bottom m-0 p-0 pt-0 d-flex aic jcc nbb">
                            <span className="bold underlined">N/A</span>
                        </div>
                    </div>
                    <div className="col-md-4 sub-title m-0 p-0 pt-0 nbt d-flex aic">
                        <p  className="m-0">&nbsp; 19. TELEPHONE NO</p>
                    </div>
                    <div className="col-md-8 border-bottom m-0 p-0 row  nbt d-flex aic">
                        <span className="p-1 pl-2 bold underlined">N/A</span>
                    </div>
                    <div className="col-md-4 sub-title m-0 p-0 pt-0 nbt d-flex aic">
                        <p  className="m-0">&nbsp; 20. MOBILE NO</p>
                    </div>
                    <div className="col-md-8 border-bottom m-0 p-0 row  nbt d-flex aic">
                        <span className="p-1 pl-2 bold underlined">N/A</span>
                    </div>
                     <div className="col-md-4 sub-title m-0 p-0 pt-0 nbt nbb d-flex aic">
                        <p  className="m-0">&nbsp; 21. EMAIL ADDRESS (if any)</p>
                    </div>
                    <div className="col-md-8 border-bottom m-0 p-0 row nbb  nbt d-flex aic">
                        <span className="p-1 pl-2 bold underlined">N/A</span>
                    </div>
            </div>
        </div>
        <FamilyBackground />
      </div>
    )
}
