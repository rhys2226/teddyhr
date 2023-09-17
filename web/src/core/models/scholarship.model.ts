import {ScholarShipAvailabilityEnum} from '../enum/scholarship-availability.enum'

export interface ScholarShip {
    id: number
    Title: string
    created_at: string
    updated_at: string
    attachments: any[]
    isAvailable: ScholarShipAvailabilityEnum
}
