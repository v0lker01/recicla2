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

        //Boton Jugar
        this.add.image(965, 815, "BtnJugarSombra");
        var Jugar = this.add.image(960, 800, "BtnJugar");
        Jugar.setInteractive();
        Jugar.on("pointerdown",() => this.scene.start("Nivel1"));

        this.add.image(1500, 820, "BtnTienda");
    }

    update(){

    }
}