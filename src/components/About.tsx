import { forwardRef } from 'react'

const About = (props: any, ref: any) => {
  return (
    <section className="bg-white dark:bg-neutral-900 py-20 lg:py-32" ref={ref}>
      <div className="relative grid auto-cols-fr gap-10 max-w-screen-xl px-4 mx-auto lg:grid-cols-12">
        <div className="mx-auto place-self-center lg:col-span-6">
          <h2 className="lg:max-w-2xl mb-4 text-3xl font-normal tracking-normal md:text-4xl xl:text-5xl">
            About me
          </h2>
          <p className="lg:max-w-2xl mb-6 font-normal leading-relaxed text-gray-500 lg:mb-8 text-xl">
          Looking for a financial analyst to drive growth? Meet me, a Change Agent skilled in financial modeling, risk analysis, and compliance auditing, dedicated to driving business growth through strategic financial insights.
          </p>
          <p className="lg:max-w-2xl font-normal leading-relaxed text-gray-500 text-xl">
          Highly skilled and adaptable, I am a Risk & Actuarial Analyst and Compliance Auditor with proven expertise in data analysis, seeking challenges to deliver problem-oriented solutions for decision-making.
          </p>
        </div>
        <div className="relative lg:block hidden lg:mt-0 lg:col-span-6 max-w-sm justify-self-end self-end mr-6">
          <img src="/images/2.jpg" alt="aboout-1" className="transition-all duration-700 opacity-0 animating-image" />
          <div className="bg-neutral-950 absolute inset-0 transition-all duration-700 animating-bg w-full" />
        </div>
      </div>
    </section>
  )
}

export default forwardRef(About)