// Vanilla script ES5 
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if(xhr.status === 200 && xhr.readyState === 4) {
		console.log(JSON.parse(xhr.responseText));
	}
}
xhr.open('GET', 'https://dapi.kakao.com/v2/search/web?query=블랙핑크');
xhr.setRequestHeader('Authorization', 'KakaoAK 4545d096ee04bdcea13013e722fa668f');
xhr.send();

// jQuery Ajax
$.ajax({
	url: 'https://dapi.kakao.com/v2/search/image',
	type: 'GET',
	dataType: 'json',
	data: {query: '블랙핑크'},
	beforeSend: onBefore,
	success: onSuccess,
	error: onError
});

function onBefore(xhr) {
	xhr.setRequestHeader('Authorization', 'KakaoAK 4545d096ee04bdcea13013e722fa668f')
}

function onSuccess (v) {
	console.log(v);
}

function onError (xhr, status, error) {
	console.log(xhr, status, error);
}


// axios
axios.get('https://dapi.kakao.com/v2/search/vclip', {
	params: {query: '블랙핑크'},
	headers: {Authorization: 'KakaoAK 4545d096ee04bdcea13013e722fa668f'}
}).then(onResult).catch(onAxiosError);

function onResult (v) {
	console.log(v.data);
}

function onAxiosError (err) {
	console.log(err);
}