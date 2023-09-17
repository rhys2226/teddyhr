import React, {useCallback} from 'react'
import {Alert, Fire} from '../../../components/Alerts/Alert'
import {useDropzone} from 'react-dropzone'
import {useForm} from 'react-hook-form'
import {Auth} from '../../../services/auth.service'
import {ScholarShipAvailabilityEnum} from '../../../core/enum/scholarship-availability.enum'

type Props = {
    show: Boolean
    hide: Function
}

type Inputs = {
    Title: any
}

export default function AddScholarship(props: Props) {
    const [files, setFiles] = React.useState([])

    const {register, handleSubmit} = useForm<Inputs>()

    const [disabled, setDisabled] = React.useState(false)

    const submit = async (data: any) => {
        const formData = new FormData()

        Object.keys(data).map((key) => {
            if (key !== 'files') {
                formData.append(key, data[key])
            }
        })

        const fileInput = document.getElementById('fileInput')

        const file = (fileInput as any)?.files[0]

        if (!file) {
            alert('You must attach supporting documents')
            return
        }

        formData.append(`files${0}`, file)

        formData.append(`isAvailable`, ScholarShipAvailabilityEnum.LIMITED)

        Fire(
            'Add Scholarship?',
            'Are you sure you want to add a scholarship?',
            'info',
            async () => {
                const api = new Auth('scholarships')

                try {
                    await api.create(formData)

                    Alert(
                        'Seminar Added',
                        'Scholarship successfully added',
                        'success',
                    )
                } catch (error) {
                    Alert('Error', 'Something went Wrong', 'error')
                }
            },
        )
    }

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-6">
                <div className="card-deck">
                    <div className="mb-4 shadow card">
                        <div className="p-3 card-header">
                            <strong className="card-title">
                                Scholarship Form
                            </strong>
                        </div>
                        <div className="card-body">
                            <div className="col-md-12 row">
                                <div className="col-md-12 t-mb-4">
                                    <div className="t-mb-1">
                                        Supporting Documents
                                    </div>
                                    <input id="fileInput" type="file" />
                                </div>
                                <div className="col-md-12 ">
                                    <form
                                        encType="multipart/form-data"
                                        onSubmit={handleSubmit(submit)}>
                                        <div className="row">
                                            <div className="form-group col-md-12">
                                                <label>
                                                    Title of Scholarship
                                                </label>
                                                <input
                                                    {...register('Title')}
                                                    className="form-control bg-light"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="mt-5 form-group col-md-12 d-flex aic jcc">
                                                <button
                                                    disabled={disabled}
                                                    className="float-right btn t-bg-black t-py-3 t-text-white t-rounded-full t-w-full">
                                                    {disabled == true ? (
                                                        <div className="d-flex aic jcc">
                                                            <div
                                                                className="spinner-border spinner-border-sm"
                                                                role="status"
                                                            />
                                                        </div>
                                                    ) : (
                                                        'Save Seminar'
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
