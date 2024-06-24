import { Link } from "react-router-dom"
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button";
import { File, LucideCircleUser } from "lucide-react";
import Cookies from "js-cookie";
import { iconTextGenerator } from "@/lib/iconTextGenerator";

const PrimaryMenu = () => {
    const localUserInfo = localStorage.getItem("teacher");
    const userInfo = JSON.parse(localUserInfo as string);

    return (
        <>
            {/* Desktop menu  */}
            <div className="hidden md:block">
                <span className="flex gap-5">
                    <a href={'/'} className="text-white">Home</a>
                    <a href={'/#process'} className="text-white">Process</a>
                    <a href={'/#benefits'} className="text-white">Benefits</a>
                    <a href={'/apply/overview'} className=" text-white">Get Started</a>
                </span>
            </div>

            <div className="hidden md:block">
                {userInfo?._id
                    ?
                    <Popover>
                        <PopoverTrigger className="flex items-center gap-2">
                            <Avatar>
                                {/* <AvatarImage src="avatar.svg" /> */}
                                <AvatarFallback>{iconTextGenerator(userInfo.firstName, userInfo.lastName)}</AvatarFallback>
                            </Avatar>
                            <p className="text-white">{userInfo.firstName}</p>
                        </PopoverTrigger>
                        <PopoverContent className="flex flex-col gap-2 bg-blue-500">
                            <Link to={'/account'} className="flex items-center justify-between px-3 py-1 rounded-sm text-white hover:bg-blue-700">
                                <span>Profile</span>
                                <LucideCircleUser />
                            </Link>
                            <Link to={'/account/applications'} className="flex items-center justify-between px-3 py-1 rounded-sm text-white hover:bg-blue-700">
                                <span>Applications</span>
                                <File />
                            </Link>
                            <Button variant={'secondary'} size={'sm'} onClick={() => {
                                Cookies.remove('teacher-access-token');
                                localStorage.removeItem('teacher');
                                window.location.replace('/');
                                // setUser(false);
                            }}>Sign out</Button>
                        </PopoverContent>
                    </Popover>
                    :
                    <Link to={'/signin'} className="hidden md:block text-blue-950 px-4 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 font-bold">Sign In</Link>
                }
            </div>
        </>
    )
}

export default PrimaryMenu