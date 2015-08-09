var makeRequest = function(url, callback) {

    var data = 10;

    console.log("Data from Make Request (Global Scope): " + data);
    callback(data);

};

var obj = {

    someValue: 20,
    loadData: function(data) {

        var sum = this.someValue + data;
        console.log("SomeValue from obj scope: " + this.someValue);

        console.log("The sum: (obj Scope)" + sum);

    },
    prepareRequest: function() {
        var url = "http://someurl.com";
        
/**
* When loadData is called in makeRequest call, the loadData method goes
* automatically in global scope because makeRequest method is a method of 
* window object (global object) and it can't
* access the obj scope properties so that's why we use bind to map the method again 
* on obj object
*/
        makeRequest(url, this.loadData.bind(this));

    }

};
