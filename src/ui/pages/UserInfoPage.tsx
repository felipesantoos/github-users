import { useEffect, useState } from "react";
import UserInfoResponse from "../../core/domain/response/UserInfoResponse";
import GitHubUserAPI from "../../data/api/GitHubUserAPI";

function UserInfoPage() {
    const [info, setInfo] = useState<UserInfoResponse>();

    useEffect(() => {
        getUserInfo();
    }, []);

    useEffect(() => {
        console.log(info);
    }, [info]);

    async function getUserInfo() {
        const userInfo = await new GitHubUserAPI().getInfo("felipesantosds");

        setInfo(userInfo);
    }

    return (
        <div>
            <h1>User Info Page</h1>
            <p>{JSON.stringify(info)}</p>
        </div>
    );
}

export default UserInfoPage;
