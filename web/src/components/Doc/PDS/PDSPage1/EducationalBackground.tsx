import React from 'react'
import { toDate } from '../../../../helpers'
import * as interfaces from '../PDSInterface'

export default function EducationalBackground( props: {
    Elementary: interfaces.EducationalBackground
    Secondary: interfaces.EducationalBackground
    College: interfaces.EducationalBackground
    Vocational: interfaces.EducationalBackground
    GraduateStudies: interfaces.EducationalBackground
} ) {

    const elementary = props.Elementary
    const secondary = props.Secondary
    const college = props.College
    const vocational = props.Vocational
    const graduateStudies = props.GraduateStudies


    return (
        <div>
            <div className="title "><i className="text-white main">III. Educational Background</i></div>

            <div className="box row sub-title m-0 p-0 m-0 p-0">
                <div className="col-md-2 m-0 p-0 row sub-title m-0 p-0 d-flex aic jcc educ-level nbl nbr nbb">
                    <p className="m-0 mb-0 pb-0 text-center">&nbsp; <span style={{ position: 'absolute', left: '.3rem', top: '.1rem' }}>2.</span>  LEVEL</p>
                </div>
                <div className="col-md-2 m-0 p-0 row sub-title m-0 p-0 d-flex aic jcc educ-level nbr nbb">
                    <p className="m-0 mb-0 pb-0 text-center">&nbsp;NAME OF SCHOOL (Write in full)</p>
                </div>
                <div className="col-md-2 row sub-title m-0 p-0 d-flex aic jcc educ-level  nbb">
                    <p className="m-0 mb-0 pb-0 text-center">&nbsp;BASIC EDUCATION/DEGREE/COURSE</p>
                </div>
                <div className="col-md-1  row sub-title m-0 p-0 d-flex aic jcc from-to  nbb">
                    <div className="row p-0 m-0">
                        <p className="m-0 mb-0 text-center col-md-12 border-bottom p-1 pt-2 nbt " >&nbsp;PERIOD OF ATTENDANCE</p>
                        <p className="m-0 mb-0 text-center col-md-6 box nbl nbr nbb nbt pt-1">From</p>
                        <p className="m-0 mb-0 text-center col-md-6 box nbr nbb nbt pt-1">To</p>
                    </div>
                </div>
                <div className="col-md-1 row sub-title m-0 p-0 d-flex aic jcc nbr nbb">
                    <p className="m-0 mb-0 text-center">&nbsp;HIGHEST LEVEL/ UNITS EARNED (if not graduated)</p>
                </div>
                <div className="col-md-1 row sub-title m-0 p-0 d-flex aic jcc nbr nbb">
                    <p className="m-0 mb-0 text-center">&nbsp;YEAR GRADUATED </p>
                </div>
                <div className="col-md-1  row sub-title m-0 p-0 d-flex aic jcc nbr nbb ">
                    <p className="m-0 mb-0 pb-0 text-center">&nbsp;SCHOLARSHIP/ ACADEMIC HONORS RECEIVED</p>
                </div>


                <div className="col-md-2 m-0 p-0 row sub-title m-0 p-0 educ-level nbl nbr nbb ">
                    <p className="m-0 mb-0 p-1 text-center">&nbsp;   ELEMENTARY</p>
                </div>
                <div className="col-md-2 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc educ-level  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{elementary.NameOfSchool}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc educ-level   nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{elementary.Degree}</p>
                </div>
                <div className="col-md-1  row m-0 p-0 d-flex aic jcc bg-white box from-to   nbb">
                    <p className="m-0 mb-0 text-center col-md-6 box nbl nbr nbb nbt bold underlined">&nbsp;{toDate( elementary.From )}</p>
                    <p className="m-0 mb-0 text-center col-md-6 box nbr nbb nbt nbl bold underlined">&nbsp;   {toDate( elementary.To )}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{elementary.Units}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{elementary.YearGraduated}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{elementary.Scholarship}</p>
                </div>


                <div className="col-md-2 m-0 p-0 row sub-title m-0 p-0 educ-level nbr nbb nbl nbr">
                    <p className="m-0 mb-0 p-1 text-center">&nbsp;   SECONDARY</p>
                </div>
                <div className="col-md-2 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc educ-level  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{secondary.NameOfSchool}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc educ-level   nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{secondary.Degree}</p>
                </div>
                <div className="col-md-1  row m-0 p-0 d-flex aic jcc bg-white box from-to   nbb">
                    <p className="m-0 mb-0 text-center col-md-6 box nbl nbr nbb nbt bold underlined">&nbsp;{toDate( secondary.From )}</p>
                    <p className="m-0 mb-0 text-center col-md-6 box nbr nbb nbt nbl bold underlined">&nbsp;   {toDate( secondary.To )}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{secondary.Units}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{secondary.YearGraduated}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{secondary.Scholarship}</p>
                </div>

                <div className="col-md-2 m-0 p-0 row sub-title m-0 p-0 educ-level nbr nbb nbl">
                    <p className="m-0 mb-0 p-1 text-center">VOCATIONAL/ <br />&nbsp;  TRADE COURSE</p>
                </div>
                <div className="col-md-2 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc educ-level  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{vocational.NameOfSchool}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc educ-level   nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{vocational.Degree}</p>
                </div>
                <div className="col-md-1  row m-0 p-0 d-flex aic jcc bg-white box from-to   nbb">
                    <p className="m-0 mb-0 text-center col-md-6 box nbl nbr nbb nbt bold underlined">&nbsp;{toDate( vocational.From )}</p>
                    <p className="m-0 mb-0 text-center col-md-6 box nbr nbb nbt nbl bold underlined">&nbsp;   {toDate( vocational.To )}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{vocational.Units}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{vocational.YearGraduated}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{vocational.Scholarship}</p>
                </div>

                <div className="col-md-2 m-0 p-0 row sub-title m-0 p-0 educ-level nbr nbb nbl">
                    <p className="m-0 mb-0 p-1 text-center">&nbsp;   COLLEGE</p>
                </div>
                <div className="col-md-2 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc educ-level  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{college.NameOfSchool}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc educ-level   nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{college.Degree}</p>
                </div>
                <div className="col-md-1  row m-0 p-0 d-flex aic jcc bg-white box from-to   nbb">
                    <p className="m-0 mb-0 text-center col-md-6 box nbl nbr nbb nbt bold underlined">&nbsp;{toDate( college.From )}</p>
                    <p className="m-0 mb-0 text-center col-md-6 box nbr nbb nbt nbl bold underlined">&nbsp;   {toDate( college.To )}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{college.Units}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{college.YearGraduated}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc  nbr nbb">
                    <p className="m-0 mb-0 p-1 text-center bold underlined">{college.Scholarship}</p>
                </div>

                <div className="col-md-2 m-0 p-0 row sub-title m-0 p-0 educ-level nbr  nbl">
                    <p className="m-0 mb-0 p-1 text-center">&nbsp; GRADUATE STUDIES </p>
                </div>
                <div className="col-md-2 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc educ-level  nbr ">
                    <p className="m-0 mb-0 p-1 b text-center bold underlined">{graduateStudies.NameOfSchool}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc educ-level   ">
                    <p className="m-0 mb-0 p-1 b text-center bold underlined">{graduateStudies.Degree}</p>
                </div>
                <div className="col-md-1  row m-0 p-0 d-flex aic jcc bg-white box from-to   ">
                    <p className="m-0 mb-0 text-center col-md-6 box nbl nbr nbb nbt bold b underlined">&nbsp;{toDate( graduateStudies.From )}</p>
                    <p className="m-0 mb-0 text-center col-md-6 box nbr nbb nbt nbl bold b underlined">&nbsp;   {toDate( graduateStudies.To )}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc  nbr ">
                    <p className="m-0 mb-0 p-1 b text-center bold underlined">{graduateStudies.Units}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc  nbr ">
                    <p className="m-0 mb-0 p-1 b text-center bold underlined">{graduateStudies.YearGraduated}</p>
                </div>
                <div className="col-md-1 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc  nbr ">
                    <p className="m-0 mb-0 p-1 b text-center bold underlined">{graduateStudies.Scholarship}</p>
                </div>

                <div className="col-md-12 m-0 p-2 row border-bottom  cl sub-title nbl nbt nbr nbb aic jcc d-flex" style={{ flex: 1, maxWidth: '100%' }}>
                    <p className="m-0 p-0 text-center d-flex aic jcc">
                        <i className="text-center text-danger bold">(Continue on separate sheet if necessary)</i>
                    </p>
                </div>

                <div className="row col-md-12 ">
                    <div className="col-md-2 m-0 p-0 row m-0 p-0 box  d-flex aic jcc  sig nbr nbb nbl">
                        <p className="m-0 mb-0 p-1 text-center bold"><i>SIGNATURE</i></p>
                    </div>
                    <div className="col-md-4 m-0 p-0 row m-0 p-0 box bg-white d-flex aic jcc sig1  nbb">
                        <p className="m-0 mb-0 p-1 text-center bold underlined"></p>
                    </div>
                    <div className="col-md-2 m-0 p-0 row m-0 p-0 box  d-flex aic jcc sig2  nbb bl">
                        <p className="m-0 mb-0 p-1 text-center bold"><i>DATE</i></p>
                    </div>
                    <div className="col-md-4 m-0 p-0 row m-0 p-0 box  d-flex aic jcc  bg-white sig3  nbb">
                        <p className="m-0 mb-0 p-1 text-center bold underlined"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
