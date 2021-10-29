import UserInfoResponse from "../../../core/domain/response/UserInfoResponse";

abstract class AbstractGitHubUserAPI {
    abstract getInfo(username: string): Promise<UserInfoResponse>;
}

export default AbstractGitHubUserAPI;
