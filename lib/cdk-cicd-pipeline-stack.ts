import * as cdk from 'aws-cdk-lib/core';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';


export class CdkCicdPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'MyCDKPipeline' ,{
      pipelineName: 'Mycdk-pipeline',
      synth: new ShellStep('synth', {
        input: CodePipelineSource.gitHub('sricharanterra/cdk-cicd-pipeline','cicd-practice'),//cicd-practice
        commands:['cd cdk-cicd-pipeline', 'npm ci', 'npx cdk synth'],
        primaryOutputDirectory: 'cdk-cicd-pipeline/cdk.out'
      })
    })

  }
}
