var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'list',
        name: 'list_question',
        message: 'What would you like to do?',
        choices: ['View all departments','View all roles','View all employees','Add a department','Add a role','Add an employee','Update an employee role'],
        default: ''
    },
    {
        when: input =>{
            return input.list_question == 'View all departments'
        },
        type: 'input',
        name: 'input-type',
        message: 'What is your name?',
        default: 'Name'
    },
    {
      when: input =>{
          return input.list_question == 'View all roles'
      },
      type: 'input',
      name: 'input-type',
      message: 'What is your name?',
      default: 'Name'
  },
  {
    when: input =>{
        return input.list_question == 'View all employees'
    },
    type: 'input',
    name: 'input-type',
    message: 'What is your name?',
    default: 'Name'
},
{
  when: input =>{
      return input.list_question == 'Add a department'
  },
  type: 'input',
  name: 'input-type',
  message: 'What is the name of the department?',
  default: 'Name'
},
{
  when: input =>{
      return input.list_question == 'Add a role'
  },
  type: 'input',
  name: 'input-type',
  message: 'What is the name of the role?',
  default: 'Name'
},
{
  when: input =>{
      return input.list_question == 'Add an employee'
  },
  type: 'input',
  name: 'input-type',
  message: 'What is the employee name?',
  default: 'Name'
},
{
  when: input =>{
      return input.list_question == 'Update an employee role'
  },
  type: 'input',
  name: 'input-type',
  message: 'What is the new role?',
  default: 'Name'
}
// {
//   when: input =>{
//       return input.list_question == 'Update an employee role'
//   },
//   type: 'input',
//   name: 'input-type',
//   message: 'What is your name?',
//   default: 'Name'
// }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });