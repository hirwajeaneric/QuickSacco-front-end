import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button";
import { File, LucideCircleUser } from "lucide-react";
import { useGetProfileData } from "@/api/auth";
import { useContext, useEffect, useState } from "react";
import { User } from "@/types";
import Cookies from "js-cookie";
import { Store } from "@/context/user";

const PrimaryMenu = () => {
    const [userInfo, setUserInfo] = useState<User>();
    const { currentUser } = useGetProfileData();
    const { setUser } = useContext(Store);

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser)
            setUserInfo(currentUser)
        }
    }, [currentUser, setUser])

    return (
        <>
            {/* Desktop menu  */}
            <div className="hidden md:block">
                <span className="flex gap-5">
                    <a href={'/'} className="text-white">Home</a>
                    <a href={'/#process'} className="text-white">Process</a>
                    <a href={'/#benefits'} className="text-white">Benefits</a>
                    <a href={'/apply'} className=" text-white">Get Started</a>
                </span>
            </div>

            <div className="hidden md:block">
                {userInfo?._id
                    ?
                    <Popover>
                        <PopoverTrigger className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src="avatar.svg" />
                                <AvatarFallback>CN</AvatarFallback>
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
                                Cookies.remove('access-token');
                                window.location.reload();
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