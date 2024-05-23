import ResponsesTable from "@/components/tables/allResponses/pages";
import { listOfResponses } from "@/fakes/responses";

const Responses = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-bold text-xl">Responses & feedback</h1>
      </div>
      <ResponsesTable data={listOfResponses} />
    </div>
  )
}

export default Responses