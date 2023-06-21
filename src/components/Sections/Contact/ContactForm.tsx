import {FC, memo, useCallback, useMemo, useState} from 'react';

import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  // const handleSendMessage = useCallback(
  //   async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     /**
  //      * This is a good starting point to wire up your form submission logic
  //      * */
  //     console.log('Data to send: ', data);
  //   },
  //   [data],
  // );


  const handleSendMessage = useCallback(
      async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      

      const form = new FormData();
      form.append("from", data.name+ " " + data.email);
      form.append("to", "Bibin Alias bibinalias1@gmail.com");
      form.append("subject", "Resume Website Message");
      form.append("text", data.message);

      try {
        await axios.post(
          "https://api.mailgun.net/v3/sandbox674cf946b913433881426bccdcc2fe1c.mailgun.org/messages",
         form,
          {
            auth: {
              username: 'api',
              password: 'bd2c58482b1693ac4580a44495d3b12b-135a8d32-cad8c23b',
            },headers: { 'Content-Type': 'multipart/form-data' },
          }
        );
    
        console.log('Email sent successfully!');
       // console.log(response.data);
      } catch (error) {
        console.error('Error sending email:', error);
      }
      console.log('Data to send: ', data);
      //setData({...data, ...defaultData});
    },
    [data],
  );

  
  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      { <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit">
        Send Message
      </button> }
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
