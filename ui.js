class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        //console.log(user);

        // this grabs stuff from the API and puts it into HTML for the page
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class=
                        "btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repo}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-primary">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repositories</h3>
            <div id="repos"></div>
        `;
    }

    // Show user repos
    showRepos(repos) {
        let output = '';

        // loop through each repo and build html for the page
        repos.forEach(function(repo){
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success"Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        // Output respositories
        document.getElementById('repos').innerHTML = output;
    }

    // Show alert message
    showAlert(message, className) {
        // Clear any existing alerts
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // Add classes to the div
        div.className = className;
        // Add text of the alert
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search); // thing to insert, what to put before
        // Timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);    
    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // clear out the HTML for the profile if nothing is in the user input box
    clearProfile() {
        this.profile.innerHTML = '';
    }
}