import {PraiseButton} from './PraiseButton.js';

class ThumbPraise extends PraiseButton{
	constructor(container,tpl=''){
	//constructor(container='circleBG',tpl=''){
		super(container,tpl);
		this.tpl=`<div class="palm"></div>
			<div class="thumb">
				<div class="rightFour">
					<span class="finger f1"></span>
					<span class="finger f2"></span>
					<span class="finger f3"></span>
					<span class="finger f4"></span>
					<span class="f1Right"></span>
				</div>
			</div>`;

		this.addTpl(this.tpl);
	}

	//添加模板
	addTpl(){
		//const container=document.getElementsByClassName(this.container)[0];
		this.container.innerHTML=this.tpl;
		this.container.onclick=this.addNum.bind(this);
	}
}
export default ThumbPraise;