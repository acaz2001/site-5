import HeroSmaller from '../../components/heroSmaller'
import React from 'react'
import AnimatedOnScroll from '../../components/AnimatedOnScroll'

function Page() {
  return (
    <main className='flex flex-col gap-10'>
    <section>
      <HeroSmaller 
      heading='Privacy Policy'
      subheading='Last Updated:January 2025'/>
    </section>

    <section className='w-[100%] flex flex-col justify-center items-center font-[420] text-[1.1rem] gap-5'>
        <div className='w-[45%] flex flex-col items-center justify-center gap-5'>
        <AnimatedOnScroll>
        <p>
        Welcome to Commerce. By using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our site.
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
        By accessing our website, you confirm that you are at least 18 years old or have the legal authority to agree to these terms. You agree to use the site only for lawful purposes and in compliance with all applicable laws and regulations.    
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
        All content on this website, including text, images, logos, graphics, and designs, is the property of Commerce or its licensors and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or use any content without prior written consent.   
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
        If you submit content to us, such as feedback or testimonials, you grant Commerce a non-exclusive, royalty-free, and irrevocable license to use, modify, and display the content for promotional or operational purposes.
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
        Our website and services are provided “as is” without any guarantees or warranties. While we strive to provide accurate and up-to-date information, we do not warrant the accuracy, reliability, or completeness of the content on our website.   
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
        Commerce is not liable for any indirect, incidental, or consequential damages arising from your use of our website or services. This includes, but is not limited to, loss of data, revenue, or profits.
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
        Our website may contain links to third-party websites. These links are provided for convenience, and Commerce does not endorse or assume responsibility for the content or practices of these external sites.
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
        We reserve the right to terminate or suspend your access to our website without notice if you violate these terms or engage in any conduct that we consider harmful to our business or users.
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
        We may update these terms and conditions periodically to reflect changes in our practices or legal requirements. Your continued use of the website constitutes acceptance of any changes.
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
        These terms and conditions are governed by and construed in accordance with the laws of [Insert Jurisdiction]. Any disputes will be resolved in the courts of [Insert Jurisdiction].
        </p>
        </AnimatedOnScroll>
        </div>
    
    </section>
    </main>
  )
}

export default Page