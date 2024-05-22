import { listOfTeachers } from "@/fakes/users";
import TeachersTable from "@/components/tables/teachers/pages";

const Teachers = () => {
  return (
    <div className="flex flex-col gap-5">
      
      <div>
        <h1 className="font-bold text-xl">Teachers</h1>
      </div>
      <TeachersTable data={listOfTeachers} />
    </div>
  )
}

export default Teachers