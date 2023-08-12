<?php

namespace App\Enums;

use Spatie\Enum\Enum;

/**
 * @method static self ADMINISTRATIVE_AIDE_VI()
 * @method static self ADMINISTRATIVE_ASSISTANT_I()
 * @method static self ADMINISTRATIVE_ASSISTANT_II()
 * @method static self ADMINISTRATIVE_ASSISTANT_III()
 * @method static self ADMINISTRATIVE_OFFICER_I()
 * @method static self ADMINISTRATIVE_OFFICER_II()
 * @method static self ADMINISTRATIVE_OFFICER_III()
 * @method static self ADMINISTRATIVE_OFFICER_IV()
 * @method static self ADMINISTRATIVE_OFFICER_V()
 * @method static self ACCOUNTANT_I()
 * @method static self ACCOUNTANT_II()
 * @method static self ACCOUNTANT_III()
 * @method static self SECURITY_GUARD()
 * @method static self INSTRUCTOR_I()
 * @method static self INSTRUCTOR_II()
 * @method static self INSTRUCTOR_III()
 * @method static self ASSISTANT_PROFESSOR_I()
 * @method static self ASSISTANT_PROFESSOR_II()
 * @method static self ASSISTANT_PROFESSOR_III()
 * @method static self ASSISTANT_PROFESSOR_IV()
 * @method static self ASSOCIATE_PROFESSOR_I()
 * @method static self ASSOCIATE_PROFESSOR_II()
 * @method static self ASSOCIATE_PROFESSOR_III()
 * @method static self ASSOCIATE_PROFESSOR_IV()
 * @method static self ASSOCIATE_PROFESSOR_V()
 * @method static self PROFESSOR_I()
 * @method static self PROFESSOR_II()
 * @method static self PROFESSOR_III()
 * @method static self PROFESSOR_IV()
 * @method static self PROFESSOR_V()
 * @method static self PROFESSOR_VI()
 * @method static self JOB_HIRE()
 */
class PositionsEnum extends Enum
{
    protected static function values(): array
    {
        return [
            'ADMINISTRATIVE_AIDE_VI' => 'Administrative Aide VI',
            'ADMINISTRATIVE_ASSISTANT_I' => 'Administrative Assistant I',
            'ADMINISTRATIVE_ASSISTANT_II' => 'Administrative Assistant II',
            'ADMINISTRATIVE_ASSISTANT_III' => 'Administrative Assistant III',
            'ADMINISTRATIVE_OFFICER_I' => 'Administrative Officer I',
            'ADMINISTRATIVE_OFFICER_II' => 'Administrative Officer II',
            'ADMINISTRATIVE_OFFICER_III' => 'Administrative Officer III',
            'ADMINISTRATIVE_OFFICER_IV' => 'Administrative Officer IV',
            'ADMINISTRATIVE_OFFICER_V' => 'Administrative Officer V',
            'ACCOUNTANT_I' => 'Accountant I',
            'ACCOUNTANT_II' => 'Accountant II',
            'ACCOUNTANT_III' => 'Accountant III',
            'SECURITY_GUARD' => 'Security Guard',
            'INSTRUCTOR_I' => 'Instructor I',
            'INSTRUCTOR_II' => 'Instructor II',
            'INSTRUCTOR_III' => 'Instructor III',
            'ASSISTANT_PROFESSOR_I' => 'Assistant Professor I',
            'ASSISTANT_PROFESSOR_II' => 'Assistant Professor II',
            'ASSISTANT_PROFESSOR_III' => 'Assistant Professor III',
            'ASSISTANT_PROFESSOR_IV' => 'Assistant Professor IV',
            'ASSOCIATE_PROFESSOR_I' => 'Associate Professor I',
            'ASSOCIATE_PROFESSOR_II' => 'Associate Professor II',
            'ASSOCIATE_PROFESSOR_III' => 'Associate Professor III',
            'ASSOCIATE_PROFESSOR_IV' => 'Associate Professor IV',
            'ASSOCIATE_PROFESSOR_V' => 'Associate Professor V',
            'PROFESSOR_I' => 'Professor I',
            'PROFESSOR_II' => 'Professor II',
            'PROFESSOR_III' => 'Professor III',
            'PROFESSOR_IV' => 'Professor IV',
            'PROFESSOR_V' => 'Professor V',
            'PROFESSOR_VI' => 'Professor VI',
            'JOB_HIRE' => 'Job Hire',
        ];
    }
}
