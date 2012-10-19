var bowlingGame = function(rolls) {

    var that = {};
    
    var generateFrames = function(rolls) {
        var frames = [];
        var f = 0;
        for(var r = 0, maxR = rolls.length; r < maxR; r++) {                        
            frames[f] = frame(rolls[r]);
            if(!frames[f].isStrike()) {
                frames[f] = frame(rolls[r]+rolls[r+1]);
                r++;
            }           
            f++;
        }
        return frames;
    }    
    
    var frames = generateFrames(rolls);
    
    that.frames = frames;
    
    var bonusFrame = function(frameNumber) {
        return frameNumber >= 10;
    }
    
    var finalFrame = function(frameNumber) {
        return frameNumber == 9;
    }
    
    var score = function() {
        var score = 0;
        
        for(var f = 0, maxF = frames.length; f < maxF; f++) {
            var frame = frames[f];            
            var knockedDownPins = frame.knockedDownPins();   
            
            var rollScore = knockedDownPins;                                    
            
            if(!finalFrame(f) && !bonusFrame(f)) {
                if(frame.isStrike() || frame.isSpare()) {
                    var nextFrame = f < maxF-1 ? frames[f+1] : nullFrame();
                    rollScore += nextFrame.firstRollScore();
                }                
                if(frame.isStrike()) {
                    var twoFramesAfter = f < maxF-2 ? frames[f+2] : nullFrame();
                    rollScore += twoFramesAfter.firstRollScore();
                }
            }
            score += rollScore;
        }
        return score;
    }
    that.score = score;
    
    return that;
};

var frame = function(value) {    
    var STRIKE = "X";
    var SPARE = "/";
    var MISS = "-";
    
    var that = {};    
        
    var knockedDownPins = function() {
        var down = 0;
        if(value === STRIKE) {
             down = 10;
        } else if(value.indexOf(MISS) != -1) {
            if(value[0] === MISS) {
                if(value.length > 1 && value[1] != MISS) {
                    down =  parseInt(value[1]);
                }
            } else {
                down = parseInt(value[0]);
            }
        } else if(value.indexOf(SPARE) != -1) {
             down = 10;
        } else {
            down = parseInt(value);
        }       
        return down;
    }
    that.knockedDownPins = knockedDownPins;
    
    var firstRollScore = function() {
        var down = 0;
        if(value.indexOf(SPARE) != -1) {
             down = parseInt(value[0]);
        } else {
            down = knockedDownPins();
        }       
        return down;
    }
    that.firstRollScore = firstRollScore;
    
    var isStrike = function() {
        return value === STRIKE;
    }
    that.isStrike = isStrike;
    
    var isSpare = function() {
        return value.indexOf(SPARE) != -1;
    }
    that.isSpare = isSpare;
        
    return that;
};

var nullFrame = function() {
    var NULL_ROLL = "0";
    var that = frame(NULL_ROLL);
    return that;
};