class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        

    }
    display() {

        this.title.html("ZOMBIE WORLD");
        this.title.position(600, -10);
        this.title.style('font-size', '70px');
        this.title.style('color', 'red');

        this.input.position(550,500);
        this.input.style('width', '200px');
        this.input.style('height', '30px');
        this.input.style('background', 'lavender');

        this.button.position(850,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');

        this.reset.position(1320, 720);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        
        this.button.mousePressed(() => {

            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(550,400);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '90px');

           
        });

        this.reset.mousePressed(() => {

            player.updateCount(0);
            game.update(0);
            
            database.ref("/").update({
                players : null 
            })
            
        });

    }
}