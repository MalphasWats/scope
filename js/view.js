(function ()
{
    function View(template_name, model)
    {
        this.template = document.getElementById(template_name).innerHTML
        this.model = model
    }
    
    View.prototype.render = function()
    {
        var flow_control = /\{\{\#each (.+?)\}\}([\s\S.]+?){{\/each}}/g
        var value_keys = /\{\{(.+?)\}\}/g
        
        var data = this.model
        
        document.getElementById('content').innerHTML = this.template.replace(flow_control, function(_, key, inner_template) {
            var t = ''
            for (i in data[key])
            {
                d = data[key]
                t = t + inner_template.replace(value_keys, function(_, key)
                {
                    return d[i][key]
                })
            }
            return t
        })
    }
    
    window.app = window.app || {}
    window.app.View = View

})(window);