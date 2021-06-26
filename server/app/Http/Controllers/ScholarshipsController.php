<?php

namespace App\Http\Controllers;

use App\Models\Scholarships;
use App\Http\Controllers\Controller;
use App\Models\Attachments;
use Illuminate\Http\Request;
use Storage;

class ScholarshipsController extends Controller
{
    public function index()
    {
        return Scholarships::get()->with('attachments');
    }
    
    public function store(Request $request)
    {
        $data = $request->all();
        $scholarship = Scholarships::create($data);
        for($i = 0;$i < 15;$i++) {
            if(!isset($data['files'.$i])){
                break;
            }
            $file =  $data['files'.$i];
            $path = Storage::disk('public_uploads')->put('hrd/scholarships/' , $file);
            $attachments = new Attachments();
            $attachments->scholarship_id =  $scholarship->id;
            $attachments->URL =   Storage::url( $path );
            $attachments->Type = 'Scholarships';
            $attachments->Name = $file->getClientOriginalName();
            $attachments->save();
        }
        return  $data;
        
    }

    public function destroy($id)
    {
        return Scholarships::find($id)->delete();
    }
}
