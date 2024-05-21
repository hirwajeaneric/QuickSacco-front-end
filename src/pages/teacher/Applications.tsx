import { useEffect, useState } from "react";
import { applications as data } from "@/fakes/applications";
import { Application } from "@/types";
import UserApplicationPage from "@/components/tables/userApplications/pages";

const Applications = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    setApplications(data);
  },[])

  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="flex flex-col justify-start w-full">
        <div className="flex flex-col">
          <h2 className='text-2xl font-bold'>Applications</h2>
          <p className="text-sm text-gray-600">View updates about your loan requests here</p>
        </div>
        <UserApplicationPage data={applications ? applications : []} />
      </div>
    </section>
  )
}

export default Applications