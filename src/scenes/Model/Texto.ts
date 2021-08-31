export default class Texto {
    private _textosMenuPrincipal: Array<String>;
    private _textosConfiguracion: Array<String>;
    private _textosTienda: Array<String>;
    private _textosCreditos: Array<String>;
    private _textosTrivia: Array<String>;
    private _textosTriviaInfinita: Array<String>;
    private _textosModoHistoria: Array<String>;

    constructor(textosMenuPrincipal: Array<String>, textosConfiguracion: Array<String>, textosTienda:Array<String>, textosCreditos:Array<String>, textosTrivia:Array<String>, textosTriviaInfinita:Array<String>, textosModoHistoria:Array<String>){
        this._textosMenuPrincipal = textosMenuPrincipal;
        this._textosConfiguracion = textosConfiguracion;
        this._textosTienda = textosTienda;
        this._textosCreditos = textosCreditos;
        this._textosTrivia = textosTrivia;
        this._textosTriviaInfinita = textosTriviaInfinita;
        this._textosModoHistoria = textosModoHistoria;
    }



    //Getters and setters
    public get textosMenuPrincipal() : Array<String> {
        return this._textosMenuPrincipal;
    }
    
    
    public set textosMenuPrincipal(v : Array<String>) {
        this._textosMenuPrincipal = v;
    }

    public get textosConfiguracion() : Array<String> {
        return this._textosConfiguracion;
    }
    
    
    public set textosConfiguracion(v : Array<String>) {
        this._textosConfiguracion = v;
    }

    public get textosTienda() : Array<String> {
        return this._textosTienda;
    }
    
    
    public set textosTienda(v : Array<String>) {
        this._textosTienda = v;
    }

    public get textosCreditos() : Array<String> {
        return this._textosCreditos;
    }
    
    
    public set textosCreditos(v : Array<String>) {
        this._textosCreditos = v;
    }

    public get textosTrivia() : Array<String> {
        return this._textosTrivia;
    }
    
    
    public set textosTrivia(v : Array<String>) {
        this._textosTrivia = v;
    }

    public get textosTriviaInfinita() : Array<String> {
        return this._textosTriviaInfinita;
    }
    
    
    public set textosTriviaInfinita(v : Array<String>) {
        this._textosTriviaInfinita = v;
    }

    public get textosModoHistoria() : Array<String> {
        return this._textosModoHistoria;
    }
    
    
    public set textosModoHistoria(v : Array<String>) {
        this._textosModoHistoria = v;
    }
}