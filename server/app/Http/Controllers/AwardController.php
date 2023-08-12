<?php

namespace App\Http\Controllers;

use App\Models\Award;
use App\Http\Controllers\Controller;
use App\Models\Attachments;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AwardController extends Controller
{
    public function index()
    {
        return Award::with('files')
            ->with('user')
            ->get();
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $award = Award::create($data);
        for ($i = 0; $i < 15; $i++) {
            if (!isset($data['files' . $i])) {
                break;
            }
            $file =  $data['files' . $i];
            $path = Storage::disk('public_uploads')->put('employees/awards', $file);
            $attachments = new Attachments();
            $attachments->award_id =  $award->id;
            $attachments->user_id = $data['employee_id'];
            $attachments->URL =   Storage::url($path);
            $attachments->Type = '/award';
            $attachments->Name = $file->getClientOriginalName();
            $attachments->save();
        }
        return  $data;
    }

    public function destroy($id)
    {
        return Award::find($id)->delete();
    }
}
