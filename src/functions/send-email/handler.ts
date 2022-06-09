import * as AWS from 'aws-sdk';

export const main = async (event) => {
    console.log(`Got event: ${JSON.stringify(event)}`);
    try {
        await handleEvent(event);
    } catch (e) {
        console.log(`Got error when process event: ${JSON.stringify(e)}`);
    }

    console.log(`Complete process event`);
    return {}
}


// @ts-ignore
const handleEvent = async (event) => {

    // send mail
    const email = "dominhphong306@gmail.com";
    const content = "Hello world, 09-06";
    await sendEmail(email, content);
}


async function sendEmail(email: string, content: string) {
    AWS.config.update({region: 'ap-southeast-1'});

    const params = {
        Destination: {
            ToAddresses: [
                email,
            ]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: content
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Test email'
            }
        },
        Source: 'noreply@gmail.com',
        ReplyToAddresses: [
            'noreply@gmail.com',
        ],
    };

    const sendResult = await new AWS.SES({apiVersion: '2010-12-01'})
        .sendEmail(params)
        .promise();

    console.log('Got response: ', sendResult);
}