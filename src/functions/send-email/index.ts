import {handlerPath} from '@libs/handler-resolver';

export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    vpc: {
        securityGroupIds: '${self:custom.lambda.${opt:stage}.vpcSecurityGroupIds}',
        subnetIds: '${self:custom.lambda.${opt:stage}.vpcSubnetIds}',
    },
    events: [
        {
            schedule: {
                rate: [
                    'rate(24 hours)'
                ]
            }
        },
    ],
    timeout: 900
};
