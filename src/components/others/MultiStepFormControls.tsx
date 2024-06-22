import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useFormContext } from "react-hook-form";

type Props = {
    currentPage: string;
    valid: boolean;
};

const MultiStepFormControls = ({ currentPage, valid }: Props) => {
    const navigate = useNavigate();
    const formMethods = useFormContext();

    return (
        <>
            {currentPage === '1'
                ? null
                : <Button
                    type='button'
                    onClick={() => navigate(`/apply/step-${Number(currentPage) - 1}`)}
                >
                    Previous
                </Button>
            }
            {currentPage === '4'
                ? null
                : <Button
                    type='button'
                    disabled={!valid}
                    onClick={() => navigate(`/apply/step-${Number(currentPage) + 1}`)}
                >
                    Next
                </Button>
            }
            {currentPage === '4' && (
                <Button 
                    type="submit"
                    disabled={!valid}
                    onClick={() => console.log(formMethods.getValues())}
                >
                    Submit
                </Button>
            )}
        </>
    );
};

export default MultiStepFormControls;
