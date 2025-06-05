// import { Application } from "@/types";
import UserApplicationPage from "@/components/tables/userApplications/pages";
import { useGetUserApplications } from "@/api/application";

const Applications = () => {
  const { userApplications, isLoading } = useGetUserApplications();  

  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="flex flex-col justify-start w-full">
        <div className="flex flex-col">
          <h2 className='text-2xl font-bold'>Applications</h2>
          <p className="text-sm text-gray-600">View updates about your loan requests here</p>
        </div>
        {isLoading && <div className="w-full rounded-md mt-5 h-80 bg-gray-200 animate-pulse"></div>}
        {userApplications && <UserApplicationPage data={userApplications} />}
      </div>
    </section>
  )
}

export default Applications