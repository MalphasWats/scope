(function ()
{
    function View(template)
    {
        this.template = template
    }
    
    View.prototype.render = function()
    {
        document.getElementById('content').innerHTML = this.template
    }
    
    window.app = window.app || {}
    window.app.View = View

})(window);