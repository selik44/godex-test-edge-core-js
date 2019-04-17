import {Injectable, Logger} from '@nestjs/common';
import * as edge from 'edge-core-js';
// import { EdgeAccount, EdgeSwapConfig } from 'edge-core-js';

@Injectable()
export class AppService {
    async root() {
        // const edge = require('edge-core-js');
        // try {
            const context = await edge.makeEdgeContext({
                // apiKey: '0b5776a91bf409ac10a3fe5f3944bf50417209a0',
                // appId: 'com.mydomain.myapp',e
                apiKey: '6d9014648b881ec1adb6069978eecfde31e7af06',
                appId: 'com.godex.exchanger',
            });
        //     const account = await context.createAccount(
        //         'mytestacc33',
        //         'Qweewq12345',
        //         '1234',
        //     );
            context.loginWithPassword(
                'dowell22',
                'Welldodo1234',
            );
            context.on('login', account => console.log(account));
        // console.log(account);
        // } catch (e) {
        //     return e;
        // }
        return 'Hello World!';
    }
}
