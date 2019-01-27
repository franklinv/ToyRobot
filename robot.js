(function(window){
	
	
// function to rotate the robot on the screen
function rotateImage(objImg,degree) {
	$(objImg).animate({  transform: degree }, {
    step: function(now,fx)
	{
        $(this).css({
            '-webkit-transform':'rotate('+now+'deg)', 
            '-moz-transform':'rotate('+now+'deg)',
            'transform':'rotate('+now+'deg)'
        });
    }
    });
}

// main function which defines
// core functionality for the robot 
// command is defined in this function

function robot()
{
    var x = null;
    var y = null;
    var facing = null;
     var placed = false;
var Library={};

var directions = {
    NORTH: 'NORTH',
    SOUTH: 'SOUTH',
    EAST: 'EAST',
    WEST: 'WEST'
};
//function place to place the robot correctly
// records the positions accordingly
Library.place=function(x, y, facing,objImg) {
            if (this._isValidPosition(x) && this._isValidPosition(y)) {
                this.x = x;
                this.y = y;
				$(objImg).offset({top: this.y, left: this.x});
				
            } else {
                return false;
            }

             //the following code will be executed after valid direction has been entered by the user
             this.facing = facing.toUpperCase();
           

            // this.placed helps us to ignore other commands
			// if placed is not true
            this.placed = true;
            //if (this.renderCallback) this.renderCallback.bind(null, this).call();
            //return this;
        }

//function _isValidDirection is to validate the direction 
Library._isValidDirection=function(strDirection)
{
    return (/(north|south|east|west)/gi.test(strDirection));
}
	
//function move to achieve the functionality of the robot 
//when it moves, records the positions accordingly
Library.move=function(objImg)
{
   if (this.placed) {
                if (this.facing === directions.NORTH) {
                    if (this._isValidPosition(this.y + 1)) this.y = this.y + 1;
                } else if (this.facing === directions.SOUTH) {
                    if (this._isValidPosition(this.y - 1)) this.y = this.y - 1;
                } else if (this.facing === directions.EAST) {
                    if (this._isValidPosition(this.x + 1)) this.x = this.x + 1;
                } else if (this.facing === directions.WEST) {
                    if (this._isValidPosition(this.x - 1)) this.x = this.x - 1;
                }
				
				$(objImg).offset({top: this.y, left: this.x});
            } else {
                return false;
            }
}
//function to achieve the functionality of 
// the robot when it turns right
// includes the rotation
Library.right=function(objImg) {
            if (this.placed) {
                if (this.facing === directions.NORTH) {
                    this.facing = directions.EAST;
                } else if (this.facing === directions.EAST) {
                    this.facing = directions.SOUTH;
                } else if (this.facing === directions.SOUTH) {
                    this.facing = directions.WEST;
                } else if (this.facing === directions.WEST) {
                    this.facing = directions.NORTH;
	
				}
				rotateImage(objImg,90);
			}
            else {
                return false;
            }

            
        }

//function to check the that the robot does not fall of the table
Library._isValidPosition=function(value) {
	       
            if ((value >= 0) && (value <=456)) {
                return true;
            } else {
				
                alert('Invalid move when facing ' + this.facing + ', please turn around!');
				return false;
            }
        }
		
//function to achieve the functionality of the robot when it turns right
//includes the rotation	
	Library.left=function(objImg) {
            if (this.placed) {
                if (this.facing === directions.NORTH) {
                    this.facing = directions.WEST;
                } else if (this.facing === directions.WEST) {
                    this.facing = directions.SOUTH;
                } else if (this.facing === directions.SOUTH) {
                    this.facing = directions.EAST;
                } else if (this.facing === directions.EAST) {
                    this.facing = directions.NORTH;
                }
				rotateImage(objImg,-90);
				 
            }
			else {
                return false;
            }

         
        }
		
		//function to report the position of the robot after it has been placed
		Library.report=function() {
            if (!this.placed) {
                alert('The Robot is not on the table! please use .place(x, y, direction) to place the Robot.');
            } else {
                alert('Current Position x=' + this.x + ',y=' + this.y + ', direction= ' + this.facing.toUpperCase());
            }
            return this;
        }
		
		
		return Library;
		
  
}


  if (typeof(Library)=="undefined")
  {
	   window.Library = robot();
  }
})(window);