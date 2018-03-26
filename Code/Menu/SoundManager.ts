export { SoundManager }

import * as TBX from "engineer-js";

class SoundManager
{
    public static Single:SoundManager;
    private _Music:TBX.SoundObject;
    private _Effect:TBX.SoundObject;
    public constructor()
    {
        this._Music = new TBX.SoundObject("Resources/Sound/music.mp3");
        this._Effect = new TBX.SoundObject("Resources/Sound/effect.mp3");
        this._Effect.Volume = 1;
        this._Music.Looped = true;
        let Saved = localStorage.getItem("Volume");
        if(Saved)
        {
            this._Music.Volume = JSON.parse(Saved);
        }
        this._Music.Play();
        SoundManager.Single = this;
    }
    public SetVolume(Volume:number) : void
    {
        this._Music.Volume = Volume / 100;
        localStorage.setItem('Volume', JSON.stringify(this._Music.Volume));
    }
    public Effect()
    {
        this._Effect.Play();
    }
}