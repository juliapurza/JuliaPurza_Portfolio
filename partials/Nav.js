const Page=require('./Page');

module.exports = class extends Page{
    render() {
        return `
<div class="navbar navbar-inverse navbar-static-top" role="navigation">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href=".">Portfolio of ${this.sName}</a>
    </div>
    <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
            <li><a href="contact.html">Home</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="contact.html">My Work</a></li>
        </ul>
    </div>
</div>
        `;
    }
}