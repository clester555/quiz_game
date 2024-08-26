export class GameScene extends Phaser.Scene {


    constructor(){
        super({key:'game-scene'});
    }

    preload() {
   
        this.load.image('target', 'assets/images/frog.jpg');
  
    }
    

    create(){
        this.add.image(512,576/2,'target').setOrigin(0.5);
    }

    update(t,dt) {
    
    }
}
    
