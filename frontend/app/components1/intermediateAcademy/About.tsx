

const About = () => {
  return (
    <div className='flex justify-center bg-orange-00 pt-5 w-full  border-2 border-slate-950 
     h-auto bg-pink-500 min-h-screen'>
 
      <div className="flex flex-col font-bold">
        <h1 className="flex justify-center text-xl ">
          Class Description And Activities
        </h1>
       
        <div className="grid lg:grid-cols-2  max-lg:grid-cols-1 gap-5 p-5">

        <div className="flex justify-center rounded-xl  border-4 border-slate-950 ">
          <div className="flex flex-col ">

          <p className="text-lg p-2">Class Purpose:</p>

          <p className="px-2 text-sm">A class is a section for skilled professionals to 
          mentor, guide, and support students. Instructors provide live lectures, 
          answer questions, and conduct examinations.</p>

            <p className="text-lg p-2">Core Responsibilities:</p>
            
            <p className="text-sm px-2">Mentorship: Actively guide and support students throughout their learning journey.</p>
            <p className="text-sm px-2">Content Creation: Develop and deliver high-quality courses aligned with the class's focus. </p>

            <p className="text-lg p-2">Course Structure:</p>
            
            <p className="text-sm px-2">Core Courses: Fundamental content essential to the class's subject matter (e.g., Web Development).</p>

            <p className="text-lg p-2">Class Management:</p>
            
            <p className="text-sm px-2">Instructor Management: Add or remove instructors as needed.</p>
            <p className="text-sm px-2">Content Management: Create and manage courses, videos, articles, and other learning materials.</p>

            <p className="text-lg p-2">Instructor Expectations:</p>

            <p className="text-sm px-2">Regular Engagement: Deliver frequent live lectures and provide timely responses to student inquiries.</p>

            <p className="text-sm px-2">Value Creation: Offer practical tips, guidance, and support to enhance student learning. </p>

            <p className="text-sm p-3">Note: The class should foster a collaborative learning environment and provide exceptional value to students.</p>
             
          </div>
        </div>

        <div className="flex justify-center rounded-xl border-4 border-slate-950 ">
          <div className="flex flex-col">

          <p className="text-lg p-2">Class Lecture Overview</p>
          <p className="px-2 text-sm">Definition of Lecture:</p>
          <p className="px-2 text-sm">A lecture is a feature that allows class instructors to
             create private lecture sessions with specific students, without the 
             knowledge of other class students. lecture can include video calls, voice 
             calls, and chats.</p>

            <p className="text-lg p-2">Lecture Creation and Access:</p>
            <p className="text-sm px-2">Lecture can only be created by class instructors.</p>
            <p className="text-sm px-2">Only students included in the lecture can access it. </p>

            <p className="text-lg p-2">Lecture Features:</p>
            <p className="text-sm px-2">Schedule: Each lecture must have a specified start  time and date.</p>
            <p className="text-sm px-2">Title: Lecture should have a clear and descriptive   title.</p>

            <p className="text-sm px-2">Students Limit: There should be a specified maximum  number of students for each lecture.</p>
            <p className="text-sm px-2">Unique ID and Link: Upon creation, each lecture   will generate a unique ID and link, provided by the instructors for access.</p>
            
            <p className="text-lg p-2">Detailed Lecture Requirements:</p>
            <p className="text-sm px-2">Start Time and Date: Clearly defined to ensure  students know when the lecture will commence.</p>
            <p className="text-sm px-2">Title: Helps participants understand the lecture's purpose and content.</p>
            <p className="text-sm px-2">students Limit: Ensures the lecture remains manageable and  effective.</p>
            <p className="text-sm p-2">Unique ID and Link: Facilitates easy and secure access to the lecture. </p>

          </div>
        </div>

        <div className="flex justify-center rounded-xl border-4 border-slate-950 ">
          <div className="flex flex-col">

          <p className="text-lg p-2">Class Content and Interaction</p>

          <p className="px-2 text-sm">Content Sharing:
            All class students cannot create or share posts, including text, videos, photos,
             and audio files. students cannot be able  to delete or update  content.</p>

            <p className="text-lg p-2">Class Communication:</p>
            <p className="text-sm px-2">students can initiate and participate in class chats.</p>
            <p className="text-sm px-2">Only instructors can start class video and voice calls.</p>

            <p className="text-lg p-2">Class Management: </p>
            <p className="px-2">Instructors have exclusive rights to:</p>
            <p className="text-sm px-2"> Block content sharing and class communication.</p>
            <p className="text-sm px-2">  Modify class settings, including name and icon.</p>
            <p className="text-sm px-2"> Delete class content.</p>
           

            <p className="text-lg p-2">Class Privacy:</p>
            <p className="text-sm px-2">Class activities are private and visible only 
            to Class students and the instructors.</p>
            <p className="text-sm p-2">There is no limit to the number of class students. </p>
             
          </div>
        </div>

       
        <div className="flex justify-center rounded-xl border-4 border-slate-950 ">
          <div className="flex flex-col">

          <p className="text-lg p-2">How to Join the the lecture</p>

          <p className="px-2 text-lg">Eligibility:</p>
            <p className="text-sm px-2">Only students included during the lecture creation can join.</p>

            <p className="text-lg p-2">Joining Process:</p>
            <p className="text-sm px-2">To join, enter the lecture ID provided by the instructor. </p>

            <p className="text-lg p-2">Lecture Creator Controls:</p>
            <p className="text-sm px-2">The Lecture creator can select participants to speak.</p>
            <p className="text-sm px-2">The creator has control over the lecture, including muting all participants or allowing them to talk.</p> 
            <p className="text-sm px-2">The creator can see all students joining the lecture and add additional students if they were forgotten during the creation.</p>

            <p className="text-lg hidden p-2">Authentication: </p>
            <p className="text-sm hidden px-2">All members and admins must be authenticated before joining the meeting. </p>
            <p className="text- p-3 ">By following these steps, eligible students can 
              smoothly join and   participate in the lecture while the creator maintains full control over the session. </p>
             
          </div>
        </div>

        </div>

      </div>
    </div> 
  )
}

export default About