let zSpacing = -1000, // відстань між фреймами
		lastPos = zSpacing / 5, // стартова позиція
		$frames = document.getElementsByClassName('frame'), // об*єднання всіх фреймів
		frames = Array.from($frames), // перетворення всіх елементів в масив
		zVals = [] // пустий масив, для подальших координат

window.onscroll = function() { // функція для скролу

	let top = document.documentElement.scrollTop, // відстань зверху
			delta = lastPos - top // вичеслення останньої позиції

	lastPos = top // оновлення останньої позиції

	frames.forEach(function(n, i) { // цикл для проставлення координат
		zVals.push((i * zSpacing) + zSpacing) // заповнення масиву координатами
		zVals[i] += delta * -5.5 // управління швидкістю скрола
		let frame = frames[i], // 
				transform = `translateZ(${zVals[i]}px)`, // передавання координат
				opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0 // плавне затухання фреймів
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`) // задавання готових властивостей css
	})

}

window.scrollTo(0, 1) // піддьоргування кадру при вході
