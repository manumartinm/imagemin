import imagemin from 'imagemin'
import imageminJpegtran from 'imagemin-jpegtran'
import imageminMozjpeg from 'imagemin-mozjpeg'

const quality = process.argv[2] || 70

try {
	await imagemin(['./images/*.{jpg,png}'], {
		destination: './optimized',
		plugins: [
			imageminJpegtran(),
			imageminMozjpeg({
				quality
			})
		]
	})	
} catch (e) {
	console.error(e)
}
