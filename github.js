class GitHub {
    constructor () {
        this.client_id = '72b4a3c9aa8bb899d7cd';
        this.client_secret = '3e2623dd03cb1c7e3c9452339097b038b9f07498';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {

        // get the user profile from the github api url
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // get the user's repos from the github api url
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // getting response from the api
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}