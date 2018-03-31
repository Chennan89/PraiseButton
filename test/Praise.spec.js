import {PraiseButton} from './Praise.js';

var p=new PraiseButton();
describe("测试点赞加1功能",function(){
    it("测试点赞加1功能",function(){
        expect(p.addNum(1)).toBe(1);
    });
});

/*export class PraiseButton{
	constructor(container,tpl=''){
	//constructor(container='circleBG',tpl=''){
		this.number=0;
		this.step=1;
		this.tpl=tpl;
		this.container=container[0];//jquery对象转为DOM对象
		//this.addTpl(this.tpl);
	}
	addNum(1){
		return 1;
		this.number=this.number+this.step;
		const numNode=document.getElementById("count").getElementsByTagName("span")[0];
		numNode.innerText=this.number;
	}
}*/