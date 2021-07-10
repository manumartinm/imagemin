import imagemin from 'imagemin'
import imageminJpegtran from 'imagemin-jpegtran'
import imageminMozjpeg from 'imagemin-mozjpeg'

const files = await imagemin(['./images/*.{jpg,png}'], {
	destination: './optimized',
	plugins: [
		imageminJpegtran(),
        imageminMozjpeg({
			quality: 70
        })
	]
})

console.log(files);