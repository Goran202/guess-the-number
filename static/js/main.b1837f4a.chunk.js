(window["webpackJsonpguess-the-number"]=window["webpackJsonpguess-the-number"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(2),u=n.n(a),o=(n(13),n(3)),c=n(4),l=n(6),m=n(5),i=n(7),b=(n(14),function(e){var t=e.hintText;return s.a.createElement("div",{className:"block btn btn-warning",style:{}},t)}),g=function(e){var t=e.gameOver,n=e.handleInput,r=e.currentGuessNumber,a=e.updateValue,u={};return s.a.createElement("form",{onSubmit:n},s.a.createElement("input",{placeholder:"Type in your guess...",className:"block form-control",type:"number",min:"1",max:"100",value:r,onChange:a,style:u,disabled:t}),s.a.createElement("input",{className:"block btn btn-primary",style:u,type:"submit",value:"Make a guess!",disabled:t}))},h=function(e){var t=e.numberOfGuesses;return s.a.createElement("div",{className:"block btn btn-danger",style:{}},"Number of guesses: ",t)},f=function(e){var t=e.guessHistoryString;return s.a.createElement("div",{className:"block btn btn-secondary",style:{whiteSpace:"nowrap"}},"Guesses:",t)},d=function(e){var t=e.resetGame;return s.a.createElement("button",{className:"block btn",type:"button",style:{backgroundColor:"blue",color:"black"},onClick:t},"NEW GAME")},v=function(){return s.a.createElement("div",{className:"block btn btn-info",style:{}},"Instructions")},p=function(e){var t=e.numberToGuess;return s.a.createElement("div",{className:"block btn",style:{backgroundColor:"green",color:"black"}},"DebugDiv:",t)},y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={numberToGuess:"",currentGuessNumber:"",hintText:"I'll give you a hint",numberOfGuesses:0,guessHistoryString:"",gameOver:!1},n.resetGame=function(){n.setState({numberToGuess:Math.floor(100*Math.random())+1,currentGuessNumber:"",hintText:"I'll give you a hint",numberOfGuesses:0,guessHistoryString:"",gameOver:!1})},n.updateValue=function(e){n.setState({currentGuessNumber:e.target.value})},n.testNumber=function(){var e,t=n.state,r=t.currentGuessNumber,s=t.numberToGuess,a=t.numberOfGuesses,u=t.guessHistoryString,o=t.gameOver,c=Math.abs(r-s);switch(!0){case c>0&&c<=5:e="Almost got it!!!";break;case c>5&&c<=15:e="You are close!";break;case c>10:e="Far away...";break;default:e="CORRECT!!!"}n.setState({hintText:e,numberOfGuesses:a+1,guessHistoryString:"".concat(u," ").concat(r),currentGuessNumber:"",gameOver:"CORRECT!!!"===e}),console.log(a),console.log(o)},n.handleInput=function(e){var t=n.state.currentGuessNumber;e.preventDefault(),console.log("handleInput: ".concat(t," END")),n.testNumber()},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({numberToGuess:Math.floor(100*Math.random())+1})}},{key:"render",value:function(){var e=this.state,t=e.hintText,n=e.currentGuessNumber,r=e.numberOfGuesses,a=e.guessHistoryString,u=e.gameOver;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{style:{color:"white",marginTop:"40px"}},"Guess the number(1-100)!"),s.a.createElement(p,{numberToGuess:this.state.numberToGuess}),s.a.createElement(b,{hintText:t}),s.a.createElement(g,{currentGuessNumber:n,gameOver:u,updateValue:this.updateValue,testNumber:this.testNumber,handleInput:this.handleInput}),s.a.createElement(h,{numberOfGuesses:r}),s.a.createElement(f,{guessHistoryString:a}),s.a.createElement(d,{resetGame:this.resetGame}),s.a.createElement(v,null))}}]),t}(r.Component);n(15),n(16);u.a.render(s.a.createElement(y,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.b1837f4a.chunk.js.map