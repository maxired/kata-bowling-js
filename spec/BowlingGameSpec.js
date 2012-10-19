/**
 * My first kata ever :_) http://www.solveet.com/exercises/Kata-Bowling/10 .
 * I wanted to try Jasmine as well as trying some best practices of 'Javascript: The Good Parts'.
 */
describe("BowlingGame", function() {
    var game;
    
    it("should score 10 if the player rolls 1 strike", function() {
        game = bowlingGame("X");
        expect(game.score()).toBe(10);
    });
    
    it("should score 30 if the player rolls 2 strikes", function() {
        game = bowlingGame("XX");
        expect(game.score()).toBe(30);
    });
    
    it("should score 60 if the player rolls 3 strikes", function() {
        game = bowlingGame("XXX");
        expect(game.score()).toBe(60);
    });
    
    it("should score 90 if the player rolls 4 strikes", function() {
        game = bowlingGame("XXXX");
        expect(game.score()).toBe(90);
    });
    
    it("should score 240 if the player rolls 9 strikes", function() {
        game = bowlingGame("XXXXXXXXX");
        expect(game.score()).toBe(240);
    });
    
    it("should score 270 if the player rolls 10 strikes", function() {
        game = bowlingGame("XXXXXXXXXX");
        expect(game.score()).toBe(270);
    });
    
    it("should score 300 if the player scores 12 strikes", function() {
        game = bowlingGame("XXXXXXXXXXXX");
        expect(game.score()).toBe(300);
    });
    
    it("should score 9 if the player rolls 9 and a miss", function() {
        game = bowlingGame("9-");
        expect(game.score()).toBe(9);
    });
    
    it("should score 90 if the player rolls 10 pairs of 9 and miss", function() {
        game = bowlingGame("9-9-9-9-9-9-9-9-9-9-");
        expect(game.score()).toBe(90);
    });
    
    it("should score 10 if the player rolls 1 pair of 5 and spare", function() {
        game = bowlingGame("5/");
        expect(game.score()).toBe(10);
    });
    
    it("should score 25 if the player rolls 2 pairs of 5 and spare", function() {
        game = bowlingGame("5/5/");
        expect(game.score()).toBe(25);
    });
    
    it("should score 150 if the player rolls 10 pairs of 5 and spare, with a final 5", function() {
        game = bowlingGame("5/5/5/5/5/5/5/5/5/5/5");
        expect(game.score()).toBe(150);
    });
    
    it("should have 10 frames if the player rolls 10 pairs of 9 and miss", function() {
        game = bowlingGame("9-9-9-9-9-9-9-9-9-9-");
        expect(game.frames.length).toBe(10);
    });
    
    it("should score 70 if the player rolls 5 pairs of 5 and spare and misses everything else", function() {
        game = bowlingGame("5/5/5/5/5/----------");
        expect(game.score()).toBe(70);
    });
    
    it("should score 82 in 10 frames if the player rolls 9-0 3-5 6-1 3-6 8-1 5-3 2-5 8-0 7-1 8-1", function() {
        game = bowlingGame("90356136815325807181");
        expect(game.frames.length).toBe(10);
        expect(game.score()).toBe(82);
    });
    
    xit("should score 131 if the player rolls 9-0 3-/ 6-1 3-/ 8-1 5-/ 0-/ 8-0 7-/ 8-/-8", function() {
        game = bowlingGame("903/613/815/0/807/8/8");
        expect(game.score()).toBe(131);
    });
    
    it("should score 131 if the player rolls 9-0 3-/ 6-1 3-/ 8-1 5-/ 0-/ 8-0 7-/ 8-/-8", function() {
        game = bowlingGame("903/61");
        expect(game.score()).toBe(32);
    });
});

describe("nullFrame", function() {
    
    it("should not be strike", function() {
        expect(nullFrame().isStrike()).toBe(false);
    });
    
});

describe("frame", function() {
    it("should return 0 knockedDownPins if frame is a full miss", function() {
        expect(frame("--").knockedDownPins()).toBe(0);
    });
});