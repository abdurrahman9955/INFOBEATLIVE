

const About = () => {
    return (
      <div className='flex justify-center bg-orange-00 pt-5 w-full  border-2 border-slate-950 
       h-auto bg-lime-500 '>
  
        <div className="flex flex-col font-bold">
          <h1 className="flex justify-center text-xl ">
            Group Description And Activities
          </h1>
          
          <div className="grid lg:grid-cols-2  max-lg:grid-cols-1 gap-5 p-5">

          <div className="flex justify-center rounded-xl  border-4 border-slate-950 ">
            <div className="flex flex-col ">

            <p className="text-lg p-2">Group Purpose:</p>

            <p className="px-2 text-sm">This group facilitates real-time communication through live video and voice 
              calls. Group administrators can also host moderated discussions on specific 
              topics, inviting selected members to participate.</p>

              <p className="text-lg p-2">Group Features:</p>
              <p className="text-sm px-2">Private: Membership is exclusive and requires administrator approval.</p>
              <p className="text-sm px-2">Admin Controlled: Administrators manage member access and can remove
               members as needed. </p>
              <p className="text-sm px-2">Interactive: Members can engage in live video and voice chats.</p>
              <p className="text-sm px-2">Programmable: Admins can create and manage moderated discussions.</p>
              
              <p className="text-lg p-2">Group Guidelines:</p>
              <p className="text-sm px-2">Prohibited Activities: Explicit content, nudity, and illegal activities are strictly prohibited.</p>
              <p className="text-sm px-2">Community Focus: The group is intended for communication, collaboration, and connection among users. </p>
              <p className="text-sm px-2">Privacy: Users must adhere to our privacy policy. Violations may result in group suspension or termination.</p>
              <p className="text-sm p-3">Eligible Users: This platform is open to individuals from all walks of life, including students,
               professionals, and members of various communities.</p>
               
            </div>
          </div>

          <div className="flex justify-center rounded-xl border-4 border-slate-950 ">
            <div className="flex flex-col">

            <p className="text-lg p-2">Group Program Overview</p>
            <p className="px-2 text-sm">Definition of Program:</p>
            <p className="px-2 text-sm">A program is a feature that allows group admins to
               create private communication sessions with specific members, without the 
               knowledge of other group members. Programs can include video calls, voice 
               calls, and chats.</p>

              <p className="text-lg p-2">Program Creation and Access:</p>
              <p className="text-sm px-2">Programs can only be created by group admins.</p>
              <p className="text-sm px-2">Only members included in the program can access it. </p>

              <p className="text-lg p-2">Program Features:</p>
              <p className="text-sm px-2">Schedule: Each program must have a specified start time and date.</p>
              <p className="text-sm px-2">Title: Programs should have a clear and descriptive title.</p>
              <p className="text-sm px-2">Member Limit: There should be a specified maximum number of participants for each program.</p>
              <p className="text-sm px-2">Unique ID and Link: Upon creation, each program will generate a unique ID and link, provided by the admins for access.</p>
              
              
              <p className="text-lg p-2">Detailed Program Requirements:</p>
              <p className="text-sm px-2">Start Time and Date: Clearly defined to ensure participants know when the program will commence.</p>
              <p className="text-sm px-2">Title: Helps participants understand the program's purpose and content.</p>
              <p className="text-sm px-2">Participant Limit: Ensures the program remains manageable and effective.</p>
              <p className="text-sm p-2">Unique ID and Link: Facilitates easy and secure access to the program. </p>

            </div>
          </div>

          <div className="flex justify-center rounded-xl border-4 border-slate-950 ">
            <div className="flex flex-col">

            <p className="text-lg p-2">Group Content and Interaction</p>

            <p className="px-2 text-sm">Content Sharing:
              All group members can create and share posts, including text, videos, photos, and audio files.
              Users have the ability to delete their own content.</p>

              <p className="text-lg p-2">Group Communication:</p>
              <p className="text-sm px-2">Members can initiate and participate in group chats, video calls,
               and voice calls. Only administrators can start group video and voice calls.</p>

              <p className="text-lg p-2">Group Management: </p>
              <p className="px-2">Administrators have exclusive rights to:</p>
              <p className="text-sm px-2"> Block content sharing and group communication.</p>
              <p className="text-sm px-2">  Modify group settings, including name and icon.</p>
              <p className="text-sm px-2"> Delete group content.</p>
             

              <p className="text-lg p-2">Group Privacy:</p>
              <p className="text-sm px-2">Group activities are private and visible only to group members.</p>
              <p className="text-sm p-2">There is no limit to the number of group members. </p>
               
            </div>
          </div>

         
          <div className="flex justify-center rounded-xl border-4 border-slate-950 ">
            <div className="flex flex-col">

            <p className="text-lg p-2">How to Join the Program</p>

            <p className="px-2 text-lg">Eligibility:</p>
              <p className="text-sm px-2">Only members included during the program creation can join.</p>

              <p className="text-lg p-2">Joining Process:</p>
              <p className="text-sm px-2">To join, enter the program ID provided by the admin. </p>

              <p className="text-lg p-2">Program Creator Controls:</p>
              <p className="text-sm px-2">The program creator can select participants to speak.</p>
              <p className="text-sm px-2">The creator has control over the program, including muting all participants or allowing them to talk.</p> 
              <p className="text-sm px-2">The creator can see all members joining the meeting and add additional members if they were forgotten during the creation.</p>

              <p className="text-lg hidden p-2">Authentication: </p>
              <p className="text-sm hidden px-2">All members and admins must be authenticated before joining the meeting. </p>
              <p className="text- p-3 ">By following these steps, eligible members can smoothly join and 
                participate in the program while the creator maintains full control over the session. </p>
               
            </div>
          </div>

          </div>

        </div>
      </div> 
    )
  }
  
  export default About