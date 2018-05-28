const chalk       = require('chalk')
const clear       = require('clear')
const figlet      = require('figlet')

const files = require('./lib/files')
const inquirer  = require('./lib/inquirer')

const CLI         = require('clui')
const Spinner     = CLI.Spinner
const status = new Spinner()

const task1 = null
const task2 = null
const task3 = null
const task4 = require('./algorithms/task4')
const task5 = null

const tasks = [
  task1,
  task2,
  task3,
  task4,
  task5
]

// process.argv
// [2] = task

// const showPassedParams = () => {
//   const { x } = process.argv
//   console.log(process.argv)
//   console.log(x)
// }
//
// showPassedParams()

const run = async () => {
  // const credentials = await inquirer.askGithubCredentials()
  // const { username } = credentials
  // console.log(credentials)
  // console.log(credentials.username)
  // console.log(username)

  const params = await task4.askForParameters()

  // status.statusText = task4.getLoadingMessage()

  task4.solve(params)
}

clear()

console.log(
  chalk.yellow(
    figlet.textSync('Ginit', { horizontalLayout: 'full' })
  )
)

run()

// if (files.directoryExists('.git')) {
//   console.log(chalk.red('Already a git repository!'))
//   process.exit()
// }
