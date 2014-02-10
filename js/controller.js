(function (window) {
    
    function Controller(router)
    {
        this.router = router
    }
    
    Controller.prototype.add_control = function (control_id)
    {
        
    }
    
    window.app = window.app || {}
    window.app.Controller = Controller
    
})(window)