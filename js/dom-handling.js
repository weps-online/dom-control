class DomHandling{

    constructor() {
    }

    addIndexLink() {
        var container = document.getElementById('main-block');
        var indexLink = `<div class="row"><div class="col-6 mx-auto text-center alert alert-info">
        <a href="index.html">Return index</a></div></div>`;
        container.insertAdjacentHTML('beforeend', indexLink);
    }

    removeExampleLink(index){
        var elementToRemove = document.getElementById('example'+index);
        elementToRemove.remove();
    }

    showUrlParams(queryString){
        var urlBlock = document.getElementById('urlBlock');
        var htmlToAdd = document.createElement('div');
        if(queryString){
            htmlToAdd = '<div class="alert alert-info">'+ queryString + '</div>';
        }else{
            htmlToAdd = '<div class="alert alert-info"> No params in URL</div>';
        }
        urlBlock.innerHTML = '';
        urlBlock.insertAdjacentHTML('beforeend', htmlToAdd);
    }
}