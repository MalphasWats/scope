(function (window) {
    
    function Router()
    {
        this.routes = {}
    }
    
    Router.prototype.add_route = function (route, view)
    {
        if ( !(route in this.routes) )
        {
            this.routes[route] = view
            return true
        }
        else
        {
            return false
        }
    }
    
    Router.prototype.remove_route = function (route)
    {
        return false
    }
    
    Router.prototype.handle_route = function (event)
    {
        if (typeof event === 'string')
        {
            var route = event
            history.replaceState({route: route}, "", route)
        }
        else if (event.state)
        {
            var route = event.state.route
        }
        else if (event.target)
        {
            var route = event.target.pathname
            history.pushState({route: route}, "", route)
        }
        else
        {
            route = null
        }
        
        if (route in this.routes)
        {
            if (event.preventDefault)
            {
                event.preventDefault()
            }
            this.routes[route].render()
        }
        else
        {
            // 404, broken route?
        }
    }
    
    Router.prototype.start_routing = function ()
    {
        var links = document.getElementsByTagName('a')
        
        for (var i=0 ; i<links.length ; i++)
        {
            if (links[i].pathname in this.routes)
            {
                links[i].onclick = function(e) {
                    this.handle_route.call(this, event)
                }.bind(this)
            }
        }
    }
    
    window.app = window.app || {}
    window.app.Router = Router
    
})(window);