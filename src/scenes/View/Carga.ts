import Phaser from "phaser";
export default class Carga extends Phaser.Scene{
    constructor(){
        super("pantallaDeCarga");
    }

    preload()
    {
        let loadBar = this.add.graphics({
            fillStyle:{
                color: 0xffffff
            }
        })
        this.load.on("progress", (percent) =>{
            loadBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50)
            console.log(percent);
        })

    }

    create()
    {
        console.log(this.scene.start("pruebas"));
    }

}