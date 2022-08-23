import Head from 'next/head'
import Contact from '../components/Contact'
import CV from '../components/CV'
import Education from '../components/Education'
import Fold from '../components/Fold'
import JobsAndInternships from '../components/JobsAndInternships'
import Languages from '../components/Languages'
import Minors from '../components/Minors'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Floyd van Boksel</title>
      </Head>

      <>
        <Fold />
        <CV />
        <JobsAndInternships />
        <Education />

        <div className="grid gap-8 p-4 grid-rows-2 mx-auto bg-gray-900 md:grid-cols-2 md:mx-auto md:flex md:p-16 md:justify-center md:space-x-8 lg:space-x-20">
          <Minors />
          <Languages />
        </div>
        <Contact />
      </>
    </>
  )
}

export default IndexPage
