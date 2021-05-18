<?php

namespace App\Models;

use App\Casts\JSON;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PDS extends Model
{
    use HasFactory;

    protected $fillable = [
        'surname',
        'first_name',
        'middle_name',
        'name_extension',
        'date_of_birth',
        'sex',
        'civil_status',
        'height',
        'weight',
        'blood_type',
        'gsis_id_no',
        'pagibig_id_no',
        'philhealth_no',
        'ss_no',
        'tin_no',
        'agency_employee_no',
        'citizenship',
        'residential_address',
        'residential_address_zip_code',
        'permanent_address',
        'permanent_address_zip_code',
        'telephone_number',
        'mobile_number',
        'email_address',
        'spouse_surname',
        'spouse_first_name',
        'spouse_middle_name',
        'spouse_occupation',
        'spouse_employer_business_name',
        'spouse_business_address',
        'spouse_telephone_number',
        'father_surname',
        'father_first_name',
        'father_middle_name',
        'mother_surname',
        'mother_first_name',
        'mother_middle_name',
        'government_issued_id',
        'id_license_passport_no',
        'date_place_of_issuance',
        'date_accomplished',
        'children',
        'educational_background',
        'civil_service_eligibility',
        'work_experience',
        'voluntary_work',
        'learning_and_development',
        'other_information',
        'questions',
        'references',
        'signature',
        'right_thumbmark',
        'person_administering_oath',
    ];

    protected $casts = [
        'children' => JSON::class,
        'educational_background' => JSON::class,
        'civil_service_eligibility' => JSON::class,
        'work_experience' => JSON::class,
        'voluntary_work' => JSON::class,
        'learning_and_development' => JSON::class,
        'other_information' => JSON::class,
        'questions' => JSON::class,
        'references' => JSON::class,
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
