interface UserInfoResponse {
    id: number,
    login: string,
    avatar_url: string,
    repos_url: string,
    type: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string,
    bio: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
}

export default UserInfoResponse;
