import "babel-polyfill";
class CreateTpl{
	constructor(tpl){
		//this.tpl=tpl
	}
	get tpl(){
		return this.tpl;
	}

	set tpl(tpl){
		this.tpl=tpl;
	}
}
/*const tpl=`<div class="palm"></div>
		<div class="thumb">
			<div class="rightFour">
				<span class="finger f1"></span>
				<span class="finger f2"></span>
				<span class="finger f3"></span>
				<span class="finger f4"></span>
				<span class="f1Right"></span>
			</div>
		</div>`;*/
export default CreateTpl;