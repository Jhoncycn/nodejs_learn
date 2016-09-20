/**
 *
 * 文件名：answer.js，Node.js测试代码，应用代码说明异步调用思想
 */

function Person(){
	
	this.think = function(callback){  //  定义Person对象的think方法
		setTimeout(function(){console.log('thinking~~~!');callback()},5000);
	}
	
	this.answer = function(){           // 定义Person对象的answer方法
		console.log('I am answering other questions');
	}
}

var person = new Person();               // new创建Person对象
person.think(function(){                 // 根据person对象调用think方法
console.log('tinking 5 seconds, get the right answer!')
});
person.answer();     