import Phaser from "phaser";
export default class MenuPrincipal extends Phaser.Scene{
    constructor(){
        super("menuPrincipal");
    }

    preload (){

        this.load.image("MenuFondo", "assets/MenuPrincipalFondo.png");
        this.load.image("BtnCreditos", "assets/BotonCreditos.png");
        this.load.image("BtnJugar", "assets/BotonJugar.png");
        this.load.image("BtnJugarSombra", "assets/BotonJugarSombra.png");
        this.load.image("BtnTienda", "assets/BotonTienda.png");
    }

    create(){

        this.add.image(960, 540, "MenuFondo");
        
        //BotonCreditos
        var Creditos = this.add.image(400, 820, "BtnCreditos");
        Creditos.setInteractive();
        Creditos.on("pointerdown", () => this.scene.start("creditos"));

        this.add.image(965, 815, "BtnJugarSombra");
        this.add.image(960, 800, "BtnJugar");
        this.add.image(1500, 820, "BtnTienda");
    }

    update(){

    }
}