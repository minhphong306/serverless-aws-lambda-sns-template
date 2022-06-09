<h3 align="center">AWS Lambda serverless sns template</h3>

---

<p align="center">
  A template for develop lambda project integrate with SNS (Simple Notification Service) with divided environment variable
</p>

## 🧐 About <a name = "about"></a>

This repo contains template for lambda serverless with Simple Notification Service

![Overview](assets/flow-charts/001-overview.png)

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### 💻 Prerequisites <a name = "prerequisites"></a>

- Nodejs >= 14
- [Serverless](https://www.serverless.com/framework/docs/getting-started)
- Credentials:
    - AWS
    - SNS

### 📦 Installing

Run following command in your terminal (you are in lambda-serverless-template folder):

- Install dependency

```
yarn
```

- Test application at local

```
sls invoke local -f sendEmail --path src/functions/send-email/mock.json --stage local
```

## 🚀 Deployment <a name = "deployment"></a>
### Deploy all functions
```
sls deploy --stage ${stageName}
```
- Example: `sls deploy --stage dev`

### Deploy single function
```
sls deploy --stage production -f syncnft
```

- More command: [Serverless CLI commands](https://www.serverless.com/framework/docs/providers/aws/cli-reference)

## 🐛 Common error <a name = "common_error"></a>

| Error  | How to fix |
| ------------- | ------------- |
|  |   |
