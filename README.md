# ToyRobot
A Toy Robot Simulator

- The Toy Robot application has been developed using JavaScript, Object Oriented features.
-  The application has been unit tested.
- Validation has been done if user gives an invalid command.
-  The html page is robot.html.
- User places a command by typing the command in the textbox provided in the robot.html.
- User then needs to press Enter after entering the valid command.
- The core functionality is in a JavaScript function Library  robot.js. It exposes all the Robot movement functionality and does the direction and position validations.
- Comments have been included.
- All other commands will be ignored of there is no PLACE command.
Information is given to the User through alert messages.

# Steps to start the application

1. Copy the robot.html and robot.js into a folder.
2. Open robot.html in a browser.
3. Test the application using the following test data in the Robot Commands Text Box.

## Test Data
#### Example Input and Output
------------------------
  ### Example a

    PLACE 0,0,NORTH
    MOVE
    MOVE
    REPORT

Expected output:

    0,2,NORTH


### Example b

    PLACE 0,0,NORTH
    LEFT
    REPORT

Expected output:

    0,0,WEST

### Example c

    PLACE 2,4,EAST
    MOVE
    MOVE
    RIGHT
    MOVE
    REPORT

Expected output

    4,3,SOUTH
