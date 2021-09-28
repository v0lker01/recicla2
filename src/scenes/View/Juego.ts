import Phaser from "phaser";
import Nivel from "../Model/Nivel";

export default class Juego extends Phaser.Scene{
    private _nivel: Nivel;

    constructor(nombreNivel: string, nivel: Nivel) {
        super("Nivel1");
        this._nivel = nivel;
    }

    preload (){

        this.load.image("TileSets", "assets/mapa/tileSets.png");
        this.load.tilemapTiledJSON("Mapa", "assets/mapa/NivelPrueba2.json");        

    }

    create(){
        const map = this.make.tilemap({key: "Mapa" });
        const tilesets = map.addTilesetImage("tileSets", "tileSets");
        
    }

    update(){

    }

    //Getters and setters
    
    public get nivel() : Nivel {
        return this._nivel;
    }

    
    public set nivel(v : Nivel) {
        this._nivel = v;
    }
    
    
}