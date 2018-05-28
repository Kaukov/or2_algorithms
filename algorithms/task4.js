const _           = require('lodash')
const CLI         = require('clui')
const Spinner     = CLI.Spinner
const chalk       = require('chalk')
const inquirer    = require('inquirer')
const status      = new Spinner('Solving the equation. Please wait...')

module.exports = class task4 {
  // static async askForParameters () {
  //   const params = await inquirer.prompt(getQuestions())
  //
  //   let x0obj = params.x0.split(' ').reduce((acc, cur, i) => {
  //     acc['x' + (i + 1)] = parseInt(cur)
  //
  //     return acc
  //   }, {})
  //
  //   params.x0 = x0obj
  //
  //   return params
  // }

  static askForParameters () {
    return inquirer.prompt(getQuestions())
  }

  static solve ({ x1, x2, a1, b1, a2, b2, kmax, epsx, epsf, c }) {
    const solutions = []
    let counter = 0

    while (counter < kmax && !isEpsXReached && !isEpsFReached) {
      //

      counter++
    }
  }

  static getLoadingMessage () {
    return 'Solving the equation. Please wait...'
  }
}

function calculateGradient (x1, x2) {
  return (calculateFactorial(2 * (x1 - 1))) / (calculateFactorial(x2) * calculateFactorial(x1 - 1))
}

function calculateFactorial (n) {
  return (n === 0 || n === 1) ? 1 : calculateFactorial(n - 1) * n
}

function calculateGradientNorm (x) {
  return Math.sqrt(
    Math.pow(2 * (x.x1 - 1), 2) + Math.pow(2 * (x.x2 - 2), 2)
  )
}

function calculateGamma (x1, x2) {
  return 1 / calculateGradientNorm(x1, x2)
}

function calculateRo (k, c) {
  return c / (k + 1)
}

function calculateX (x, a1, a2, b1, b2) {
  // TODO
}

function getX (x1, x2, a1, a2, b1, b2) {
  // TODO
  // if ()
}

function checkXj (xj, aj, bj) {
  // TODO
  if (aj <= xj && xj <= bj) {
    return xj
  }
}

function isEpsXReached (solutions, epsx) {
  return ((solutions[solutions.length - 1] - solutions[solutions.length - 2]) > epsx)
}

function isEpsFReached (solutions, epsf) {
  // TODO
}

// async function getParams () {
//   return inquirer.prompt(getQuestions())
// }

function getQuestions () {
  return [
    // {
    //   'name': 'x0',
    //   'type': 'input',
    //   'message': 'Enter x0 = { x1, x2 }: [values should be separated with a space]',
    //   validate: value => value.split(' ').length === 2 ? true : 'Please enter two values for x0!'
    // },
    {
      'name': 'x1',
      'type': 'input',
      'message': 'Enter x1:',
      validate: value => value.length ? true : 'Please enter value for x1!'
    },
    {
      'name': 'x2',
      'type': 'input',
      'message': 'Enter x2:',
      validate: value => value.length ? true : 'Please enter value for x2!'
    },
    {
      'name': 'a1',
      'type': 'input',
      'message': 'Enter a1:',
      validate: value => value.length ? true : 'Please enter value for a1!'
    },
    {
      'name': 'b1',
      'type': 'input',
      'message': 'Enter b1:',
      validate: value => value.length ? true : 'Please enter value for b1!'
    },
    {
      'name': 'a2',
      'type': 'input',
      'message': 'Enter a2:',
      validate: value => value.length ? true : 'Please enter value for a2!'
    },
    {
      'name': 'b2',
      'type': 'input',
      'message': 'Enter b2:',
      validate: value => value.length ? true : 'Please enter value for b2!'
    },
    {
      'name': 'kmax',
      'type': 'input',
      'message': 'Enter kmax:',
      validate: value => value.length ? true : 'Please enter value for kmax!'
    },
    {
      'name': 'epsx',
      'type': 'input',
      'message': 'Enter epsx:',
      validate: value => value.length ? true : 'Please enter value for epsx!'
    },
    {
      'name': 'epsf',
      'type': 'input',
      'message': 'Enter epsf:',
      validate: value => value.length ? true : 'Please enter value for epsf!'
    },
    {
      'name': 'c',
      'type': 'input',
      'message': 'Enter c: [optional]',
      validate: () => true,
      default: 1
    },
  ]
}
