import UserProfileForm from "@/components/forms/UserProfileForm"
import { useState } from "react"

const Profile = () => {
  const [user, setuser] = useState({});
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className='text-2xl font-bold'> User Profile Form</h2>
        <UserProfileForm 
          currentUser={user}
          onSave={true}
          isLoading={true}
        />
      </div>
    </section>
  )
}

export default Profile