const search = document.querySelector(".inputsearch");
const searchIcons = document.querySelector(".searchicon");
const HEADER = document.querySelectorAll(".header--wrap");
let scrollLoader = 0;
let result = "";
let data = [];
let dataCategory = [];
let database = [];

Element.prototype.remove = function() {
	this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
	for (var i = this.length - 1; i >= 0; i--) {
		if (this[i] && this[i].parentElement) {
			this[i].parentElement.removeChild(this[i]);
		}
	}
};

function openNav() {
	document.querySelector(".sidenav").style.width = "250px";
	search.style.opacity = "0";
	search.style.top = "0px";
	search.style.visibility = "hidden";
	document.querySelector(".input__result").style.visibility = "hidden";
	document.querySelector(".mobile-input__result").style.visibility = "hidden";
	document.querySelector(".super-input__result").style.visibility = "hidden";
}

function closeNav() {
	document.querySelector(".sidenav").style.width = "0";
	document.querySelector(".input__result").style.visibility = "hidden";
	document.querySelector(".mobile-input__result").style.visibility = "hidden";
	document.querySelector(".super-input__result").style.visibility = "hidden";
}

window.onscroll = () => {
	let scroll = document.documentElement.scrollTop;
	scrollLoader = scroll;
	search.style.opacity = "0";
	search.style.top = "0px";
	search.style.visibility = "hidden";
	document.querySelector(".mobile-input__result").style.visibility = "hidden";
	document.querySelector(".super-input__result").style.visibility = "hidden";
	if (scroll >= 1) {
		HEADER.forEach(e => {
			e.classList.add("sticky");
			e.style.height = "50px";
		});
		document.querySelector(".header__logo").style.width = "55px";
		document
			.querySelectorAll(".content__text")
			.forEach(e => (e.style.top = "50px"));
		document.querySelector(".input__result").style.top = "43px";
		document.querySelector(".mobile-input__result").style.top = "43px";
		document
			.querySelector(".super-input__result")
			.setAttribute(
				"style",
				"width:90%; top: 92px; left:50%; transform: translate(-50%,0);"
			);
	} else {
		HEADER.forEach(e => {
			e.classList.remove("sticky");
			e.style.height = "88px";
		});
		document.querySelector(".header__logo").style.width = "99px";
		document
			.querySelectorAll(".content__text")
			.forEach(e => (e.style.top = "87px"));
		document.querySelector(".input__result").style.top = "62px";
		document.querySelector(".mobile-input__result").style.top = "62px";
		document
			.querySelector(".super-input__result")
			.setAttribute(
				"style",
				"width:90%; top: 130px; left:50%; transform: translate(-50%,0);"
			);
	}
};

function searchInput(e) {
	closeNav();
	if (scrollLoader >= 1) {
		search.style.opacity = "1";
		search.style.visibility = "visible";
		search.style.top = "53px";
	} else {
		search.style.top = "92px";
		search.style.opacity = "1";
		search.style.visibility = "visible";
	}
}

function searchInputHide(arguments) {
	search.style.opacity = "0";
	search.style.top = "0px";
	search.style.visibility = "hidden";
	document.querySelector(".sidenav").style.width = "0";
	document.querySelector(".input__result").style.visibility = "hidden";
	document.querySelector(".mobile-input__result").style.visibility = "hidden";
	document.querySelector(".super-input__result").style.visibility = "hidden";
}

