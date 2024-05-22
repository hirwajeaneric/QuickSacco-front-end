import { useSignUp } from "@/api/auth";
import AddManagerForm from "@/components/forms/AddManagerForm";
import { useNavigate } from "react-router-dom";

const AddManager = () => {
  const { signUp, isLoading, isSuccess } = useSignUp();

  const navigate = useNavigate();

  if (isSuccess) {
    navigate('/admin/managers');
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="font-bold text-xl">Register new manager</h1>
      </div>
      <AddManagerForm onSignUp={signUp} isLoading={isLoading} />
    </div>
  )
}

export default AddManager