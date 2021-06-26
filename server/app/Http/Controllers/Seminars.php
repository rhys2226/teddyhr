<?php

namespace App\Http\Controllers;

use App\Models\Seminars;
use App\Http\Controllers\Controller;
use App\Models\Attachments;
use Illuminate\Http\Request;
use Storage;

class SeminarsController extends Controller
{
 public function index()
    {
        return Seminars::get()->with('attachments');
    }
    
    public function store(Request $request)
    {
        $data = $request->all();
        $seminar = Seminars::create($data);
        for($i = 0;$i < 15;$i++) {
            if(!isset($data['files'.$i])){
                break;
            }
            $file =  $data['files'.$i];
            $path = Storage::disk('public_uploads')->put('hrd/seminars/' , $file);
            $attachments = new Attachments();
            $attachments->scholarship_id =  $seminar->id;
            $attachments->URL =   Storage::url( $path );
            $attachments->Type = 'Seminars';
            $attachments->Name = $file->getClientOriginalName();
            $attachments->save();
        }
        return  $data;
        
    }

    public function destroy($id)
    {
        return Seminars::find($id)->delete();
    }
}
