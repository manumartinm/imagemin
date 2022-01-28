import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
import imagemin from 'imagemin';  
import imageminJpegtran from 'imagemin-jpegtran';
import imageminMozjpeg from 'imagemin-mozjpeg';

const cliMessage = (message) => {
  console.log(chalk.bold.cyan(figlet.textSync(message, { 
    font: 'ANSI Shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  })))
}

const queryParams = () => {
  const qs = [
    {
      name: 'quality',
      type: 'input',
      message: 'Selecciona la calidad de las imagenes de 0 a 100',
    },
  ]
  return inquirer.prompt(qs)
};

const optimize = async (data) => {
  // const filesPath = `images/*.{jpg, jpeg, png}`
	try {
		await imagemin(['images/*'], {
			destination: './optimized',
			plugins: [
				imageminJpegtran(),
				imageminMozjpeg({
					quality: parseInt(data.quality),
				})
			]
		})
    console.log(`
      ------ OPTIMIZADAS CORRECTAMENTE ------\n
      Tu servidor te lo va a agradecer.
      ---------------------------------------\n
    `)
	} catch (e) {
		chalk.red.bold(`Ha habido un error al optimizar las imagenes: ${e}`)
	}
}

cliMessage('OPTIMIZE IMAGES');
optimize(await queryParams());