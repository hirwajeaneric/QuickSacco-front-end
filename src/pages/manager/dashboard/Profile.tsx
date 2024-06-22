import { useGetProfileData, useUpdateUserAccount } from "@/api/auth";
import AdminProfileForm from "@/components/forms/AdminProfileForm";

const Profile = () => {
  const { isLoading: accountFetchLoading, currentUser } = useGetProfileData();
  const { updateAccount, isLoading } = useUpdateUserAccount();

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 p-5 md:p-0">
        <h2 className='text-xl font-bold'>Profile</h2>
        {accountFetchLoading && <div className="w-full rounded-md mt-5 h-80 bg-gray-200 animate-pulse"></div>}
        {currentUser && <AdminProfileForm 
          currentUser={currentUser}
          onSave={updateAccount}
          isLoading={isLoading}
        />}
      </div>
    </section>
  )
}

export default Profile