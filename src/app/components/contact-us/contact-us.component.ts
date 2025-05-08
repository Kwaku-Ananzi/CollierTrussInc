import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup,FormControl, ReactiveFormsModule } from '@angular/forms';
/*
import MimeNode from 'nodemailer/lib/mime-node';
import nodemailer from 'nodemailer';
import { getLogger } from 'nodemailer/lib/shared';
import { error } from 'console';
*/

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})


export class ContactUsComponent {

  

  contactForm = new FormGroup({
  fullName: new FormControl(''),
  mobile_no: new FormControl(''),
  email_id: new FormControl(''),
  subject: new FormControl(''),
  comment: new FormControl(''),
  attach_file: new FormControl('')
});


onSubmit():void{
  
}

/*
export const sendEmail = async(from:string,to:string,subject:string,html:string,attachment:File) => {
  const transport = nodemailer.createTransport({
    service: process.env['MAIL_HOST'],
    auth:{
      user: process.env['MAIL_USERNAME'],
      pass: process.env['MAIL_PASSWORD']
    }
  })
  **/
/*
  const mailOptions = {
    from: from,
    to: toString,
    subject: subject,
    html:html,
    attachment:attachment
  }

*/

  

}
