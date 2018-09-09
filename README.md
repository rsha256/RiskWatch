# RiskWatch

## Inspiration
One day, we heard of a town in California that was attacked by a major fire - many people saw the fire coming but had no reliable way of reporting the problem. We strive to solve this problem and prevent needless deaths by using our website!

## What it does
Our project allows users to report fire hazards with images to a central database. False images could be identified using machine learning (image classification). Also, we implemented methods for people to find fire stations near them. We additionally implemented a way for people to contact Law enforcement and fire departments for a speedy resolution. In return, the users get compensation from insurance companies. Idea is relevant because of large wildfires in California and other states.

## How we built it
We build the site from the ground up using ReactJS, HTML, CSS and JavaScript. We also created a MongoDB database to hold some location data and retrieve them in the website. Python was also used to connect the frontend to the database.

## Challenges we ran into
We initially wanted to create a physically hardware device using a Raspberry Pi 2 and a RaspiCamera. Our plan was to create a device that could utilize object recognition to classify general safety issues. We understood that performance would suffer greatly when going in, as we thought 1-2 FPS would be enough. After spending hours compiling OpenCV, Tensorflow and Protobuf on the Pi, it was worth it. It was surprising to achieve 2-3 FPS after object recognition using Google's SSDLiteNetv2Coco algorithm. But unfortunately, the Raspberry Pi camera would disconnect often and eventually fail due to a manufacturing defect. Another challenge we faced at the final hours was that our original domain choice was mistakenly marked available by the registry for up to 24 hours, but we eventually resolved it by talking to a customer support representative.

## Accomplishments that we're proud of
We are proud of being able to quickly get back on track after we had issues with our initial hardware idea and repurpose it to become a website. We were all relatively new to React and quickly transitioned from using Materialize.CSS at all the other hackathons we went to.

### Try it out (production)!
* clone the repository: `git clone https://github.com/dwang/RiskWatch.git`
* run `./run.sh`
### Try it out (development)!
* clone the repository: `git clone https://github.com/dwang/RiskWatch.git`
* `cd frontend` then `npm install`
* run `npm start` to run the app - the application should now open in your browser
* start the backend with `./run.sh`

## What we learned
Our group learned how to construct and manage databases with MongoDB, along with seamlessly integrating them into our website. We also learned how to make a website with React, making a chatbot, using image recognition and even more!

## What's next for us?
We would like to make it so that everyone uses our application to be kept safe - right now, it is missing a few important features, but once we add those, RiskWatch could be the next big thing in information consumption.
