<h1> Just watch assingment</h1>

<h2>Improvement in functionality</h2>
Introduce a daily limit functionality in the payment /quotation section and every time a user tries to enter more than a given amount he has to either contact us to increase his limit or gets an alert box which tells him the amount in letter and not numbers because people can read the digits less and more.e.g. one million and eleven thousand.
 
<h2>Test approach</h2>
The code here is made assuming two things in mind 

  1. The service has a front end webpage for human interaction
  
  2. The service has an entry point to feed in data for non human interaction.

Assuming that jw-business-api is handling cases when the quotation amount is huge we should be getting a valid error in some way.
If the UI is the entry point for the service then we show the error on the UI if the entry point is through API then we through a valid response code. 

That would mean if at any point these tests start failing, then our system has stopped handling huge amounts.

The test validates that if the user enters 100000 or any thing bigger then he should get a valid error message.


<h2>How would automation be implimented?</h2>
Approach :

1. The tests are divided into sections i.e. affected fuctionality which would mean that a devloper knows which test is for which functionality. 
  In case a tester touches the code of lets say payment  section he/ she can run all the test cases to verify that he/she is not creating a case for just watch to go        insolvent.
  
2. Every evening when people go and enjoy fierabend beer, the CI pack runs a complete pack pf tests on a branch which had merges done today andpublishes results to          testers and which can then be shared with devs if something was broken.


<h2>Tackling the dev issues:</h2>
issue: Dev's do not want to test and are too eager to push their code.

<h2>Questions to analyse Root cause</h2>

<h3>Understanding the devlopers: </h3>

1. Is there too much pressure of time that they want things done faster?

2. Is there an atmosphere where people want to prove themselves by doing things faster at the work place?

<h3>Understanding the management:</h3>

1. Are people being judged by the amount of work they produce ?

2. Does the management measure everything in numbers?

3. Is user experience something the management wants to address for their products?

<h3>Human Mindset:</h3>
1. People do not appreciate change.
2. No one appreciates more work.
3. People appreciate work when a reason is given to them, always go to something with a answer to "why do we want this".

<h3>Keeping the above points in mind the approach is as follows :</h3>

1. If the management does not see the value of testing , it should be introduced to them.
As the famous saying goes" if you are not breaking things then you are not going fast enough". there is a sweet spot between the amount of testing and the compromise being made in speed. If customer retention and User experience is good people use the application for long, in turn generating more revenue and recommending you to others.

This would lead to them choosing which way they want to go, and introduce a step for quality assurance. 


2. If the management know how testing works and appreciates it then, the devlopers should not be told to test because that is not their job. You will not break your own baby.
If a human is just told to do more work he will resist . rather introduce testers in the system to introduce quality and introduce a well maintained pipeline for bugs reported.






Introducing the culture that things should be done properly and not 

Note:
I do not have experience with go lonag and with creating microservices
