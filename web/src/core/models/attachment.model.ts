export interface Attachment {
    id: number
    created_at: string
    updated_at: string
    user_id: number
    Type: string
    URL: string
    Name: string
    document_id: number | null
    award_id: number | null
    seminar_id: number | null
    scholarship_id: number | null
}
