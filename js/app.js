(function ()
{
    function TestApp()
    {
        this.router = new app.Router()
        
        var view = new app.View('<p>This is the Homepage</p>')
        this.router.add_route('/', view)
        
        var view = new app.View('<p>This is page 1</p>')
        this.router.add_route('/page1.html', view)
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