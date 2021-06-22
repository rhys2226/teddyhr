<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class verify extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct($data)
    {
       $this->emailData = $data;
    }

    public function build()
    {
    return  $this->from(env('APP_EMAIL'), env('APP_NAME') )
        ->subject('Welcome to '.env('APP_NAME').' Please verify your email' )
        ->view('emails.verify',['data'=> $this->emailData]);
    }
}
