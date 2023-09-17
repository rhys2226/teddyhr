import {User} from '../../services/user.service'
import {ApplicationStatusEnum} from '../enum/application-status.enum'
import {Attachment} from './attachment.model'

export interface Application {
    id: number
    created_at: string
    updated_at: string
    user_id: number
    Degrees: string
    Position: string
    Schedule: string
    Alignment: string
    Eligibilities: string
    Office: string | null
    WorkExperience: string
    PreviousEmployer: string
    EducationalAttainments: string
    EmployersContactInformation: string
    isPending: boolean | ApplicationStatusEnum

    user: User
    attachments: Attachment[]
}
