import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HelloworldStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFnRestApi = new cdk.aws_lambda.Function(this, "restapitestLambda", {
      functionName: 'restapitestlambda',
      runtime: cdk.aws_lambda.Runtime.NODEJS_14_X,
      code: cdk.aws_lambda.Code.fromAsset("lambda"),
      handler: "index.handler"
    });

    const api = new cdk.aws_apigateway.LambdaRestApi(this, "RestApi", {
      handler: lambdaFnRestApi,
      proxy: false /// this mean is which request should be allow to lambda is on ya off
    });

    const items = api.root.addResource('items'); /// this is mean kae kis path par chalna han api 
    items.addMethod('GET');
    items.addMethod('POST');


    const item = items.addResource('{item}');
    item.addMethod('GET'); /// Get //items/{item}

  }
}
