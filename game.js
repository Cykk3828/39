class Game{
    constructor(){

    }
  getState(){
      var gameState1=database.ref('gameState');
      gameState1.on("value",(data)=>{
          gameState=data.val();
      })

  }  
  update(state){
      database.ref('/').update({
          gameState:state
      })
  }
  async start(){
      if(gameState === 0){
          player=new Player()
          //player.update 
          //Player.getPlayerinfo
         var getPlayerinfo =await database.ref ('playerCount').once("value")
         if(getPlayerinfo.exists()){
             playerCount=getPlayerinfo.val();
             player.getCount()
         }
          
          form=new Form()
          form.display()
      }
  }
   play(){
   form.hide()
   textSize(30);
   text("Game Started",100, 100);
   Player.getPlayerinfo();
   if (allPlayers !== undefined){
       var y=170
       for (var plr in allPlayers){
           textSize(25);
           if(plr === "player"+ player.index)
           fill("red");
           else
           fill("black");
           console.log("hihihi");
           text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 100 , y);
           y=y+20
           
       }
   }
   if(keyDown(UP_ARROW) && player.index !== null){
       player.distance=player.distance + 50
       player.update();
   }
  }
}