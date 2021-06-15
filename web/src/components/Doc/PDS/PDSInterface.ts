
export interface PDS {
    User: User
    PesonsalInformation: PesonsalInformation
    FamilyBackground: FamilyBackground
    Children: Children
    Eligibilities: Eligibilities
    WorkExperiences: WorkExperiences
    VolunteerInvolvements: VolunteerInvolvements
    LearningAndDevelopments: LearningAndDevelopments
    Others: Others
    QuestionDetails: QuestionDetails
    References: References
    Identification: Identification
}

export interface User {
    Type: ""
    Token: ""
    Avatar: ""
    First: ""
    Last: ""
    Middle: ""
    Phone: ""
    Email: ""
    NameExtension: ""
    Password: ""
}

export interface PesonsalInformation {
    Sex: any
    CivilStatus: any
    DOB: ""
    Height: ""
    Weight: ""
    BLOODTYPE: ""
    GSIS: ""
    PAGIBIG: ""
    PHILHEALTH: ""
    SSS: ""
    TIN: ""
    EmployeeNumber: ""
    Citizenship: any
    DualCititizenship: any
    Details: ""
    Telephone: ""
}

export interface Address {
    Resedential:Addresses
    Permanent:Addresses
}

export interface Addresses {
    HouseNumber:''
    Street:''
    Village:''
    Barangay:''
    Municipality:''
    Province:''
    ZipCode:''
    Type:''
}

export interface FamilyBackground {
    SpouseFirst: ""
    SpouseLast: ""
    SpouseMiddle: ""
    SpouseExt: ""
    MotherFirst: ""
    MotherLast: ""
    MotherMiddle: ""
    MotherExt: ""
    FatherFirst: ""
    FatherLast: ""
    FatherMiddle: ""
    FatherExt: ""
    Occupation: ""
    BusinessName: ""
    BusinessAddress: ""
    Telephone: ""
}

export interface Children {
    Name: ""
    DOB: ""
}

export interface Eligibilities {
    Title: ''
    Rating: ''
    Date: ''
    Place: ''
    License: ''
    Validity: ''
}

export interface EducationalBackground {
    NameOfSchool:''
    Degree:''
    From:''
    To:''
    Units:''
    YearGraduated:''
    Scholarship:''
    Type:''
}

export interface WorkExperiences {
    From: ''
    To: ''
    Department: ''
    Salary: ''
    Appointment: ''
    Government: ''
    Position: ''
}

export interface VolunteerInvolvements {
    Name: ''
    From: ''
    To: ''
    Hours: ''
    Department: ''
}

export interface LearningAndDevelopments {
    Title: ''
    From: ''
    To: ''
    Hours: ''
    Type: ''
    SponsoredBy: ''
}

export interface Others {
    Skills: ''
    NonAcademicDistinction: ''
    Membership: ''
}

export interface QuestionDetails {
    Question: ''
    Answer: ''
    Details: ''
}

export interface References {
    Name: ''
    Address: ''
    TelNumber: ''
}

export interface Identification {
    GovtID: ''
    Passport: ''
    Date: ''
}
