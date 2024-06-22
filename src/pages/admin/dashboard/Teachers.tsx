import TeacherTable from "@/components/tables/teacherApplications/pages"
import { useGetTeachers } from "@/api/auth";

const Teacher = () => {
  const { teachers, isLoading } = useGetTeachers();
  
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-bold text-xl">Teacher</h1>
      </div>
      {isLoading && <div className="w-full rounded-md mt-5 h-80 bg-gray-200 animate-pulse"></div>}
      {teachers && <TeacherTable data={teachers} />}
    </div>
  )
}

export default Teacher