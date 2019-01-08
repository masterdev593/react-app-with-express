const chalk = require('chalk');
const ip = require('ip');

const divider = chalk.gray('\n-----------------------------------');
const ok = chalk.bgGreen;

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {
  // Called whenever there's an error on the server we want to print
  error: err => {
    console.error(chalk.red(err));
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host, isBeta) => {
    console.log(`El servidor esta trabajando! ${chalk.green('✓')}`);

    if (isBeta) {
      console.log(ok('----------------------------------------'));
      console.log(ok('---            BETA                  ---'));
      console.log(ok('----------------------------------------'));
      console.log(ok('---         _,met$$$$$gg.            ---'));
      console.log(ok('---      ,g$$$$$$$$$$$$$$$P.         ---'));
      console.log(ok('---     ,g$$P"     """Y$$.".         ---'));
      console.log(ok('---   ,$$P`              `$$$.       ---'));
      console.log(ok('---  `,$$P       ,ggs.     `$$b:     ---'));
      console.log(ok('---  `d$$`      ,$P`   .    $$$      ---'));
      console.log(ok('---   $$P      d$`     ,    $$P      ---'));
      console.log(ok('---   $$:      $$.   -     ,d$$      ---'));
      console.log(ok('---   $$;       Y$b._   _,d$P`       ---'));
      console.log(ok('---   Y$$.      `.`"Y$$$$P"`         ---'));
      console.log(ok('---   `$$b       "-.__               ---'));
      console.log(ok('---    `Y$$                          ---'));
      console.log(ok('---     `Y$$.           Desarrollo   ---'));
      console.log(ok('---       `$$b.           Web        ---'));
      console.log(ok('---         `Y$$b.`        NodeJS    ---'));
      console.log(ok('---            `"Y$b._      Quito    ---'));
      console.log(ok('---                `"""      Ecuador ---'));
      console.log(ok('----------------------------------------\n'));
    }
    console.log(`
      Sistema Operativo ${process.platform}${divider}
      ${chalk.bold('Accesos WEB')}
      :::Localhost: ${chalk.magenta(`${host}`)}
            :::LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}${divider}
      ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  }
};

module.exports = logger;
