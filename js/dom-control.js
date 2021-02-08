class DomControl {

    constructor() {
        this.queryString = window.location.search;
        this.urlParams = new URLSearchParams(this.queryString);
        if (this.queryString) {
            this.addIndexLink();
            this.removeExampleLink(1);
        }
    }

    addIndexLink() {
        var container = document.getElementsByClassName('container-fluid')[0];
        var indexLink = `<div class="row"><div class="col-6 mx-auto text-center alert alert-info">
        <a href="index.html">Return index</a></div></div>`;
        container.insertAdjacentHTML('beforeend', indexLink);
    }
    
    removeExampleLink(index){
        var elementToRemove = document.getElementById('example'+index);
        elementToRemove.remove();
    }

    hideByClass() {
        if (this.urlParams.has('class')) {
            document.getElementsByClassName(this.urlParams.get('class'))[0].style.display = 'none';
        }
    }

    showUrlParams(){
        var urlBlock = document.getElementById('urlBlock');
        var htmlToAdd = '';
        if(this.queryString){
            htmlToAdd = '<div class="alert alert-info">'+ this.queryString + '</div>';
        }else{
            htmlToAdd = '<div class="alert alert-info"> No params in URL</div>';
        }
        urlBlock.replaceWith(htmlToAdd);
    }
}