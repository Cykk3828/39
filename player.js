class Player{
    constructor(){
    this.name=null;
    this.distance=0;
    this.index=null;
    }
    getCount(){
        var Count1=database.ref('playerCount');
        Count1.on("value",(data)=>{
            playerCount=data.val();

        })
        
  
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex="player"+this.index
        database.ref (playerIndex).update({
            name:this.name,
            distance:this.distance 
        })
    }
    static getPlayerinfo(){
        var playerinfo=database.ref('players')
        playerinfo.on("value",(data)=>{
            allPlayers=data.val();
        })
    }
     
}