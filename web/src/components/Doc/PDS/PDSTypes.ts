
export type PDS = {
    User:User
    PesonsalInformation:PesonsalInformation
    FamilyBackground:FamilyBackground
    Children:Children
    Eligibilities:Eligibilities
    WorkExperiences:WorkExperiences
    VolunteerInvolvements: VolunteerInvolvements
    LearningAndDevelopments:LearningAndDevelopments
    Others:Others
    QuestionDetails:QuestionDetails
    References:References
    Identification:Identification
}

export type User = {
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

export type PesonsalInformation = {
    Sex: "Male"
    CivilStatus: "Widow"
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
    Citizenship: ""
    DualCititizenship: ""
    Details: ""
    Telephone: ""
}

export type Addresses = {
    HouseNumber:''
    Street:''
    Village:''
    Barangay:''
    Municipality:''
    Province:''
    ZipCode:''
    Type:''
}

export type FamilyBackground = {
    SpouseFirst:""
    SpouseLast:""
    SpouseMiddle:""
    SpouseExt:""
    MotherFirst:""
    MotherLast:""
    MotherMiddle:""
    MotherExt:""
    FatherFirst:""
    FatherLast:""
    FatherMiddle:""
    FatherExt:""
    Occupation:""
    BusinessName:""
    BusinessAddress:""
    Telephone:""
}

export type Children = {
    Name:""
    DOB:""
}

export type Eligibilities = {
    Title:''
    Rating:''
    Date:''
    Place:''
    License:''
    Validity:''
}

export type WorkExperiences = {
    From:''
    To:''
    Department:''
    Salary:''
    Appointment:''
    Government:''
    Position:''
}

export type VolunteerInvolvements = {
    Name:''
    From:''
    To:''
    Hours:''
    Department:''
}

export type LearningAndDevelopments = {
    Title:''
    From:''
    To:''
    Hours:''
    Type:''
    SponsoredBy:''
}

export type Others = {
    Skills:''
    NonAcademicDistinction:''
    Membership:''
}

export type QuestionDetails = {
    Question:''
    Answer:''
    Details:''
}

export type References = {
    Name:''
    Address:''
    TelNumber:''
}

export type Identification = {
    GovtID:''
    Passport:''
    Date:''
}
