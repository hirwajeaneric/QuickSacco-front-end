import { useUpdateUserAccount } from "@/api/auth";
import UserProfileForm from "@/components/forms/UserProfileForm";
import { Store } from "@/context/user";
import { useContext } from "react";

const Profile = () => {
  const userContext = useContext(Store);
  const { updateAccount, isLoading } = useUpdateUserAccount();

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className='text-2xl font-bold'>Profile</h2>
        <UserProfileForm 
          currentUser={userContext.user}
          onSave={updateAccount}
          isLoading={isLoading}
        />
      </div>
    </section>
  )
}

export default Profile