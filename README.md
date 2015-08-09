# JsOOP-Scope-Casting
MindFuck OOP JS Scope Casting

Bind Reasoning

When loadData is called in makeRequest call, the loadData method goes automatically in global scope because makeRequest method is a method of window object (global object) and it can't access the obj scope properties so that's why we use bind to map the method again on obj object
