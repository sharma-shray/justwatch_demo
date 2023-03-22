# justwatch_demo

Plan:
The code here is made assuming two things in mind 
  1. the service has a front end webpage
  2. the service has an entry point to feed in data.

Assuming that jw-business-api is handling cases when the quotation amount is huge we should be getting a valid error in some way.
If the UI is the entry point for the service then we show the error on the UI if the entry point is through API then we through a valid response code. 


The test validates that if the user enters 100000 or any thing bigger then he should get a valid error message.
