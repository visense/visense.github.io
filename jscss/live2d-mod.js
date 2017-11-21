// const 
//     GAME_W = window.innerWidth,
//     GAME_H = window.innerHeight,
//     GAME_RATIO = GAME_W / GAME_H,
//     GAME_ORIENTATION = 'landscape'

// const renderer = new PIXI.WebGLRenderer(GAME_W, GAME_H, {transparent: true,autoResize: false});

const renderer = new PIXI.WebGLRenderer(800, 600);
document.getElementById('live2d').appendChild(renderer.view);
const stage = new PIXI.Container();

//renderer.view.style.position = "fixed";
//renderer.view.style.bottom = "0px";
//renderer.view.style.right = "0px";

const modelHaru = {
	"type": "Live2D Model Setting",
	"name": "Epsilon2.1",
	"model": "assets/Epsilon2.1/moc/Epsilon2.1.moc",
	"textures": [
		// "assets/haru/haru.1024/texture_00.png",
		// "assets/haru/haru.1024/texture_01.png",
		"assets/Epsilon2.1/moc/Epsilon2.1.2048/texture_00.png"
	],
	"physics": "assets/Epsilon2.1/Epsilon2.1.physics.json",
	"pose": "assets/haru/haru.pose.json",
	"expressions": [{
		"name": "f01",
		"file": "assets/Epsilon2.1/exp/f01.exp.json"
	}, {
		"name": "f02",
		"file": "assets/Epsilon2.1/exp/f02.exp.json"
	}, {
		"name": "f03",
		"file": "assets/Epsilon2.1/exp/f03.exp.json"
	}, {
		"name": "f04",
		"file": "assets/Epsilon2.1/exp/f04.exp.json"
	}, {
		"name": "f05",
		"file": "assets/Epsilon2.1/exp/f05.exp.json"
	}, {
		"name": "f06",
		"file": "assets/Epsilon2.1/exp/f06.exp.json"
	}, {
		"name": "f07",
		"file": "assets/Epsilon2.1/exp/f07.exp.json"
	}, {
		"name": "f08",
		"file": "assets/Epsilon2.1/exp/f08.exp.json"
	}],
	"layout": {
		"center_x": 0,
		"y": 1.2,
		"width": 2.9
	},
	"hit_areas": [{
		"name": "head",
		"id": "D_REF.HEAD"
	}, {
		"name": "body",
		"id": "D_REF.BODY"
	}],
	"motions": {
		"idle": [{
			"file": "assets/Epsilon2.1/mtn/Epsilon2.1_idle_01.mtn",
			"fade_in": 2000,
			"fade_out": 2000
		}],
		"tap_body": [{
			"file": "assets/Epsilon2.1/mtn/tapBody_00.mtn",
			"sound": "assets/haru/sounds/tapBody_00.mp3"
		}, {
			"file": "assets/Epsilon2.1/motions/tapBody_01.mtn",
			"sound": "assets/haru/sounds/tapBody_01.mp3"
		}, {
			"file": "assets/Epsilon2.1/motions/tapBody_02.mtn",
			"sound": "assets/haru/sounds/tapBody_02.mp3"
		}],
		"pinch_in": [{
			"file": "assets/Epsilon2.1/motions/pinchIn_00.mtn",
			"sound": "assets/haru/sounds/pinchIn_00.mp3"
		}],
		"pinch_out": [{
			"file": "assets/Epsilon2.1/motions/pinchOut_00.mtn",
			"sound": "assets/haru/sounds/pinchOut_00.mp3"
		}],
		"shake": [{
			"file": "assets/Epsilon2.1/motions/shake_00.mtn",
			"sound": "assets/haru/sounds/shake_00.mp3",
			"fade_in": 500
		}],
		"flick_head": [{
			"file": "assets/Epsilon2.1/motions/flickHead_00.mtn",
			"sound": "assets/haru/sounds/flickHead_00.mp3"
		}]
	}
};



//const sprite = new PIXI.Sprite.fromImage('./7_room2_a.jpg');
//stage.addChild(sprite);

// setTimeout(() => {
//   const sprite2 = new PIXI.Sprite.fromImage('./pixiv4.jpg');
//   sprite2.y = 350;
//   stage.addChildAt(sprite2, 1);
// }, 1000)

const live2dSprite = new PIXI.Live2DSprite(modelHaru, {
	debugLog: false,
	randomMotion: false,
	eyeBlink: false,
	// audioPlayer: (...args) => console.log(...args)
});
stage.addChild(live2dSprite);

live2dSprite.x = -105;
// live2dSprite.y = -150;
live2dSprite.adjustScale(0, 0.6, 0.5);
//live2dSprite.adjustTranslate(0.4, 0);
live2dSprite.startRandomMotion('idle');

live2dSprite.on('click', (evt) => {
	const point = evt.data.global;
	if (live2dSprite.hitTest('body', point.x, point.y)) {
		live2dSprite.startRandomMotionOnce('tap_body');
	}
	// if (live2dSprite.hitTest('head', point.x, point.y)) {
	// 	live2dSprite.startRandomMotionOnce('flick_head');
	// }
if (live2dSprite.hitTest('head', point.x, point.y)) {
    live2dSprite.playSound('星のカケラ.mp3', 'sound/');
}
});
live2dSprite.on('mousemove', (evt) => {
	const point = evt.data.global;
	live2dSprite.setViewPoint(point.x, point.y);
});

function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
}
animate();
