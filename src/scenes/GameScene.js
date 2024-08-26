import { Words } from "../data/words.js";

export class GameScene extends Phaser.Scene {

    emitter = null;
    explosionAudio = null;
    vocab = null;

    constructor(){
        super({key:'game-scene'});
    }

    preload() {
        this.load.audio('explosionAudio','assets/sounds/explode.mp3');
        this.load.atlas('flares', 'assets/particles/flares.png', 'assets/particles/flares.json');
        this.load.image('target', 'assets/images/frog.jpg');
  
        this.vocab = new Words(this);
        this.vocab.preload();
    }
    

    create(){
        const test = this.add.image(512,576/2, 'cone_image').setOrigin(0.5).setInteractive();
        test.on('pointerup', () =>
            {
    
                var msg = new SpeechSynthesisUtterance();
                msg.text = "Good Morning";
                window.speechSynthesis.speak(msg);
    
            });


        this.explosionAudio = this.sound.add('explosionAudio',{volume:0.1});
        
        this.emitter = this.add.particles(400, 250, 'flares', {
            frame: [ 'red', 'yellow', 'green' ],
            lifespan: 4000,
            speed: { min: 250, max: 450 },
            scale: { start: 0.8, end: 0 },
            gravityY: 150,
            blendMode: 'ADD',
            emitting: false
        });
        this.emitter.x = 512;
        this.emitter.y = 576/2;
        this.emitter.explode(20);
        this.explosionAudio.play();

        


    }

    update(t,dt) {
    
    }
}
    
