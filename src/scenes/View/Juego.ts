import Phaser from "phaser";
import Nivel from "../Model/Nivel";

export default class Juego extends Phaser.Scene{
    private _nivel: Nivel;

    constructor(nombreNivel: string, nivel: Nivel) {
        super(nombreNivel);
        this._nivel = nivel;
    }

    preload (){

    }

    create(){
        
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