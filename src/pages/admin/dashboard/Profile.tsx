import { useUpdateUserAccount } from "@/api/auth";
import AdminProfileForm from "@/components/forms/AdminProfileForm";

const Profile = () => {
  const unParsedUserInfo = localStorage.getItem('admin') as string;
  const currentUser = JSON.parse(unParsedUserInfo);
  const { updateAccount, isLoading } = useUpdateUserAccount();

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 p-5 md:p-0">
        <h2 className='text-xl font-bold'>Profile</h2>
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