import Phaser from "phaser";
export default class Creditos extends Phaser.Scene{
    constructor(){
        super("creditos");
    }

    preload (){
        this.load.image("Creditos", "assets/Creditos.png");
        this.load.image("BtnRegreso", "assets/BotonRegresoMenuPrincipal.png");

    }

    create(){
        this.add.image(960, 540, "Creditos");

        var BtnRegreso = this.add.image(80, 70, "BtnRegreso");
        BtnRegreso.setInteractive();
        BtnRegreso.on("pointerdown", () => this.scene.start("menuPrincipal"));
    }

    update(){

    }
}