
![Home Page](/app/assets/images/austana-welcome.png)

# Austana

A Rails / React clone of Asana, a popular project management tool. Austana allows
users to create and edit tasks, projects and teams, and organize tasks with task
lists.

## Live Demo

Click here to access the live demo: [Austana](https://austana.herokuapp.com)

## Technologies

**Back end**: 
* Ruby on Rails for web application framework
* PostgreSQL for database

**Front end**:
* JavaScript ES6
* React / Redux for front end framework and state management
* SCSS for styling  

## Technical Challenges  

### Asynchronous JavaScript and State Management  

A top priority for Austana was ensuring a seamless UI across various components
and entities. Most components required multiple API calls, so utilizing React
lifecycle methods, JavaScript promises and the Redux store was crucial to
achieving this goal.

*Example:* In the `ProjectOverview` component, I used `componentDidMount()`, React
Router and `Promise.all` to populate the Redux store as soon as the component mounted
so that state related to a particular project could be used in multiple views.

``` javascript
  componentDidMount() {
    const projectId = this.props.match.params.projectId;
    Promise.all([
      this.props.fetchProject(projectId),
      this.props.fetchTaskLists(projectId),
      this.props.fetchTasks()
    ]).catch(err => console.error(err.message));
  }
```  


![Redux Store](/app/assets/images/redux-store.png)


## Feature Highlights

### Login and Signup
![Login and Signup](/app/assets/images/login.png)
Users can create a new profile or login with existing credentials. They are guided
through an onboarding process when signing up to create their first team.

### Task Lists
![Task Lists](/app/assets/images/task-list.png)
On the "My Tasks" page, users can view tasks organized by their due dates. They can
mark tasks complete by clicking the check mark or add new tasks to the list.

### Project View
![Project View](/app/assets/images/project-view.png)
The project view allows users to view task lists and tasks for a given project and
edit, add or mark tasks complete.

## Desired Future Implementation:
* Email invitations for new team members
* Drag and drop functionality for project view

## Developer

John Steen is a full stack software engineer living in Austin, TX. Learn more
about him on [LinkedIn](https://www.linkedin.com/in/johnmsteen/).