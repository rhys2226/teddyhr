import React from 'react'
import { Alert, Fire } from '../../../../../components/Alerts/Alert'
import { useForm } from 'react-hook-form'
import { Auth } from '../../../../../services/auth.service'

type Inputs = {
    Elementary: Education,
    Secondary: Education,
    Vocational: Education,
    College: Education,
    GraduateStudies: Education,
}


type Education = {
    employee_id: undefined
    NameOfSchool: undefined
    Degree: undefined
    From: undefined
    To: undefined
    Units: undefined
    YearGraduated: undefined
    Scholarship: undefined
    Type: undefined
}

export default function PDSEducBG( props: {
    Elementary: Education
    Secondary: Education
    College: Education
    Vocational: Education
    GraduateStudies: Education
} ) {

    const userData: any = localStorage.getItem( 'user' )
    const { register, handleSubmit, setValue } = useForm<Inputs>();

    const {
        Elementary,
        Secondary,
        College,
        Vocational,
        GraduateStudies,
    } = props

    React.useEffect( () => {

        setValue( 'Elementary.NameOfSchool', Elementary.NameOfSchool )
        setValue( 'Elementary.Degree', Elementary.Degree )
        setValue( 'Elementary.From', Elementary.From )
        setValue( 'Elementary.To', Elementary.To )
        setValue( 'Elementary.Units', Elementary.Units )
        setValue( 'Elementary.YearGraduated', Elementary.YearGraduated )
        setValue( 'Elementary.Scholarship', Elementary.Scholarship )

        setValue( 'Secondary.NameOfSchool', Secondary.NameOfSchool )
        setValue( 'Secondary.Degree', Secondary.Degree )
        setValue( 'Secondary.From', Secondary.From )
        setValue( 'Secondary.To', Secondary.To )
        setValue( 'Secondary.Units', Secondary.Units )
        setValue( 'Secondary.YearGraduated', Secondary.YearGraduated )
        setValue( 'Secondary.Scholarship', Secondary.Scholarship )

        setValue( 'College.NameOfSchool', College.NameOfSchool )
        setValue( 'College.Degree', College.Degree )
        setValue( 'College.From', College.From )
        setValue( 'College.To', College.To )
        setValue( 'College.Units', College.Units )
        setValue( 'College.YearGraduated', College.YearGraduated )
        setValue( 'College.Scholarship', College.Scholarship )

        setValue( 'Vocational.NameOfSchool', Vocational.NameOfSchool )
        setValue( 'Vocational.Degree', Vocational.Degree )
        setValue( 'Vocational.From', Vocational.From )
        setValue( 'Vocational.To', Vocational.To )
        setValue( 'Vocational.Units', Vocational.Units )
        setValue( 'Vocational.YearGraduated', Vocational.YearGraduated )
        setValue( 'Vocational.Scholarship', Vocational.Scholarship )

        setValue( 'GraduateStudies.NameOfSchool', GraduateStudies.NameOfSchool )
        setValue( 'GraduateStudies.Degree', GraduateStudies.Degree )
        setValue( 'GraduateStudies.From', GraduateStudies.From )
        setValue( 'GraduateStudies.To', GraduateStudies.To )
        setValue( 'GraduateStudies.Units', GraduateStudies.Units )
        setValue( 'GraduateStudies.YearGraduated', GraduateStudies.YearGraduated )
        setValue( 'GraduateStudies.Scholarship', GraduateStudies.Scholarship )

    }, [] )

    const submit = async ( data: any ) => {
        Fire(
            'Update Personal Data Sheet?',
            'I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
            'info',
            () => {
                console.log( data )
                let api = new Auth( 'educational-background' )
                api.create( data, {} ).then( () => {
                    Alert(
                        'PDS Successfully Updated',
                        'You have successfully updated your Personal Data Sheet',
                        'success',
                    )
                } )
                    .catch( () => {
                        Alert(
                            'Error',
                            'Erro Updating Personal Data Sheet. Try Again',
                            'error',
                        )
                    } )
            }
        )
    }

    return (
        <div className="card-body card">
            <form onSubmit={handleSubmit( submit )}>
                <h5 className="bold mt-4 mb-4">EDUCATIONAL BACKGROUND</h5>

                <h6 className="bold mt-4 mb-4 text-info">ELEMENTARY</h6>
                <div className="row mb-4">
                    <input type="hidden" value={JSON.parse( userData ).id}  {...register( 'Elementary.employee_id' )} />
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">NAME OF SCHOOL (Write in full)</label>
                        <input  {...register( 'Elementary.NameOfSchool' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">BASIC EDUCATION/DEGREE/COURSE</label>
                        <input  {...register( 'Elementary.Degree' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">From</label>
                        <input  {...register( 'Elementary.From' )} type="date" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">To</label>
                        <input  {...register( 'Elementary.To' )} type="date" className="form-control" />
                    </div>
                    <div className="col-md-12  mb-4">
                        <label htmlFor="">HIGHEST LEVEL/ UNITS EARNED (if not graduated)</label>
                        <input  {...register( 'Elementary.Units' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">YEAR GRADUATED</label>
                        <input  {...register( 'Elementary.YearGraduated' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor=""> SCHOLARSHIP/ ACADEMIC HONORS RECEIVED</label>
                        <input {...register( 'Elementary.Scholarship' )} type="text" className="form-control" />
                        <input type="hidden" value="Elementary"  {...register( 'Elementary.Type' )} />
                    </div>
                </div>

                <h6 className="bold mt-4 mb-4 text-info">SECONDARY</h6>
                <div className="row mb-4">
                    <input type="hidden" value={JSON.parse( userData ).id}  {...register( 'Secondary.employee_id' )} />
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">NAME OF SCHOOL (Write in full)</label>
                        <input  {...register( 'Secondary.NameOfSchool' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">BASIC EDUCATION/DEGREE/COURSE</label>
                        <input  {...register( 'Secondary.Degree' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">From</label>
                        <input  {...register( 'Secondary.From' )} type="date" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">To</label>
                        <input  {...register( 'Secondary.To' )} type="date" className="form-control" />
                    </div>
                    <div className="col-md-12  mb-4">
                        <label htmlFor="">HIGHEST LEVEL/ UNITS EARNED (if not graduated)</label>
                        <input  {...register( 'Secondary.Units' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">YEAR GRADUATED</label>
                        <input  {...register( 'Secondary.YearGraduated' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor=""> SCHOLARSHIP/ ACADEMIC HONORS RECEIVED</label>
                        <input {...register( 'Secondary.Scholarship' )} type="text" className="form-control" />
                    </div>
                    <input type="hidden" value="Secondary"  {...register( 'Secondary.Type' )} />
                </div>

                <h6 className="bold mt-4 mb-4 text-info">VOCATIONAL/TRADE COURSE</h6>
                <div className="row mb-4">
                    <input type="hidden" value={JSON.parse( userData ).id}  {...register( 'Vocational.employee_id' )} />
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">NAME OF SCHOOL (Write in full)</label>
                        <input  {...register( 'Vocational.NameOfSchool' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">BASIC EDUCATION/DEGREE/COURSE</label>
                        <input  {...register( 'Vocational.Degree' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">From</label>
                        <input  {...register( 'Vocational.From' )} type="date" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">To</label>
                        <input  {...register( 'Vocational.To' )} type="date" className="form-control" />
                    </div>
                    <div className="col-md-12  mb-4">
                        <label htmlFor="">HIGHEST LEVEL/ UNITS EARNED (if not graduated)</label>
                        <input  {...register( 'Vocational.Units' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">YEAR GRADUATED</label>
                        <input  {...register( 'Vocational.YearGraduated' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor=""> SCHOLARSHIP/ ACADEMIC HONORS RECEIVED</label>
                        <input {...register( 'Vocational.Scholarship' )} type="text" className="form-control" />
                    </div>
                    <input type="hidden" value="Vocational"  {...register( 'Vocational.Type' )} />
                </div>

                <h6 className="bold mt-4 mb-4 text-info">COLLEGE</h6>
                <div className="row mb-4">
                    <input type="hidden" value={JSON.parse( userData ).id}  {...register( 'College.employee_id' )} />
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">NAME OF SCHOOL (Write in full)</label>
                        <input  {...register( 'College.NameOfSchool' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">BASIC EDUCATION/DEGREE/COURSE</label>
                        <input  {...register( 'College.Degree' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">From</label>
                        <input  {...register( 'College.From' )} type="date" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">To</label>
                        <input  {...register( 'College.To' )} type="date" className="form-control" />
                    </div>
                    <div className="col-md-12  mb-4">
                        <label htmlFor="">HIGHEST LEVEL/ UNITS EARNED (if not graduated)</label>
                        <input  {...register( 'College.Units' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">YEAR GRADUATED</label>
                        <input  {...register( 'College.YearGraduated' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor=""> SCHOLARSHIP/ ACADEMIC HONORS RECEIVED</label>
                        <input {...register( 'College.Scholarship' )} type="text" className="form-control" />
                    </div>
                    <input type="hidden" value="College"  {...register( 'College.Type' )} />
                </div>

                <h6 className="bold mt-4 mb-4 text-info">GRADUATE STUDIES</h6>
                <div className="row mb-4">
                    <input type="hidden" value={JSON.parse( userData ).id}  {...register( 'GraduateStudies.employee_id' )} />
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">NAME OF SCHOOL (Write in full)</label>
                        <input  {...register( 'GraduateStudies.NameOfSchool' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">BASIC EDUCATION/DEGREE/COURSE</label>
                        <input  {...register( 'GraduateStudies.Degree' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mb-4">
                        <label htmlFor="">From</label>
                        <input  {...register( 'GraduateStudies.From' )} type="date" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="">To</label>
                        <input  {...register( 'GraduateStudies.To' )} type="date" className="form-control" />
                    </div>
                    <div className="col-md-12  mb-4">
                        <label htmlFor="">HIGHEST LEVEL/ UNITS EARNED (if not graduated)</label>
                        <input  {...register( 'GraduateStudies.Units' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor="">YEAR GRADUATED</label>
                        <input  {...register( 'GraduateStudies.YearGraduated' )} type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <label htmlFor=""> SCHOLARSHIP/ ACADEMIC HONORS RECEIVED</label>
                        <input {...register( 'GraduateStudies.Scholarship' )} type="text" className="form-control" />
                    </div>
                    <input type="hidden" value="GraduateStudies"  {...register( 'GraduateStudies.Type' )} />
                </div>

                <div className="mt-5 mb-4 d-flex aij jcc">
                    <button className="btn btn-outline-primary">Update Educational Background</button>
                </div>
            </form>
        </div>
    )
}
