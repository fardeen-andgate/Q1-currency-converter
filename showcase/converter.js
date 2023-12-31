import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function converter() {
    let convertertitle = chalkAnimation.neon("welcome to currency converter");
    await sleep();
    convertertitle.stop();
    console.log(chalk.cyanBright(`     
    ||====================================================================||
    ||//$\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//$\\||
    ||(100)==================| FEDERAL RESERVE NOTE |================(100)||
    ||\\$//        ~         '------========--------'                \\$//||
    ||<< /        /$\              // ____ \\                         \ >>||
    ||>>|  12    //L\\            // ///..) \\         L38036133B   12 |<<||
    ||<<|        \\ //           || <||  >\  ||                        |>>||
    ||>>|         \$/            ||  $$ --/  ||        One Hundred     |<<||
 ||====================================================================||>||
 ||//$\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//$\\||<||
 ||(100)==================| FEDERAL RESERVE NOTE |================(100)||>||
 ||\\$//        ~         '------========--------'                \\$//||\||
 ||<< /        /$\              // ____ \\                         \ >>||)||
 ||>>|  12    //L\\            // ///..) \\         L38036133B   12 |<<||/||
 ||<<|        \\ //           || <||  >\  ||                        |>>||=||
 ||>>|         \$/            ||  $$ --/  ||        One Hundred     |<<||
 ||<<|      L38036133B        *\\  |\_/  //* series                 |>>||
 ||>>|  12                     *\\/___\_//*   1989                  |<<||
 ||<<\      Treasurer     ______/Franklin\________     Secretary 12 />>||
 ||//$\                 ~|UNITED STATES OF AMERICA|~               /$\\||
 ||(100)===================  ONE HUNDRED DOLLARS =================(100)||
 ||\\$//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\$//||
 ||====================================================================||
 `));
    console.log(chalk.blueBright(`    
____  _______    __________    ____  ____     ______  __   _________    ____  ____  _____________   __
/ __ \/ ____/ |  / / ____/ /   / __ \/ __ \   / __ ) \/ /  / ____/   |  / __ \/ __ \/ ____/ ____/ | / /
/ / / / __/  | | / / __/ / /   / / / / /_/ /  / __  |\  /  / /_  / /| | / /_/ / / / / __/ / __/ /  |/ / 
/ /_/ / /___  | |/ / /___/ /___/ /_/ / ____/  / /_/ / / /  / __/ / ___ |/ _, _/ /_/ / /___/ /___/ /|  /  
/_____/_____/  |___/_____/_____/\____/_/      /_____/ /_/  /_/   /_/  |_/_/ |_/_____/_____/_____/_/ |_/   
                                                                                                       `));
}
export { converter };
