 
 import React, { useRef} from 'react';
//  import emailjs from 'emailjs-com';
 import emailjs from '@emailjs/browser';
 
 function Mailer () {
const form =useRef();
    function sendMail (e) {
        e.preventDefault();
        emailjs.sendForm("service_l40pdbl"
        ,"template_53sov1c",form.current,"YzrEkPu953D6AVe8G"
        ).then(res =>{
            console.log(res);
        }).catch(err=> console.log(err))
    }

return (
    <div>
        <h1>conctact Form</h1>
        <form ref={form} onSubmit={sendMail}>
            <label>name</label>
            <input type='text' name='name' />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" rows='4'/>
            <input type="submit" value="send" />
        </form>
    </div>
)

}
export default Mailer;