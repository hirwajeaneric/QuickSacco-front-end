// import { useGetLoanApplicationData, useUpdateApplication } from "@/api/application";
// import UpdateApplicationForm from "@/components/forms/UpdateApplicationForm";
// import { useParams } from "react-router-dom";

const UpdateApplication = () => {
  // const params = useParams();
  // const { isLoading: isUpdateLoading, updateApplication } = useUpdateApplication();
  // const { currentApplication, isLoading } = useGetLoanApplicationData(params.id as string)

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 p-5 md:p-0">
        <h2 className='text-2xl font-bold'>Update required information</h2>
        {/* {isLoading && <div className="w-full rounded-md mt-5 h-80 bg-gray-200 animate-pulse"></div>} */}
        {/* {currentApplication && <UpdateApplicationForm 
          onSave={updateApplication}
          isLoading={isUpdateLoading}
          currentApplication={currentApplication}
        />} */}
      </div>
    </section>
  )
}

export default UpdateApplication;