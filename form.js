class Form{
constructor(){
    this.input=createInput("name")
      this.button=createButton('play');
         this.greeting=createElement('h3');

}
hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
}
display(){
    var title=createElement('h2')
    title.html("Car Racing Game")
    title.position(400,100);
   
    this.input.position(400,150);
  
  this.button.position(400,200);
   
   this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name=this.input.value()
    playerCount=playerCount+1
    player.index=playerCount
    player.update()
    player.updateCount(playerCount)
    this.greeting.html("HELLO"+ player.name)
    this.greeting.position(400,200);   
   })
}
}