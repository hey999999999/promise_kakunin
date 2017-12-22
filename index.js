const resolved = new Promise((resolve, reject) => resolve());
const rejected = new Promise((resolve, reject) => reject());

// login関数を簡略化したもの
function login(promise){
	return new Promise(async (resolve, reject) => {
		try{
			await promise;
			resolve('OK');
		}catch(e){
			reject('NG');
		}
	});
}

// 実行
(async function(){
	console.log('resolveの場合');
	try{
		console.log('成功(resolve)', await login(resolved));
	}catch(e){
		console.log('失敗(resolve)', e);
	}

	
	console.log('rejectの場合');
	try{
		console.log('成功(reject)', await login(rejected));
	}catch(e){
		console.log('失敗(reject)', e);
	}
})();
