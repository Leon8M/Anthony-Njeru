import { useState } from 'react'
import AnimatedLink from '../components/AnimatedLink'
import ArrowTopRight from '../components/ArrowTopRight'
import socialLinks from '../../socialLinks.json'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mzbqwryk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        // Optionally, you can reset the form after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="flex flex-col">
      <section className="bg-white dark:bg-neutral-900 py-20 lg:py-32">
        <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
          <div className="place-self-start lg:col-span-6">
            <h1 className="mb-4 text-4xl font-medium tracking-normal md:text-5xl">
              Get in touch
            </h1>
            <p className="mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl my-5">
              Ready to collaborate? Contact me for insights on financial analysis and strategic growth solutions.
            </p>
            {/* Assuming socialLinks is an array of objects with title and link properties */}
            <div className="grid auto-cols-fr max-w-scree-xl sm:grid-cols-2 grid-cols-1 gap-10">
              {/* Assuming AnimatedLink is a component that accepts props like key, title, link, and isExternal */}
              {socialLinks.map((link) => <AnimatedLink key={link.link} title={link.title} link={link.link} isExternal={true} />)}
            </div>
          </div>
          <div className="lg:col-span-6">
            <form onSubmit={handleSubmit}>
              <div className="w-full mb-10">
                <input
                  type="text"
                  className="py-3 focus:outline-none w-full border-b text-xl focus:border-neutral-950 dark:focus:border-white bg-transparent dark:text-white"
                  placeholder="Full name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full mb-10">
                <input
                  type="email"
                  className="py-3 focus:outline-none w-full border-b text-xl focus:border-neutral-950 dark:focus:border-white bg-transparent dark:text-white"
                  placeholder="Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full mb-10">
                <textarea
                  cols={30}
                  rows={4}
                  className="py-3 focus:outline-none w-full border-b text-xl focus:border-neutral-950 dark:focus:border-white bg-transparent dark:text-white"
                  placeholder="Tell me about the project"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="font-semibold md:text-2xl text-xl inline-flex items-center gap-2 group dark:text-white"
              >
                Submit message
                <ArrowTopRight
                  classNames="w-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 dark:fill-gray-300"
                />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact