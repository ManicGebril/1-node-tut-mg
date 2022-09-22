const { readFile, writeFile } = require('fs').promises
//const util = require('util')
//const readFile = util.promisify(readFile)
//const writeFile = util.promisify(writeFile)

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

getText('./content/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile(
            './content/result-godsBreath.txt', 
            `The echo of eternity fills the void : $(first) $(second)`, 
            {flag: 'a'}
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()