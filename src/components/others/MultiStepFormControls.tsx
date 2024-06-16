import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button";

type Props = {
    currentPage: string;
    valid: boolean;
}

const MultiStepFormControls = ({ currentPage, valid }: Props) => {
    const navigate = useNavigate();
    return (
        <>
            {currentPage === '1'
                ? <></>
                : <Button
                    type='button'
                    onClick={() => navigate(`/${Number(currentPage) - 1}`)}>
                    Previous
                </Button>
            }
            {currentPage === '4'
                ? <></>
                : <Button
                    type='button'
                    disabled={!valid}
                    onClick={() => navigate(`/${Number(currentPage) + 1}`)}>
                    Next
                </Button>
            }
            {currentPage === '4'
                &&
                <Button
                    disabled={!valid}
                    type="submit"
                >
                    Submit
                </Button>
            }
        </>
    )
}

export default MultiStepFormControls