function loginpopup(arguments) {
	document.querySelector("#btnlogin").innerHTML = `
    <div class="popup__title">
    <h1>Đăng Nhập</h1>
    <i class="fas fa-times loginclose"></i>
    </div>
    <div class="popup__sub">
    <div class="sub__title">
        <h3>
            Mỗi người dùng chỉ sử dụng 01 tài khoản, nếu bạn chia sẻ, tài khoản có thể bị khóa mà không thông báo trước.
        </h3>
    </div>
    <form action='dangnhap.php?do=login' method="post"  id="registry">
        <div class="form--login">
            <div class="name__text name1">
                <label for="fname">Tài Khoản</label>
            </div>
            <div class="name__text pass1">
                <label for="fname">Mật Khẩu</label>
            </div>
            <div class="name__input input1">
                <input placeholder="Username" name="Username" type="username">
            </div>
            <div class="name__input input2">
                <input placeholder="Password" name="Password" type="password">
            </div>
            <div class="box--one text1">
                <div class="box__radio">
                    <input type="checkbox" name="" id="" type="checkbox">
                </div>
                <div class="box__text">
                    <p>Nhớ tài khoản</p>
                </div>
            </div>
            <div class="box--two text2">
                <a href="#">Quên mật khẩu</a>
            </div>
            <div class="clickbtn btn1">
                <input type="submit" value="Đăng Nhập" name="login">
            </div>
            <div class="clickbtn btn2 btn--register">
                <input type="button" value="Đăng Ký" name="registry" onclick='javascript:register();'></input>
          </div>
        </div>
     </form>

    </div>
    `;
	document.querySelector("#btnloginmobile").innerHTML = `
    <div class="popup__title">
    <h1>Đăng Nhập</h1>
    <i class="fas fa-times loginclose"></i>
    </div>
    <div class="popup__sub">
    <div class="sub__title">
        <h3>
            Mỗi người dùng chỉ sử dụng 01 tài khoản, nếu bạn chia sẻ, tài khoản có thể bị khóa mà không thông báo trước.
        </h3>
    </div>
    <form action='dangnhap.php?do=login' method="post"  id="registry">
        <div class="form--login">
            <div class="name__text name1">
                <label for="fname">Tài Khoản</label>
            </div>
            <div class="name__text pass1">
                <label for="fname">Mật Khẩu</label>
            </div>
            <div class="name__input input1">
                <input placeholder="Username" name="Username" type="username">
            </div>
            <div class="name__input input2">
                <input placeholder="Password" name="Password" type="password">
            </div>
            <div class="box--one text1">
                <div class="box__radio">
                    <input type="checkbox" name="" id="" type="checkbox">
                </div>
                <div class="box__text">
                    <p>Nhớ tài khoản</p>
                </div>
            </div>
            <div class="box--two text2">
                <a href="#">Quên mật khẩu</a>
            </div>
            <div class="clickbtn btn1">
                <input type="submit" value="Đăng Nhập" name="login">
            </div>
            <div class="clickbtn btn2 btn--register">
                <input type="button" value="Đăng Ký" name="registry" onclick='javascript:register();'></input>
          </div>
        </div>
     </form>

    </div>
    `;
}

function loginPopup(e) {
	// loginpopup();

	document.querySelector(".login__popup").style.top = "50%";
	document.querySelector(".login__popup").style.visibility = "visible";
	document.querySelector(".login__popup").style.opacity = "1";
	document.querySelector(".blurtrans").style.display = "block";
	document.querySelector(".input__result").style.visibility = "hidden";
	document.querySelector(".mobile-input__result").style.visibility = "hidden";
	document.querySelector(".super-input__result").style.visibility = "hidden";
}

function loginClose(e) {
	document.querySelector(".blurtrans").style.display = "none";
	document.querySelector(".login__popup").style.visibility = "hidden";
	document.querySelector(".login__popup").style.opacity = "0";
	document.querySelector(".login__popup").style.top = "-400px";
}

function hideCard(e) {
	const randomNumber = Math.floor(Math.random() * 7 + 1);

	// col.forEach(child2 => {
	//     let test = child2.childNodes;
	//     for (let i=8; i < test.length; i++) {
	//         test[i].classList.add("card--disable")
	//     }
	// });
	col.forEach(child => {
		child.childNodes[randomNumber] == undefined
			? 0
			: child.childNodes[randomNumber].classList.add("card--hide");
	});

	sessionStorage.setItem("loaded", true);
	preload();
}

function findMatches(wordToMatch, movies) {
	return data.filter(movie => {
		const regex = new RegExp(wordToMatch, "gi");
		return movie.name.match(regex) || movie.img.match(regex);
	});
}

function displayMatches() {
	document.querySelector(".mobile-input__result").style.visibility =
		"visible";
	document.querySelector(".input__result").style.visibility = "visible";
	document.querySelector(".super-input__result").style.visibility = "visible";
	const matchArray = findMatches(this.value, data);
	const html = matchArray
		.map(movie => {
			return `
        <div class="result--film" data-name="${
			movie.name
		}" onclick="movies(this)">
            <div class="result__img">
                <a data-name="${movie.name}" onclick="movies(this)">
                    <img src="${movie.img}" alt="${movie.name}">
                </a>
            </div>
            <div class="result__text" data-name="${
				movie.name
			}" onclick="movies(this)">
                <h1>
                   ${movie.name}
                </h1>
            </div>
        </div>
      `;
		})
		.join("");
	document.querySelector(".input__result").innerHTML = html;
	document.querySelector(".mobile-input__result").innerHTML = html;
	document.querySelector(".super-input__result").innerHTML = html;
}

