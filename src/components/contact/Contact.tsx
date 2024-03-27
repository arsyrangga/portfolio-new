import React from 'react'
import TextDivider from '../divider/TextDivider'
import Image from 'next/legacy/image'

const Contact = () => {
  return (
    <section className='mt-10 pt-10 pb-10 mb-10 paddingDefault'>
        <TextDivider text='Contact' id='contact' />
      <div className="mobile" id="contactMobile" style={{position : "relative", bottom: "225px"}}></div>
        <div className="contact mb-10 pb-10">
            <div className="contact-left">
                <input type="text"  className='inputContact' placeholder='ENTER YOUR NAME*' />
                <input type="text" className='inputContact' placeholder='ENTER YOUR EMAIL*'/>
                <input type="text" className='inputContact' placeholder='PHONE NUMBER'/>
                <textarea className='areaContact' placeholder='YOUR MESSAGE*' />
                <div className="flex justify-center">
                    <button className='buttonContact'>Submit</button>
                </div>
            </div>
            <div className="contact-right">
                <div className="grouper-contact">
                    <Image src={"/assets/icon/icon_in.svg"} width={40} height={40} alt='in' />
                    <span className='text-md ml-4'>Linkedin</span>
                </div>
                <div className="grouper-contact">
                    <Image src={"/assets/icon/icon_email.svg"} width={40} height={40} alt='in' />
                    <span className='text-md ml-4'>arsyrangga@gmail.com</span>
                    
                </div>
                <div className="grouper-contact">
                    <Image src={"/assets/icon/icon_phone.svg"} width={40} height={40} alt='in' />
                    <span className='text-md ml-4'>+62-896-7349-4895</span>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact