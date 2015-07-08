initialCats = [
  {
    clickCount: 0,
    name: 'Khai',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'flickr source URL',
    nicknames: ['Khai Pie', 'Boy Cat']
  },
  {
    clickCount: 0,
    name: 'Whiska',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'flickr source URL',
    nicknames: ['Whiska Pie', 'Girl Cat']
  }
];

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

  this.title = ko.computed(function() {
    var title;
    var clicks = this.clickCount();
    if (clicks < 10) {
        title = 'Newborn';
    } else if (clicks < 20) {
        title = 'Infant';
    } else if (clicks < 30) {
        title = 'Child';
    } else if (clicks < 40) {
        title = 'Teen';
    } else if (clicks < 50) {
        title = 'Adult';
    } else {
        title = 'Ninja';
    }
    return title;
  }, this);
}

var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push( new Cat(catItem) );
  });

  this.currentCat = ko.observable( this.catList()[0] );

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat);
  };

}

ko.applyBindings(new ViewModel());
