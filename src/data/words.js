export class Words{

    scene = null;
    words=[];
    images=[];
    numOfWords = 5;

    constructor(scene){
        this.scene = scene;
    }

    preload(){
        this.words[0] = 'cone';
        this.words[1] = 'hole';
        this.words[2] = 'nose';
        this.words[3] = 'rope';
        this.words[4] = 'rose';
        for(let q = 0; q<this.numOfWords;q++){
            this.scene.load.image(this.words[q] + '_image', 'assets/images/'+this.words[q]+'.png');
        }
        

    }
}