import type {AWS} from '@serverless/typescript';

import sendEmail from '@functions/send-email';

const serverlessConfiguration: AWS = {
    service: 'email-consumer',
    frameworkVersion: '3',
    plugins: [
        'serverless-esbuild',
    ],
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        region: 'ap-southeast-1',
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true,
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
            NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',

            EMAIL_REPLY_ADDRESS: "${self:custom.email.${opt:stage}.replyAddress}",
        },
    },
    // import the function via paths
    // @ts-ignore
    functions: {sendEmail},
    package: {individually: true},
    custom: {
        esbuild: {
            bundle: true,
            minify: false,
            sourcemap: true,
            exclude: ['aws-sdk'],
            target: 'node14',
            define: {'require.resolve': undefined},
            platform: 'node',
            concurrency: 10,
        },
        email: {
            local: {
                replyAddress: 'noreply@gmail.com'
            },
            dev: {
                replyAddress: 'noreply@gmail.com'
            },
            staging: {
                replyAddress: 'noreply@gmail.com'
            },
            production: {
                replyAddress: 'noreply@gmail.com'
            }
        },
        lambda: {
            local: {
                maxMessageRetryTime: 10,
                vpcSecurityGroupIds: [],
                vpcSubnetIds: []
            },
            dev: {
                maxMessageRetryTime: 10,
                vpcSecurityGroupIds: [],
                vpcSubnetIds: []
            },
            staging: {
                maxMessageRetryTime: 10,
                vpcSecurityGroupIds: [],
                vpcSubnetIds: []
            },
            production: {
                maxMessageRetryTime: 10,
                vpcSecurityGroupIds: [],
                vpcSubnetIds: []
            }
        },
    },
};

module.exports = serverlessConfiguration;
