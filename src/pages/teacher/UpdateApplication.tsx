import { useSubmitApplication } from "@/api/application";
import AddApplicationForm from "@/components/forms/AddApplicationFormDraft";
import { useNavigate } from "react-router-dom";

const UpdateApplication = () => {
  const { submitApplication, isLoading, isSuccess } = useSubmitApplication();
  // const { updateApplication, isLoading: isUpdateLoading } = useUpdateApplication();
  // const { currentApplication, isLoading: isGetLoading } = useGetApplicationsData();
  const navigate = useNavigate();
  
  if (isSuccess) {
    navigate('/success');
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 p-5 md:p-0">
        <h2 className='text-2xl font-bold'>Update required information</h2>
        <AddApplicationForm 
          onSave={submitApplication}
          isLoading={isLoading}
        />
      </div>
    </section>
  )
}

export default UpdateApplication;