function logout() {
	const url = `${location.protocol}//${document.domain}:${
		location.port
	}/member/logout`;
	$.ajax({
		url: url,
		xhrFields: { withCredentials: true },
		type: "Get",
		// headers: {
		// 	'Content-Type': 'application/x-www-form-urlencoded'
		//   },
		async: true,
		// data:{'username':username,'password':password},
		dataType: "json",
		success: function(result) {
			setTimeout(() => {
				location.reload();
			}, 500);
		},

	});
}

function register(arguments) {
	document.querySelectorAll(".clickbtn").forEach(a => {
		a.remove();
	});
	document.querySelectorAll(".popup__title").forEach(a => {
		a.innerHTML = `
        <h1>Đăng Ký</h1>
        `;
	});
	document.querySelectorAll(".box__text").forEach(a => {
		a.innerHTML = `
        <p>Đồng ý điều khoản</p>
        `;
	});
	document.querySelectorAll(".sub__title").forEach(a => {
		a.innerHTML = `
        <h3>Ấn đồng ý là người dùng chấp nhận các điều khoản của Phim Đây Rồi</h3>
        `;
	});
	document.getElementById("registry").action = "xuly.php";
	document.querySelectorAll(".form--login").forEach(a => {
		a.classList.add("form--register");
		a.innerHTML += `
        <div class="name__text avatar">
        <label for="fname">Link Avatar</label>
    </div>
    <div class="name__input input3">
        <input placeholder="Link ảnh online" name="Avatar" type="username">
    </div>
    <div class="clickbtn btn1">
          <input type="submit" value="Đồng Ý" name="login">
    </div>
        `;
	});
}

function loadData(load) {
	$.ajax({
		url: "/filmIndex",
		type: "GET",
		dataType: "json",
		success: function(result) {
			// console.log(result.data);
			data = result.data.sort(function() {
				return 0.5 - Math.random();
			});
			load();
		}
	});
}
function loadDataCategory(load) {
	$.ajax({
		url: "/dataCategory",
		type: "GET",
		dataType: "json",
		success: function(result) {
			// console.log(result.data);
			dataCategory = result.data.sort(function() {
				return 0.5 - Math.random();
			});
			// console.log(dataCategory);
			load();
		}
	});
}
function loginUser() {
	// const username = $("input[name=username]")
	// 	.val()
	// 	.trim();
	// const password = $("input[name=password]")
	// 	.val()
	// 	.trim();
	const url = `${location.protocol}//${document.domain}:${
		location.port
	}/member/login`;
	$('form').submit(function(event) {
		// Stop the browser from submitting the form.
		event.preventDefault();
		$.ajax({
			url: url,
			xhrFields: {
				withCredentials: true
			},
			crossDomain:true,
			type: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"Access-Control-Allow-Origin": "*"
			},
			async: true,
			// data: { username: username, password: password },
			data: $('form').serialize(),
			dataType: "json",
			success: function(result) {
				loginClose();
				const dataUser = result.data.checkId;
				if (result) {
					loginHtml.innerHTML = `
					<div class="login__input">
					<input class="inputtext" type="text" placeholder="Tìm kiếm">
					<div class="input__result desktop-input__result">
						<div class="result__title">
							<h1>
								Kết quả tìm kiếm cho từ khóa:
								<span>Hello</span>
							</h1>
						</div>
						<div class="result__content">
						</div>
					</div>
				</div>
					<div class="login__account">
					<div class="account__avatar">
					<img src="${dataUser.avatar}" alt="${dataUser.username}">
					</div>
					<div class="account__info">
					<span class="arrow"></span>
					<div class="info__user">
						<a href="#">
							<i class="fas fa-user-circle"></i>
							<p>${dataUser.username}</p>
						</a>
					</div>
					<div class="info__logout">
						<i class="fas fa-power-off"></i>
						<p>
							Đăng Xuất
						</p>
					</div>
				</div>
				`;

					if (document.querySelector(".info__logout")) {
						document
							.querySelectorAll(".info__logout")
							.forEach(a => a.addEventListener("click", logout));
					}
				} else {
					loginHtml.innerHTML = `
					<div class="login__input">
					<input class="inputtext" type="text" placeholder="Tìm kiếm">
					<div class="input__result desktop-input__result">
						<div class="result__title">
							<h1>
								Kết quả tìm kiếm cho từ khóa:
								<span>Hello</span>
							</h1>
						</div>
						<div class="result__content">
						</div>
					</div>
				</div>
					<button id="btnlogin">Đăng nhập</button>`;
				}
			},
			error: function(error) {
				return error;
			}
		});
	});

}

