import { useUpdateUserAccount } from "@/api/auth";
import ManagerProfileForm from "@/components/forms/manager-auth/ManagerProfileForm";
import { Store } from "@/context/user";
import { useContext } from "react";

const Profile = () => {
  const userContext = useContext(Store);
  const { updateAccount, isLoading } = useUpdateUserAccount();

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 p-5 md:p-0">
        <h2 className='text-xl font-bold'>Profile</h2>
        <ManagerProfileForm 
          currentUser={userContext.user}
          onSave={updateAccount}
          isLoading={isLoading}
        />
      </div>
    </section>
  )
}

export default Profile