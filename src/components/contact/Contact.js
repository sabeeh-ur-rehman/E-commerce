import React from "react";
import image2 from "../../assets/icons-mail.svg";
import image1 from "../../assets/icons-phone.svg";
import Button from "../button/Button";

const Contact = () => {
  return (
    <section className="flex gap-2 p-20 py-40 justify-around">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <img src={image1} />
            <h1 className="font-poppins font-medium text-base">Call To Us</h1>
          </div>
          <h3 className="font-poppins font-normal text-sm">
            We are available 24/7, 7 days a week.
          </h3>
          <h3 className="font-poppins font-normal text-sm">
            Phone: +8801611112222
          </h3>
        </div>
        <hr className="" />
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <img src={image2} />
            <h1 className="font-poppins font-medium text-base">Write To US</h1>
          </div>
          <h3 className="font-poppins font-normal text-sm">
          Fill out our form and we will contact you within 24 hours.
          </h3>
          <h3 className="font-poppins font-normal text-sm">
          Emails: customer@exclusive.com
          </h3>
          <h3 className="font-poppins font-normal text-sm">
          Emails: support@exclusive.com
          </h3>
        </div>
      </div>
      <form className="flex flex-col gap-4">
        <div className="flex gap-3">
          <input className="bg-Secondary py-4 px-3 rounded" placeholder="Your Name *" type="text" />
          <input className="bg-Secondary py-4 px-3 rounded" placeholder="Your Email *" type="text" />
          <input className="bg-Secondary py-4 px-3 rounded" placeholder="Your Phone *" type="text" />
        </div>
        <textarea className="bg-Secondary py-4 px-3 rounded max-h-52 min-h-40" placeholder="Your Massage" />
         <div className="flex justify-end">
         <Button className="bg-Secondary2 text-Text">Send Massage</Button>

         </div>
      </form>
    </section>
  );
};

export default Contact;
