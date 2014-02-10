(function ()
{
    function TestApp()
    {
        this.router = new app.Router()
        
        this.model = {
            
            projects: {
                1: {
                    id: 1,
                    title: "Scope",
                    description: "My new project management thingy.",
                    tasks: {
                        1: {
                            id: 1,
                            title: "Create outline design",
                            description: "Create an outline design for the web app",
                            completed: true,
                        },
                        2: {
                            id:2,
                            title: "Enter all my projects",
                            description: "Add in all my special projects",
                            completed: false,
                        },
                    },
                },
                2: {
                    id: 2,
                    title: "Other Project",
                    description: "My other project.",
                    tasks: {},
                },
            }
            
        }
        
        var view = new app.View('project_list_template', this.model)
        this.router.add_route('/', view)
        
        //var view = new app.View('project_template')
        //this.router.add_route('/*/tasks', view, )
    }
    
    var test_app = new TestApp()
    
    window.addEventListener('load', function ()
    {
        test_app.router.start_routing()
        test_app.router.handle_route(window.location.pathname)
    })
    
    window.addEventListener('popstate', function(e)
    {
        test_app.router.handle_route(e)
    })
})();