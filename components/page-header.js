class PageHeader {
    constructor(headerElement)
    {
        this.headerElement = headerElement;
    }
    updateAverage(newAverage){       
        var badgeElement = (this.headerElement).querySelector('span');  
        badgeElement.textContent = newAverage;
    }
}