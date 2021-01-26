class Form {
    constructor() {

    }
    display() {
        var title = createElement('h2');
        title.html("Car Racing");
        title.position(130, 0);
        var input = createInput("Name");
        var button = createButton('Play');
        var Greeting = createElement('h3');
        input.position(130, 160);
        button.position(250, 100);
        
        button.mousePressed(function () {
            input.hide();
            button.hide();
            var name = input.value();
            playerCount +=1;
            player.update(name)
            player.updateCount(playerCount)
            Greeting.html("Welcome "+ name);
            Greeting.position(130,160);
        })
    }
}