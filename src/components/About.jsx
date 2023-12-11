import React from 'react'
import maleImg from "../images/undraw_male.svg";
import Sectiontitle from './Sectiontitle';


function About() {
    return (
      <section className='bg-white py-20'id="about">
            <div className='align-content grid md:grid-cols-2 items-center gap-16'>
                <img src={maleImg} alt='' className='w-full h-64'/>
          <article>
                    <Sectiontitle title="Code-Sleep-Code" />
                    <p className='text-slate-600 mt-8 leading-loose'>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Accusantium deserunt fuga
                        doloremque perspiciatis, voluptatem corporis architecto neque at,
                        dignissimos
                        sint alias beatae in praesentium.
                        Delectus tempora tempore exercitationem quibusdam unde.</p>
                    </article>


            </div>
            </section>
  )
}

export default About;