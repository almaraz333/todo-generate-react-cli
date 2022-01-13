module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Component/component.js.hbs'
      },
      {
        type: 'add',
        path: 'cypress/integration/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/Component/component.test.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Component/index.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/types.ts',
        templateFile: 'plop-templates/Component/types.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/index.ts',
        templateFile: 'plop-templates/index.js.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export { {{pascalCase name}} } from './{{pascalCase name}}';`
      }
    ]
  });

  plop.setGenerator('hook', {
    description: 'Create a custom react hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{camelCase name}}.ts',
        templateFile: 'plop-templates/Hook/hook.js.hbs'
      },
      {
        type: 'add',
        path: 'src/hooks/index.ts',
        templateFile: 'plop-templates/hook-index.js.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: 'src/hooks/index.js',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `export {{camelCase name}} from './{{camelCase name}}';`
      }
    ]
  });
};
