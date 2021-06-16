import React from 'react'
import LeftGrid from './LeftGrid'
import RightGrid from './RightGrid'
import BottomGrid from './BottomGrid'
import * as interfaces from '../PDSInterface'


export default function PDSPage4(
    props: {
        References: interfaces.References[]
        Idenification: interfaces.Identification

        ThirdDegree: interfaces.QuestionDetails
        ForuthDegree: interfaces.QuestionDetails
        FoundGuility: interfaces.QuestionDetails
        CriminallyCharged: interfaces.QuestionDetails
        BeenConvicted: interfaces.QuestionDetails
        Seperated: interfaces.QuestionDetails
        Candidate: interfaces.QuestionDetails
        Resigned: interfaces.QuestionDetails
        Immigrant: interfaces.QuestionDetails
        Indigenous: interfaces.QuestionDetails
        Disability: interfaces.QuestionDetails
    }
) {

    const {
        ThirdDegree,
        ForuthDegree,
        FoundGuility,
        CriminallyCharged,
        BeenConvicted,
        Seperated,
        Candidate,
        Resigned,
        Immigrant,
        Indigenous,
        Disability,
    } = props

    return (
        <div className="bg-white portrait-pds pds" >
            <div className="PDSBorder" >
                {/* 1 */}
                <div className="box row sub-title m-0 p-0 m-0 p-0">
                    <div className="col-md-7 br pt-1">
                        <p className="m-0">34.&nbsp; Are you related by consanguinity or affinity to the appointing or recommending authority, or to the</p>
                        <p className="m-0">chief of bureau or office or to the person who has immediate supervision over you in the Office, </p>
                        <p className="m-0 mb-2">Bureau or Department where you will be apppointed,</p>
                        <p>a. within the third degree?</p>
                        <p>b. within the fourth degree (for Local Government Unit - Career Employees)?</p>
                    </div>
                    <div className="col-md-5 bg-white row p-0 m-0 pt-5">
                        <div className="col-md-12 row m-0 p-0" >
                            <div className="d-flex w-100 m-0 col-md-6 w-100" style={{ transform: 'translate(5px,-10px)' }}>
                                <div className="d-flex ml-1 m-0" style={{ flex: 1 }}>
                                    <input defaultChecked={ThirdDegree.Answer !== 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; Yes</label>
                                </div>
                                <div className="d-flex" style={{ flex: 1 }}>
                                    <input defaultChecked={ThirdDegree.Answer === 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; No</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 row m-0 p-0 pt-3 ">
                            <div className="d-flex w-100 m-0 col-md-6 w-100" style={{ transform: 'translate(5px,-10px)' }}>
                                <div className="d-flex ml-1 m-0" style={{ flex: 1 }}>
                                    <input defaultChecked={ForuthDegree.Answer !== 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; Yes</label>
                                </div>
                                <div className="d-flex" style={{ flex: 1 }}>
                                    <input defaultChecked={ForuthDegree.Answer === 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; No</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 row m-0 p-0 pl-3 ">
                            <p>If YES, give details:
                                <br /> <span className="bold underlined">{ForuthDegree.Details}</span>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="box row sub-title m-0 p-0 m-0 p-0">
                    <div className="col-md-7 br pt-1">
                        <p className="mb-5">35.&nbsp;a. Have you ever been found guilty of any administrative offense?</p>
                        <br />
                        <p className="mt-3">b. Have you been criminally charged before any court? </p>
                    </div>
                    <div className="col-md-5 bg-white row p-0 m-0 pt-1">
                        <div className="col-md-12 row m-0 p-0 pt-3 ">
                            <div className="d-flex w-100 m-0 col-md-6 w-100" style={{ transform: 'translate(5px,-10px)' }}>
                                <div className="d-flex ml-1 m-0" style={{ flex: 1 }}>
                                    <input defaultChecked={FoundGuility.Answer !== 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; Yes</label>
                                </div>
                                <div className="d-flex" style={{ flex: 1 }}>
                                    <input defaultChecked={FoundGuility.Answer === 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; No</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 row m-0 p-0 pl-3">
                            <p>If YES, give details:
                                <br /> <span className="bold underlined">{FoundGuility.Details}</span>
                                <br />
                            </p>
                        </div>
                        <div className="bordered w-100" ></div>
                        <div className="col-md-12 row m-0 p-0 pt-3 ">
                            <div className="d-flex w-100 m-0 col-md-6 w-100" style={{ transform: 'translate(5px,-10px)' }}>
                                <div className="d-flex ml-1 m-0" style={{ flex: 1 }}>
                                    <input defaultChecked={CriminallyCharged.Answer !== 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; Yes</label>
                                </div>
                                <div className="d-flex" style={{ flex: 1 }}>
                                    <input defaultChecked={CriminallyCharged.Answer === 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; No</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 row m-0 p-0 pl-3 ">
                            <p>If YES, give details:
                                <br /> <span className="bold underlined">{CriminallyCharged.Details}</span>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                {/*3 */}
                <div className="box row sub-title m-0 p-0 m-0 p-0">
                    <div className="col-md-7 br pt-1">
                        <p className="m-0">36.&nbsp; Have you ever been convicted of any crime or violation of any law, decree, ordinance or regulation by any court or tribunal?</p>
                    </div>
                    <div className="col-md-5 bg-white row p-0 m-0 pt-1">
                        <div className="col-md-12 row m-0 p-0 pt-3 ">
                            <div className="d-flex w-100 m-0 col-md-6 w-100" style={{ transform: 'translate(5px,-10px)' }}>
                                <div className="d-flex ml-1 m-0" style={{ flex: 1 }}>
                                    <input defaultChecked={BeenConvicted.Answer !== 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; Yes</label>
                                </div>
                                <div className="d-flex" style={{ flex: 1 }}>
                                    <input defaultChecked={BeenConvicted.Answer === 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; No</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 row m-0 p-0 pl-3  mt-1">
                            <p className="mb-1">If YES, give details:
                                <br /> <span className="bold underlined">{BeenConvicted.Details}</span>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="box row sub-title m-0 p-0 m-0 p-0">
                    <div className="col-md-7 br pt-1">
                        <p className="m-0">37.&nbsp; Have you ever been separated from the service in any of the following modes: resignation, retirement, dropped from the rolls, dismissal, termination, end of term, finished contract or phased out (abolition) in the public or private sector?</p>
                    </div>
                    <div className="col-md-5 bg-white row p-0 m-0 pt-1">
                        <div className="col-md-12 row m-0 p-0 pt-3 ">
                            <div className="d-flex w-100 m-0 col-md-6 w-100" style={{ transform: 'translate(5px,-10px)' }}>
                                <div className="d-flex ml-1 m-0" style={{ flex: 1 }}>
                                    <input defaultChecked={Seperated.Answer !== 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; Yes</label>
                                </div>
                                <div className="d-flex" style={{ flex: 1 }}>
                                    <input defaultChecked={Seperated.Answer === 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; No</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 row m-0 p-0 pl-3  mt-1">
                            <p className="mb-1">If YES, give details:
                                <br /> <span className="bold underlined">{Seperated.Details}</span>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                {/*5*/}
                <div className="box row sub-title m-0 p-0 m-0 p-0">
                    <div className="col-md-7 br pt-1">
                        <p className="m-0">38.&nbsp; a. Have you ever been a candidate in a national or local election held within the last year (except Barangay election)?</p>
                        <br />
                        <br />
                        <p className="m-0 mt-5">b. Have you resigned from the government service during the three (3)-month period before the last election to promote/actively campaign for a national or local candidate?</p>
                    </div>
                    <div className="col-md-5 bg-white row p-0 m-0 pt-2">
                        <div className="col-md-12 row m-0 p-0 pt-3 ">
                            <div className="d-flex w-100 m-0 col-md-6 w-100" style={{ transform: 'translate(5px,-10px)' }}>
                                <div className="d-flex ml-1 m-0" style={{ flex: 1 }}>
                                    <input defaultChecked={Candidate.Answer !== 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; Yes</label>
                                </div>
                                <div className="d-flex" style={{ flex: 1 }}>
                                    <input defaultChecked={Candidate.Answer === 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; No</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 row m-0 p-0 pl-3  mt-1">
                            <p className="mb-1">If YES, give details:
                                <br /> <span className="bold underlined">{Candidate.Details}</span>
                                <br />
                            </p>
                        </div>
                        <div className="col-md-12 row m-0 p-0 pt-3 ">
                            <div className="d-flex w-100 m-0 col-md-6 w-100" style={{ transform: 'translate(5px,-10px)' }}>
                                <div className="d-flex ml-1 m-0" style={{ flex: 1 }}>
                                    <input defaultChecked={Resigned.Answer !== 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; Yes</label>
                                </div>
                                <div className="d-flex" style={{ flex: 1 }}>
                                    <input defaultChecked={Resigned.Answer === 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; No</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 row m-0 p-0 pl-3  mt-1">
                            <p className="mb-1">If YES, give details:
                                <br /> <span className="bold underlined">{Resigned.Details}</span>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                {/*6*/}
                <div className="box row sub-title m-0 p-0 m-0 p-0">
                    <div className="col-md-7 br pt-1">
                        <p className="m-0">39.&nbsp; Have you acquired the status of an immigrant or permanent resident of another country??</p>
                    </div>
                    <div className="col-md-5 bg-white row p-0 m-0 pt-1">
                        <div className="col-md-12 row m-0 p-0 pt-3 ">
                            <div className="d-flex w-100 m-0 col-md-6 w-100" style={{ transform: 'translate(5px,-10px)' }}>
                                <div className="d-flex ml-1 m-0" style={{ flex: 1 }}>
                                    <input defaultChecked={Immigrant.Answer !== 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; Yes</label>
                                </div>
                                <div className="d-flex" style={{ flex: 1 }}>
                                    <input defaultChecked={Immigrant.Answer === 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; No</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 row m-0 p-0 pl-3  mt-1">
                            <p className="mb-1">If YES, give details:
                                <br /> <span className="bold underlined">{Immigrant.Details}</span>
                                <br />
                            </p>
                        </div>
                    </div>
                </div>

                {/* 7 */}
                <div className="box row sub-title m-0 p-0 m-0 p-0">
                    <div className="col-md-7 br pt-1">
                        <p className="m-0">40.&nbsp;Pursuant to: (a) Indigenous People's Act (RA 8371); (b) Magna Carta for Disabled Persons (RA 7277); and (c) Solo Parents Welfare Act of 2000 (RA 8972), please answer the following items:</p>
                        <p>a. Are you a member of any indigenous group?</p>
                        <p>b. Are you a person with disability?</p>
                        <p>c. Are you a solo parent?</p>
                    </div>
                    <div className="col-md-5 bg-white row p-0 m-0 pt-3">
                        <div className="col-md-12 row m-0 p-0 pt-3 ">
                            <div className="d-flex w-100 m-0 col-md-6 w-100" style={{ transform: 'translate(5px,-10px)' }}>
                                <div className="d-flex ml-1 m-0" style={{ flex: 1 }}>
                                    <input defaultChecked={Indigenous.Answer !== 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; Yes</label>
                                </div>
                                <div className="d-flex" style={{ flex: 1 }}>
                                    <input defaultChecked={Indigenous.Answer === 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; No</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 row m-0 p-0 pl-3  mt-1">
                            <p className="mb-1">If YES, give details:
                                <br /> <span className="bold underlined">{Indigenous.Details}</span>
                                <br />
                            </p>
                        </div>
                        <div className="col-md-12 row m-0 p-0 ">
                            <div className="col-md-12 row m-0 p-0 pt-3 ">
                                <div className="d-flex w-100 m-0 col-md-6 w-100" style={{ transform: 'translate(5px,-10px)' }}>
                                    <div className="d-flex ml-1 m-0" style={{ flex: 1 }}>
                                        <input defaultChecked={Disability.Answer !== 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                        <label >&nbsp; Yes</label>
                                    </div>
                                    <div className="d-flex" style={{ flex: 1 }}>
                                        <input defaultChecked={Disability.Answer === 'No'} disabled className="m-0 checkbox" type="checkbox" />
                                        <label >&nbsp; No</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 row m-0 p-0 pl-3  mt-1">
                                <p className="mb-1">If YES, give details:
                                    <br /> <span className="bold underlined">{Disability.Details}</span>
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12 row m-0 p-0">
                            <div className="d-flex w-100 m-0 col-md-6 w-100" style={{ transform: 'translate(5px,-10px)' }}>
                                <div className="d-flex ml-1 m-0" style={{ flex: 1 }}>
                                    <input disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; Yes</label>
                                </div>
                                <div className="d-flex" style={{ flex: 1 }}>
                                    <input disabled className="m-0 checkbox" type="checkbox" />
                                    <label >&nbsp; No</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 row m-0 p-0 pl-4">
                            <p style={{ display: 'inline-flex' }}>If YES, give details:
                                <span className="bold underlined">N/A</span>
                            </p>
                        </div>


                    </div>
                </div>

                <div className="col-md-12 row m-0 p-0">
                    <div className="col-md-9 row m-0 p-0">
                        <LeftGrid
                            References={props.References}
                            Idenification={props.Idenification}
                        />
                    </div>
                    <div className="col-md-3 row m-0 p-0">
                        <RightGrid />
                    </div>
                </div>
                <div className="col-md-12 row m-0 p-0">
                    <BottomGrid />
                </div>
            </div>
        </div>
    )
}
