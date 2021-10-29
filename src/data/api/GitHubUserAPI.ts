import axios from "axios";

import UserInfoResponse from "../../core/domain/response/UserInfoResponse";
import AbstractGitHubUserAPI from "./abstraction/AbstractionGitHubUserAPI";

class GitHubUserAPI extends AbstractGitHubUserAPI {
    async getInfo(username: string): Promise<UserInfoResponse> {
        const response = await axios.get<UserInfoResponse>(`https://api.github.com/users/${username}`);

        return response.data;
    }
}

export default GitHubUserAPI;