function tooltip(e) {
	if (window.innerWidth > 834) {
		const transparent = document.querySelector(".transparent-1");
		const namefilm = e.target.parentElement.dataset.name;
		dataCategory.forEach(a => {
			if (a.name == namefilm) {
				transparent.innerHTML = `<div class="transparent__name">
        <h3>${a.name}</h3>
    </div>
    <div class="transparent__imdb">
        <span>Điểm IMDB:
        </span>
        <div class="imdb">
            ${a.rate}
        </div>
    </div>
    <div class="transparent__actor">
        <span> Diễn Viên: </span>${a.actor}
    </div>
    <div class="transparent__country">
        <span>Quốc Gia:
        </span>${a.country}
    </div>
    <div class="transparent__category">
        <span>Thể Loại: </span>${a.category}
    </div>
    <div class="transparent__content">
        <span>Nội Dung: </span>${a.content}
    </div>`;
			}
		});

		const body = document.querySelector("body");
		let heightTransparent = transparent.offsetHeight;
		let widthTransparent = transparent.offsetWidth;
		let scroll = document.documentElement.scrollTop;
		let coorH = body.clientHeight - e.clientY - 20;
		let coorW = body.clientWidth - e.clientX - 40;
		if (coorH >= heightTransparent) {
			transparent.setAttribute(
				"style",
				`display: grid;opacity:1; visibility:visible;top:${e.clientY +
					20 +
					scroll}px; left:${e.clientX + 20}px;`
			);
		} else {
			transparent.setAttribute(
				"style",
				`display: grid;opacity:1; visibility:visible;top:${e.clientY -
					20 -
					heightTransparent +
					scroll}px; left:${e.clientX - 230 - heightTransparent}px;`
			);
		}
		if (coorW < widthTransparent) {
			transparent.setAttribute(
				"style",
				`display: grid;opacity:1; visibility:visible;top:${e.clientY +
					20 +
					scroll}px; left:${e.clientX -
					20}px;transform: translateX(-100%)`
			);
		}
	}
}

function tooltip2(e) {
	const transparent = document.querySelector(".transparent-1");
	transparent.removeAttribute("style");
	// console.clear();
}
function rememberUser(params) {}

searchIcons.addEventListener("click", searchInput);
search.addEventListener("blur", searchInputHide);
document.querySelector("section").addEventListener("click", searchInputHide);
document.querySelector(".sidenav").addEventListener("click", searchInputHide);
document.querySelector("footer").addEventListener("click", searchInputHide);
document.querySelector("header").addEventListener("click", searchInputHide);
document.querySelector(".loginclose").addEventListener("click", loginClose);
document.querySelector(".blurtrans").addEventListener("click", loginClose);
document.querySelector(".blurtrans").addEventListener("click", searchInputHide);
document.querySelector(".inputtext").addEventListener("input", displayMatches);
document.querySelector(".btn1").addEventListener("click", loginUser);
const loginHtml = document.querySelector(".header__login");
document
	.querySelector(".inputsearch")
	.addEventListener("input", displayMatches);
document
	.querySelector(".mobile-input-text")
	.addEventListener("input", displayMatches);

if (document.querySelector(".info__logout")) {
	document
		.querySelectorAll(".info__logout")
		.forEach(a => a.addEventListener("click", logout));
}
if (document.querySelector("#btnlogin")) {
	document.querySelector("#btnlogin").addEventListener("click", loginPopup);
}
if (document.querySelector("#btnloginmobile")) {
	document
		.querySelector("#btnloginmobile")
		.addEventListener("click", loginPopup);
}
